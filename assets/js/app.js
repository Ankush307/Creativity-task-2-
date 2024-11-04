const abouts = document.querySelectorAll('.about-card');
let current = 0;

function showAbout(index) {
  abouts.forEach((about, i) => {
    about.classList.toggle('block', i === index);
    about.classList.toggle('hidden', i !== index);
  });
}

function showNext() {
  current = (current + 1) % abouts.length;
  showAbout(current);
}

function showPrevious() {
  current = (current - 1 + abouts.length) % abouts.length;
  showAbout(current);
}
showAbout(current);