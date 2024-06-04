// Variables globales Se definen las variables globales para acceder a los elementos HTML relevantes y para almacenar datos sobre las cartas.
const cardContainer = document.getElementById('card-container'); // Contenedor de las cartas
const shuffleButton = document.getElementById('shuffle-button'); // Botón para barajar el mazo
const shuffleInPlaceButton = document.getElementById('shuffle-in-place-button'); // Botón para barajar las cartas en su lugar
let cardsData = []; // Guarda la posición original de las cartas
let movedCardsData = []; // Guarda la posición de las cartas movidas por el usuario
const cartaImagenes = {
   // Objeto que mapea el nombre de las cartas a las rutas de las imágenes asociadas Se define un 
//    objeto cartaImagenes para mapear el nombre de las cartas a las rutas de las imágenes asociadas. 
//    Las imágenes parecen estar relacionadas con el reverso de las cartas del tarot.
        // Arcanos Mayores:
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
    
        // Arcanos Menores:
        // Bastos:
        'As de Bastos': '../img/tarot/reverso/22.png',
        'Dos de Bastos': '../img/tarot/reverso/23.png',
        'Tres de Bastos': '../img/tarot/reverso/24.png',
        'Cuatro de Bastos': '../img/tarot/reverso/25.png',
        'Cinco de Bastos': '../img/tarot/reverso/26.png',
        'Seis de Bastos': '../img/tarot/reverso/27.png',
        'Siete de Bastos': '../img/tarot/reverso/28.png',
        'Ocho de Bastos': '../img/tarot/reverso/29.png',
        'Nueve de Bastos': '../img/tarot/reverso/30.png',
        'Diez de Bastos': '../img/tarot/reverso/31.png',
        'Sota de Bastos': '../img/tarot/reverso/32.png',
        'Caballero de Bastos': '../img/tarot/reverso/33.png',
        'Reina de Bastos': '../img/tarot/reverso/34.png',
        'Rey de Bastos': '../img/tarot/reverso/35.png',
        // Copas:
        'As de Copas': '../img/tarot/reverso/36.png',
        'Dos de Copas': '../img/tarot/reverso/37.png',
        'Tres de Copas': '../img/tarot/reverso/38.png',
        'Cuatro de Copas': '../img/tarot/reverso/39.png',
        'Cinco de Copas': '../img/tarot/reverso/40.png',
        'Seis de Copas': '../img/tarot/reverso/41.png',
        'Siete de Copas': '../img/tarot/reverso/42.png',
        'Ocho de Copas': '../img/tarot/reverso/43.png',
        'Nueve de Copas': '../img/tarot/reverso/44.png',
        'Diez de Copas': '../img/tarot/reverso/45.png',
        'Sota de Copas': '../img/tarot/reverso/46.png',
        'Caballero de Copas': '../img/tarot/reverso/47.png',
        'Reina de Copas': '../img/tarot/reverso/48.png',
        'Rey de Copas': '../img/tarot/reverso/49.png',
        // Espadas:
        'As de Espadas': '../img/tarot/reverso/50.png',
        'Dos de Espadas': '../img/tarot/reverso/51.png',
        'Tres de Espadas': '../img/tarot/reverso/52.png',
        'Cuatro de Espadas': '../img/tarot/reverso/53.png',
        'Cinco de Espadas': '../img/tarot/reverso/54.png',
        'Seis de Espadas': '../img/tarot/reverso/55.png',
        'Siete de Espadas': '../img/tarot/reverso/56.png',
        'Ocho de Espadas': '../img/tarot/reverso/57.png',
        'Nueve de Espadas': '../img/tarot/reverso/58.png',
        'Diez de Espadas': '../img/tarot/reverso/59.png',
        'Sota de Espadas': '../img/tarot/reverso/60.png',
        'Caballero de Espadas': '../img/tarot/reverso/61.png',
        'Reina de Espadas': '../img/tarot/reverso/62.png',
        'Rey de Espadas': '../img/tarot/reverso/63.png',
        // Pentáculos:
        'As de Pentáculos': '../img/tarot/reverso/64.png',
        'Dos de Pentáculos': '../img/tarot/reverso/65.png',
        'Tres de Pentáculos': '../img/tarot/reverso/66.png',
        'Cuatro de Pentáculos': '../img/tarot/reverso/67.png',
        'Cinco de Pentáculos': '../img/tarot/reverso/68.png',
        'Seis de Pentáculos': '../img/tarot/reverso/69.png',
        'Siete de Pentáculos': '../img/tarot/reverso/70.png',
        'Ocho de Pentáculos': '../img/tarot/reverso/71.png',
        'Nueve de Pentáculos': '../img/tarot/reverso/72.png',
        'Diez de Pentáculos': '../img/tarot/reverso/73.png',
        'Sota de Pentáculos': '../img/tarot/reverso/74.png',
        'Caballero de Pentáculos': '../img/tarot/reverso/75.png',
        'Reina de Pentáculos': '../img/tarot/reverso/76.png',
        'Rey de Pentáculos': '../img/tarot/reverso/77.png',


        'Loco-bruja': '../img/tarot/bruja/00.png',
        'Mago-bruja': '../img/tarot/bruja/01.png',
        'Sacerdotisa-bruja': '../img/tarot/bruja/02.png',
        'Emperatriz-bruja': '../img/tarot/bruja/03.png',
        'Emperador-bruja': '../img/tarot/bruja/04.png',
        'Hierofante-bruja': '../img/tarot/bruja/05.png',
        'Enamorados-bruja': '../img/tarot/bruja/06.png',
        'Fuerza-bruja': '../img/tarot/bruja/11.png',
        'Justicia-bruja': '../img/tarot/bruja/08.png',
        'Ermitaño-bruja': '../img/tarot/bruja/09.png',
        'Rueda de la Fortuna-bruja': '../img/tarot/bruja/10.png',
        'Carro-bruja': '../img/tarot/bruja/07.png',
        'Colgado-bruja': '../img/tarot/bruja/12.png',
        'Muerte-bruja': '../img/tarot/bruja/13.png',
        'Templanza-bruja': '../img/tarot/bruja/14.png',
        'Diablo-bruja': '../img/tarot/bruja/15.png',
        'Torre-bruja': '../img/tarot/bruja/16.png',
        'Estrella-bruja': '../img/tarot/bruja/17.png',
        'Luna-bruja': '../img/tarot/bruja/18.png',
        'Sol-bruja': '../img/tarot/bruja/19.png',
        'Juicio Final-bruja': '../img/tarot/bruja/20.png',
        'Mundo-bruja': '../img/tarot/bruja/21.png',
        'As de Bastos-bruja': '../img/tarot/bruja/22.png',
        'Dos de Bastos-bruja': '../img/tarot/bruja/23.png',
        'Tres de Bastos-bruja': '../img/tarot/bruja/24.png',
        'Cuatro de Bastos-bruja': '../img/tarot/bruja/25.png',
        'Cinco de Bastos-bruja': '../img/tarot/bruja/26.png',
        'Seis de Bastos-bruja': '../img/tarot/bruja/27.png',
        'Siete de Bastos-bruja': '../img/tarot/bruja/28.png',
        'Ocho de Bastos-bruja': '../img/tarot/bruja/29.png',
        'Nueve de Bastos-bruja': '../img/tarot/bruja/30.png',
        'Diez de Bastos-bruja': '../img/tarot/bruja/31.png',
        'Sota de Bastos-bruja': '../img/tarot/bruja/32.png',
        'Caballero de Bastos-bruja': '../img/tarot/bruja/33.png',
        'Reina de Bastos-bruja': '../img/tarot/bruja/34.png',
        'Rey de Bastos-bruja': '../img/tarot/bruja/35.png',
        'As de Copas-bruja': '../img/tarot/bruja/36.png',
        'Dos de Copas-bruja': '../img/tarot/bruja/37.png',
        'Tres de Copas-bruja': '../img/tarot/bruja/38.png',
        'Cuatro de Copas-bruja': '../img/tarot/bruja/39.png',
        'Cinco de Copas-bruja': '../img/tarot/bruja/40.png',
        'Seis de Copas-bruja': '../img/tarot/bruja/41.png',
        'Siete de Copas-bruja': '../img/tarot/bruja/42.png',
        'Ocho de Copas-bruja': '../img/tarot/bruja/43.png',
        'Nueve de Copas-bruja': '../img/tarot/bruja/44.png',
        'Diez de Copas-bruja': '../img/tarot/bruja/45.png',
        'Sota de Copas-bruja': '../img/tarot/bruja/46.png',
        'Caballero de Copas-bruja': '../img/tarot/bruja/47.png',
        'Reina de Copas-bruja': '../img/tarot/bruja/48.png',
        'Rey de Copas-bruja': '../img/tarot/bruja/49.png',
        'As de Espadas-bruja': '../img/tarot/bruja/50.png',
        'Dos de Espadas-bruja': '../img/tarot/bruja/51.png',
        'Tres de Espadas-bruja': '../img/tarot/bruja/52.png',
        'Cuatro de Espadas-bruja': '../img/tarot/bruja/53.png',
        'Cinco de Espadas-bruja': '../img/tarot/bruja/54.png',
        'Seis de Espadas-bruja': '../img/tarot/bruja/55.png',
        'Siete de Espadas-bruja': '../img/tarot/bruja/56.png',
        'Ocho de Espadas-bruja': '../img/tarot/bruja/57.png',
        'Nueve de Espadas-bruja': '../img/tarot/bruja/58.png',
        'Diez de Espadas-bruja': '../img/tarot/bruja/59.png',
        'Sota de Espadas-bruja': '../img/tarot/bruja/60.png',
        'Caballero de Espadas-bruja': '../img/tarot/bruja/61.png',
        'Reina de Espadas-bruja': '../img/tarot/bruja/62.png',
        'Rey de Espadas-bruja': '../img/tarot/bruja/63.png',
        'As de Pentáculos-bruja': '../img/tarot/bruja/64.png',
        'Dos de Pentáculos-bruja': '../img/tarot/bruja/65.png',
        'Tres de Pentáculos-bruja': '../img/tarot/bruja/66.png',
        'Cuatro de Pentáculos-bruja': '../img/tarot/bruja/67.png',
        'Cinco de Pentáculos-bruja': '../img/tarot/bruja/68.png',
        'Seis de Pentáculos-bruja': '../img/tarot/bruja/69.png',
        'Siete de Pentáculos-bruja': '../img/tarot/bruja/70.png',
        'Ocho de Pentáculos-bruja': '../img/tarot/bruja/71.png',
        'Nueve de Pentáculos-bruja': '../img/tarot/bruja/72.png',
        'Diez de Pentáculos-bruja': '../img/tarot/bruja/73.png',
        'Sota de Pentáculos-bruja': '../img/tarot/bruja/74.png',
        'Caballero de Pentáculos-bruja': '../img/tarot/bruja/75.png',
        'Reina de Pentáculos-bruja': '../img/tarot/bruja/76.png',
        'Rey de Pentáculos-bruja': '../img/tarot/bruja/77.png'
};

