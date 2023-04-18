const btnPopup = document.querySelector('.btn-login');
const wrapper = document.querySelector('.wrapper')
const closelogin = document.querySelector('.icon-close')

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active');
});

closelogin.addEventListener('click', () => {
    wrapper.classList.remove('active')
})



