const btn = document.querySelector('#burger_button');
const show = document.querySelector('#menu')

btn.addEventListener('click', () => {
 console.log(show.classList.toggle('show_menu')); 
})

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


// const ovejas = [
//   { name: 'Noa', color: 'azul' },
//   { name: 'Euge', color: 'rojo' },
//   { name: 'Navidad', color: 'rojo' },
//   { name: 'Ki Na Ma', color: 'rojo'},
//   { name: 'AAAAAaaaaa', color: 'rojo' },
//   { name: 'Nnnnnnnn', color: 'rojo'}
// ]

// function count (myshit){
//   let mapping = myshit.map((task) => task.name);
//   return mapping;
// }

 
// console.log(count(ovejas));

