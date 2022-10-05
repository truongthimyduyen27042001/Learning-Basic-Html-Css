const btn = document.getElementById('btn-change')
const content = document.getElementById('joke')
btn.addEventListener('click', generateJoke)



async function generateJoke() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
  
    const res = await fetch('https://icanhazdadjoke.com', config)
  
    const data = await res.json()
    content.innerText = data.joke
  }

  generateJoke()