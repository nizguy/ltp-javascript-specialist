window.onload = function()	{	
				document.getElementById('hoursButton').addEventListener('click', runCheckHours)
			};
			
			
			function runCheckHours()	{
				var hoursSlept = document.getElementById('hoursInput').value
				checkHours(hoursSlept);
			}
			
			
			function checkHours(numHours)	{
				if (numHours >= 8)
				{
					return alert("You are getting plenty of sleep!")
				} else
					{
						return alert("You should try and get more sleep!")
					}
			};