// Crear el Mazo de Cartas
let tarotDeck = [ 
    // Arcanos Mayores:
    'Loco',
    'Mago',
    'Sacerdotisa',
    'Emperatriz',
    'Emperador',
    'Hierofante',
    'Enamorados',
    'Carro',
    'Justicia',
    'Ermitaño',
    'Rueda de la Fortuna',
    'Fuerza',
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
 
    // Arcanos Menores:
    // Copas:
    'As de Copas',
    'Dos de Copas',
    'Tres de Copas',
    'Cuatro de Copas',
    'Cinco de Copas',
    'Seis de Copas',
    'Siete de Copas',
    'Ocho de Copas',
    'Nueve de Copas',
    'Diez de Copas',
    'Sota de Copas',
    'Caballero de Copas',
    'Reina de Copas',
    'Rey de Copas',
 
    // Bastos:
    'As de Bastos',
    'Dos de Bastos', 'Tres de Bastos',
    'Cuatro de Bastos',
    'Cinco de Bastos',
    'Seis de Bastos',
    'Siete de Bastos',
    'Ocho de Bastos',
    'Nueve de Bastos',
    'Diez de Bastos',
    'Sota de Bastos',
    'Caballero de Bastos',
    'Reina de Bastos',
    'Rey de Bastos',
 
    // Espadas:
    'As de Espadas',
    'Dos de Espadas',
    'Tres de Espadas',
    'Cuatro de Espadas',
    'Cinco de Espadas',
    'Seis de Espadas',
    'Siete de Espadas',
    'Ocho de Espadas',
    'Nueve de Espadas',
    'Diez de Espadas',
    'Sota de Espadas',
    'Caballero de Espadas',
    'Reina de Espadas',
    'Rey de Espadas',
 
    // Pentáculos:
    'As de Pentáculos',
    'Dos de Pentáculos',
    'Tres de Pentáculos',
    'Cuatro de Pentáculos',
    'Cinco de Pentáculos',
    'Seis de Pentáculos',
    'Siete de Pentáculos',
    'Ocho de Pentáculos',
    'Nueve de Pentáculos',
    'Diez de Pentáculos',
    'Sota de Pentáculos',
    'Caballero de Pentáculos',
    'Reina de Pentáculos',
    'Rey de Pentáculos',
  
  ];

  // Event listener para el botón Rider
