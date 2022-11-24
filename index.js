const buttonNavbar = document.querySelector('.fa-bars');

const navbarHide = () => {
   const NAVBAR = document.querySelector('nav');
   NAVBAR.classList.toggle('nav-toggle');

   const INNERGRID = document.querySelector('.inner-grid');
   INNERGRID.classList.toggle('inner-grid-toggle');
}

buttonNavbar.addEventListener('click', navbarHide);