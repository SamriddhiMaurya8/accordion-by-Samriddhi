const accordion = document.getElementsByClassName('accordion__container');

// for (i=0; i<accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active')
//   })
// }





// const accordions = document.querySelectorAll('.accordion__container');

// accordions.forEach((accordion) => {
//   accordion.addEventListener('click', function () {
//     accordions.forEach(acc => acc.classList.remove('active'));
    
//     document.querySelectorAll('.box').forEach(box => box.classList.remove('show'));

//     this.classList.add('active');
//     this.nextElementSibling.classList.add('show');
//   });
// });



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








