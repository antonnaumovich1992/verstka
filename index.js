const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbarButtons = document.getElementsByClassName('navbar-buttons')[0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    navbarButtons.classList.toggle('active')
});