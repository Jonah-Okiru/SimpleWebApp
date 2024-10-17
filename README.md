# Project: Favorite Quote Storage
This project is a simple web application that allows users to store their favorite quotes using local storage. Users can add new quotes, view a list of stored quotes, and remove them from storage.

## Functionality
- Add Quotes: Users can enter a quote and author in designated input fields and click a button to add them to the stored list.
- View Quotes: All stored quotes with their authors are displayed in a dedicated section of the application.
- Remove Quotes: Each displayed quote has a button or link that allows users to remove it from local storage and the displayed list.

## Technical Stack 
- HTML (structure)
- JavaScript (functionality)
- CSS (styling)

## Getting Started
This application doesn't require any server-side setup. You can simply open the HTML file in your browser to begin.

## Code Structure
- index.html: Contains the HTML structure of the application.
- script.js: Contains the JavaScript code for adding, displaying, and removing quotes from local storage.
- style.css (Optional): Define styles for the application's appearance.

## Implementation Details

#### HTML:
The HTML code will create a container for the application with input fields for the quote and author, a button for adding them, and a section to display the stored quotes.

#### JavaScript:
- JavaScript variables will reference the input fields, button, and section for displaying quotes.
- An event listener on the add quote button will trigger a function that retrieves the input values.
- The function will check if both quote and author fields are filled.
- If both fields have data, a JavaScript object representing the quote is created and converted to a JSON string.
- The JSON string is then stored in local storage using a unique key.
- A separate function retrieves stored quotes from local storage, parses JSON strings back to objects, and iterates to display them.
- Removal functionality involves adding a remove button or link to each displayed quote and attaching an event listener.
- Clicking the remove button triggers a function that gets the unique key and removes the corresponding item from local storage.
- The displayed list is updated to reflect the removal.

#### Testing:
- Enter quotes using the input fields and verify they are displayed in the list.
- Test the remove functionality to ensure quotes are removed from local storage and the list.

#### Styling (Optional):
Use CSS to enhance the user experience and visual appeal of the application.