const riderButton = document.getElementById('rider-button');
riderButton.addEventListener('click', () => {
    // Actualiza el mazo de cartas con las cartas del mazo Rider
    tarotDeck = [
     // Se define el mazo completo de cartas de tarot, tanto Arcanos Mayores como Menores
     // Arcanos Mayores:
     'Loco',
     'Mago',
     'Sacerdotisa',
     'Emperatriz',
     'Emperador',
     'Hierofante',
     'Enamorados',
     'Carro',
     'Justicia',
     'Ermitaño',
     'Rueda de la Fortuna',
     'Fuerza',
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
  
     // Arcanos Menores:
     // Copas:
     'As de Copas',
     'Dos de Copas',
     'Tres de Copas',
     'Cuatro de Copas',
     'Cinco de Copas',
     'Seis de Copas',
     'Siete de Copas',
     'Ocho de Copas',
     'Nueve de Copas',
     'Diez de Copas',
     'Sota de Copas',
     'Caballero de Copas',
     'Reina de Copas',
     'Rey de Copas',
  
     // Bastos:
     'As de Bastos',
     'Dos de Bastos', 'Tres de Bastos',
     'Cuatro de Bastos',
     'Cinco de Bastos',
     'Seis de Bastos',
     'Siete de Bastos',
     'Ocho de Bastos',
     'Nueve de Bastos',
     'Diez de Bastos',
     'Sota de Bastos',
     'Caballero de Bastos',
     'Reina de Bastos',
     'Rey de Bastos',
  
     // Espadas:
     'As de Espadas',
     'Dos de Espadas',
     'Tres de Espadas',
     'Cuatro de Espadas',
     'Cinco de Espadas',
     'Seis de Espadas',
     'Siete de Espadas',
     'Ocho de Espadas',
     'Nueve de Espadas',
     'Diez de Espadas',
     'Sota de Espadas',
     'Caballero de Espadas',
     'Reina de Espadas',
     'Rey de Espadas',
  
     // Pentáculos:
     'As de Pentáculos',
     'Dos de Pentáculos',
     'Tres de Pentáculos',
     'Cuatro de Pentáculos',
     'Cinco de Pentáculos',
     'Seis de Pentáculos',
     'Siete de Pentáculos',
     'Ocho de Pentáculos',
     'Nueve de Pentáculos',
     'Diez de Pentáculos',
     'Sota de Pentáculos',
     'Caballero de Pentáculos',
     'Reina de Pentáculos',
     'Rey de Pentáculos',
   
   ];; // Actualiza esto con las cartas del mazo Rider

    // Muestra las cartas en el contenedor
    displayCards(tarotDeck);

    // Itera sobre cada carta y establece la imagen correspondiente del mazo Rider
    cardsData.forEach(data => {
        const card = data.card;
        const cartaNombre = card.textContent.trim();
        const imagen = cartaImagenes[cartaNombre];
        if (imagen) {
            card.style.style.backgroundImage = `url('../img/fondo2.jpg')`;
            card.style.backgroundImage = `url('${imagen}')`;
        }
    });
});

