const card = document.querySelector('.card-container');
const button = document.getElementById("toggle");
card.addEventListener("click", function(){
 card.classList.toggle("flipped");
 console.log('click')
});
button.addEventListener("click", function(){
 document.body.classList.toggle("theme-monster");
  document.body.classList.toggle("theme-dark");
  console.log('click')
});