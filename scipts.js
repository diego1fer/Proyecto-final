// Array de citas inspiradoras
const quotes = [
    "La vida no es esperar a que pase la tormenta, es aprender a bailar bajo la lluvia.",
    "No somos nuestras circunstancias, somos nuestras decisiones.",
    "La salud mental no es un destino, es un proceso.",
    "El primer paso hacia el cambio es la conciencia. El segundo paso es la aceptación.",
    "La verdadera felicidad está en la calma interior."
];

// Función para mostrar citas en la página
const displayQuotes = (start, end) => {
    const quotesList = document.getElementById('quotes-list');
    quotes.slice(start, end).forEach(quote => {
        const quoteElement = document.createElement('div');
        quoteElement.className = 'quote';
        quoteElement.innerHTML = `<p>${quote}</p>`;
        quotesList.appendChild(quoteElement);
    });
};

// Cargar las primeras citas al iniciar
let quotesLoaded = 0;
const quotesPerPage = 3;
displayQuotes(quotesLoaded, quotesPerPage);
quotesLoaded += quotesPerPage;

// Manejar el botón "Cargar Más Citas"
document.getElementById('load-more').addEventListener('click', () => {
    const end = Math.min(quotesLoaded + quotesPerPage, quotes.length);
    displayQuotes(quotesLoaded, end);
    quotesLoaded = end;
});

// Manejar el formulario de contacto
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Gracias por tu mensaje. Te responderemos pronto.');
    event.target.reset();
});
