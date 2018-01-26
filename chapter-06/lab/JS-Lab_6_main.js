window.onload = function()
			{
				var randomBox1 = document.getElementById('eventOneBox');
				var randomBox2 = document.getElementById('eventTwoBox');
				
				randomBox2.onmouseover = function()
				{
					alert("I'm watching. You've hovered over the red box!");
				};
				
				randomBox1.onclick = function(e)
				{
					alert('X=' + e.clientX + ' and Y=' + e.clientY)
				};
					
				window.onkeypress = function()
				{
					alert("You Pressed a key didn't you!");
				}
			}