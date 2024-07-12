// Variables globales
const cardContainer = document.getElementById('card-container');
const shuffleButton = document.getElementById('shuffle-button');
const shuffleInPlaceButton = document.getElementById('shuffle-in-place-button');
let cardsData = []; // Guarda la posición original de las cartas
let movedCardsData = []; // Guarda la posición de las cartas movidas por el usuario

const cartaImagenes = {
    'Loco': '../img/tarot/reverso/00.png',
    'Mago': '../img/tarot/reverso/01.png',
    'Sacerdotisa': '../img/tarot/reverso/02.png',
    'Emperatriz': '../img/tarot/reverso/03.png',
    'Emperador': '../img/tarot/reverso/04.png',
    'Hierofante': '../img/tarot/reverso/05.png',
    'Enamorados': '../img/tarot/reverso/06.png',
    'Fuerza': '../img/tarot/reverso/11.png',
    'Justicia': '../img/tarot/reverso/08.png',
    'Ermitaño': '../img/tarot/reverso/09.png',
    'Rueda de la Fortuna': '../img/tarot/reverso/10.png',
    'Carro': '../img/tarot/reverso/07.png',
    'Colgado': '../img/tarot/reverso/12.png',
    'Muerte': '../img/tarot/reverso/13.png',
    'Templanza': '../img/tarot/reverso/14.png',
    'Diablo': '../img/tarot/reverso/15.png',
    'Torre': '../img/tarot/reverso/16.png',
    'Estrella': '../img/tarot/reverso/17.png',
    'Luna': '../img/tarot/reverso/18.png',
    'Sol': '../img/tarot/reverso/19.png',
    'Juicio Final': '../img/tarot/reverso/20.png',
    'Mundo': '../img/tarot/reverso/21.png',
};

// Crear el Mazo de Cartas
const tarotDeck = [
    'Loco' ,
    'Mago',
    'Sacerdotisa',
    'Emperatriz',
    'Emperador',
    'Hierofante',
    'Enamorados',
    'Fuerza',
    'Justicia',
    'Ermitaño',
    'Rueda de la Fortuna',
    'Carro',
    'Colgado',
    'Muerte',
    'Templanza',
    'Diablo',
    'Torre',
    'Estrella',
    'Luna',
    'Sol',
    'Juicio Final',
    'Mundo',
  
];
// Barajar las Cartas
function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}
// Función para crear y agregar una carta a un contenedor
const addCardToContainer = (container, cardName, index, totalCards) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.textContent = cardName;

    // Verificar si es la primera mitad del mazo para mostrar el lado celeste
    if (index < Math.ceil(totalCards / 2)) {
        // cardElement.style.backgroundColor = 'lightblue';
        cardElement.style.backgroundImage = `url('../img/fondo.png')`;
    } else {
        //cardElement.style.backgroundColor = 'lightblue';  Para la segunda mitad, mostrar el lado celeste
        cardElement.style.backgroundImage = `url('../img/fondo.png')`;

    }

    // Ajusta la posición horizontal y vertical de la carta en el abanico
    const angle = index * (Math.PI / (totalCards - 2)); // Calcula el ángulo entre las cartas
    // const radius = 100; // Radio del abanico
    const centerX = container.offsetWidth / 2; // Centro horizontal del contenedor
    const centerY = container.offsetHeight / 1.3; // Base vertical del contenedor
    const offsetY = 8; // Calcula el desplazamiento vertical
    const cardWidth = 100; // Ancho de la carta (ajusta según sea necesario)
    cardElement.style.left = `${centerX + (index - (totalCards - 1) / 2) * cardWidth}px`; // Establece la posición horizontal
    cardElement.style.top = `${(centerY - offsetY) / 1.5}px`; // Establece la posición vertical

    // Crear un cuadro de texto
    const textBox = document.createElement('input');
    textBox.setAttribute('type', 'text');
    textBox.setAttribute('placeholder', 'Escribe aquí');
    textBox.classList.add('card-text-box');

    // Agregar el cuadro de texto debajo de la carta
    cardElement.appendChild(textBox);

    container.appendChild(cardElement);

    cardsData.push({ card: cardElement, left: centerX + (index - (totalCards - 1) / 2) * cardWidth, top: centerY - offsetY });
};


