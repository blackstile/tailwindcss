let darkModekButton = document.querySelector('#dark-mode')
let html = document.querySelector('html')

darkModekButton.addEventListener('change', function (e) {
  console.log('this.value', this.value)
  console.log(e.target.checked)
  if (e.target.checked) {
    console.log('dark')
    html.classList.add('dark')
  } else {
    console.log('light')
    html.classList.remove('dark')
  }
})
