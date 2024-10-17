const quoteInput = document.getElementById('quote');
const authorInput = document.getElementById('author');
const addButton = document.getElementById('add-quote');
const quoteList = document.getElementById('quote-list');

addButton.addEventListener('click', addQuote);

function addQuote() {
    const quote = quoteInput.value;
    const author = authorInput.value;

    if (quote && author) {
        const quoteObject = {
            quote: quote,
            author: author
        };

        const jsonString = JSON.stringify(quoteObject);
        const uniqueKey = `quote_${Date.now()}`;
        localStorage.setItem(uniqueKey, jsonString);

        displayQuotes();
        quoteInput.value = '';
        authorInput.value = '';
    } else {
        alert('Please fill in both the quote and author fields.');
    }
}

function displayQuotes() {
    quoteList.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const jsonString = localStorage.getItem(key);
        const quoteObject = JSON.parse(jsonString);

        const quoteItem = document.createElement('div');
        quoteItem.classList.add('quote-item');
        quoteItem.innerHTML = `
            <p>${quoteObject.quote}</p>
            <p>- ${quoteObject.author}</p>
            <button class="remove-button" onclick="removeQuote('${key}')">Remove</button>
        `;
        quoteList.appendChild(quoteItem);
    }
}

function removeQuote(key) {
    localStorage.removeItem(key);
    displayQuotes();
}

displayQuotes();



