const btn = document.querySelector('.btn-toggle')

btn.addEventListener('click', function() {
    btn.parentNode.classList.toggle('active')
})