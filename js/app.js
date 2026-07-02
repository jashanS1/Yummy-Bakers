document.addEventListener('DOMContentLoaded', () => {
  
  // Loader
  const loader = document.querySelector('.loader-wrapper');
  setTimeout(() => {
    loader.classList.add('fade-out');
  }, 1200);

  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.padding = '0.75rem 0';
      navbar.style.background = 'rgba(255, 255, 255, 0.85)';
      navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.05)';
    } else {
      navbar.style.padding = '1.5rem 0';
      navbar.style.background = 'rgba(255, 255, 255, 0.7)';
      navbar.style.boxShadow = 'none';
    }
  });

  // Reveal Animations on Scroll
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    
    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger on load

  // Parallax Effect
  const parallaxBgs = document.querySelectorAll('.parallax-bg');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    parallaxBgs.forEach(bg => {
      const speed = bg.dataset.speed || 0.4;
      bg.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Custom Cake Builder Live Price
  const formInputs = document.querySelectorAll('.builder-form select, .builder-form input');
  const priceDisplay = document.querySelector('#live-price');
  if (formInputs.length > 0 && priceDisplay) {
    const calculatePrice = () => {
      let basePrice = 800; // base price in INR
      const weight = parseFloat(document.querySelector('#cake-weight').value) || 1;
      const theme = document.querySelector('#cake-theme').value;
      
      let finalPrice = basePrice * weight;
      if (theme === 'designer') finalPrice += 500;
      if (theme === 'wedding') finalPrice += 1000;
      
      priceDisplay.textContent = `₹${finalPrice}`;
    };
    
    formInputs.forEach(input => {
      input.addEventListener('change', calculatePrice);
    });
    calculatePrice();
  }

  // Magnetic Buttons (Basic implementation)
  const magneticBtns = document.querySelectorAll('.magnetic');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = `translate(0px, 0px)`;
      btn.style.transition = `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)`;
    });
    
    btn.addEventListener('mouseenter', () => {
      btn.style.transition = `none`;
    });
  });
});
