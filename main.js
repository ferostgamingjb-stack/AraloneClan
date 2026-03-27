/* =============================================
   ARALONECLAN — Main JavaScript
   ============================================= */

/* =============================================
   PAGE NAVIGATION
   ============================================= */
function showPage(pageName) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Show target page
  const target = document.getElementById('page-' + pageName);
  if (target) {
    target.classList.add('active');
  }

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const navEl = document.getElementById('nav-' + pageName);
  if (navEl) navEl.classList.add('active');

  // Close all dropdowns
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('open'));

  // Close mobile menu
  closeMobileMenu();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Handle URL hash for bookmarking
  if (history.pushState) {
    history.pushState(null, null, '#' + pageName);
  }
}

/* =============================================
   TAB NAVIGATION
   ============================================= */
function showTab(groupId, tabId) {
  // Hide all contents for this group
  document.querySelectorAll('[id^="content-' + groupId + '-"]').forEach(el => el.classList.remove('active'));
  // Remove active from all tab buttons for this group
  document.querySelectorAll('[id^="' + groupId + '-"]').forEach(btn => btn.classList.remove('active'));

  // Show target tab content
  const content = document.getElementById('content-' + groupId + '-' + tabId);
  if (content) content.classList.add('active');

  // Activate tab button
  const btn = document.getElementById(groupId + '-' + tabId);
  if (btn) btn.classList.add('active');
}

/* =============================================
   DROPDOWN TOGGLE
   ============================================= */
function toggleDropdown(name) {
  const item = document.getElementById('dropdown-' + name);
  if (!item) return;

  const isOpen = item.classList.contains('open');

  // Close all dropdowns
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('open'));

  // Open if was closed
  if (!isOpen) {
    item.classList.add('open');
  }
}

// Close dropdown on outside click
document.addEventListener('click', function(e) {
  if (!e.target.closest('.nav-item')) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('open'));
  }
});

/* =============================================
   MOBILE MENU
   ============================================= */
function toggleMobileMenu() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('open');
}

function closeMobileMenu() {
  const nav = document.getElementById('mobileNav');
  if (nav) nav.classList.remove('open');
}

function toggleMobileSubmenu(id) {
  const sub = document.getElementById(id);
  if (!sub) return;
  sub.classList.toggle('open');
}

/* =============================================
   UTILITIES
   ============================================= */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}

/* =============================================
   URL HASH ROUTING (on load)
   ============================================= */
/* =============================================
   CONNECT TO CS 1.6 SERVER
   ============================================= */
function connectCS() {
  // When server IP is known, use: window.location.href = 'steam://connect/IP:PORT';
  // For now IP is unknown — show info
  alert('Sunucu şu an pasif. IP adresi netleştiğinde buton otomatik bağlanacaktır.');
}

function routeFromHash() {
  const hash = window.location.hash.replace('#', '');
  const validPages = ['home', 'hakkimizda', 'fiyatlar', 'yonetim', 'medya', 'teamspeak', 'indir', 'yonlendirme', 'server'];
  if (hash && validPages.includes(hash)) {
    showPage(hash);
  }
}

/* =============================================
   SLOT PURCHASE — redirect to TS3
   ============================================= */
function buySlot(num) {
  window.location.href = 'ts3server://aralonejb';
}

/* =============================================
   MEMBER DETAIL MODAL
   ============================================= */
const memberData = {
  'xPantik': {
    adSoyad: 'Umut Altın',
    hesapAdi: 'xPantik',
    durum: 'Onaylandı',
    yetki: 'Sunucu Sahibi',
    bakiye: '379,32 ₺',
    seviye: '2374 Seviye'
  },
  'Buğra': {
    adSoyad: 'Buğra Büyükdoğan',
    hesapAdi: 'Buğra',
    durum: 'Onaylandı',
    yetki: 'Sunucu Sahibi',
    bakiye: '0,00 ₺',
    seviye: '1026 Seviye'
  },
  'Cross': {
    adSoyad: '—',
    hesapAdi: 'Cross',
    durum: 'Onaylanmadı',
    yetki: 'Sunucu Kurucusu',
    bakiye: '0,00 ₺',
    seviye: '0 Seviye'
  },
  'xPlayer': {
    adSoyad: '—',
    hesapAdi: 'xPlayer',
    durum: 'Onaylanmadı',
    yetki: 'Sunucu Yöneticisi',
    bakiye: '0,00 ₺',
    seviye: '823 Seviye'
  },
  'Mehmet': {
    adSoyad: 'Mehmet Vuran',
    hesapAdi: 'Mehmet',
    durum: 'Onaylanmadı',
    yetki: 'Sunucu Sorumlusu',
    bakiye: '0,00 ₺',
    seviye: '0 Seviye'
  },
  'WoxyTR': {
    adSoyad: '—',
    hesapAdi: 'WoxyTR',
    durum: 'Onaylanmadı',
    yetki: 'Sunucu Sorumlusu',
    bakiye: '0,00 ₺',
    seviye: '0 Seviye'
  },
  'Kerim': {
    adSoyad: '—',
    hesapAdi: 'Kerim',
    durum: 'Onaylanmadı',
    yetki: 'Sunucu Yetkilisi',
    bakiye: '0,00 ₺',
    seviye: '0 Seviye'
  },
  'Gizem': {
    adSoyad: '—',
    hesapAdi: 'Gizem',
    durum: 'Onaylanmadı',
    yetki: 'Sunucu Yetkilisi',
    bakiye: '0,00 ₺',
    seviye: '0 Seviye'
  },
  'Kemalist.6': {
    adSoyad: '—',
    hesapAdi: 'Kemalist.6',
    durum: 'Onaylanmadı',
    yetki: 'Sunucu Yetkilisi',
    bakiye: '0,00 ₺',
    seviye: '0 Seviye'
  }
};