// Event listener para el botón Mayores
const mayoresButton = document.getElementById('mayores-button');
mayoresButton.addEventListener('click', () => {
    // Actualiza el mazo de cartas con las cartas del mazo Rider MAyores
      // Se define el mazo completo de cartas de tarot, Arcanos Mayores 
     // Arcanos Mayores:
    tarotDeck = [
     'Loco',
     'Mago',
     'Sacerdotisa',
     'Emperatriz',
     'Emperador',
     'Hierofante',
     'Enamorados',
     'Carro',
     'Justicia',
     'Ermitaño',
     'Rueda de la Fortuna',
     'Fuerza',
     'Colgado',
     'Muerte',
     'Templanza',
     'Diablo',
     'Torre',
     'Estrella',
     'Luna',
     'Sol',
     'Juicio Final',
     'Mundo'
   ]; 

    // Muestra las cartas en el contenedor
    displayCards(tarotDeck);

    // Itera sobre cada carta y establece la imagen correspondiente del mazo Rider Arcanos Mayores
    cardsData.forEach(data => {
        const card = data.card;
        const cartaNombre = card.textContent.trim();
        const imagen = cartaImagenes[cartaNombre];
        if (imagen) {
            card.style.style.backgroundImage = `url('../img/fondo2.jpg')`;
            card.style.backgroundImage = `url('${imagen}')`;
        }
    });
});

