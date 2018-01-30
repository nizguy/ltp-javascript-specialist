function greenWords() 
{
	var boldWords = document.getElementsByTagName('strong');
	for (var i = 0; i < boldWords.length; i++)
	{
		boldWords[i].style.color = 'purple';
	}
}
	function returncolor()
	{
		var boldWords = document.getElementsByTagName('strong');
		for (var i = 0; i < boldWords.length; i++)
		{
			boldWords[i].style.color = 'black';
		}
	}
