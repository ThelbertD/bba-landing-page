// Subtle pointer-based glow tracking on each choice card.
// Pure progressive enhancement — page works fully without this.

const cards = document.querySelectorAll('.choice-card');

cards.forEach(card => {
  const glow = card.querySelector('.card-glow');
  if (!glow) return;

  card.addEventListener('pointermove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.transform = `translate(${x - 160}px, ${y - 160}px) scale(1)`;
  });

  card.addEventListener('pointerleave', () => {
    glow.style.transform = '';
  });
});

// Prevent placeholder anchor jumps until real URLs are wired in.
document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener('click', (e) => e.preventDefault());
});
