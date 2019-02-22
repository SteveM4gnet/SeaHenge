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

function loadSlide(buttonClicked)
{
	var planetMenu = document.getElementById("planetMenu").style;
	planetMenu.transform = "scale(0.25,0.25)";
	planetMenu.top = "5%";
	planetMenu.left = "95%";
	var orbitalButtons = document.getElementById("orbitalButtons").style;
	orbitalButtons.opacity = "0";
	var back = document.getElementById("back");
	back.style.opacity = "1";
	back.setAttribute("onClick","javascript: back();");
	var slideTitle = document.getElementById("currentSlide");
	slideTitle.innerHTML = String(buttonClicked);
	var navButtons = document.getElementById("navButtons");
	navButtons.classList.toggle('navButtons_exit');
}

function back()
{
	var orbitalButtons = document.getElementById("orbitalButtons").style;
	var orbitalButtons = document.getElementById("orbitalButtons").style;
	var back = document.getElementById("back");
	planetMenu.transform = "";
	planetMenu.top = "";
	planetMenu.left = "";
	planetMenu.removeAttribute("style");
	back.style.opacity = "";
	orbitalButtons.opacity = "1";
	var navButtons = document.getElementById("navButtons");
	navButtons.classList.toggle('navButtons_exit');
}