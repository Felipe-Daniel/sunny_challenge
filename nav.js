
const nav_ul = document.querySelector('nav ul')
const burger = document.querySelector('.hamburger')
burger.addEventListener('click',()=>{
    nav_ul.classList.toggle('nav-show')
})