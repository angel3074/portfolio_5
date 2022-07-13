const btn = document.querySelector('#burger_button');
const show = document.querySelector('#menu')

btn.addEventListener('click', () => {
 console.log(show.classList.toggle('show_menu')); 
})