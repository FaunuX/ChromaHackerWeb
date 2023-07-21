const myForm = document.getElementById('form');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');

function convertButtonToArg(str) {
	  // Use a regular expression to match "button" followed by a number
	  const regex = /^button(\d+)$/;

	  // Check if the input string matches the expected pattern
	  if (regex.test(str)) {
		      // Extract the number from the string
		      const match = str.match(regex);
		      const number = match[1];

		      // Return the modified string "arg" + number
		      return "arg" + number;
		    }

	  // Return the original string if it doesn't match the pattern
	  return str;
}


// Track the count of input elements
let inputCount = 0;

// Add event listener to the button
addButton.addEventListener('click', function(event) {
	// Create a new input element
	event.preventDefault(); // Prevent form submission
	const div = document.createElement('div');
	const newInput = document.createElement('input');
	newInput.type = 'color';
	newInput.class = 'input';
	newInput.name = `arg${inputCount}`;
	newInput.id = `arg${inputCount}`;
	const newButton = document.createElement('button');
	newButton.type = 'button';
	// newInput.class = 'input';
	// newInput.name = `arg${inputCount}`;
	newButton.id = `button${inputCount}`;
	newButton.textContent = 'X'

	newButton.addEventListener('click', function(event) {
		// Create a new input element
		event.preventDefault(); // Prevent form submission
		const oldInput = document.getElementById(convertButtonToArg(newButton.id));

		oldInput.remove()
		newButton.remove()
		inputCount--;

	});

	// Append the new input element to the form
	div.appendChild(newInput);
	div.appendChild(newButton);
	myForm.appendChild(div);


	// Increment the input count
	inputCount++;
});