// Event listener para el botón bruja
const brujaButton = document.getElementById('bruja-button');
brujaButton.addEventListener('click', () => {
    // Actualiza el mazo de cartas con las cartas del mazo bruja
    tarotDeck = [
        'Loco-bruja',
        'Mago-bruja',
        'Sacerdotisa-bruja',
        'Emperatriz-bruja',
        'Emperador-bruja',
        'Hierofante-bruja',
        'Enamorados-bruja',
        'Fuerza-bruja',
        'Justicia-bruja',
        'Ermitaño-bruja',
        'Rueda de la Fortuna-bruja',
        'Carro-bruja',
        'Colgado-bruja',
        'Muerte-bruja',
        'Templanza-bruja',
        'Diablo-bruja',
        'Torre-bruja',
        'Estrella-bruja',
        'Luna-bruja',
        'Sol-bruja',
        'Juicio Final-bruja',
        'Mundo-bruja',
        'As de Bastos-bruja',
        'Dos de Bastos-bruja',
        'Tres de Bastos-bruja',
        'Cuatro de Bastos-bruja',
        'Cinco de Bastos-bruja',
        'Seis de Bastos-bruja',
        'Siete de Bastos-bruja',
        'Ocho de Bastos-bruja',
        'Nueve de Bastos-bruja',
        'Diez de Bastos-bruja',
        'Sota de Bastos-bruja',
        'Caballero de Bastos-bruja',
        'Reina de Bastos-bruja',
        'Rey de Bastos-bruja',
        'As de Copas-bruja',
        'Dos de Copas-bruja',
        'Tres de Copas-bruja',
        'Cuatro de Copas-bruja',
        'Cinco de Copas-bruja',
        'Seis de Copas-bruja',
        'Siete de Copas-bruja',
        'Ocho de Copas-bruja',
        'Nueve de Copas-bruja',
        'Diez de Copas-bruja',
        'Sota de Copas-bruja',
        'Caballero de Copas-bruja',
        'Reina de Copas-bruja',
        'Rey de Copas-bruja',
        'As de Espadas-bruja',
        'Dos de Espadas-bruja',
        'Tres de Espadas-bruja',
        'Cuatro de Espadas-bruja',
        'Cinco de Espadas-bruja',
        'Seis de Espadas-bruja',
        'Siete de Espadas-bruja',
        'Ocho de Espadas-bruja',
        'Nueve de Espadas-bruja',
        'Diez de Espadas-bruja',
        'Sota de Espadas-bruja',
        'Caballero de Espadas-bruja',
        'Reina de Espadas-bruja',
        'Rey de Espadas-bruja',
        'As de Pentáculos-bruja',
        'Dos de Pentáculos-bruja',
        'Tres de Pentáculos-bruja',
        'Cuatro de Pentáculos-bruja',
        'Cinco de Pentáculos-bruja',
        'Seis de Pentáculos-bruja',
        'Siete de Pentáculos-bruja',
        'Ocho de Pentáculos-bruja',
        'Nueve de Pentáculos-bruja',
        'Diez de Pentáculos-bruja',
        'Sota de Pentáculos-bruja',
        'Caballero de Pentáculos-bruja',
        'Reina de Pentáculos-bruja',
        'Rey de Pentáculos-bruja'
    ]
     // Actualiza esto con las cartas del mazo bruja
    // Muestra las cartas en el contenedor
    displayCards(tarotDeck);
    // Itera sobre cada carta y establece la imagen correspondiente del mazo bruja
    cardsData.forEach(data => {
        const card = data.card;
        const cartaNombre = card.textContent.trim();
        const imagen = cartaImagenes[cartaNombre];
            if (imagen) { 
                card.style.style.backgroundImage = `url('../img/fondo2.jpg')`;
                card.style.backgroundImage = `url('${imagen}')`;
            }
    });
});

