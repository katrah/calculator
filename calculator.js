(function() {
	var storedNumbers = []; 
	var storedOperands = [];

	var operandPressed = function(operand) {
	var numberToStore = document.getElementById("display").value;
	storedNumbers.push(numberToStore);
	storedOperands.push(operand);
	document.getElementById("display").value = "";

	}

	var numberPressed = function(number) {
  		var oldValue = document.getElementById("display").value;
  		var newValue = oldValue + number; 
  		document.getElementById("display").value = newValue;
  	}

  	var enterPressed = function() {
  		var leftHandNumber = storedNumbers.pop();
  		var operand = storedOperands.pop();
  		var rightHandNumber = document.getElementById("display").value;
	  	if (operand == "+") {
	  		document.getElementById("display").value = add(leftHandNumber, rightHandNumber);
	  	}
	  	if (operand == "-") {
	  		document.getElementById("display").value = subtract(leftHandNumber, rightHandNumber);
	  	}
	  	if (operand == "*") {
	  		document.getElementById("display").value = multiply(leftHandNumber, rightHandNumber);
	  	}
	  	if (operand == "/") {
	  		document.getElementById("display").value = divide(leftHandNumber, rightHandNumber);
	  	} 

  	}
  	var add = function(leftNumber, rightNumber) {
  		return parseInt(leftNumber) + parseInt(rightNumber);
  	}

  	var subtract = function(leftNumber, rightNumber) {
  		return parseInt(leftNumber) - parseInt(rightNumber);
  	}

  	var multiply = function(leftNumber, rightNumber) { 
  		return parseInt(leftNumber) * parseInt(rightNumber);
  	}

  	var divide = function(leftNumber, rightNumber) {
  		return parseInt(leftNumber) / parseInt(rightNumber);
  	}

  	var enterButton = document.getElementById("button-enter");
  	enterButton.onclick = function() { enterPressed()};

	var addButton = document.getElementById("button-add");
	addButton.onclick = function() { operandPressed("+") };
		
	var subtractButton = document.getElementById("button-subtract");
	subtractButton.onclick = function() { operandPressed("-") };
	
	var multiplyButton = document.getElementById("button-multiply");
	multiplyButton.onclick = function() { operandPressed("*") };

	var divideButton = document.getElementById("button-divide");
	divideButton.onclick = function() { operandPressed("/") };

	var oneButton = document.getElementById("button-one");
  	oneButton.onclick = function() { numberPressed(1) };

  	var twoButton = document.getElementById("button-two");
  	twoButton.onclick = function() { numberPressed(2) };

  	var threeButton = document.getElementById("button-three");
  	threeButton.onclick = function() { numberPressed(3) };

  	var fourButton = document.getElementById("button-four");
  	fourButton.onclick = function() { numberPressed(4) };

  	var fiveButton = document.getElementById("button-five");
  	fiveButton.onclick = function() { numberPressed(5) };

  	var sixButton = document.getElementById("button-six");
  	sixButton.onclick = function() { numberPressed(6) };

  	var sevenButton = document.getElementById("button-seven");
  	sevenButton.onclick = function() { numberPressed(7) };

  	var eightButton = document.getElementById("button-eight");
  	eightButton.onclick = function() { numberPressed(8) };

  	var nineButton = document.getElementById("button-nine");
  	nineButton.onclick = function() { numberPressed(9) };

  	var tenButton = document.getElementById("button-ten");
  	tenButton.onclick = function() { numberPressed(0) };

})();

