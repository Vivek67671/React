
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }

        let scrollTimeout;
        window.addEventListener("scroll", () => {
            if (scrollTimeout) return;
            scrollTimeout = setTimeout(() => {
                reveal();
                scrollTimeout = null;
            }, 10);
        });
        
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            if (loader) {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
                setTimeout(reveal, 500);
            } else {
                reveal();
            }
        });

        // Mobile Menu Logic
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileBtn.addEventListener('click', toggleMobileMenu);

        function toggleMobileMenu() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        }

        // Lightbox data
        const galleryData = [
            {
                img: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=600&h=600&auto=format&fit=crop",
                category: "Mobile UI",
                title: "Music Player",
                description: "An exploration of glassmorphism and spatial audio controls within a mobile environment. Focus on high-contrast interaction points.",
                caseStudy: "#"
            },
            {
                img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&h=600&auto=format&fit=crop",
                category: "Branding",
                title: "Icon System",
                description: "A custom icon system designed for clarity and scalability across platforms.",
                caseStudy: "#"
            },
            {
                img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&h=600&auto=format&fit=crop",
                category: "Product",
                title: "Dashboard",
                description: "A SaaS dashboard UI with a focus on data density and accessibility.",
                caseStudy: "#"
            },
            {
                img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&h=600&auto=format&fit=crop",
                category: "Visual",
                title: "Type Study",
                description: "Experimental typography and layout explorations for digital products.",
                caseStudy: "#"
            },
            {
                img: "https://images.unsplash.com/photo-1522542550221-31fd19255a7a?q=80&w=600&h=600&auto=format&fit=crop",
                category: "Interaction",
                title: "Prototypes",
                description: "Gesture-based prototypes for next-gen mobile interactions.",
                caseStudy: "#"
            },
            {
                img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=600&h=600&auto=format&fit=crop",
                category: "Systems",
                title: "Design Library",
                description: "A robust design system library for rapid product development.",
                caseStudy: "#"
            },
            {
                img: "https://images.unsplash.com/photo-1544117518-2b044b5a3983?q=80&w=600&h=600&auto=format&fit=crop",
                category: "WatchOS",
                title: "Health App",
                description: "Wearable health monitoring UI with real-time feedback.",
                caseStudy: "#"
            },
            {
                img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&h=600&auto=format&fit=crop",
                category: "Spatial UI",
                title: "Visionary Flow",
                description: "Spatial interface concepts for AR/VR environments.",
                caseStudy: "#"
            }
        ];

        let currentIndex = 0;

        function openLightbox(idx) {
            currentIndex = idx;
            updateLightbox();
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('hidden');
            lightbox.classList.add('flex');
        }

        // Gallery folder-based logic
const galleryFolders = {
    'SaaS Designs': 'assets/Design Systems/SaaS Designs/',
    'Web Designs': 'assets/Design Systems/Web Designs/',
    'Icon System': 'assets/Design Systems/Icon System/',
    'Dashboard': 'assets/Design Systems/Dashboard/',
    'Type Study': 'assets/Design Systems/Type Study/',
    'Prototypes': 'assets/Design Systems/Prototypes/',
    'Design Library': 'assets/Design Systems/Design Library/',
    'Visionary Flow': 'assets/Design Systems/Visionary Flow/'
};

let galleryImages = [];
let galleryFolder = '';
let galleryIndex = 0;

async function openGallery(folder) {
    galleryFolder = folder;
    galleryImages = await fetchImagesFromFolder(galleryFolders[folder]);
    galleryIndex = 0;
    showGalleryImage();
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
}

function showGalleryImage() {
    if (galleryImages.length === 0) {
        document.getElementById('lightbox-main-img').src = '';
        document.getElementById('lightbox-main-img').alt = 'No images found';
        document.getElementById('lightbox-category').textContent = galleryFolder;
        document.getElementById('lightbox-title').textContent = 'No images';
        document.getElementById('lightbox-description').textContent = '';
        document.getElementById('lightbox-counter').textContent = '';
        document.getElementById('lightbox-case-study').style.display = 'none';
        return;
    }
    document.getElementById('lightbox-main-img').src = galleryImages[galleryIndex];
    document.getElementById('lightbox-main-img').alt = galleryFolder + ' Design';
    document.getElementById('lightbox-category').textContent = galleryFolder;
    document.getElementById('lightbox-title').textContent = 'Design ' + (galleryIndex + 1);
    document.getElementById('lightbox-description').textContent = '';
    document.getElementById('lightbox-counter').textContent = (galleryIndex + 1) + ' / ' + galleryImages.length;
    document.getElementById('lightbox-case-study').style.display = 'none';
}

function nextImage() {
    if (galleryImages.length) {
        galleryIndex = (galleryIndex + 1) % galleryImages.length;
        showGalleryImage();
    } else {
        currentIndex = (currentIndex + 1) % galleryData.length;
        updateLightbox();
    }
}

function prevImage() {
    if (galleryImages.length) {
        galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
        showGalleryImage();
    } else {
        currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
        updateLightbox();
    }
}

function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
    document.getElementById('lightbox').classList.remove('flex');
    galleryImages = [];
    galleryFolder = '';
}

// Automate image loading from folder
async function fetchImagesFromFolder(folderPath) {
    // This function requires server-side support to list files in a directory
    // For static hosting, you must generate a JSON file listing images in each folder
    // Example: assets/Design Systems/SaaS Designs/images.json
    try {
        const response = await fetch(folderPath + 'images.json');
        if (!response.ok) return [];
        const files = await response.json();
        return files.map(f => folderPath + f);
    } catch (e) {
        return [];
    }
}
        function updateLightbox() {
            const data = galleryData[currentIndex];
            document.getElementById('lightbox-main-img').src = data.img;
            document.getElementById('lightbox-main-img').alt = data.title;
            document.getElementById('lightbox-category').textContent = data.category;
            document.getElementById('lightbox-title').textContent = data.title;
            document.getElementById('lightbox-description').textContent = data.description;
            document.getElementById('lightbox-counter').textContent = (currentIndex + 1) + ' / ' + galleryData.length;
            const btn = document.getElementById('lightbox-case-study');
            if (data.caseStudy && data.caseStudy !== "#") {
                btn.style.display = '';
                btn.onclick = () => window.open(data.caseStudy, '_blank');
            } else {
                btn.style.display = 'none';
            }
        }

        // Optional: Close modal on ESC
        document.addEventListener('keydown', function(e) {
            const lightbox = document.getElementById('lightbox');
            if (!lightbox.classList.contains('hidden')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
            }
        });
    