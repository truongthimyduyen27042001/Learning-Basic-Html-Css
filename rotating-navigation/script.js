const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelectorAll('.container')

open.addEventListener('click', function () {
  container[0].classList.toggle('show-nav')
})

close.addEventListener('click', function () {
container[0].classList.toggle('show-nav')

  })