let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');
let currentHighlightIndex = -1;
let highlights = [];

// Toggle Navbar
document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

// Toggle Search Form
document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

// Toggle Login Form
document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};

// Show Contact Info
document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

// Hide Contact Info
document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

// Hide all forms on scroll unless prevented
window.onscroll = () =>{
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
   searchForm.classList.remove('active');
   
}

// Swiper instances for sliders
var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});

const translations = {
   en: {
       home: "Home",
       about: "About",
       services: "Services",
       projects: "Projects",
       pricing: "Pricing",
       contact: "Contact",
       loginTitle: "Login Form",
       loginEmailPlaceholder: "Enter your email",
       loginPasswordPlaceholder: "Enter your password",
       rememberMe: "Remember me",
       forgotPassword: "Forgot password?",
       loginNow: "Login now",
       createOne: "Create one!",
       phoneNumber: "Phone Number",
       emailAddress: "Email Address",
       officeAddress: "Office Address",
       homeTitle1: "Innovating Your Digital Future",
       homeText1: "Elevate your business with cutting-edge web development, mobile applications, and AI solutions.",
       homeTitle2: "Where Technology Meets Vision",
       homeText2: "Tailored IT solutions that fit your unique business needs. Let's build something amazing together.",
       getStarted: "Get started",
       aboutUsTitle: "About Us",
       aboutUsSubtitle: "We will provide you the best work which you dreamt for!",
       aboutUsText: "At Software Company, we harness the power of technology to create innovative solutions that drive business success. From dynamic websites to transformative mobile apps and cutting-edge AI, we're your partners in navigating the digital landscape.",
       readMore: "Read more",
       yearsExperience: "15+",
       experienceText: "Years of Experience",
       projectsCompleted: "1500+",
       projectsText: "Projects Completed",
       satisfiedClients: "790+",
       clientsText: "Satisfied Clients",
       activeDevelopers: "100+",
       developersText: "Active Developers",
       ourServicesTitle: "Our Services",
       webDevelopment: "Custom Web Development",
       webDevelopmentText: "Transformative web designs that elevate your digital presence, ensuring user-friendly experiences across all devices.",
       mobileAppDevelopment: "Mobile App Development",
       mobileAppDevelopmentText: "Innovative mobile apps for iOS and Android, tailored to enhance engagement and streamline your business operations.",
       aiSolutions: "AI & Machine Learning Solutions",
       aiSolutionsText: "Leverage AI and machine learning to unlock data insights, automate processes, and revolutionize your business strategy.",
       cybersecurity: "Cybersecurity Services",
       cybersecurityText: "Comprehensive cybersecurity solutions to protect your digital assets and ensure business continuity against evolving threats.",
       ourProjectsTitle: "Our Projects",
       project1Title: "HashPioneer",
       project1Description: "Crypto Mining Platform",
       project2Title: "Educator",
       project2Description: "Chatbot for Education",
       project3Title: "NexaBank",
       project3Description: "e-Banking Software",
       clientsReviewsTitle: "Clients Reviews",
       review1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis unde suscipit quis consequuntur, tempora corporis ex molestias dignissimos in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel modi?",
       reviewer1Name: "John Deo",
       review2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis unde suscipit quis consequuntur, tempora corporis ex molestias dignissimos in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel modi?",
       reviewer2Name: "Doe Deo",
       review3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis unde suscipit quis consequuntur, tempora corporis ex molestias dignissimos in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel modi?",
       reviewer3Name: "Andrew Deo",
       ourPricingTitle: "Our Pricing",
       basicPlan: "Basic Plan",
       basicPlanFeature1: "Standard development tools",
       basicPlanFeature2: "Monthly site updates",
       basicPlanFeature3: "Basic security alerts",
       basicPlanFeature4: "Email support",
       basicPlanFeature5: "Analytics dashboard access",
       premiumPlan: "Premium Plan",
       premiumPlanFeature1: "Custom development hours",
       premiumPlanFeature2: "Enhanced security reports",
       premiumPlanFeature3: "Priority support access",
       premiumPlanFeature4: "Advanced AI tools",
       premiumPlanFeature5: "Bi-weekly optimizations",
       ultimatePlan: "Ultimate Plan",
       ultimatePlanFeature1: "Dedicated development team",
       ultimatePlanFeature2: "Comprehensive security suite",
       ultimatePlanFeature3: "24/7 priority support",
       ultimatePlanFeature4: "Monthly strategic sessions",
       ultimatePlanFeature5: "Custom AI development",
       contactUsTitle: "Contact Us",
       getInTouch: "Get in Touch",
       contactNamePlaceholder: "Name",
       contactEmailPlaceholder: "Email",
       contactPhonePlaceholder: "Phone",
       contactMessagePlaceholder: "Message",
       sendMessage: "Send Message",
       home: "Home",
       about: "About",
       services: "Services",
       projects: "Projects",
       pricing: "Pricing",
       contact: "Contact",
       creatorName: "Sherwin Vishesh Jathanna"
   },
   fr: {
       home: "Accueil",
       about: "À propos",
       services: "Services",
       projects: "Projets",
       pricing: "Tarification",
       contact: "Contact",
       loginTitle: "Formulaire de connexion",
       loginEmailPlaceholder: "Entrez votre email",
       loginPasswordPlaceholder: "Entrez votre mot de passe",
       rememberMe: "Se souvenir de moi",
       forgotPassword: "Mot de passe oublié?",
       loginNow: "Se connecter",
       createOne: "Créer un compte!",
       phoneNumber: "Numéro de téléphone",
       emailAddress: "Adresse email",
       officeAddress: "Adresse de bureau",
       homeTitle1: "Innover votre avenir numérique",
       homeText1: "Élevez votre entreprise avec des développements web, des applications mobiles et des solutions d'IA de pointe.",
       homeTitle2: "Où la technologie rencontre la vision",
       homeText2: "Des solutions informatiques sur mesure adaptées à vos besoins commerciaux uniques. Construisons quelque chose d'incroyable ensemble.",
       getStarted: "Commencer",
       aboutUsTitle: "À propos de nous",
       aboutUsSubtitle: "Nous vous fournirons le meilleur travail que vous rêviez!",
       aboutUsText: "Chez Software Company, nous utilisons la technologie pour créer des solutions innovantes qui favorisent le succès des entreprises. Des sites web dynamiques aux applications mobiles transformantes et à l'IA de pointe, nous sommes vos partenaires dans la navigation du paysage numérique.",
       readMore: "Lire la suite",
       yearsExperience: "15+",
       experienceText: "Années d'expérience",
       projectsCompleted: "1500+",
       projectsText: "Projets réalisés",
       satisfiedClients: "790+",
       clientsText: "Clients satisfaits",
       activeDevelopers: "100+",
       developersText: "Développeurs actifs",
       ourServicesTitle: "Nos services",
       webDevelopment: "Développement Web Personnalisé",
       webDevelopmentText: "Des conceptions web transformantes qui élèvent votre présence numérique, assurant des expériences conviviales sur tous les appareils.",
       mobileAppDevelopment: "Développement d'applications mobiles",
       mobileAppDevelopmentText: "Applications mobiles innovantes pour iOS et Android, conçues pour améliorer l'engagement et rationaliser vos opérations commerciales.",
       aiSolutions: "Solutions d'IA et de machine learning",
       aiSolutionsText: "Exploitez l'IA et le machine learning pour découvrir des informations sur les données, automatiser les processus et révolutionner votre stratégie commerciale.",
       cybersecurity: "Services de cybersécurité",
       cybersecurityText: "Solutions de cybersécurité complètes pour protéger vos actifs numériques et assurer la continuité des activités contre les menaces en évolution.",
       ourProjectsTitle: "Nos projets",
       project1Title: "HashPioneer",
       project1Description: "Plateforme de minage de crypto",
       project2Title: "Educateur",
       project2Description: "Chatbot pour l'éducation",
       project3Title: "NexaBank",
       project3Description: "Logiciel de e-Banking",
       clientsReviewsTitle: "Avis des clients",
       review1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis unde suscipit quis consequuntur, tempora corporis ex molestias dignissimos in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel modi?",
       reviewer1Name: "John Deo",
       review2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis unde suscipit quis consequuntur, tempora corporis ex molestias dignissimos in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel modi?",
       reviewer2Name: "Doe Deo",
       review3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis unde suscipit quis consequuntur, tempora corporis ex molestias dignissimos in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel modi?",
       reviewer3Name: "Andrew Deo",
       ourPricingTitle: "Nos tarifs",
       basicPlan: "Forfait de base",
       basicPlanFeature1: "Outils de développement standard",
       basicPlanFeature2: "Mises à jour mensuelles du site",
       basicPlanFeature3: "Alertes de sécurité de base",
       basicPlanFeature4: "Support par email",
       basicPlanFeature5: "Accès au tableau de bord d'analyse",
       premiumPlan: "Forfait Premium",
       premiumPlanFeature1: "Heures de développement personnalisées",
       premiumPlanFeature2: "Rapports de sécurité améliorés",
       premiumPlanFeature3: "Accès au support prioritaire",
       premiumPlanFeature4: "Outils avancés d'IA",
       premiumPlanFeature5: "Optimisations bimensuelles",
       ultimatePlan: "Forfait Ultime",
       ultimatePlanFeature1: "Équipe de développement dédiée",
       ultimatePlanFeature2: "Suite de sécurité complète",
       ultimatePlanFeature3: "Support prioritaire 24/7",
       ultimatePlanFeature4: "Sessions stratégiques mensuelles",
       ultimatePlanFeature5: "Développement d'IA personnalisé",
       contactUsTitle: "Contactez-nous",
       getInTouch: "Entrer en contact",
       contactNamePlaceholder: "Nom",
       contactEmailPlaceholder: "Email",
       contactPhonePlaceholder: "Téléphone",
       contactMessagePlaceholder: "Message",
       sendMessage: "Envoyer un message",
       home: "Accueil",
       about: "À propos",
       services: "Services",
       projects: "Projets",
       pricing: "Tarification",
       contact: "Contact",
       creatorName: "Sherwin Vishesh Jathanna"
   },
   
};

