let burgerButton = document.querySelector('#burger-button')

const toogleMenu = () => {
  let menu = document.querySelector('#menu')
  let close = document.querySelector('#menu-icon-close')
  let burger = document.querySelector('#menu-icon-burger')
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden')
    burger.classList.add('hidden')
    close.classList.remove('hidden')
  } else {
    menu.classList.add('hidden')
    burger.classList.remove('hidden')
    close.classList.add('hidden')
  }
}
burgerButton.addEventListener('click', toogleMenu)
