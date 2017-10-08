function convertToF(celsius) {
	var fahrenheit;
		fahrenheit = celsius * 9/5 + 32;
	
	return fahrenheit;
};

function updateDOM() {
	
	var farhenheitDOM, inputValue;

		inputValue = document.getElementById('input').value;
	
	if (!isNaN(inputValue)) {

		farhenheitDOM = convertToF(inputValue);
		
	document.querySelector('.output-box').textContent = farhenheitDOM;
	} else {
		
		alert('Please enter a real number!')
		
		document.querySelector('.output-box').textContent = " ";
		document.getElementById('input').value = " ";
		
	}
};

	
	
	document.querySelector('.btn').addEventListener('click', updateDOM);

	document.addEventListener('keypress', function(e) {
		if (e.keyCode === 13 || e.which === 13) {
			updateDOM();
		}
	});



