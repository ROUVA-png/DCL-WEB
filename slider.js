const slides = [
  
   { img: 'secure3.png', header: 'Adequate <span style="color:skyblue;">Monitoring System</span>', para: 'Committed to excellence and reliability.' },
    { img: 'telecom.png', header: 'Telecoms Infrastructure <span style="color:skyblue;">Security</span>', para: 'Modern solutions secured by expertise.' },
  { img: 'CCTV.png', header: '<span style="color:lightblue;">Technology</span>-Driven <span style="color:skyblue;">Protection</span>', para: 'Modern solutions secured by expertise.' },
  
  { img: 'security.png', header: 'Security <span style="color:skyblue;">You Can Trust</span>', para: 'Your protection, powered by innovation.' }
];

let current = 0;
const hero = document.querySelector('.hero-slider');
const currentBg = hero.querySelector('.bg.current');
const nextBg = hero.querySelector('.bg.next');
const headerEl = document.getElementById('hero-header');
const paraEl = document.getElementById('hero-para');


function showSlide() {
  const { img, header, para } = slides[current];


  
  
  // Set next background image and fade it in
  nextBg.style.backgroundImage = `url('${img}')`;
  nextBg.style.opacity = 1;
  nextBg.style.filter = "brightness(.45) saturate(.9)";

  // Fade out current background
  currentBg.style.opacity = 1;

  // After fade transition, swap layer roles and reset opacity
  setTimeout(() => {
    currentBg.style.backgroundImage = `url('${img}')`;
    currentBg.style.opacity = 1;
    nextBg.style.opacity = 0;
  }, 2500);

  // Animate text
  headerEl.style.opacity = 0;
  paraEl.style.opacity = 0;
  setTimeout(() => {
    headerEl.innerHTML = header; // changed from textContent to innerHTML to allow span colors
    paraEl.textContent = para;
    headerEl.style.animation = 'fadeInUp 1s forwards';
    paraEl.style.animation = 'fadeInUp 1.5s forwards';
  }, 500);

  current = (current + 1) % slides.length;
}

document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.mission-behind-animated .box');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  boxes.forEach(box => observer.observe(box));
});


showSlide();
setInterval(showSlide, 6000);


//BEHIND THE BRAND SCROLL ANIMATION JS
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".brand-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target); // Animate once only
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});





document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add("show");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});



//for scroll fade-ins

document.addEventListener('DOMContentLoaded', () => {
  const animatedItems = document.querySelectorAll('.scroll-animate');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedItems.forEach(item => observer.observe(item));
});



//TESTIMONIALS
document.addEventListener("scroll", function() {
  const cards = document.querySelectorAll(".testimonial-card");
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const boxTop = card.getBoundingClientRect().top;
    if(boxTop < triggerBottom) {
      card.classList.add("show");
    }
  });
});

// Reveal on scroll
document.addEventListener("scroll", () => {
  document.querySelectorAll("[data-animate]").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});


  function updateTime() {
    const now = new Date();
    document.getElementById("time").textContent = now.toLocaleTimeString();
  }
  setInterval(updateTime, 1000);
  updateTime();




async function loadSecurityNews() {
  try {
    let res = await fetch("https://gnews.io/api/v4/search?q=security&token=YOUR_API_KEY&lang=en");
    let data = await res.json();
    let track = document.querySelector(".news-track");
    track.innerHTML = data.articles.map(a => `<span>📰 ${a.title}</span>`).join("");
  } catch (err) {
    console.log("Error loading news:", err);
  }
}
loadSecurityNews();
setInterval(loadSecurityNews, 100000); 