// Barajar las Cartas // Función para barajar un mazo de cartas utilizando el algoritmo de Fisher-Yates
// La función shuffle toma un parámetro deck, que es el mazo de cartas que se va a barajar.
// Se itera sobre el mazo de cartas en un bucle for que comienza desde la última carta hasta la primera (orden inverso).
// En cada iteración, se genera un número aleatorio j entre 0 y i (incluyendo i). i representa la posición actual de la carta en el mazo.
// Se intercambia la posición de las cartas en las posiciones i y j. Esto se hace usando la técnica de desestructuración de matrices en JavaScript.
// Después de que el bucle haya terminado, todas las cartas en el mazo estarán en una posición aleatoria, lo que resulta en un mazo barajado.
// Barajar las Cartas
function shuffle(deck) {
    // Itera sobre el mazo de cartas en orden inverso
    for (let i = deck.length - 1; i > 0; i--) {
        // Genera un número aleatorio entre 0 y i (incluyendo i)
        const j = Math.floor(Math.random() * (i + 1));
        // Intercambia la posición de las cartas en las posiciones i y j
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Función para crear y agregar una carta a un contenedor
// Esta función toma cuatro parámetros: container (el contenedor donde se agregará la carta), cardName (el nombre de la carta), index (la posición de la carta en el mazo) y totalCards (el número total de cartas en el mazo).
// Se crea un nuevo elemento div en el DOM para representar la carta.
// Se agrega la clase CSS 'card' al elemento para aplicar estilos predefinidos.
// Se establece el contenido de texto del elemento como el cardName, que es el nombre de la carta.
// Dependiendo de la posición de la carta en el mazo, se establece una imagen de fondo para representar el lado celeste de la carta.
// Se calcula la posición horizontal y vertical del elemento en el abanico de cartas utilizando el ángulo entre las cartas y el centro del contenedor.
// Se agrega el elemento de la carta al contenedor especificado en el parámetro container.
// Finalmente, se guarda la información sobre la carta (posición y referencia al elemento DOM) en el array cardsData para su posterior referencia.
const addCardToContainer = (container, cardName, index, totalCards) => {
    // Crea un nuevo elemento div para representar la carta
    const cardElement = document.createElement('div');
    // Agrega la clase 'card' al elemento para estilizarlo con CSS
    cardElement.classList.add('card');
    // Establece el contenido de texto del elemento como el nombre de la carta
    cardElement.textContent = cardName;
    // Verifica si es la primera mitad del mazo para mostrar el lado celeste
    if (index < Math.ceil(totalCards / 2)) {
        // Muestra el lado celeste de la carta estableciendo una imagen de fondo
        cardElement.style.backgroundImage = `url('../img/fondo2.jpg')`;
    } else {
        // Muestra el lado celeste de la carta estableciendo una imagen de fondo
        cardElement.style.backgroundImage = `url('../img/fondo2.jpg')`;
    }
    // Ajusta la posición horizontal y vertical de la carta en el abanico
    const angle = index * (Math.PI / (totalCards - 2)); // Calcula el ángulo entre las cartas
    // const radius = 100; // Radio del abanico
    const centerX = container.offsetWidth *3.5; // Centro horizontal del contenedor
    const centerY = container.offsetHeight*2.3; // Base vertical del contenedor
    const offsetY = 8; // Calcula el desplazamiento vertical
    const cardWidth = 15; // Ancho de la carta (ajusta según sea necesario)
    cardElement.style.left = `${centerX + (index - (totalCards - 1) / 2) * cardWidth}px`; // Establece la posición horizontal
    cardElement.style.top = `${(centerY - offsetY)/1.5}px`; // Establece la posición vertical
    // Agrega el elemento de la carta al contenedor especificado
    container.appendChild(cardElement);
    // Guarda la información sobre la carta en el array cardsData
    cardsData.push({ card: cardElement, left: centerX + (index - (totalCards - 1) / 2) * cardWidth, top: centerY - offsetY });
};

// Esta función toma un parámetro deck, que es el mazo de cartas que se va a mostrar.
// Primero, se limpia todo el contenido actual del contenedor de cartas (cardContainer.innerHTML = '') para asegurarse de que esté vacío.
// Luego, se reinician los arrays cardsData y movedCardsData que almacenan los datos de las cartas y las cartas movidas por el usuario, respectivamente.
// A continuación, se itera sobre cada carta en el mazo utilizando el método forEach.
// Para cada carta, se llama a la función addCardToContainer para agregarla al contenedor de cartas, pasando el nombre de la carta, su posición en el mazo y la longitud total del mazo como argumentos.
// Después de iterar sobre todas las cartas, el contenedor de cartas mostrará todas las cartas del mazo
// Mostrar las Cartas en una fila
function displayCards(deck) {
    // Elimina todo el contenido actual del contenedor de cartas
    cardContainer.innerHTML = '';
    // Reinicia los arrays que almacenan los datos de las cartas
    cardsData = [];
    movedCardsData = [];

    // Itera sobre cada carta en el mazo
    deck.forEach((card, index) => {
        // Agrega la carta al contenedor usando la función addCardToContainer
        addCardToContainer(cardContainer, card, index, deck.length);
    });
}

// Interacción con el Usuario / Event listener para el evento 'mousedown' que permite al usuario arrastrar las cartas
// Se registra un event listener para el evento 'mousedown' en el documento, que se dispara cuando el usuario presiona un botón del ratón.
// Dentro de este event listener, se verifica si el elemento clicado es una carta ('.card') utilizando event.target.closest('.card').
// Si se ha hecho clic en una carta, se ajusta su índice z para que esté sobre las demás cartas.
// Se calcula el desplazamiento del cursor respecto a la esquina superior izquierda de la carta (offsetX y offsetY).
// Se define una función moveCard que se encarga de mover la carta mientras el usuario arrastra el ratón.
// La carta se mueve inicialmente cuando se hace clic y se registra un event listener para seguir moviendo la carta mientras el botón del ratón esté presionado.
// Cuando se libera el botón del ratón, se eliminan los event listeners para detener el movimiento de la carta.
// Si la carta no está en movedCardsData, se añade la información de la carta al array movedCardsData para realizar un seguimiento de las cartas movidas por el usuario.
document.addEventListener('mousedown', (event) => {
    // Registra un event listener para el evento 'mousedown' en el documento
    // Este evento se dispara cuando el usuario presiona un botón del ratón
 

    // Obtiene el elemento más cercano con la clase 'card' desde el evento
    const clickedCard = event.target.closest('.card');
    
    // Verifica si se hizo clic en una carta
    if (clickedCard) {
        // Obtiene el índice z más alto entre todas las cartas en el contenedor
        const maxZIndex = Math.max(...Array.from(cardContainer.children).map(card => parseFloat(card.style.zIndex) || 0));
        // Incrementa el índice z de la carta clicada para que esté sobre las demás
        clickedCard.style.zIndex = maxZIndex + 1;

        // Calcula la posición del cursor relativa a la esquina superior izquierda de la carta
        const offsetX = event.clientX - clickedCard.offsetLeft;
        const offsetY = event.clientY - clickedCard.offsetTop;
        
        // Función para mover la carta mientras se arrastra
        const moveCard = (event) => {
            // Calcula las nuevas coordenadas de la carta basadas en la posición del cursor
            const posX = event.clientX - offsetX;
            const posY = event.clientY - offsetY;
            // Establece la posición de la carta a las nuevas coordenadas
            clickedCard.style.left = `${posX}px`;
            clickedCard.style.top = `${posY}px`;
        };
        // Mueve la carta inicialmente cuando se hace clic
        moveCard(event);
        // Registra event listeners para seguir moviendo la carta mientras el botón del ratón está presionado
        document.addEventListener('mousemove', moveCard);
        document.addEventListener('mouseup', () => {
            // Elimina los event listeners cuando se libera el botón del ratón
            document.removeEventListener('mousemove', moveCard);
        });

        // Si la carta no está en movedCardsData, la añade
        if (!movedCardsData.some(data => data.card === clickedCard)) {
            // Encuentra la información de la carta en cardsData y la añade a movedCardsData
            const data = cardsData.find(data => data.card === clickedCard);
            movedCardsData.push(data);
        }
    }
});

// Evento de doble clic para voltear las cartas
// Se registra un event listener para el evento 'dblclick' en el documento, que se dispara cuando el usuario hace doble clic en algún elemento.
// Dentro de este event listener, se obtiene el elemento más cercano con la clase 'card' desde el evento utilizando event.target.closest('.card').
// Se verifica si se ha hecho doble clic en una carta y si la carta no está en el mazo.
// Se alterna entre mostrar la imagen y mostrar el lado celeste de la carta:
// Si la imagen de fondo de la carta está oculta o no está establecida, se muestra la imagen de la carta correspondiente al nombre de la carta. Si la carta tiene una imagen asociada en el objeto cartaImagenes, se establece esa imagen como fondo de la carta y se establece el color de fondo a transparente.
// Si la imagen de fondo de la carta es visible y contiene la cadena 'fondo.jpg', se muestra la imagen de la carta correspondiente al nombre de la carta y se establece el color de fondo a transparente.
// Si la imagen de la carta es visible, se oculta la imagen de la carta y se muestra la imagen de fondo ('../img/tarot/fondo.jpg') estableciéndola como fondo de la carta
document.addEventListener('dblclick', (event) => {
    // Obtiene el elemento más cercano con la clase 'card' desde el evento
    const clickedCard = event.target.closest('.card');
    // Verifica si se hizo doble clic en una carta y si la carta no está en el mazo
    if (clickedCard && !clickedCard.classList.contains('in-deck')) {
        // Alternar entre mostrar la imagen y mostrar el lado celeste de la carta
        if (clickedCard.style.backgroundImage === 'none' || clickedCard.style.backgroundImage === '') {
            // Si la imagen está oculta, mostrarla
            const cartaNombre = clickedCard.textContent.trim();
            const imagen = cartaImagenes[cartaNombre];
            if (imagen) {
                clickedCard.style.backgroundImage = `url('${imagen}')`;
            }
            clickedCard.style.backgroundColor = 'transparent';
        } else if (clickedCard.style.backgroundImage.includes('fondo2.jpg')) {
            // Si la imagen de fondo está visible, mostrar la imagen de la carta
            const cartaNombre = clickedCard.textContent.trim();
            const imagen = cartaImagenes[cartaNombre];
            if (imagen) {
                clickedCard.style.backgroundImage = `url('${imagen}')`;
            }
            clickedCard.style.backgroundColor = 'transparent';
        } else {
            // Si la imagen de la carta está visible, ocultarla y mostrar la imagen de fondo
            clickedCard.style.backgroundImage = `url('../img/fondo2.jpg')`;
        }
    }
});

// Event listener para el botón de revolver cartas
// Se registra un event listener para el evento 'click' en el botón shuffleButton.
// Cuando se hace clic en el botón, se ejecuta una función de callback que realiza dos acciones:
// Llama a la función shuffle(tarotDeck) para barajar el mazo de cartas tarotDeck.
// Llama a la función displayCards(tarotDeck) para mostrar las cartas barajadas en el contenedor de cartas.
shuffleButton.addEventListener('click', () => {
    shuffle(tarotDeck);
    displayCards(tarotDeck);
});

 //Variable para mantener el estado de las imágenes
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
                card.style.backgroundImage = `url('../img/fondo2.jpg')`;
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
// Se registra un event listener para el evento 'click' en el documento.
// Dentro de este event listener, se obtiene el elemento más cercano con la clase 'card' desde el evento utilizando event.target.closest('.card').
// Se verifica si se ha hecho clic en una carta y si la carta no está en el mazo.
// Si se ha hecho clic en una carta y no está en el mazo, se implementa la lógica de selección/deselección:
// Si la carta ya está seleccionada (selectedCard), se deselecciona.
// Si no hay ninguna carta seleccionada (selectedCard es null) o si la carta clicada es diferente a la carta seleccionada actualmente, se deselecciona la carta actualmente seleccionada (si hay alguna) y se selecciona la nueva carta clicada.
// Se utiliza una clase CSS llamada 'selected' para resaltar visualmente la carta seleccionada. La carta seleccionada se almacena en la variable selectedCard para su referencia posterior.

// // Event listener para seleccionar/deseleccionar cartas al hacer clic
// document.addEventListener('click', (event) => {
//     // Obtiene el elemento más cercano con la clase 'card' desde el evento
//     const clickedCard = event.target.closest('.card');
    
//     // Verifica si se hizo clic en una carta y si la carta no está en el mazo
//     if (clickedCard && !clickedCard.classList.contains('in-deck')) {
//         // Si la carta ya está seleccionada, la deselecciona
//         if (selectedCard === clickedCard) {
//             clickedCard.classList.remove('selected');
//             selectedCard = null;
//         } else {
//             // Si hay una carta seleccionada, la deselecciona
//             if (selectedCard) {
//                 selectedCard.classList.remove('selected');
//             }
//             // Selecciona la nueva carta
//             clickedCard.classList.add('selected');
//             selectedCard = clickedCard;
//         }
//     }
// });

// Barajar las Cartas en el Abanico sin considerar las cartas movidas por el usuario
function shuffleInPlace() {
    // Crear un conjunto de cartas sacadas del mazo
    const selectedCards = new Set(movedCardsData.map(data => data.card.textContent.trim()));

    // Filtrar las cartas del mazo que aún no han sido seleccionadas
    const remainingDeck = tarotDeck.filter(card => !selectedCards.has(card));

    // Barajar las cartas restantes
    shuffle(remainingDeck);

    // Actualizar la visualización de las cartas en el abanico
    Array.from(cardContainer.children).forEach((cardElement, index) => {
        // Si la carta no ha sido seleccionada, actualizar su nombre y posición
        if (!selectedCards.has(cardElement.textContent.trim())) {
            cardElement.textContent = remainingDeck[index];
            // No es necesario actualizar la imagen de fondo, ya que no cambia
        }
    });
}

// Event listener para el botón de revolver cartas en el abanico
shuffleInPlaceButton.addEventListener('click', () => {
    shuffleInPlace();
});


// Barajar y Mostrar las Cartas al cargar la página
shuffle(tarotDeck);
displayCards(tarotDeck);