// Mostrar las Cartas en un Abanico con dos filas
function displayCards(deck) {
    cardContainer.innerHTML = '';
    cardsData = [];
    movedCardsData = [];

    const halfDeckLength = Math.ceil(deck.length / 2); // Calcula la mitad de la longitud del mazo
    const firstRow = deck.slice(0, halfDeckLength); // Obtiene la primera mitad del mazo
    const secondRow = deck.slice(halfDeckLength); // Obtiene la segunda mitad del mazo

    // Agrega las cartas de la primera fila
    firstRow.forEach((card, index) => {
        addCardToContainer(cardContainer, card, index, halfDeckLength);
    });

    // Crea un nuevo contenedor para la segunda fila
    const secondRowContainer = document.createElement('div');
    secondRowContainer.classList.add('second-row-container');
    cardContainer.appendChild(secondRowContainer);

    // Agrega las cartas de la segunda fila
    secondRow.forEach((card, index) => {
        addCardToContainer(secondRowContainer, card, index, halfDeckLength);
    });
}
// Interacción con el Usuario
document.addEventListener('mousedown', (event) => {
 
    const clickedCard = event.target.closest('.card');
    if (clickedCard) {
        const maxZIndex = Math.max(...Array.from(cardContainer.children).map(card => parseFloat(card.style.zIndex) || 0));
        clickedCard.style.zIndex = maxZIndex + 1;

        const offsetX = event.clientX - clickedCard.offsetLeft;
        const offsetY = event.clientY - clickedCard.offsetTop;
        const moveCard = (event) => {
            const posX = event.clientX - offsetX;
            const posY = event.clientY - offsetY;
            clickedCard.style.left = `${posX}px`;
            clickedCard.style.top = `${posY}px`;
        };
        moveCard(event);
        document.addEventListener('mousemove', moveCard);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', moveCard);
        });

        // Si la carta no está en movedCardsData, la añadimos
        if (!movedCardsData.some(data => data.card === clickedCard)) {
            const data = cardsData.find(data => data.card === clickedCard);
            movedCardsData.push(data);
        }
    }
});
// Evento de doble clic para voltear las cartas
document.addEventListener('dblclick', (event) => {
    const clickedCard = event.target.closest('.card');
    if (clickedCard && !clickedCard.classList.contains('in-deck')) {
        // Alternar entre mostrar la imagen y mostrar el lado celeste
        if (clickedCard.style.backgroundImage === 'none' || clickedCard.style.backgroundImage === '') {
            // Si la imagen está oculta, mostrarla
            const cartaNombre = clickedCard.textContent.trim();
            const imagen = cartaImagenes[cartaNombre];
            if (imagen) {
                clickedCard.style.backgroundImage = `url('${imagen}')`;
            }
            clickedCard.style.backgroundColor = 'transparent';
        } else if (clickedCard.style.backgroundImage.includes('fondo.png')) {
            // Si la imagen de fondo está visible, mostrar la imagen de la carta
            const cartaNombre = clickedCard.textContent.trim();
            const imagen = cartaImagenes[cartaNombre];
            if (imagen) {
                clickedCard.style.backgroundImage = `url('${imagen}')`;
            }
            clickedCard.style.backgroundColor = 'transparent';
        } else {
            // Si la imagen de la carta está visible, ocultarla y mostrar la imagen de fondo
            clickedCard.style.backgroundImage = `url('../img/fondo.png')`;
        }
    }
});

// Event listener para el botón de revolver cartas
shuffleButton.addEventListener('click', () => {
    shuffle(tarotDeck);
    displayCards(tarotDeck);
});

// Variable para mantener el estado de las imágenes
let imagesVisible = true;

// Event listener para el botón de voltear cartas
const flipCardsButton = document.getElementById('flip-cards-button');
flipCardsButton.addEventListener('click', () => {
    // Iterar sobre cada carta en cardsData
    cardsData.forEach(data => {
        const card = data.card;
        // Verificar si la carta no está en movedCardsData
        if (!movedCardsData.some(movedData => movedData.card === card)) {
            if (imagesVisible) {
                // Ocultar la imagen de fondo de la carta
                card.style.backgroundImage = 'none';
                // Cambiar el color de fondo de la carta
                //card.style.backgroundColor = 'lightblue'; // Cambia este color por el que desees
                card.style.backgroundImage = `url('../img/fondo.png')`;
            } else {
                // Restaurar la imagen de fondo original de la carta
                const cartaNombre = card.textContent.trim();
                const imagen = cartaImagenes[cartaNombre];
                if (imagen) {
                    card.style.backgroundImage = `url('${imagen}')`;
                }
                // Restaurar el color de fondo a transparente
                card.style.backgroundColor = 'transparent';
            }
        }
    });
    // Cambiar el estado de las imágenes
    imagesVisible = !imagesVisible;
});
// Variables globales para mantener un registro de las cartas seleccionadas
let selectedCard = null;

