// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu) {
      mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenu?.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
    
    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
    
    // Testimonial slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-testimonial');
    const nextBtn = document.querySelector('.next-testimonial');
    let currentTestimonial = 0;
    
    if (testimonialCards.length > 0) {
      function showTestimonial(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        testimonialCards[index].classList.add('active');
      }
      
      if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
          currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
          showTestimonial(currentTestimonial);
        });
        
        nextBtn.addEventListener('click', () => {
          currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
          showTestimonial(currentTestimonial);
        });
      }
      
      // Auto rotate testimonials every 5 seconds
      setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
      }, 5000);
    }
    
    // Form validation and submission simulation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        const name = this.querySelector('input[type="text"]');
        const email = this.querySelector('input[type="email"]');
        const message = this.querySelector('textarea');
        
        if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
          alert('Veuillez remplir tous les champs');
          return;
        }
        
        if (!isValidEmail(email.value)) {
          alert('Veuillez entrer une adresse email valide');
          return;
        }
        
        alert('Message envoyé avec succès ! (simulation)');
        this.reset();
      });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]');
        
        if (!isValidEmail(email.value)) {
          alert('Veuillez entrer une adresse email valide');
          return;
        }
        
        alert('Merci de votre inscription ! (simulation)');
        this.reset();
      });
    }
    
    // Email validation helper
    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
    
    // Animate skill bars on scroll
    const skillItems = document.querySelectorAll('.skill-item');
    
    function checkSkillsInView() {
      skillItems.forEach(item => {
        const percent = item.getAttribute('data-percent');
        const fillBar = item.querySelector('.progress-fill');
        const rect = item.getBoundingClientRect();
        
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0 && fillBar) {
          // Already have width set in HTML, but we can add animation class
          item.classList.add('animated');
        }
      });
    }
    
    window.addEventListener('scroll', checkSkillsInView);
    checkSkillsInView(); // Check on load
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });
  