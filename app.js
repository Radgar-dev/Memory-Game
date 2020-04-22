document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [{
            name: 'naruto3',
            img: 'images/3.png'
        },
        {
            name: 'naruto3',
            img: 'images/3.png'
        },
        {
            name: 'naruto4',
            img: 'images/4.jpg'
        },
        {
            name: 'naruto4',
            img: 'images/4.jpg'
        },
        {
            name: 'naruto5',
            img: 'images/5.png'
        },
        {
            name: 'naruto5',
            img: 'images/5.png'
        },
        {
            name: 'naruto6',
            img: 'images/6.png'
        },
        {
            name: 'naruto6',
            img: 'images/6.png'
        },
        {
            name: 'naruto7',
            img: 'images/7.png'
        },
        {
            name: 'naruto7',
            img: 'images/7.png'
        },
        {
            name: 'naruto8',
            img: 'images/8.png'
        },
        {
            name: 'naruto8',
            img: 'images/8.png'
        },

    ]
    const grid = document.querySelector('.grid')
    var cardsChosen = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/background.png')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipcard)
            grid.appendChild(card)

        }
    }

    //check for matches

    //flip your card

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push
    }

    createBoard();






















})