// ===============================
// Project carousels (auto slide every 3.5s)
// ===============================
function initProjectCarousels(root = document) {
  const carousels = root.querySelectorAll('.project-carousel');

  carousels.forEach((carousel) => {
    if (carousel.dataset.carouselInit === "1") return;
    carousel.dataset.carouselInit = "1";

    const track = carousel.querySelector('.carousel-track');
    if (!track) return;

    const slides = Array.from(track.querySelectorAll('img'));
    const n = slides.length;
    if (n <= 1) return;

    let idx = 0;
    let timer = null;

    function go(i) {
      idx = (i + n) % n;
      track.style.transform = `translateX(-${idx * 100}%)`;
    }

    function start() {
      if (timer) return;
      timer = setInterval(() => go(idx + 1), 3500);
    }

    function stop() {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    }

    go(0);
    start();

    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);

    carousel.addEventListener('click', () => {
      if (timer) stop();
      else start();
    });
  });
}

// ===============================
// Years of experience auto increment
// Base = 2 years (2026)
// From Jan 2027 => 3, then auto increment yearly
// ===============================
function initYearsExp() {
  const baseYear = 2026;
  const baseValue = 2;

  const currentYear = new Date().getFullYear();
  const diff = currentYear - baseYear;
  const computedValue = baseValue + Math.max(0, diff);

  // Update ALL occurrences (sidebar + mobile clone)
  const nodes = document.querySelectorAll('#yearsExpValue');
  nodes.forEach(node => {
    node.textContent = computedValue;
  });
}

