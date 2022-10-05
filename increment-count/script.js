const numbers = document.querySelectorAll('.number')

numbers.forEach((number) => {
    number.innerText = '0'
    const updateCounter = () => {
        const target = +number.getAttribute('data-target')
        const c = +number.innerText
        const increate = target/200 
        if (c<target) {
            number.innerText = `${c+increate}`
            setTimeout(updateCounter,2)
        }
        else {
            number.innerText = target
        }
    }
    updateCounter()
})

