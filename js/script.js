
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
        }

        // Lightbox data
        const galleryData = [
            {
                img: "assets/Design Systems/SaaS Designs/preview.jpg",
                category: "Product",
                title: "SaaS Designs",
                description: "Scalable interface patterns and layouts designed for enterprise software applications.",
                caseStudy: "#"
            },
            {
                img: "assets/Design Systems/Web Designs/preview.jpg",
                category: "Web",
                title: "Web Designs",
                description: "Modern, responsive web layouts focusing on conversion and brand storytelling.",
                caseStudy: "#"
            },
            {
                img: "assets/Design Systems/Icon System/preview.jpg",
                category: "Branding",
                title: "Icon System",
                description: "A cohesive icon set designed for clarity at small sizes and scalability across platforms.",
                caseStudy: "#"
            },
            {
                img: "assets/Design Systems/Dashboard/preview.jpg",
                category: "Product",
                title: "Analytics Dashboard",
                description: "A SaaS dashboard UI with a focus on data density, accessibility, and actionable insights.",
                caseStudy: "#"
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
                category: "Interaction",
                title: "Micro-Interactions",
                description: "Gesture-based prototypes and motion design for next-gen mobile interactions.",
                caseStudy: "#"
            },
            {
                img: "assets/Design Systems/Design Library/1 (7).webp",
                category: "Systems",
                title: "Design Library",
                description: "A robust design system library containing components, variants, and documentation.",
                caseStudy: "#"
            },
            {
                img: "assets/Design Systems/Visionary Flow/preview.jpg",
                category: "Spatial UI",
                title: "Visionary Flow",
                description: "Spatial interface concepts and glassmorphism for AR/VR environments.",
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

function nextImage() {
            currentIndex = (currentIndex + 1) % galleryData.length;
            updateLightbox();
}

function prevImage() {
            currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
            updateLightbox();
}

function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
    document.getElementById('lightbox').classList.remove('flex');
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
                    } else if (q.includes('experience') || q.includes('experiance') || q.includes('years') || q.includes('history') || q.includes('job') || q.includes('role') || q.includes('background')) {
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
                    "Ask about my 8+ years of experience...",
                    "What tools do I use? (Figma, AI, Low-code)",
                    "Show me my certifications...",
                    "How do I contact you?",
                    "Tell me about my projects...",
                    "Ask about my work at Sapience LLC..."
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
    