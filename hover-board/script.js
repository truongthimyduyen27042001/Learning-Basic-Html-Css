const squares = document.querySelectorAll('.square')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']


const months = ["January", "February", "March", "April", "May", "June", "July"];

squares.forEach((square) => {
    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))
})

function setColor(element) {
    const color = colors[Math.floor(Math.random() * colors.length)]
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}