// ===============================
// Contact form -> mailto with "Sending..." 1s
// ===============================
function initContactMail(root = document) {
  const form = root.getElementById?.("contactForm") || root.querySelector?.("#contactForm");
  if (!form) return;
  if (form.dataset.mailInit === "1") return;
  form.dataset.mailInit = "1";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('input[name="name"]')?.value?.trim();
    const email = form.querySelector('input[name="email"]')?.value?.trim();
    const message = form.querySelector('textarea[name="message"]')?.value?.trim();
    const btn = form.querySelector('button[type="submit"]');

    if (!name || !email || !message || !btn) return;

    btn.disabled = true;
    btn.classList.add("loading");
    btn.dataset.originalText = btn.textContent || "Send email";
    btn.textContent = "Sending…";

    setTimeout(() => {
      const subject = encodeURIComponent(`Contact Portfolio — ${name}`);
      const body = encodeURIComponent(
        `Full name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
      );

      window.location.href =
        `mailto:aganondeodat@gmail.com?subject=${subject}&body=${body}`;

      btn.disabled = false;
      btn.classList.remove("loading");
      btn.textContent = btn.dataset.originalText;
    }, 1000);
  });
}

// ===============================
// Update toolbar arrows enabled/disabled
// - Never grey everything if ReadMore doesn't expose canGo*
// ===============================
function updateToolbarState() {
  const backBtn = document.getElementById("navBack");
  const forwardBtn = document.getElementById("navForward");
  if (!backBtn || !forwardBtn) return;

  backBtn.classList.remove("disabled");
  forwardBtn.classList.remove("disabled");

  // If ReadMore not ready -> keep clickable
  if (!window.ReadMore) return;

  const hasCanBack = typeof ReadMore.canGoBack === "function";
  const hasCanFwd  = typeof ReadMore.canGoForward === "function";

  if (hasCanBack && !ReadMore.canGoBack()) backBtn.classList.add("disabled");
  if (hasCanFwd  && !ReadMore.canGoForward()) forwardBtn.classList.add("disabled");
}

// ===============================
// Mobile sticky topbar builder
// FIX: clone the sidebar instead of moving it
// ===============================
function initMobileTopbar() {
  const isMobile = window.innerWidth <= 1024;
  const contentArea = document.querySelector('.content-area');
  if (!isMobile || !contentArea) return;

  // avoid duplicates
  if (contentArea.querySelector('.mobile-topbar')) return;

  const sidebarSource = document.querySelector('#sidebar .sidebar');
  if (!sidebarSource) return;

  const fullName = (sidebarSource.querySelector('.name')?.textContent || '').trim();
  const role = (sidebarSource.querySelector('.title')?.textContent || '').trim();
  const kpiHTML = sidebarSource.querySelector('.sidebar-kpis')?.innerHTML || '';
  const social = sidebarSource.querySelector('.social-icons');

  const topbar = document.createElement('div');
  topbar.className = 'mobile-topbar';
  topbar.innerHTML = `
    <div class="mobile-topbar-left">
      <div class="mobile-topbar-avatar">
        <div class="avatar-coin">
          <div class="avatar-face front">DA</div>
          <div class="avatar-face back"></div>
        </div>
      </div>

      <div class="mobile-topbar-meta">
        <div class="mobile-topbar-name">${fullName}</div>
        <div class="mobile-topbar-role">${role}</div>
        <div class="mobile-topbar-kpi sidebar-kpis">${kpiHTML}</div>
      </div>
    </div>
    <div class="mobile-topbar-right"></div>
  `;

  const right = topbar.querySelector('.mobile-topbar-right');
  if (social && right) {
    const socialClone = social.cloneNode(true);
    socialClone.className = '';
    Array.from(socialClone.children).forEach(el => right.appendChild(el));
  }

  const sidebarClone = sidebarSource.cloneNode(true);
  sidebarClone.dataset.mobileClone = "1";

  contentArea.prepend(topbar);
  contentArea.insertBefore(sidebarClone, topbar.nextSibling);

  function updateTopbar() {
    const threshold = Math.max(0, sidebarClone.offsetHeight - 10);
    if (contentArea.scrollTop >= threshold) topbar.classList.add('is-visible');
    else topbar.classList.remove('is-visible');
  }

  contentArea.addEventListener('scroll', updateTopbar, { passive: true });
  window.addEventListener('resize', updateTopbar);

  updateTopbar();
  setTimeout(updateTopbar, 0);
  setTimeout(updateTopbar, 300);

  // ensure KPI computed on clone too
  initYearsExp();
}

// ===============================
// Mobile UX: on project detail, do NOT show the mobile topbar/clone.
// Show only the detail page.
// (Topbar will reappear when going back to list via initMobileTopbar)
// ===============================
function enterMobileDetailCleanView() {
  const isMobile = window.innerWidth <= 1024;
  if (!isMobile) return;

  const contentArea = document.querySelector('.content-area');
  if (!contentArea) return;

  const detail = contentArea.querySelector('.project-detail');
  if (!detail) return; // not in detail

  // Remove mobile topbar + sidebar clone for a clean detail view
  const topbar = contentArea.querySelector('.mobile-topbar');
  if (topbar) topbar.remove();

  const sidebarClone = contentArea.querySelector('.sidebar[data-mobile-clone="1"]');
  if (sidebarClone) sidebarClone.remove();

  // Jump to top of detail
  contentArea.scrollTop = 0;
}

// ===============================
// XP cards interaction
// ===============================
function initXpCards(root = document) {
  const xpCards = root.querySelectorAll('.xp-card');
  xpCards.forEach((card) => {
    if (card.dataset.xpInit === "1") return;
    card.dataset.xpInit = "1";

    card.addEventListener('click', () => card.classList.toggle('is-open'));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('is-open');
      }
    });
  });
}

// ===============================
// Avatar coin pause/resume on tap (global, once)
// ===============================
function initAvatarCoinToggle() {
  if (window.__avatarCoinInit) return;
  window.__avatarCoinInit = true;

  document.addEventListener('click', (e) => {
    const coin = e.target.closest('.avatar-coin');
    if (!coin) return;
    coin.classList.toggle('paused');
  });
}

// ===============================
// Toolbar arrows -> ReadMore navigation (FIX: rebind arrows)
// ===============================
function initToolbarNavigation() {
  const backBtn = document.getElementById('navBack');
  const forwardBtn = document.getElementById('navForward');

  if (backBtn && !backBtn.dataset.bound) {
    backBtn.dataset.bound = "1";
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (backBtn.classList.contains("disabled")) return;

      if (window.ReadMore && typeof ReadMore.navBack === "function") {
        ReadMore.navBack();
      }

      setTimeout(() => {
        initProjectCarousels(document);
        initXpCards(document);
        initMobileTopbar();        // ✅ back to list => topbar should exist
        initContactMail(document);
        initYearsExp();
        updateToolbarState();
        // If we are still in detail after navBack (edge cases), keep it clean
        enterMobileDetailCleanView();
      }, 0);
    });
  }

  if (forwardBtn && !forwardBtn.dataset.bound) {
    forwardBtn.dataset.bound = "1";
    forwardBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (forwardBtn.classList.contains("disabled")) return;

      if (window.ReadMore && typeof ReadMore.navForward === "function") {
        ReadMore.navForward();
      }

      setTimeout(() => {
        initProjectCarousels(document);
        initXpCards(document);

        // By default initMobileTopbar creates topbar; but on detail we don't want it.
        initMobileTopbar();
        enterMobileDetailCleanView();

        initContactMail(document);
        initYearsExp();
        updateToolbarState();
      }, 0);
    });
  }
}

// ===============================
// Boot
// ===============================
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('toolbar').innerHTML = createToolbar();
  document.getElementById('sidebar').innerHTML = createSidebar();
  document.getElementById('content').innerHTML = createContent();

  // init UI
  initProjectCarousels(document);
  initMobileTopbar();
  initXpCards(document);
  initAvatarCoinToggle();
  initContactMail(document);
  initYearsExp();
  initToolbarNavigation();

  // ReadMore init + rebind after list render
  if (window.ReadMore) {
    ReadMore.init({
      renderList: () => createContent(),
      onAfterListRender: () => {
        initProjectCarousels(document);
        initXpCards(document);
        ReadMore.bind(document);

        // list view on mobile -> topbar should be present
        initMobileTopbar();

        initContactMail(document);
        initYearsExp();

        updateToolbarState();
      }
    });
  }

  // initial arrows state
  updateToolbarState();

  // When user opens a readmore from list:
  // - on mobile, show ONLY the detail page (no mobile topbar/clone)
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-readmore]');
    if (!link) return;

    setTimeout(() => {
      updateToolbarState();
      initYearsExp();

      // We may have a topbar already (mobile list), remove it for detail clean view
      enterMobileDetailCleanView();
    }, 0);
  });
});