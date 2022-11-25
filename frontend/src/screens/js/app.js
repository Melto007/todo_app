const sideBar = document.querySelector('.sideBar')
const menuBar = document.querySelector('.menuBar')

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('active')
})