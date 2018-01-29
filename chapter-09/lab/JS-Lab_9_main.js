window.onload = function() 
{
	var sentence = "pink floyd is the greatest band.";

	function capWord(str)	{
	return str.charAt(0).toUpperCase() + str.slice(1);
}
	alert(capWord(sentence))
document.getElementById('result').innerHTML = sentence + "<br/>";
document.getElementById('result').innerHTML +=  capWord(sentence);

};