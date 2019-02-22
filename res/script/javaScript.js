function expandFunction()
{	
	var prevButton = document.getElementById("dataDump").innerHTML;	
	var clickedButton = document.activeElement.innerHTML.split("()").slice(0,-1);
	var clickedButton = String(clickedButton).substr(19);
	document.getElementById("dataDump").innerHTML = clickedButton;
		
	if (prevButton == clickedButton)
	{	
		var showFunction = document.getElementById(clickedButton);	
		showFunction.classList.toggle("functionContent_show_" + clickedButton);
	}
	else
	{
		var showFunction = document.getElementById(prevButton);	
		showFunction.classList.toggle("functionContent_show_" + prevButton);
		var showFunction = document.getElementById(clickedButton);	
		showFunction.classList.toggle("functionContent_show_" + clickedButton);		
	}
}

function firstClick()
{
	var showFunction = document.getElementById("rotateButtons");	
	showFunction.classList.toggle("functionContent_show_rotateButtons");
	document.getElementById("dataDump").innerHTML = "rotateButtons";
}