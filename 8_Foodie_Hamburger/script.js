const addNavLinkIcon = document.querySelector('.add-nav-link-icon')
const navContainer = document.querySelector('.nav-container');
const removeNavLinkIcon = document.querySelector('.remove-nav-link-icon');
const navLinkContainer = document.querySelector('.nav-link-container')

addNavLinkIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    navContainer.classList.add('open-menu');
})

removeNavLinkIcon.addEventListener('click', () => {
    navContainer.classList.remove('open-menu');
});

navLinkContainer.addEventListener('click', (e) => {
    e.stopPropagation()
})

window.addEventListener('click', (e) => {
    navContainer.classList.remove('open-menu');
})

