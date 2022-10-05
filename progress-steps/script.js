const progress = document.getElementById('progress-line')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', function () {
  currentActive++
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  update()
})

prev.addEventListener('click', function () {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }
  update()
})

function update () {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    }else {
      circle.classList.remove('active')
    }
  })

  if (currentActive > 0) {
    progress.style.width = (currentActive - 1) * 33.33 + '%'
  }
  if (currentActive === 1) {
    prev.style.background = 'var(--line-border-empty)'
  }else {
    prev.style.background = 'var(--line-border-fill)'
  }
  if (currentActive === circles.length) {
    next.style.background = 'var(--line-border-empty)'
  }else {
    next.style.background = 'var(--line-border-fill)'
  }
}

update()
