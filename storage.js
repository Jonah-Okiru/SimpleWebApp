// Implement JavaScript functionality
//* variables to reference the input fields, button, and section for displaying quotes.
const inputQuotes = document.getElementById('quote');
const inputAuthor = document.getElementById('author');
const addButton = document.getElementById('button');
const displayQuotes = document.getElementById('display');
// Add an event listener to the button that triggers a function when clicked.
addButton.addEventListener('click', addingQuotes);
// Implement the function for adding quotes:
function addingQuotes(){
    //Retrieve the input values for the quote and author.
    const inputValueQuote = inputQuotes.value;
    const inputValueAuthor = inputAuthor.value;
    // Check if both the quote and author fields are filled out.
    if(inputQuotes!==""||inputAuthor!==""){
        //create a JavaScript object to represent the quote, including properties for the quote text and author.
        const quoteObject ={
            author: inputValueAuthor,
            quote: inputValueQuote
        }
        //Convert the JavaScript object to a JSON string using JSON.stringify().
        const jsonString=JSON.stringify(quoteObject);
        const uniqueKey = `quote_${Date.now()}`;
        // Store the JSON string in local storage using localStorage.setItem() with a unique key.
        localStorage.setItem(uniqueKey, jsonString);
        displayQuote();
        inputQuotes='';
        inputAuthor='';
        
    } else{
        alert('Fill the both the quote and author');
    }
    
}
// Display qoutes function
function displayQuote(){
    displayQuotes.innerHTML = '';
    for(i=0; i<localStorage.length; i++){
        const keyValue =localStorage[i];
        const jsonString =localStorage.getItem(keyValue);
        const jstringobject = JSON.parse(jsonString);
        const quoteItem = document.createElement('div');
        quoteItem.classList.add('quote-item');
        quoteItem.innerHTML = `
            <p>${jstringobject.quote}</p>
            <p>- ${jstringobject.author}</p>
            <button class="remove-button" onclick="removeQuote('${key}')">Remove</button>
        `;
        displayQuotes.appendChild(quoteItem);

    }
}
//Implement the function for removing quotes:
function removeQuote(){
    localStorage.removeItem(key);
    displayQuote();
}
// display the quote function
displayQuote();

    
    




