window.onload = function() 
{
	alert("Let's Play! Think of a rock, paper, or scissors!");
	
	document.getElementById('playButton').addEventListener('click', randomNumber);
};
	function randomNumber(e)
{
	var computerAnswer = Math.random();
	if (computerAnswer <= 0.33) 
{
	alert('Computer chose rock!')
} else if (computerAnswer >0.33 && computerAnswer <= 0.66)
{
	alert('Computer chose paper!')
} else {
	alert('Computer chose scissors!')
}
};