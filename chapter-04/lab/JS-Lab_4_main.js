
window.onload=function()
{	
	document.getElementById('btnFindNames').addEventListener('click', lookForNames);
};

 function lookForNames()
{
	var myName = "Joe";
	var timesFound = [];
	var text = document.getElementById("inputNameBox").value

	for (var i = 0; i < text.length; i++)
	{
	if (text[i] === "J")
	{
	for (var j = i; j < (myName.length + i);
	j++)
	{
	timesFound.push(text[j]);
	}
	}
	}
	if (timesFound.length === 0)
	{
		alert("Your Name Wasn't Found!");
	} else {
		alert(timesFound);
	}
}



