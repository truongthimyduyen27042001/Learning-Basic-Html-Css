let dataGlasses = [
  {
    id: 'G1',
    src: './images/g1.jpg',
    virtualImg: './images/v1.png',
    brand: 'Armani Exchange',
    name: 'Bamboo wood',
    color: 'Brown',
    price: 150,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? '
  },
  {
    id: 'G2',
    src: './images/g2.jpg',
    virtualImg: './images/v2.png',
    brand: 'Arnette',
    name: 'American flag',
    color: 'American flag',
    price: 150,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.'
  },
  {
    id: 'G3',
    src: './images/g3.jpg',
    virtualImg: './images/v3.png',
    brand: 'Burberry',
    name: 'Belt of Hippolyte',
    color: 'Blue',
    price: 100,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    id: 'G4',
    src: './images/g4.jpg',
    virtualImg: './images/v4.png',
    brand: 'Coarch',
    name: 'Cretan Bull',
    color: 'Red',
    price: 100,
    description: 'In assumenda earum eaque doloremque, tempore distinctio.'
  },
  {
    id: 'G5',
    src: './images/g5.jpg',
    virtualImg: './images/v5.png',
    brand: 'D&G',
    name: 'JOYRIDE',
    color: 'Gold',
    price: 180,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?'
  },
  {
    id: 'G6',
    src: './images/g6.jpg',
    virtualImg: './images/v6.png',
    brand: 'Polo',
    name: 'NATTY ICE',
    color: 'Blue, White',
    price: 120,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    id: 'G7',
    src: './images/g7.jpg',
    virtualImg: './images/v7.png',
    brand: 'Ralph',
    name: 'TORTOISE',
    color: 'Black, Yellow',
    price: 120,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.'
  },
  {
    id: 'G8',
    src: './images/g8.jpg',
    virtualImg: './images/v8.png',
    brand: 'Polo',
    name: 'NATTY ICE',
    color: 'Red, Black',
    price: 120,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.'
  },
  {
    id: 'G9',
    src: './images/g9.jpg',
    virtualImg: './images/v9.png',
    brand: 'Coarch',
    name: 'MIDNIGHT VIXEN REMIX',
    color: 'Blue, Black',
    price: 120,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.'
  }
]

const glasses = document.getElementById('glasses')
let name = document.querySelector('.name')
let price = document.querySelector('.price')
let detail = document.querySelector('.detail')
let glassTry = document.querySelector('.try-glass')
console.log('@@@@')
dataGlasses.forEach(glass => {
  var DOM_img = document.createElement('img')
  DOM_img.src = glass.virtualImg
  DOM_img.classList.add('item-glass')
  DOM_img.addEventListener('click', function() {
     const currentGlass = glass
    name.innerText = glass.name
    price.innerText = '$' + glass.price
    detail.innerText = glass.description
    glassTry.src = glass.virtualImg
  })
  glasses.appendChild(DOM_img)
})

document.querySelector('.before').addEventListener('click', function() {
  glassTry.style = "display: none"
})
document.querySelector('.after').addEventListener('click', function() {
  glassTry.style = "display: block"
})