const buttonOpen = document.querySelector('.icon-open')
const buttonClose = document.querySelector('.back')
const navigation = document.querySelector('.navigation')

if(buttonOpen) {
    buttonOpen.addEventListener('click', () => {
        navigation.classList.add('show');
    })
}

if(buttonClose) {
    buttonClose.addEventListener('click', () => {
        navigation.classList.remove('show');
    })
}