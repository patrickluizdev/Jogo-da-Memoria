document.addEventListener('DOMContentLoaded', () => {
    //Opções de imagem
    const cardArray = [
      {
        name: 'brass',
        img: 'img/brass.png'
      },
      {
        name: 'brassv',
        img: 'img/brassv.png'
      },
      {
        name: 'pc',
        img: 'img/pc.jpg'
      },
      {
        name: 'garoto',
        img: 'img/garoto.png'
      },
      {
        name: 'girl',
        img: 'img/girl.png'
      },
      {
        name: 'flash',
        img: 'img/flash.png'
      },
      {
        name: 'brass',
        img: 'img/brass.png'
      },
      {
        name: 'brassv',
        img: 'img/brassv.png'
      },
      {
        name: 'pc',
        img: 'img/pc.jpg'
      },
      {
        name: 'garoto',
        img: 'img/garoto.png'
      },
      {
        name: 'girl',
        img: 'img/girl.png'
      },
      {
        name: 'flash',
        img: 'img/flash.png'
      }
    ]
    // embaralhar
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //criando campo
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/charada.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //conferindo cartas
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'img/charada.png')
        cards[optionTwoId].setAttribute('src', 'img/charada.png')
        alert('Tente novamente')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Excelente')
        cards[optionOneId].setAttribute('src', 'img/branco.png')
        cards[optionTwoId].setAttribute('src', 'img/branco.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'img/charada.png')
        cards[optionTwoId].setAttribute('src', 'img/charada.png')
        alert('Tente novamente')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Parabéns!'
      }
    }
  
    //revelar carta
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 10)
      }
    }
  
    createBoard()
  })
  