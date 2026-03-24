// Dark Mode Toggle
(function() {
  const html = document.documentElement;
  const toggleBtn = document.getElementById('dark-mode-toggle');
  const icon = toggleBtn ? toggleBtn.querySelector('span') : null;
  
  // Check saved preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.remove('light');
    html.classList.add('dark');
    if (icon) icon.textContent = 'light_mode';
  }
  
  // Toggle function
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        localStorage.setItem('theme', 'light');
        if (icon) icon.textContent = 'dark_mode';
      } else {
        html.classList.remove('light');
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        if (icon) icon.textContent = 'light_mode';
      }
    });
  }
})();

// Mobile Menu Toggle
(function() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
})();

// Search Toggle
(function() {
  const searchBtn = document.getElementById('search-btn');
  const searchModal = document.getElementById('search-modal');
  const closeSearch = document.getElementById('close-search');
  
  if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', function() {
      searchModal.classList.remove('hidden');
      document.getElementById('search-input')?.focus();
    });
  }
  
  if (closeSearch && searchModal) {
    closeSearch.addEventListener('click', function() {
      searchModal.classList.add('hidden');
    });
  }
})();

// Form validation
(function() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const email = form.querySelector('input[type="email"]');
      if (email && !email.value.includes('@')) {
        e.preventDefault();
        alert('Por favor introduce un email válido');
      }
    });
  });
})();
