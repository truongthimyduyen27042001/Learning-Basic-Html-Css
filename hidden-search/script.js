const searchs = document.querySelectorAll('.search')
const btnSearch = document.getElementById('btn-search')

btnSearch.addEventListener('click', function () {
  searchs[0].classList.toggle('active')
})
