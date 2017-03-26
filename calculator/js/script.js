
// The input at the top of the page
// It will hold the equation and the answer
display = document.getElementById('display');

// An array-like object containing all of the <button> elements
var allBtns = document.querySelectorAll('button');

// Loop over each button
allBtns.forEach(
	// Execute this function for each button
	function(currentBtn, key, listObj, argument){
		// currentBtn will be set correctly by the system.
		// Add a click listener to currentBtn.
		currentBtn.addEventListener("click", function(){ // <-- this function
																										 // executes whenever
																										 // currentBtn is 
																										 // clicked
			// if it is the equals button
			if (currentBtn.innerHTML == "="){
				// solve the equation.
				display.value = math.eval(display.value);
				/*
					NOTE: This is is not the same Math object that we used
					in class. This is a 3rd party module that is not part of
					the main javascript language.
					Find out more about it here: http://mathjs.org/index.html
				*/
			}else{ // if it is any other button
				// append the character from the button to the input
				display.value += currentBtn.innerHTML;
			}
		}); // close click listener
	}); // close for each