/* ============================================================
   ENERGIAS RENOVÁVEIS NO BRASIL — main.js
   ============================================================ */

/* ── Navbar scroll effect ─────────────────────────────────── */
const navbar = document.querySelector('.navbar');
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar?.classList.add('scrolled');
    scrollTopBtn?.classList.add('show');
  } else {
    navbar?.classList.remove('scrolled');
    scrollTopBtn?.classList.remove('show');
  }
});

scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── Mobile nav toggle ────────────────────────────────────── */
const navToggle = document.querySelector('.nav-toggle');
const navMenu   = document.querySelector('.nav-menu');

navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  const spans = navToggle.querySelectorAll('span');
  if (navMenu.classList.contains('open')) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

navMenu?.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle?.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

/* ── Active nav link ──────────────────────────────────────── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* ── Parallax ─────────────────────────────────────────────── */
const parallaxBg = document.querySelector('.parallax-bg');
if (parallaxBg) {
  window.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.35;
    parallaxBg.style.transform = `translateY(${offset}px)`;
  }, { passive: true });
}

/* ── Intersection Observer (fade-in) ─────────────────────── */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

/* ── Progress Bars ────────────────────────────────────────── */
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll('.progress-fill');
      fills.forEach(fill => {
        const target = fill.dataset.width;
        fill.style.width = target;
      });
      progressObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.progress-card').forEach(card => progressObserver.observe(card));

/* ── Bar Charts ───────────────────────────────────────────── */
const chartObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.bar[data-height]');
      bars.forEach(bar => {
        bar.style.height = bar.dataset.height;
      });
      chartObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.bar-chart').forEach(chart => chartObserver.observe(chart));

/* ── Counter Animation ────────────────────────────────────── */
function animateCounter(el, target, duration = 2000, suffix = '') {
  const isFloat = target % 1 !== 0;
  const start = performance.now();
  const startVal = 0;

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = startVal + (target - startVal) * eased;
    el.textContent = isFloat
      ? current.toFixed(1) + suffix
      : Math.round(current) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('[data-count]');
      counters.forEach(c => {
        const val    = parseFloat(c.dataset.count);
        const suffix = c.dataset.suffix || '';
        animateCounter(c, val, 2000, suffix);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.stats-grid').forEach(g => counterObserver.observe(g));

/* ── Form Validation ("Compromisso Verde") ────────────────── */
const form = document.getElementById('compromissoForm');

if (form) {
  const nameInput       = document.getElementById('f-name');
  const emailInput      = document.getElementById('f-email');
  const commitInput     = document.getElementById('f-commit');
  const extraInput      = document.getElementById('f-extra');
  const submitBtn       = form.querySelector('.form-submit');
  const formSuccess     = document.querySelector('.form-success');
  const formBody        = document.querySelector('.form-body');

  function showError(input, message) {
    input.classList.add('invalid');
    const errEl = document.getElementById(input.id + '-error');
    if (errEl) { errEl.textContent = message; errEl.classList.add('show'); }
  }

  function clearError(input) {
    input.classList.remove('invalid');
    const errEl = document.getElementById(input.id + '-error');
    if (errEl) errEl.classList.remove('show');
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  [nameInput, emailInput, commitInput].forEach(input => {
    input?.addEventListener('input', () => clearError(input));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showError(nameInput, 'Por favor, informe seu nome completo (mínimo 2 caracteres).');
      valid = false;
    } else {
      clearError(nameInput);
    }

    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      showError(emailInput, 'Por favor, informe um e-mail válido.');
      valid = false;
    } else {
      clearError(emailInput);
    }

    if (!commitInput.value) {
      showError(commitInput, 'Por favor, escolha um compromisso.');
      valid = false;
    } else {
      clearError(commitInput);
    }

    if (valid) {
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      setTimeout(() => {
        formBody.style.display = 'none';
        formSuccess.classList.add('show');
        document.querySelector('.success-name').textContent = nameInput.value.trim();
        document.querySelector('.success-commit').textContent = commitInput.options[commitInput.selectedIndex].text;
      }, 1200);
    }
  });
}

/* ── Stagger cards on load ────────────────────────────────── */
document.querySelectorAll('.cards-grid .card, .feature-boxes .feature-box').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.07}s`;
  el.classList.add('fade-in');
  fadeObserver.observe(el);
});
