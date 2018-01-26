window.onload = function(){
	document.getElementById('confirmBtn').addEventListener('click', runConfirm)
}
function runConfirm()
{
	var message;
	if (confirm("Press a button! I Dare You!") == true) {
		message = "You are Brave Aren't You!";
	} else {
		message = "Ahh! You chickened out!";
	}

	document.getElementById('text').innerHTML = message;
}