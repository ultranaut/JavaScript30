const panels = document.querySelectorAll('.panels .panel');

function toggleOpen() {
  this.classList.toggle('open');
}
function toggleActive(e) {
  if (e.propertyName === 'flex-grow') {
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleActive);
})
