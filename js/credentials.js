/**
 * Credentials — Certificate lightbox with zoom support
 * Uses native <dialog> for accessibility. Zero dependencies.
 */

export function initCredentials() {
  const dialog = document.getElementById('cert-lightbox');
  if (!dialog) return;

  const img = dialog.querySelector('.cert-lightbox__img');
  const closeBtn = dialog.querySelector('.cert-lightbox__close');
  const imgContainer = dialog.querySelector('.cert-lightbox__img-container');

  // Track zoom state
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let lastTouchDist = 0;

  function resetTransform() {
    scale = 1;
    translateX = 0;
    translateY = 0;
    img.style.transform = '';
    img.style.cursor = 'zoom-in';
  }

  function applyTransform() {
    img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    img.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  }

  // Open lightbox
  function openLightbox(src, alt) {
    img.src = src;
    img.alt = alt;
    resetTransform();
    dialog.showModal();
    closeBtn.focus();
    document.body.style.overflow = 'hidden';
  }

  // Close lightbox
  function closeLightbox() {
    dialog.close();
    img.src = '';
    document.body.style.overflow = '';
  }

  // Attach open handlers to all "View Certificate" buttons
  document.querySelectorAll('[data-cert-src]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const src = btn.getAttribute('data-cert-src');
      const alt = btn.getAttribute('data-cert-alt') || 'Certificate';
      openLightbox(src, alt);
    });
  });

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  // Close on backdrop click (outside the image container)
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog || e.target.classList.contains('cert-lightbox__inner')) {
      closeLightbox();
    }
  });

  // Close on Escape (native dialog behavior, but ensure cleanup)
  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
  });

  // Double-click/tap to toggle zoom
  img.addEventListener('dblclick', (e) => {
    e.preventDefault();
    if (scale > 1) {
      resetTransform();
    } else {
      scale = 2.5;
      // Zoom toward click point
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      translateX = -x * 0.6;
      translateY = -y * 0.6;
      applyTransform();
    }
  });

  // Mouse wheel zoom
  imgContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.25 : 0.25;
    scale = Math.min(Math.max(1, scale + delta), 5);
    if (scale <= 1) {
      resetTransform();
    } else {
      applyTransform();
    }
  }, { passive: false });

  // Mouse drag for panning when zoomed
  img.addEventListener('mousedown', (e) => {
    if (scale <= 1) return;
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    img.style.cursor = 'grabbing';
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    applyTransform();
    img.style.cursor = 'grabbing';
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      img.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
    }
  });

  // Touch: pinch to zoom + pan
  imgContainer.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      lastTouchDist = getTouchDist(e.touches);
    } else if (e.touches.length === 1 && scale > 1) {
      isDragging = true;
      startX = e.touches[0].clientX - translateX;
      startY = e.touches[0].clientY - translateY;
    }
  }, { passive: false });

  imgContainer.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dist = getTouchDist(e.touches);
      const delta = (dist - lastTouchDist) * 0.01;
      scale = Math.min(Math.max(1, scale + delta), 5);
      lastTouchDist = dist;
      if (scale <= 1) {
        resetTransform();
      } else {
        applyTransform();
      }
    } else if (e.touches.length === 1 && isDragging && scale > 1) {
      e.preventDefault();
      translateX = e.touches[0].clientX - startX;
      translateY = e.touches[0].clientY - startY;
      applyTransform();
    }
  }, { passive: false });

  imgContainer.addEventListener('touchend', () => {
    isDragging = false;
    lastTouchDist = 0;
  });

  function getTouchDist(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
