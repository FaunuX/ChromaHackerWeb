const myForm = document.getElementById('form');
const addButton = document.getElementById('addButton');

// Track the count of input elements
let inputCount = 0;

// Add event listener to the button
addButton.addEventListener('click', function(event) {
	// Create a new input element
	event.preventDefault(); // Prevent form submission
	const newInput = document.createElement('input');
	newInput.type = 'color';
	newInput.class = 'input';
	newInput.name = `arg${inputCount}`;

	// Append the new input element to the form
	myForm.appendChild(newInput);

	// Increment the input count
	inputCount++;
});
