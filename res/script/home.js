window.onresize = function()
{
	var vw = window.innerWidth;
	var vh = window.innerHeight;
	if (vw > vh*1.75)
	{
		var mainText = document.getElementById("mainText").style;
		mainText.width = "40%";
		mainText.fontSize = "1.5vw";
	}
	if (vw < vh*1.75)
	{
		var mainText = document.getElementById("mainText").style;
		mainText.width = "60%";
		mainText.fontSize = "2.5vw";
	}
}

function initScale()
{
	var vw = window.innerWidth;
	var vh = window.innerHeight;
	if (vw > vh*1.75)
	{
		var mainText = document.getElementById("mainText").style;
		mainText.width = "40%";
		mainText.fontSize = "1.5vw";
	}
	if (vw < vh*1.75)
	{
		var mainText = document.getElementById("mainText").style;
		mainText.width = "60%";
		mainText.fontSize = "2.5vw";
	}
}