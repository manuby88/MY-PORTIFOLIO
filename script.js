// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== MOBILE MENU TOGGLE ==========
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // ========== SMOOTH SCROLLING ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#" || targetId === "") return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // ========== PORTFOLIO DATA ==========
    const portfolioData = [
        {
            title: "Brand Identity Project",
            description: "Complete branding suite for modern startup",
            imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop"
        },
        {
            title: "Poster Design Series",
            description: "Vibrant event posters for music festival",
            imageUrl: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&h=400&fit=crop"
        },
        {
            title: "Social Media Campaign",
            description: "Instagram visuals for skincare brand",
            imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop"
        },
        {
            title: "Corporate Flyer Design",
            description: "Professional conference marketing materials",
            imageUrl: "https://images.unsplash.com/photo-1586339949216-35c2747cc36d?w=600&h=400&fit=crop"
        },
        {
            title: "Logo Design Portfolio",
            description: "Minimalist logos for fintech clients",
            imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop"
        },
        {
            title: "Complete Branding Package",
            description: "Vintage-modern identity for boutique hotel",
            imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
        }
    ];

    // ========== CREATE PORTFOLIO ITEMS ==========
    function createPortfolioItems() {
        const grid = document.getElementById('portfolioGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        for (let i = 0; i < portfolioData.length; i++) {
            const item = portfolioData[i];
            
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            
            const imgDiv = document.createElement('div');
            imgDiv.className = 'portfolio-img';
            imgDiv.style.backgroundImage = `url(${item.imageUrl})`;
            imgDiv.style.backgroundSize = 'cover';
            imgDiv.style.backgroundPosition = 'center';
            
            const infoDiv = document.createElement('div');
            infoDiv.className = 'portfolio-info';
            
            const titleElem = document.createElement('h3');
            titleElem.textContent = item.title;
            
            const descElem = document.createElement('p');
            descElem.textContent = item.description;
            
            infoDiv.appendChild(titleElem);
            infoDiv.appendChild(descElem);
            portfolioItem.appendChild(imgDiv);
            portfolioItem.appendChild(infoDiv);
            
            grid.appendChild(portfolioItem);
        }
    }

    // ========== ACTIVE NAVIGATION HIGHLIGHT ==========
    function updateActiveNavOnScroll() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', function() {
            let current = '';
            const scrollPosition = window.scrollY + 120;
            
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            }
            
            for (let i = 0; i < navLinks.length; i++) {
                const link = navLinks[i];
                link.classList.remove('active');
                const href = link.getAttribute('href').substring(1);
                if (href === current) {
                    link.classList.add('active');
                    link.style.color = '#c27b3a';
                } else {
                    link.style.color = '';
                }
            }
        });
    }

    // ========== UPDATE COPYRIGHT YEAR ==========
    function updateCopyrightYear() {
        const yearSpan = document.querySelector('.footer p');
        if (yearSpan) {
            const currentYear = new Date().getFullYear();
            yearSpan.innerHTML = yearSpan.innerHTML.replace('2025', currentYear);
        }
    }

    // ========== HANDLE HASH LINKS ON LOAD ==========
    function handleHashLinks() {
        const hash = window.location.hash;
        if (hash) {
            setTimeout(function() {
                const target = document.querySelector(hash);
                if (target) {
                    const yOffset = -70;
                    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({top: y, behavior: 'smooth'});
                }
            }, 100);
        }
    }

    // ========== CHATBOT FUNCTIONALITY - FIXED ==========
    console.log("Chatbot initializing..."); // Debug log
    
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotToggleBtn = document.getElementById('chatbotToggleBtn');
    const chatbotHeader = document.getElementById('chatbotHeader');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotMessages = document.getElementById('chatbotMessages');
    
    console.log("Elements found:", {
        container: !!chatbotContainer,
        toggleBtn: !!chatbotToggleBtn,
        header: !!chatbotHeader
    });

    // SIMPLE FIX: Direct toggle function
    if (chatbotToggleBtn && chatbotContainer) {
        chatbotToggleBtn.onclick = function(event) {
            event.stopPropagation();
            event.preventDefault();
            chatbotContainer.classList.toggle('collapsed');
            const icon = chatbotToggleBtn.querySelector('i');
            if (chatbotContainer.classList.contains('collapsed')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
            console.log("Toggled, collapsed:", chatbotContainer.classList.contains('collapsed'));
        };
    }
    
    // Also allow clicking on header (but not on button)
    if (chatbotHeader && chatbotContainer && chatbotToggleBtn) {
        chatbotHeader.onclick = function(event) {
            // Don't toggle if clicking on the toggle button
            if (event.target === chatbotToggleBtn || chatbotToggleBtn.contains(event.target)) {
                return;
            }
            chatbotContainer.classList.toggle('collapsed');
            const icon = chatbotToggleBtn.querySelector('i');
            if (chatbotContainer.classList.contains('collapsed')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        };
    }

    // Chatbot responses
    function getBotResponse(userMessage) {
        const msg = userMessage.toLowerCase();
        
        if (msg.includes('price') || msg.includes('cost') || msg.includes('how much')) {
            return "💰 My pricing varies based on project scope. Logo design starts at $150, full branding packages from $500. Would you like me to send you a detailed price list on WhatsApp?";
        }
        else if (msg.includes('timeline') || msg.includes('how long') || msg.includes('delivery')) {
            return "⏰ Most projects take 5-10 business days. Rush delivery (3 days) is available with a 30% additional fee. Let me know your deadline!";
        }
        else if (msg.includes('logo') || msg.includes('branding')) {
            return "🎨 I specialize in logo design and complete branding! Each project includes 3 concepts, 3 revision rounds, and all source files. Want to see some examples from my portfolio?";
        }
        else if (msg.includes('social media') || msg.includes('instagram') || msg.includes('facebook')) {
            return "📱 Yes! I create scroll-stopping social media graphics including posts, stories, covers, and ad creatives. Packages start at $200/month for 20+ designs.";
        }
        else if (msg.includes('portfolio') || msg.includes('work')) {
            return "🖼️ You can view my selected work in the Portfolio section above. I have experience with branding, posters, flyers, and social media designs!";
        }
        else if (msg.includes('contact') || msg.includes('reach') || msg.includes('call')) {
            return "📞 You can reach me via:\n• WhatsApp: +256 706 003 669\n• Email: kareemdesign7@gmail.com\nClick the green WhatsApp button below to chat with me directly!";
        }
        else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
            return "👋 Hello! Welcome to my portfolio. How can I help you today? Feel free to ask about my services, pricing, or timeline!";
        }
        else if (msg.includes('thank')) {
            return "🙏 You're welcome! I look forward to working with you. Feel free to reach out anytime!";
        }
        else {
            return "🤔 Thanks for your message! For the best response, please click the green WhatsApp button below to chat with me directly. I usually reply within 1-2 hours!";
        }
    }

    // Add message to chat
    function addMessage(text, isUser) {
        if (!chatbotMessages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isUser ? 'user' : 'bot'}`;
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.innerHTML = text.replace(/\n/g, '<br>');
        
        messageDiv.appendChild(bubble);
        chatbotMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Send message function
    function sendMessage() {
        if (!chatbotInput || !chatbotMessages) return;
        
        const message = chatbotInput.value.trim();
        if (message === '') return;
        
        // Add user message
        addMessage(message, true);
        chatbotInput.value = '';
        
        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = '<div class="message-bubble">✍️ Typing...</div>';
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        // Simulate typing delay
        setTimeout(() => {
            // Remove typing indicator
            const indicator = document.getElementById('typingIndicator');
            if (indicator) indicator.remove();
            
            // Get and add bot response
            const response = getBotResponse(message);
            addMessage(response, false);
        }, 1000);
    }

    // Event listeners for chat
    if (chatbotSend) {
        chatbotSend.onclick = sendMessage;
    }
    
    if (chatbotInput) {
        chatbotInput.onkeypress = function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        };
    }

    // ========== RUN ALL FUNCTIONS ==========
    createPortfolioItems();
    updateActiveNavOnScroll();
    updateCopyrightYear();
    handleHashLinks();
    
    console.log("All functions initialized!");
});
