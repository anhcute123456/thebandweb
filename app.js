const buyBtns = document.querySelectorAll('.js-buy-ticket')

buyBtns.forEach((el, index) => {
    el.addEventListener('click', () => {
        document.querySelector('#buy-ticket-modal').classList.add('open');
    })
})
document.querySelector('.modal-close').addEventListener('click', () => {
    document.querySelector('#buy-ticket-modal').classList.remove('open');;
})