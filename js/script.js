
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
        
        if (mobileBtn) {
            mobileBtn.addEventListener('click', toggleMobileMenu);
        }

        function toggleMobileMenu() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            mobileBtn.setAttribute('aria-expanded', !mobileMenu.classList.contains('hidden'));
        }

        // Lightbox data
        const galleryData = [
            {
                img: "assets/Gallery/Sales NAlytics/Circle_Administration.webp",
                category: "Product",
                title: "SaaS Designs",
                description: "Scalable interface patterns and layouts designed for enterprise software applications.",
                caseStudy: "#",
                images: [
                    "assets/Gallery/Sales NAlytics/Circle_Administration.webp",
                    "assets/Gallery/Sales NAlytics/Circle_Candidates.webp",
                    "assets/Gallery/Sales NAlytics/Circle_Company.webp",
                    "assets/Gallery/Sales NAlytics/Circle_Funds Listing.webp",
                    "assets/Gallery/Sales NAlytics/Circle_Messages.webp",
                    "assets/Gallery/Sales NAlytics/Circle_Overview.webp",
                    "assets/Gallery/Sales NAlytics/Circle_Performance.webp",
                    "assets/Gallery/Sales NAlytics/Circle_Product List.webp"
                ]
            },
            {
                img: "assets/Gallery/Fintrack/Dashboard V2 - Overview.webp",
                category: "Fintech",
                title: "Fintech Solution",
                description: "Secure and intuitive financial technology interfaces designed for trust and clarity.",
                caseStudy: "case-study-fintech.html",
                images: [
                    "assets/Gallery/Fintrack/Dashboard V1 Responsive - menu.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 Responsive - Notification Page.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 Responsive - Notification Pop-up.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 Responsive - Overview.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 Responsive - Receive.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 Responsive - Statistics.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 Responsive - Transaction - Delete Transaction.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 Responsive - Transaction - Details Transaction.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 Responsive - Transaction - Export Done.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 Responsive - Transaction.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 Responsive - Transaction-1.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 Responsive - Transaction-2.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 Responsive - Transfer.webp",
                    "assets/Gallery/Fintrack/Dashboard V2 - Overview.webp",
                    "assets/Gallery/Fintrack/Dashboard V2 Responsive - Overview.webp",
                    "assets/Gallery/Fintrack/Dashboard V3 - Overview.webp",
                    "assets/Gallery/Fintrack/Dashboard V3 Responsive - Overview.webp",
                    "assets/Gallery/Fintrack/Dashboard V4 - Overview.webp",
                    "assets/Gallery/Fintrack/Dashboard V4 Responsive - Overview.webp",
                    "assets/Gallery/Fintrack/Help & Center.webp",
                    "assets/Gallery/Fintrack/Settings - Help & Center Responsive.webp",
                    "assets/Gallery/Fintrack/Settings - Personal info Responsive.webp",
                    "assets/Gallery/Fintrack/Settings - Personal Info.webp",
                    "assets/Gallery/Fintrack/Settings - Preference.webp",
                    "assets/Gallery/Fintrack/Settings - Preferences Responsive.webp",
                    "assets/Gallery/Fintrack/Settings - Security Responsive.webp",
                    "assets/Gallery/Fintrack/Settings - Security.webp",
                    "assets/Gallery/Fintrack/Wallet Responsive - Edit Details Card.webp",
                    "assets/Gallery/Fintrack/Wallet Responsive.webp",
                    "assets/Gallery/Fintrack/Wallet Responsive-1.webp",
                    "assets/Gallery/Fintrack/Wallets -  Details Card.webp",
                    "assets/Gallery/Fintrack/Wallets - Add new Card.webp",
                    "assets/Gallery/Fintrack/Wallets.webp",
                    "assets/Gallery/Fintrack/1 (1).webp",
                    "assets/Gallery/Fintrack/1 (2).webp",
                    "assets/Gallery/Fintrack/1 (3).webp",
                    "assets/Gallery/Fintrack/1(4).webp",
                    "assets/Gallery/Fintrack/2 (1).webp",
                    "assets/Gallery/Fintrack/2 (2).webp",
                    "assets/Gallery/Fintrack/2 (3).webp",
                    "assets/Gallery/Fintrack/2 (4).webp",
                    "assets/Gallery/Fintrack/3 (1).webp",
                    "assets/Gallery/Fintrack/3 (2).webp",
                    "assets/Gallery/Fintrack/3 (3).webp",
                    "assets/Gallery/Fintrack/3 (4).webp",
                    "assets/Gallery/Fintrack/3 (5).webp",
                    "assets/Gallery/Fintrack/3 (6).webp",
                    "assets/Gallery/Fintrack/3().webp",
                    "assets/Gallery/Fintrack/3(7).webp",
                    "assets/Gallery/Fintrack/Dashboard V1 - Notification Page.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 - Notification Pop-up.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 - Overview.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 - Receive money.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 - Statistics.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 - Transaction - Delete Transaction.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 - Transaction - Details Transaction.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 - Transaction - Export Date.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 - Transaction - Export Done.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 - Transaction - Filter.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 - Transaction.webp",
                    "assets/Gallery/Fintrack/Dashboard V1 - Transfer.webp"
                ]
            },
            {
                img: "assets/Design Systems/Icon System/preview.jpg",
                category: "Branding",
                title: "Icon System",
                description: "A cohesive icon set designed for clarity at small sizes and scalability across platforms.",
                caseStudy: "#",
                images: [
                    "assets/Recording 2026-01-29 165033.webm",
                    "assets/Screenshot 2026-01-29 165157.png",
                    "assets/Recording 2026-01-29 165131.webm",
                    "assets/Recording 2026-01-29 165300.webm"
                ]
            },
            {
                img: "assets/Gallery/px-conversions (3)/6.webp",
                category: "Product",
                title: "Control Saas Tool",
                description: "A SaaS dashboard UI with a focus on data density, accessibility, and actionable insights.",
                caseStudy: "#",
                images: [
                    "assets/Gallery/px-conversions (3)/1.webp",
                    "assets/Gallery/px-conversions (3)/2.webp",
                    "assets/Gallery/px-conversions (3)/3.webp",
                    "assets/Gallery/px-conversions (3)/4.webp",
                    "assets/Gallery/px-conversions (3)/5.webp",
                    "assets/Gallery/px-conversions (3)/6.webp",
                    "assets/Gallery/px-conversions (3)/7.webp",
                    "assets/Gallery/px-conversions (3)/8.webp",
                    "assets/Gallery/px-conversions (3)/9.webp",
                    "assets/Gallery/px-conversions (3)/10.webp",
                    "assets/Gallery/px-conversions (3)/11.webp",
                    "assets/Gallery/px-conversions (3)/12.webp"
                ]
            },
            {
                img: "assets/Design Systems/Type Study/preview.jpg",
                category: "Visual",
                title: "Typography Study",
                description: "Experimental typography and layout explorations for digital products.",
                caseStudy: "#"
            },
            {
                img: "assets/Design Systems/Prototypes/preview.jpg",
                category: "Mobile App",
                title: "Parking Mobile app",
                description: "A comprehensive mobile application solution for parking management and reservations.",
                caseStudy: "#",
                isMobile: true, // Flag to trigger mobile-specific display style
                images: [
                    "assets/Gallery/px-conversions (1)/1.webp",
                    "assets/Gallery/px-conversions (1)/2.webp",
                    "assets/Gallery/px-conversions (1)/3.webp",
                    "assets/Gallery/px-conversions (1)/4.webp",
                    "assets/Gallery/px-conversions (1)/5.webp",
                    "assets/Gallery/px-conversions (1)/6.webp",
                    "assets/Gallery/px-conversions (1)/7.webp",
                    "assets/Gallery/px-conversions (1)/8.webp",
                    "assets/Gallery/px-conversions (1)/9.webp",
                    "assets/Gallery/px-conversions (1)/10.webp",
                    "assets/Gallery/px-conversions (1)/11.webp",
                    "assets/Gallery/px-conversions (1)/12.webp",
                    "assets/Gallery/px-conversions (1)/13.webp",
                    "assets/Gallery/px-conversions (1)/14.webp",
                    "assets/Gallery/px-conversions (1)/15.webp",
                    "assets/Gallery/px-conversions (1)/16.webp",
                    "assets/Gallery/px-conversions (1)/17.webp",
                    "assets/Gallery/px-conversions (1)/18.webp",
                    "assets/Gallery/px-conversions (1)/19.webp",
                    "assets/Gallery/px-conversions (1)/20.webp",
                    "assets/Gallery/px-conversions (1)/21.webp",
                    "assets/Gallery/px-conversions (1)/22.webp",
                    "assets/Gallery/px-conversions (1)/23.webp",
                    "assets/Gallery/px-conversions (1)/24.webp",
                    "assets/Gallery/px-conversions (1)/25.webp",
                    "assets/Gallery/px-conversions (1)/26.webp",
                    "assets/Gallery/px-conversions (1)/27.webp",
                    "assets/Gallery/px-conversions (1)/28.webp",
                    "assets/Gallery/px-conversions (1)/29.webp",
                    "assets/Gallery/px-conversions (1)/30.webp",
                    "assets/Gallery/px-conversions (1)/31.webp",
                    "assets/Gallery/px-conversions (1)/32.webp",
                    "assets/Gallery/px-conversions (1)/33.webp",
                    "assets/Gallery/px-conversions (1)/34.webp",
                    "assets/Gallery/px-conversions (1)/35.webp",
                    "assets/Gallery/px-conversions (1)/36.webp",
                    "assets/Gallery/px-conversions (1)/37.webp",
                    "assets/Gallery/px-conversions (1)/38.webp",
                    "assets/Gallery/px-conversions (1)/39.webp",
                    "assets/Gallery/px-conversions (1)/40.webp",
                    "assets/Gallery/px-conversions (1)/41.webp",
                    "assets/Gallery/px-conversions (1)/42.webp",
                    "assets/Gallery/px-conversions (1)/43.webp",
                    "assets/Gallery/px-conversions (1)/44.webp",
                    "assets/Gallery/px-conversions (1)/45.webp",
                    "assets/Gallery/px-conversions (1)/46.webp",
                    "assets/Gallery/px-conversions (1)/47.webp",
                    "assets/Gallery/px-conversions (1)/48.webp"
                ]
            },
            {
                img: "assets/Design Systems/Design Library/1 (7).webp",
                category: "Systems",
                title: "Design Library",
                description: "A robust design system library containing components, variants, and documentation.",
                caseStudy: "#",
                images: [
                    "assets/Gallery/Design Systems/1.webp",
                    "assets/Gallery/Design Systems/2.webp",
                    "assets/Gallery/Design Systems/3.webp",
                    "assets/Gallery/Design Systems/4.webp",
                    "assets/Gallery/Design Systems/5.webp",
                    "assets/Gallery/Design Systems/6.webp",
                    "assets/Gallery/Design Systems/66027bee045be7df083e39c0_6528c58fab8f44dc6a3cd132_benefits_of_a_good_design_system.jpeg",
                    "assets/Gallery/Design Systems/Group 11-min.png",
                    "assets/Gallery/Design Systems/Group 427320669.webp"
                ]
            },
            {
                img: "assets/Design Systems/Visionary Flow/preview.jpg",
                category: "Spatial UI",
                title: "Visionary Flow",
                description: "Spatial interface concepts and glassmorphism for AR/VR environments.",
                caseStudy: "#"
            },
            {
                img: "assets/Gallery/Tinker.webp",
                category: "UI Design",
                title: "Website UI",
                description: "Modern website interface design focusing on visual hierarchy and user engagement.",
                caseStudy: "#",
                images: [
                    "assets/Gallery/Tinker1.webp",
                    "assets/Gallery/V2.png",
                    "assets/Gallery/PrecisionPlanners.png",
                    "assets/Gallery/Desktop (1).png",
                    "assets/Gallery/Desktop - 1.png"
                ]
            }
        ];

        let currentIndex = 0;
        let currentImageIndex = 0; // Index of the image within the current project

        function openLightbox(projectIndex) {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('hidden');
            lightbox.classList.add('block');
            document.body.style.overflow = 'hidden'; // Disable background scrolling
            
            updateLightbox(projectIndex, 0);
        }

        // Ensure global access for HTML onclick events
        window.openLightbox = openLightbox;
        window.closeLightbox = closeLightbox;
        window.nextImage = nextImage;
        window.prevImage = prevImage;

        function nextImage() {
            const data = galleryData[currentIndex];
            const allImages = [data.img, ...(data.images || [])];
            
            if (currentImageIndex < allImages.length - 1) {
                // Move to the next image within the same project
                updateLightbox(currentIndex, currentImageIndex + 1);
            } else if (currentIndex < galleryData.length - 1) {
                // Move to the first image of the next project
                updateLightbox(currentIndex + 1, 0);
            }
        }

        function prevImage() {
            if (currentImageIndex > 0) {
                // Move to the previous image within the same project
                updateLightbox(currentIndex, currentImageIndex - 1);
            } else if (currentIndex > 0) {
                // Move to the last image of the previous project
                const prevProjectIndex = currentIndex - 1;
                const prevData = galleryData[prevProjectIndex];
                const prevAllImages = [prevData.img, ...(prevData.images || [])];
                updateLightbox(prevProjectIndex, prevAllImages.length - 1);
            }
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.add('hidden');
            lightbox.classList.remove('block');
            document.body.style.overflow = ''; // Re-enable background scrolling
        }

        // New helper function to update UI elements like counter and button states
        function updateLightboxUI() {
            const data = galleryData[currentIndex];
            const allImages = [data.img, ...(data.images || [])];

            // Update counter
            const counterEl = document.getElementById('lightbox-counter');
            if (allImages.length > 1) {
                counterEl.textContent = `Project ${currentIndex + 1}/${galleryData.length} • Image ${currentImageIndex + 1}/${allImages.length}`;
            } else {
                counterEl.textContent = `Project ${currentIndex + 1} / ${galleryData.length}`;
            }

            // Update button states (disabled at ends of entire gallery)
            const prevBtn = document.querySelector('button[onclick="prevImage()"]');
            const nextBtn = document.querySelector('button[onclick="nextImage()"]');
            
            const isFirstProject = currentIndex === 0;
            const isFirstImage = currentImageIndex === 0;
            prevBtn.disabled = isFirstProject && isFirstImage;
            
            const isLastProject = currentIndex === galleryData.length - 1;
            const isLastImage = currentImageIndex === allImages.length - 1;
            nextBtn.disabled = isLastProject && isLastImage;
            
            prevBtn.classList.toggle('opacity-20', prevBtn.disabled);
            prevBtn.classList.toggle('cursor-not-allowed', prevBtn.disabled);
            nextBtn.classList.toggle('opacity-20', nextBtn.disabled);
            nextBtn.classList.toggle('cursor-not-allowed', nextBtn.disabled);
        }

        function updateLightbox(projectIndex, imageIndex) {
            currentIndex = projectIndex;
            currentImageIndex = imageIndex;
            
            const data = galleryData[currentIndex];
            const allImages = [data.img, ...(data.images || [])];
            const src = allImages[currentImageIndex];

            const container = document.getElementById('lightbox-images-container');
            container.innerHTML = ''; // Clear previous slide

            // Create a single slide for the current image
            const slide = document.createElement('div');
            slide.className = 'min-w-full h-full overflow-y-auto snap-center flex justify-center items-start pt-20 pb-20 px-4 md:px-8 relative no-scrollbar';

            const MIN_SPINNER_TIME = 400; // ms
            const startTime = performance.now();

            // Create and show the spinner immediately.
            const spinner = document.createElement('div');
            spinner.className = 'lightbox-spinner';
            spinner.innerHTML = `
                <div class="lightbox-spinner-inner">
                    <svg class="lightbox-spinner-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
            `;
            slide.appendChild(spinner);

            // Determine media type
            const isVideo = src.toLowerCase().endsWith('.webm') || src.toLowerCase().endsWith('.mp4');
            let mediaEl;

            if (isVideo) {
                mediaEl = document.createElement('video');
                mediaEl.controls = true;
                mediaEl.autoplay = true;
                mediaEl.loop = true;
                mediaEl.muted = true;
                mediaEl.playsInline = true;
            } else {
                mediaEl = document.createElement('img');
                mediaEl.alt = `${data.title} - Image ${imageIndex + 1}`;
            }
            
            // Check if this project is flagged as mobile or if the image filename suggests a mobile screen
            const isMobileImage = (data.isMobile && imageIndex !== 0) || 
                                  src.toLowerCase().includes('responsive') || 
                                  src.toLowerCase().includes('mobile') || 
                                  src.toLowerCase().includes('phone');

            if (isMobileImage) {
                slide.classList.remove('items-start');
                slide.classList.add('items-center'); // Center vertically
                mediaEl.className = 'w-auto max-w-full md:max-w-[400px] h-auto max-h-[85vh] object-contain shadow-2xl rounded-2xl opacity-0 transition-opacity duration-300 relative z-10';
            } else {
                mediaEl.className = 'w-full h-auto self-start opacity-0 transition-opacity duration-300 relative z-10';
            }
            
            slide.appendChild(mediaEl);

            const onMediaLoad = () => {
                const endTime = performance.now();
                const duration = endTime - startTime;

                const hideSpinner = () => {
                    mediaEl.classList.remove('opacity-0');
                    if (spinner.parentNode) {
                        spinner.remove();
                    }
                };

                if (duration < MIN_SPINNER_TIME) {
                    setTimeout(hideSpinner, MIN_SPINNER_TIME - duration);
                } else {
                    hideSpinner();
                }
            };

            if (isVideo) {
                mediaEl.onloadeddata = onMediaLoad;
                mediaEl.onerror = onMediaLoad;
                mediaEl.src = src;
            } else {
                mediaEl.onload = onMediaLoad;
                mediaEl.onerror = onMediaLoad;
                mediaEl.src = src;
                if (mediaEl.complete) {
                    onMediaLoad();
                }
            }
            
            container.appendChild(slide);

            // Defer non-critical UI updates to let the spinner animation render smoothly.
            setTimeout(() => {
                document.getElementById('lightbox-category').textContent = data.category;
                document.getElementById('lightbox-title').textContent = data.title;
                document.getElementById('lightbox-description').textContent = data.description;
                
                updateLightboxUI(); 
    
                const btn = document.getElementById('lightbox-case-study');
                if (data.caseStudy && data.caseStudy !== "#") {
                    btn.style.display = '';
                    btn.onclick = () => window.open(data.caseStudy, '_blank');
                } else {
                    btn.style.display = 'none';
                }
            }, 0);
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

        // AI Search Bar Logic
        const aiSearchForm = document.getElementById('ai-search-form');
        if (aiSearchForm) {
            aiSearchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log("AI Search submitted");
                const input = document.getElementById('ai-search-input');
                const submitBtn = aiSearchForm.querySelector('button[type="submit"]');
                const responseBox = document.getElementById('ai-response');
                const responseText = document.getElementById('ai-response-text');
                const query = input.value.trim().toLowerCase();
                
                if (!query) return;

                // Prevent multiple submissions
                input.disabled = true;
                submitBtn.disabled = true;
                submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

                const enableInput = () => {
                    input.disabled = false;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                    input.focus();
                };

                if (responseBox.classList.contains('hidden')) {
                    responseBox.classList.remove('hidden');
                    responseBox.style.opacity = '0';
                    responseBox.style.transform = 'translateY(40px) scale(0.95)';
                    responseBox.style.filter = 'blur(10px)';
                    
                    // Force reflow to ensure initial state is applied
                    void responseBox.offsetWidth;

                    responseBox.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                    responseBox.style.opacity = '1';
                    responseBox.style.transform = 'translateY(0) scale(1)';
                    responseBox.style.filter = 'blur(0px)';
                }
                responseText.innerHTML = '<span class="animate-pulse">Thinking...</span>';

                // Gemini API Logic
                // Security: Key is split to prevent automated scraping.
                // WARNING: Exposing API keys in client-side code is a security risk. Consider moving this to a backend proxy.
                const _kPart1 = "AIzaSyDNUA9RC8042m11";
                const _kPart2 = "ImrBm2Tals-hWp1kbRQ";
                const apiKey = _kPart1 + _kPart2;
                
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

                const systemContext = `You are an AI assistant for Vivek Kumar's portfolio website.
                
                **Identity:** Vivek Kumar is a Senior Product Designer & UX Strategist (8+ years exp) based in Noida, India. He specializes in AI-Driven UX, B2B SaaS, and scalable Design Systems.
                
                **Professional Philosophy:**
                1. Clarity over cleverness (reduce cognitive load).
                2. Systems over screens (reusable patterns).
                3. Human-in-the-loop AI (AI should assist, not obscure).
                
                **Current Role: Lead UI/UX Designer @ The Sapience LLC (Mar 2025–Present)**
                Leading the flagship **Sapience Tutor App Ecosystem**.
                
                **1. Sapience Tutor App Ecosystem (Mobile/Web/SaaS)**
                - **Context:** Multi-sided EdTech platform connecting students, parents, and tutors.
                - **Challenges:** High cognitive load, trust/safety, tutor onboarding friction.
                - **Approach:** Product system mindset. Mapped end-to-end journeys. Simplified IA by intent.
                - **Key Outputs:** End-to-end onboarding, scheduling/calendar UI, notification systems, mobile-first layouts.
                - **Impact:** Improved activation/engagement by ~35%. Reduced onboarding friction and support tickets. Faster delivery via design system.

                **2. Sapience Tutor Marketplace (Discovery Layer)**
                - **Context:** Discovery platform for browsing and booking tutors.
                - **Strategy:** Modular tutor cards, contextual signals (ratings/availability), progressive filtering.
                - **Outcome:** Improved discovery-to-booking conversion, reduced bounce rates, higher user confidence.

                **3. Sapience CRM & Admin Dashboard (Internal SaaS)**
                - **Context:** High-frequency tool for internal ops (managing tutors, payments, metrics).
                - **Solutions:** Dashboard with role-specific KPIs, guided task flows, bulk actions with safeguards, data viz.
                - **Outcome:** Faster task completion, reduced operational errors, better decision-making.

                **4. AI-Driven UX Enhancements**
                - **Philosophy:** AI should assist, not override. Human control must be visible.
                - **Work:** AI suggestion panels with confidence cues, explainable recommendations, clear fallback states.
                - **Impact:** Higher AI feature adoption, reduced mistrust.

                **Previous Experience:**
                - **Senior UI/UX Designer @ Design Diversity Pvt Ltd (May 2021–Mar 2025):** Led team of 4-5, built component libraries, conducted 50+ research studies.
                - **UI/UX Designer @ Mapppee Hub (Apr 2018–Apr 2021):** Foundation in mobile/web UI and usability testing.
                
                **Skills & Tools:**
                - **Design:** Figma, Adobe XD, Protopie, After Effects.
                - **AI & Low-Code:** Figma AI, Galileo AI, Webflow, Framer, Firebase (for MVPs).
                - **Technical:** Technically fluent (React, Tailwind CSS, API constraints) to bridge design-engineering gaps.
                
                **AI Perspective:** Treats AI as infrastructure. Focuses on explainability (XAI), confidence indicators, and guardrails against hallucinations.
                
                **Contact:** vivek2601@hotmail.com | +91 7017204483
                
                **Instructions:**
                - Answer as Vivek's assistant: confident, factual, human.
                - Use HTML formatting (<strong>, <br>, <ul>) for readability.
                - Keep answers concise but insightful.`;

                // Typing Effect Function
                const typeWriter = (htmlText) => {
                    responseText.innerHTML = "";
                    const parts = htmlText.split(/(<[^>]*>)/);
                    let currentHTML = "";
                    let partIndex = 0;
                    let charIndex = 0;

                    function type() {
                        if (partIndex >= parts.length) {
                            enableInput();
                            return;
                        }
                        const part = parts[partIndex];
                        
                        if (part.startsWith('<') && part.endsWith('>')) {
                            currentHTML += part;
                            responseText.innerHTML = currentHTML;
                            partIndex++;
                            requestAnimationFrame(type);
                        } else {
                            if (charIndex < part.length) {
                                currentHTML += part.charAt(charIndex);
                                responseText.innerHTML = currentHTML;
                                charIndex++;
                                setTimeout(type, 15);
                            } else {
                                partIndex++;
                                charIndex = 0;
                                requestAnimationFrame(type);
                            }
                        }
                    }
                    type();
                };

                // Fallback Logic (Offline Mode)
                const fallbackToLocalAI = (q) => {
                    let answer = "I can help you navigate Vivek's portfolio. Try asking about his <strong>experience</strong>, <strong>projects</strong>, <strong>AI skills</strong>, or <strong>contact details</strong>.";
                    
                    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('reach') || q.includes('location')) {
                        answer = "You can reach Vivek at <a href='mailto:vivek2601@hotmail.com' class='text-blue-600 underline font-medium'>vivek2601@hotmail.com</a> or <strong>+91 7017204483</strong>. He is based in Noida, India and open to new opportunities.<br><br><a href='#connect' class='inline-flex items-center px-3 py-1 bg-zinc-100 hover:bg-zinc-200 rounded-full text-xs font-medium text-zinc-900 transition-colors no-underline'>Go to Contact ↓</a>";
                    } else if (q.includes('experience') || q.includes('experience') || q.includes('years') || q.includes('history') || q.includes('job') || q.includes('role') || q.includes('background')) {
                        answer = "Vivek has <strong>8+ years of experience</strong>. Currently, he is the <strong>Lead UI/UX Designer at The Sapience LLC</strong>. Previously, he was a Senior Designer at <strong>Design Diversity Pvt Ltd</strong> and <strong>Mapppee Hub</strong>.<br><br><a href='#work' class='inline-flex items-center px-3 py-1 bg-zinc-100 hover:bg-zinc-200 rounded-full text-xs font-medium text-zinc-900 transition-colors no-underline'>View Work History ↓</a>";
                    } else if (q.includes('sapience') || q.includes('current') || q.includes('tutor') || q.includes('marketplace') || q.includes('crm')) {
                        answer = "At <strong>The Sapience LLC</strong>, Vivek leads the <strong>Tutor App Ecosystem</strong>. Key projects:<br>• <strong>Mobile Tutor App:</strong> Reduced onboarding time by 40%.<br>• <strong>Marketplace:</strong> Improved conversion via modular design.<br>• <strong>CRM Portal:</strong> Enhanced admin efficiency with data viz.<br>• <strong>AI Personalization:</strong> Integrated smart suggestions with confidence indicators.<br><br><a href='#work' class='inline-flex items-center px-3 py-1 bg-zinc-100 hover:bg-zinc-200 rounded-full text-xs font-medium text-zinc-900 transition-colors no-underline'>View Case Studies ↓</a>";
                    } else if (q.includes('project') || q.includes('case') || q.includes('work') || q.includes('portfolio') || q.includes('nexus') || q.includes('crm')) {
                        answer = "Key projects include <strong>Sapience CRM</strong> (+40% adoption), <strong>Budget Management UX</strong> (+13% MRR), <strong>Nexus Design System</strong>, and <strong>VitalMonitor App</strong>. Check out the Case Studies section below.<br><br><a href='#work' class='inline-flex items-center px-3 py-1 bg-zinc-100 hover:bg-zinc-200 rounded-full text-xs font-medium text-zinc-900 transition-colors no-underline'>View Case Studies ↓</a>";
                    } else if (q.includes('skill') || q.includes('tool') || q.includes('stack') || q.includes('tech') || q.includes('figma') || q.includes('ai')) {
                        answer = "Vivek specializes in <strong>AI-Driven UX</strong> and <strong>Design Systems</strong>. Tools: Figma, Protopie, Webflow, Framer. Tech: React, Tailwind CSS, Firebase, and AI integration (LLMs, Agentic Flows).<br><br><a href='#ai-expertise' class='inline-flex items-center px-3 py-1 bg-zinc-100 hover:bg-zinc-200 rounded-full text-xs font-medium text-zinc-900 transition-colors no-underline'>View AI Expertise ↓</a>";
                    } else if (q.includes('certif') || q.includes('education') || q.includes('degree') || q.includes('study')) {
                        answer = "He holds a <strong>BCA from IGNOU</strong> and certifications in <strong>UX Research (Google)</strong>, <strong>Generative AI (Microsoft)</strong>, and <strong>Agile Project Management (Atlassian)</strong>.<br><br><a href='#certifications' class='inline-flex items-center px-3 py-1 bg-zinc-100 hover:bg-zinc-200 rounded-full text-xs font-medium text-zinc-900 transition-colors no-underline'>View Certifications ↓</a>";
                    } else if (q.includes('philosophy') || q.includes('approach') || q.includes('design')) {
                        answer = "Vivek's philosophy: <strong>Clarity over cleverness</strong>, <strong>Systems over screens</strong>, and <strong>Human-in-the-loop AI</strong>. He believes good UX is invisible but measurable.<br><br><a href='#services' class='inline-flex items-center px-3 py-1 bg-zinc-100 hover:bg-zinc-200 rounded-full text-xs font-medium text-zinc-900 transition-colors no-underline'>View Services ↓</a>";
                    } else if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
                        answer = "Hello! I'm Vivek's AI assistant. I can tell you about his 8+ years of experience, his AI-driven projects, or how to contact him.";
                    }
                    
                    // Simulate AI "Thinking" delay to trick user
                    setTimeout(() => {
                        const finalAnswer = answer + "<br><br><span class='text-[10px] text-gray-400 uppercase tracking-wider'>(Offline Mode)</span>";
                        typeWriter(finalAnswer);
                    }, 600);
                };

                fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ text: `System Context: ${systemContext}\n\nUser Question: ${query}` }]
                        }]
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.candidates && data.candidates.length > 0) {
                        const aiText = data.candidates[0].content.parts[0].text;
                        // Convert markdown bold to HTML bold
                        const formattedText = aiText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                        typeWriter(formattedText);
                    } else {
                        console.warn('Gemini API Error (Quota/Network), switching to fallback:', data);
                        fallbackToLocalAI(query);
                    }
                })
                .catch(error => {
                    console.error('Network Error, switching to fallback:', error);
                    fallbackToLocalAI(query);
                });
            });

            // Placeholder Typing Animation
            const searchInput = document.getElementById('ai-search-input');
            if (searchInput) {
                const placeholders = [
                    "Ask about Vivek's 8+ years of experience...",
                    "What tools does he use? (Figma, AI, Low-code)",
                    "Show me his certifications...",
                    "How do I contact him?",
                    "Tell me about his projects...",
                    "Ask about his work at Sapience LLC..."
                ];
                
                let currentPhraseIndex = 0;
                let charIndex = 0;
                let isDeleting = false;
                
                function typeEffect() {
                    const currentPhrase = placeholders[currentPhraseIndex];
                    
                    if (isDeleting) {
                        charIndex--;
                    } else {
                        charIndex++;
                    }

                    searchInput.setAttribute('placeholder', currentPhrase.substring(0, charIndex));

                    let typeSpeed = isDeleting ? 25 : 50; // Faster, smoother typing speed

                    if (!isDeleting && charIndex === currentPhrase.length) {
                        isDeleting = true;
                        typeSpeed = 2000; // Pause at end of sentence
                    } else if (isDeleting && charIndex === 0) {
                        isDeleting = false;
                        currentPhraseIndex = (currentPhraseIndex + 1) % placeholders.length;
                        typeSpeed = 500; // Pause before typing next
                    }

                    setTimeout(typeEffect, typeSpeed);
                }

                typeEffect();
            }
        }
    