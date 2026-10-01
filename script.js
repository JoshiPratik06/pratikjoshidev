document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();

  const navbar = document.querySelector('.navbar');
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger-btn');

  const closeMenu = () => {
    if (!navMenu || !hamburger) return;
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
  };

  if (navbar) {
    let previousScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      navbar.classList.toggle('navbar-scrolled', currentScrollY > 8);

      if (currentScrollY <= 8) {
        navbar.classList.remove('navbar-hidden');
      } else if (currentScrollY > previousScrollY + 4) {
        navbar.classList.add('navbar-hidden');
        closeMenu();
      } else if (currentScrollY < previousScrollY - 4) {
        navbar.classList.remove('navbar-hidden');
      }

      previousScrollY = currentScrollY;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    }, { passive: true });
  }

  if (navMenu && hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      navMenu.classList.toggle('open', !isOpen);
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      hamburger.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
    });

    navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  document.querySelectorAll('.details-btn[aria-controls]').forEach(button => {
    const panelId = button.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const shouldExpand = !isExpanded;

      panel.getAnimations().forEach(animation => animation.cancel());
      const currentHeight = panel.getBoundingClientRect().height;

      button.setAttribute('aria-expanded', String(shouldExpand));

      if (shouldExpand) {
        panel.inert = false;
        panel.setAttribute('aria-hidden', 'false');
      } else {
        panel.inert = true;
      }

      const targetHeight = shouldExpand ? panel.scrollHeight : 0;
      const animation = panel.animate([
        {
          height: `${currentHeight}px`,
          marginTop: currentHeight ? '14px' : '0px',
          opacity: currentHeight ? 1 : 0,
          transform: currentHeight ? 'translateY(0)' : 'translateY(-8px)'
        },
        {
          height: `${targetHeight}px`,
          marginTop: shouldExpand ? '14px' : '0px',
          opacity: shouldExpand ? 1 : 0,
          transform: shouldExpand ? 'translateY(0)' : 'translateY(-8px)'
        }
      ], {
        duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 520,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
      });

      animation.onfinish = () => {
        panel.style.height = shouldExpand ? 'auto' : '0px';
        panel.style.marginTop = shouldExpand ? '14px' : '0px';
        panel.style.opacity = shouldExpand ? '1' : '0';
        panel.style.transform = shouldExpand ? 'translateY(0)' : 'translateY(-8px)';

        if (!shouldExpand) panel.setAttribute('aria-hidden', 'true');
      };
    });
  });

  const revealItems = document.querySelectorAll('.reveal');

  if (typeof IntersectionObserver === 'undefined') {
    revealItems.forEach(item => item.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach(item => observer.observe(item));
});
