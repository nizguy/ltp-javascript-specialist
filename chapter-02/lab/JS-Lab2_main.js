window.onload = function()
	{
		document.getElementById('addingButton').addEventListener('click', addNumbers);
		document.getElementById('multiplyButton').addEventListener('click', multiplyNumbers);
	}

	function addNumbers(e)
	{
		var answer = "";
		
		answer += + document.getElementById('inputOne').value + + document.getElementById('inputTwo').value 
		
		alert(answer)
	}

	function multiplyNumbers(e)
	{
		var answerMultiply = "";
		
		answerMultiply = + document.getElementById('inputOneOne').value * document.getElementById('inputTwoTwo').value 
		
		alert(answerMultiply)
	}	