document.addEventListener('DOMContentLoaded', function() {
  const galleries = document.querySelectorAll('.gallery');

  galleries.forEach(gallery => {
    const track = gallery.querySelector('.gallery-track');
    if (!track) return;

    // duplicate items for seamless looping
    track.innerHTML = track.innerHTML + track.innerHTML;

    // pause animation while hovered
    gallery.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });
    gallery.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealItems.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }
});

