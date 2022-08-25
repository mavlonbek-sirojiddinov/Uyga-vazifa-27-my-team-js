var bodyElementi = document.querySelector("body");
var checkbox = document.querySelector('.checkbox');
var ballcircle = document.querySelector('.ball')
var bollcircle = document.querySelector('.ball')

checkbox.addEventListener("click", function(){
    bodyElementi.classList.toggle('dark');
});

checkbox.addEventListener("click", function(){
  ballcircle.classList.toggle('yel');
});

checkbox.addEventListener("click", function(){
  bollcircle.classList.toggle('nel');
});



var fristname = prompt("Ismingizni kiriting").toLocaleLowerCase().trim();
var surname = prompt("Familiyangizni kiriting").toLocaleLowerCase().trim();
var age = prompt("Yoshingizni kiriting").trim();

alert(`Sizning ismingiz ${fristname}, Familiyangiz ${surname}, Yoshingiz ${age}da`);

console.log(`Ismingiz: ${fristname};`);
console.log(`Familiyangiz: ${surname};`);
console.log(`Yoshingiz: ${age}da;`); 