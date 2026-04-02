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

    // ========== PORTFOLIO DATA - REPLACE WITH YOUR OWN IMAGES ==========
    // Just change the 'imageUrl' paths to point to YOUR images in the 'images' folder
    const portfolioData = [
        {
            title: "Project 1",
            description: "my journey to designing.",
            // CHANGE THIS: Replace 'your-project1.jpg' with your actual image filename
            imageUrl: "images/PRIMEWEB.png"
        },
        {
            title: "Project 2",
            description: "TESTING THE NEW SOFTWARE.",
            // CHANGE THIS: Replace 'your-project2.jpg' with your actual image filename
            imageUrl: "images/NEWTEST.png"
        },
        {
            title: "Project 3",
            description: "NICE,CLEAN AND PROFFESIONAL LOOK.",
            // CHANGE THIS: Replace 'your-project3.jpg' with your actual image filename
            imageUrl: "images/PROJECT.jpg"
        },
        {
            title: "Project 4",
            description: "LOGO DESGIN.",
            // CHANGE THIS: Replace 'your-project4.jpg' with your actual image filename
            imageUrl: "images/STABEX.PNG"
        },
        {
            title: "Project 5",
            description: "PORTIFOLIO-BUILDING",
            // CHANGE THIS: Replace 'your-project5.jpg' with your actual image filename
            imageUrl: "images/PORTIFOLIO.jpg"
        },
        {
            title: "Project 6",
            description: "BANNERS.",
            // CHANGE THIS: Replace 'your-project6.jpg' with your actual image filename
            imageUrl: "images/MOCKUP.jpg"
        }
    ];

    // ========== CREATE PORTFOLIO ITEMS ==========
    function createPortfolioItems() {
        const grid = document.getElementById('portfolioGrid');
        if (!grid) return;
        
        // Clear any existing content
        grid.innerHTML = '';
        
        // Loop through data and create items
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

    // ========== RUN ALL FUNCTIONS ==========
    createPortfolioItems();
    updateActiveNavOnScroll();
    updateCopyrightYear();
    handleHashLinks();
    
});