const accordions = document.querySelectorAll('.accordion__container');

function handleClick() {

  const isActive = this.classList.contains('active');

 
  accordions.forEach(acc => acc.classList.remove('active'));
  document.querySelectorAll('.box').forEach(box => box.classList.remove('show'));

  if (!isActive) {
    this.classList.add('active');

    this.nextElementSibling.classList.add('show');
  }
}
  accordions.forEach(accordion => {
  accordion.addEventListener('click', handleClick);
});