const languageSelect = document.getElementById('language-select');

function updateContent(language) {
   const elements = document.querySelectorAll('[data-key]');

   elements.forEach(el => {
       const key = el.getAttribute('data-key');
       if (translations[language][key]) {
           el.textContent = translations[language][key];
       }
   });
}

languageSelect.addEventListener('change', (e) => {
   const selectedLanguage = e.target.value;
   document.documentElement.lang = selectedLanguage;
   updateContent(selectedLanguage);
});

// Default to English
updateContent('en');

// Handle search functionality
document.getElementById('search-box').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const query = this.value.trim();
        if (query) {
            clearHighlights();
            highlightText(document.body, query);
            highlights = document.querySelectorAll('.highlight');
            if (highlights.length > 0) {
                currentHighlightIndex = 0;
                scrollToHighlight(currentHighlightIndex);
                searchForm.classList.remove('active'); // Hide the search form
            }
        }
    }
});

// Scroll to the current highlighted element
function scrollToHighlight(index) {
    const highlight = highlights[index];
    if (highlight) {
        highlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
        highlight.style.backgroundColor = '#ffeb3b'; // Highlight the current selection
        setTimeout(() => {
            highlight.style.backgroundColor = '';
        }, 1000);
    }
}

// Highlight text in the document
function highlightText(element, searchText) {
   const stack = [element];

   while (stack.length) {
       const currentNode = stack.pop();

       if (currentNode.nodeType === 3) { // Text node
           const text = currentNode.nodeValue;
           const matchIndex = text.toLowerCase().indexOf(searchText.toLowerCase());
           if (matchIndex !== -1) {
               const span = document.createElement('span');
               span.className = 'highlight';
               const highlightedText = text.substring(matchIndex, matchIndex + searchText.length);
               span.appendChild(document.createTextNode(highlightedText));

               const afterText = text.substring(matchIndex + searchText.length);
               currentNode.nodeValue = text.substring(0, matchIndex);
               currentNode.parentNode.insertBefore(span, currentNode.nextSibling);
               if (afterText) {
                   currentNode.parentNode.insertBefore(document.createTextNode(afterText), span.nextSibling);
               }
           }
       } else if (currentNode.nodeType === 1 && currentNode.childNodes && !/(script|style)/i.test(currentNode.tagName)) {
           for (let i = currentNode.childNodes.length - 1; i >= 0; i--) {
               stack.push(currentNode.childNodes[i]);
           }
       }
   }
}

// Clear all highlighted text
function clearHighlights() {
   const highlightedElements = document.querySelectorAll('.highlight');
   highlightedElements.forEach(element => {
       const parent = element.parentNode;
       parent.replaceChild(document.createTextNode(element.textContent), element);
       parent.normalize();
   });
}