function showMemberDetail(name) {
  const data = memberData[name];
  if (!data) return;

  document.getElementById('modal-name').textContent = name;
  document.getElementById('modal-role').textContent = data.yetki;
  document.getElementById('modal-adsoyad').textContent = data.adSoyad;
  document.getElementById('modal-hesapadi').textContent = data.hesapAdi;

  const durumEl = document.getElementById('modal-durum');
  durumEl.textContent = data.durum;
  durumEl.className = 'modal-val ' + (data.durum === 'Onaylandı' ? 'onaylandi' : 'onaylanmadi');

  document.getElementById('modal-yetki').textContent = data.yetki;
  document.getElementById('modal-bakiye').textContent = data.bakiye;
  document.getElementById('modal-seviye').textContent = data.seviye;

  document.getElementById('memberModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMemberModal(event) {
  if (event && event.target !== document.getElementById('memberModal')) return;
  document.getElementById('memberModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* =============================================
   ANIMATED COUNTER
   ============================================= */
function animateCounter(el, target, duration = 1200) {
  const start = 0;
  const step = (target / duration) * 16;
  let current = start;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', function() {
  // Route from hash on page load
  routeFromHash();

  // Scroll animations with IntersectionObserver
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards
  function observeElements() {
    document.querySelectorAll('.info-card, .rule-card, .pricing-card, .member-card').forEach(el => {
      if (el.style.opacity === '') {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
      }
    });
  }

  observeElements();

  // Re-observe after page changes
  const pageObserver = new MutationObserver(() => {
    observeElements();
  });

  pageObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
});

// Handle hash changes
window.addEventListener('hashchange', routeFromHash);

// ESC key closes modal
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.getElementById('memberModal').classList.remove('open');
    document.body.style.overflow = '';
  }
});

/* =============================================
   YOUTUBE IFRAME API CONTROLS
   ============================================= */
// Track play state per video
const ytPlaying = {};

function getYTFrame(id) {
  return document.getElementById(id);
}

function ytSendCmd(frameId, func, args) {
  const frame = getYTFrame(frameId);
  if (!frame) return;
  const msg = JSON.stringify({ event: 'command', func: func, args: args || [] });
  frame.contentWindow.postMessage(msg, '*');
}

function ytPlayPause(frameId) {
  const iconId = frameId.replace('ytVideo', 'ytPlayIcon');
  const icon = document.getElementById(iconId);
  if (ytPlaying[frameId]) {
    ytSendCmd(frameId, 'pauseVideo');
    ytPlaying[frameId] = false;
    if (icon) { icon.className = 'fas fa-play'; }
  } else {
    ytSendCmd(frameId, 'playVideo');
    ytPlaying[frameId] = true;
    if (icon) { icon.className = 'fas fa-pause'; }
  }
}

function ytMuteToggle(frameId, iconId) {
  const icon = document.getElementById(iconId);
  const slider = document.getElementById(frameId.replace('ytVideo', 'ytVol'));
  if (icon && icon.className.includes('mute')) {
    ytSendCmd(frameId, 'unMute');
    icon.className = 'fas fa-volume-up';
    if (slider) slider.value = 100;
  } else {
    ytSendCmd(frameId, 'mute');
    if (icon) icon.className = 'fas fa-volume-mute';
    if (slider) slider.value = 0;
  }
}

function ytSetVolume(frameId, val, iconId) {
  ytSendCmd(frameId, 'setVolume', [parseInt(val)]);
  const icon = document.getElementById(iconId);
  if (!icon) return;
  if (val == 0) icon.className = 'fas fa-volume-mute';
  else if (val < 50) icon.className = 'fas fa-volume-down';
  else icon.className = 'fas fa-volume-up';
}

function ytQuality(frameId, quality) {
  ytSendCmd(frameId, 'setPlaybackQuality', [quality]);
}

// Handle click outside mobile menu
document.addEventListener('click', function(e) {
  const mobileNav = document.getElementById('mobileNav');
  const hamburger = document.getElementById('hamburger');
  if (mobileNav && mobileNav.classList.contains('open')) {
    if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
      closeMobileMenu();
    }
  }
});
