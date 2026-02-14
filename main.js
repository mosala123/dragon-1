// ========== 1. تهيئة Swiper ==========
const swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }
});

// ========== 2. خريطة Google Maps ==========
function initMap() {
  const athens = { lat: 37.9838, lng: 23.7275 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: athens,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      { 
        featureType: 'water', 
        elementType: 'geometry', 
        stylers: [{ color: '#17263c' }] 
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      }
    ]
  });
  
  new google.maps.Marker({
    position: athens,
    map: map,
    title: 'Dragon HQ - Athens',
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="%23ffb700"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>')
    }
  });
}

window.initMap = initMap;

// ========== 3. نموذج الاتصال ==========
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // جمع البيانات
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    reason: document.getElementById('reason').value,
    message: document.getElementById('message').value,
    newsletter: document.getElementById('newsletter').checked
  };
  
  // محاكاة إرسال
  console.log('Form submitted:', formData);
  
  // رسالة نجاح
  alert('✅ Message sent successfully! We will reply within 24 hours.');
  
  // إعادة تعيين النموذج
  e.target.reset();
});

// ========== 4. تغيير خلفية النافبار عند التمرير ==========
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('mainNavbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// ========== 5. إغلاق القائمة تلقائياً عند النقر على رابط (للموبايل) ==========
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('navbarContent');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

// ========== 6. تفعيل الأنيميشن عند الظهور (بدون AOS) ==========
const animateElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});

// ملاحظة: لا تنس استبدال YOUR_API_KEY في رابط خرائط Google