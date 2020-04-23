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

    cardArray.sort(() => 0.5 - Math.random()) //Sortowanie tablicy, która zawiera obiekty 

    const grid = document.querySelector('.grid') //Wsadzenie tagu html do zmiennej
    const resultDisplay = document.querySelector('#result') //Wsadzenie tagu html z id do zmiennej
    var cardsChosen = [] //pusata tablca wyboru karty ze zmienna globalną
    var cardsChosenId = [] //pusata tablca wyboru karty ze zmienna globalną
    var cardsWon = [] //pusata tablca wyboru karty ze zmienna globalną



    function createBoard() { //funckja stworzenia tła do gry 
        for (let i = 0; i < cardArray.length; i++) { // pętla, która ma stworzyć tyle pól ile jest kart do gry tzn. 12
            var card = document.createElement('img'); //zmienna która ma tworzyć element image
            card.setAttribute('src', 'images/background.png') //ustawienie atrybutów src ze ścieżką do obrazka
            card.setAttribute('data-id', i) // ustawienie atrybutu 'data-id z wartością odpowaidającą w pentli, czyli max. 12 
            card.addEventListener('click', flipCard)
            grid.appendChild(card) // dodanie elementu zmiennej pod zmienną gridS

        }
    }

    //check for matches

    function checkForMatch() { //funckja sprawdzająca dopasowanie kart
        var cards = document.querySelectorAll('img') //zmienna globalana pobiedajaca wszystkie karty z klasą "images"
        const optionOneId = cardsChosenId[0] //zmiena posiadająca jako wartość jeden element z tablicy o indexie 0 
        const optionTwoId = cardsChosenId[1] //zmiena posiadająca jako wartość jeden element z tablicy o indexie 1 
        if (cardsChosen[0] === cardsChosen[1]) { //porównanie czy wartości z tablic się sobie równają, jeśli tak to, alert zawierający waidomość
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png') //nadanie zmiennej atrybutu src z wartościa obrazka
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            //nadanie zmiennej atrybutu src z wartościa obrazka
            cardsWon.push(cardsChosen) //dodanie do tablicy z wygranymi elementu 
        } else { //w przeciwnym wypadku jeśli wartość cardsChoosen i cardsChosen nie równają się to się ma stać to: 
            cards[optionOneId].setAttribute('src', 'images/background.png')
            cards[optionTwoId].setAttribute('src', 'images/background.png')
            alert('sorry, try again')
        }
        cardsChosen = [] //tablica zawierająca wynik porównania
        cardsChosenId = [] //tablica zawierająca id wyboru???
        resultDisplay.textContent = cardsWon.length //wynik do wyświetlenia odpowiadajacy długości tablicy z wygranymi. 
        if (cardsWon.length === cardArray.length / 2) { //porównanie, jeśli długość tablicy z wygranmi odpowiada długości tablicy z kartami podzielnej przez 2 to wygrywamy wszystko, co jest jasne po 12 kart, porównujemy po 2 to 12/2 = 6 
            resultDisplay.textContent = 'Congratulations!' //wyświetla wiadomość ze wygralismy

        }
    }

    //flip your card

    function flipCard() { //funkcja odwaracjąca karty 
        var cardId = this.getAttribute('data-id') // zmienna globalna dotycząca elementu (jakiego?)
        cardsChosen.push(cardArray[cardId].name) //zmieniamy wartość globalną poprzez dodanie do niej
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)

        }
    }

    createBoard();




})