// Event listener para seleccionar/deseleccionar cartas al hacer clic
document.addEventListener('click', (event) => {
    const clickedCard = event.target.closest('.card');
    if (clickedCard && !clickedCard.classList.contains('in-deck')) {
        // Si la carta ya está seleccionada, la deselecciona
        if (selectedCard === clickedCard) {
            clickedCard.classList.remove('selected');
            selectedCard = null;
        } else {
            // Si hay una carta seleccionada, la deselecciona
            if (selectedCard) {
                selectedCard.classList.remove('selected');
            }
            // Selecciona la nueva carta
            clickedCard.classList.add('selected');
            selectedCard = clickedCard;
        }
    }
});

// Event listener para el botón de agrandar cartas
const btnEnlarge = document.getElementById('btnEnlarge');
btnEnlarge.addEventListener('click', () => {
    // Aumenta el tamaño de la carta seleccionada
    if (selectedCard) {
        const factor = 1.2; // Puedes ajustar este valor según sea necesario
        const width = parseFloat(selectedCard.style.width || selectedCard.offsetWidth);
        const height = parseFloat(selectedCard.style.height || selectedCard.offsetHeight);
        selectedCard.style.width = `${width * factor}px`;
        selectedCard.style.height = `${height * factor}px`;
    }
});

// Event listener para el botón de achicar cartas
const btnShrink = document.getElementById('btnShrink');
btnShrink.addEventListener('click', () => {
    // Reduce el tamaño de la carta seleccionada
    if (selectedCard) {
        const factor = 1.2; // Puedes ajustar este valor según sea necesario
        const width = parseFloat(selectedCard.style.width || selectedCard.offsetWidth);
        const height = parseFloat(selectedCard.style.height || selectedCard.offsetHeight);
        selectedCard.style.width = `${width / factor}px`;
        selectedCard.style.height = `${height / factor}px`;
    }
});

// Event listener para el botón de rotar en el eje X en sentido horario
const btnRotateXClockwise = document.querySelector('.btnRotateXClockwise');
btnRotateXClockwise.addEventListener('click', () => {
    rotateSelectedCard('X', 'clockwise');
});

// Event listener para el botón de rotar en el eje X en sentido antihorario
const btnRotateXCounterClockwise = document.querySelector('.btnRotateXCounterClockwise');
btnRotateXCounterClockwise.addEventListener('click', () => {
    rotateSelectedCard('X', 'counterclockwise');
});

// Event listener para el botón de rotar en el eje Y en sentido horario
const btnRotateYClockwise = document.querySelector('.btnRotateYClockwise');
btnRotateYClockwise.addEventListener('click', () => {
    rotateSelectedCard('Y', 'clockwise');
});

// Event listener para el botón de rotar en el eje Y en sentido antihorario
const btnRotateYCounterClockwise = document.querySelector('.btnRotateYCounterClockwise');
btnRotateYCounterClockwise.addEventListener('click', () => {
    rotateSelectedCard('Y', 'counterclockwise');
});

// Event listener para el botón de rotar en el eje Z en sentido horario
const btnRotateZClockwise = document.querySelector('.btnRotateZClockwise');
btnRotateZClockwise.addEventListener('click', () => {
    rotateSelectedCard('Z', 'clockwise');
});

// Event listener para el botón de rotar en el eje Z en sentido antihorario
const btnRotateZCounterClockwise = document.querySelector('.btnRotateZCounterClockwise');
btnRotateZCounterClockwise.addEventListener('click', () => {
    rotateSelectedCard('Z', 'counterclockwise');
});

// Función para rotar la carta seleccionada en un eje específico en un sentido específico
function rotateSelectedCard(axis, direction) {
    if (selectedCard) {
        let rotation = parseInt(selectedCard.dataset[`rotation${axis}`]) || 0;
        if (direction === 'clockwise') {
            rotation += 10;
        } else if (direction === 'counterclockwise') {
            rotation -= 10;
        }
        selectedCard.dataset[`rotation${axis}`] = rotation;
        selectedCard.style.transform = `rotateX(${selectedCard.dataset.rotationX || 0}deg) rotateY(${selectedCard.dataset.rotationY || 0}deg) rotateZ(${selectedCard.dataset.rotationZ || 0}deg)`;
    }
}

// Barajar y Mostrar las Cartas al cargar la página
shuffle(tarotDeck);
displayCards(tarotDeck);
