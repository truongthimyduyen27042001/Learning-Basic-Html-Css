let size = document.getElementById('size')
const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const color = document.getElementById('color')
const canvas = document.getElementById('canvas')
const close = document.getElementById('close')
const ctx = canvas.getContext('2d')

let x
let y

ctx.fillStyle = 'green'
ctx.fillRect(10, 10, 5, Math.PI * 2)
let isPressed = false

canvas.addEventListener('mousedown', e => {
  isPressed = true

  x = e.offsetX
  y = e.offsetY
})
document.addEventListener('mouseup', (e) => {
  isPressed = false

  x = undefined
  y = undefined
})
canvas.addEventListener('mousemove', e => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x,y,x2,y2)

    x = x2
    y = y2
  }
})

function drawCircle (x, y) {
  ctx.beginPath()
  ctx.arc(x, y, parseInt(size.innerText), 0, Math.PI * 2)
  ctx.fillStyle = 'green'
  ctx.fill()
}

function drawLine (x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = 'green'
  ctx.lineWidth = size.innerText*2
  ctx.stroke()
}
decrease.addEventListener('click', function () {
  var numSize = parseInt(size.innerText)
  if (numSize > 5) {
    numSize -= 5
  } else {
    numSize = 5
  }
  size.innerText = numSize
})

increase.addEventListener('click', function () {
  var numSize = parseInt(size.innerText)
  if (numSize < 50) {
    numSize += 5
  } else {
    numSize = 50
  }
  size.innerText = numSize
})

// close all draw in canvas

close.addEventListener('click', () => {
  var context = canvas.getContext('2d')
  context.clearRect(0, 0, canvas.width, canvas.height); //clear html5 canvas
})