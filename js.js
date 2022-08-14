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
