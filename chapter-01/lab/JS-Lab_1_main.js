window.onload=function()
	{
		document.getElementById('consoleButton').addEventListener('click', firstRespond);
		document.getElementById('browserButton').addEventListener('click', secondRespond);
		document.getElementById('myAlertButton').addEventListener('click', alertRespond);
	}
	function firstRespond(e)
	{
		console.log("Thanks for clicking the console button!");
	}
	function secondRespond(e)
	{
		document.write("Thanks for clicking the browser button!");
	}
	function alertRespond(e)
	{
		alert("Thanks for clicking the Alert button!");
	}
	