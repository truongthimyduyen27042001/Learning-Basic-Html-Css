const container = document.querySelector('.container')
console.log('@@@')
var oldX = 0
var oldY = 0
var xDirection = ''
var yDirection = ''
console.log(container.offsetWidth)
container.addEventListener('mousemove', function (e) {
  if (e.pageX < (container.offsetWidth / 2)) {
    container.classList.remove('hover-right')
    container.classList.add('hover-left')
  }else {
    container.classList.add('hover-right')
    container.classList.remove('hover-left')
  }
})
