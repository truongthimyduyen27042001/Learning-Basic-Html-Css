const faqToggles = document.querySelectorAll('.faq-toggle')

console.log(faqToggles)

faqToggles.forEach((faq) => {
  faq.addEventListener('click', function () {
    console.log(faq.parentNode.parentNode.classList.toggle('active'))
  })
})
