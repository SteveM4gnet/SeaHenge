function buttonClick()
{

}

function introAnimation()
{
	var mask = document.getElementById("mask");
		if (mask.classList != "mask mask_up")
		{
			mask.classList.toggle("mask_up");
			var mask = document.getElementById("topside");
			mask.classList.toggle("topside_up");
			var bgImage = document.getElementById("bgImage");
			bgImage.classList.toggle("backgroundImage_up");
		}

	var orbitalButtons =  document.getElementById("orbitalButtons");
	orbitalButtons.className = "orbitalButtonsIntro";
	var counter = 1
	var interval = setInterval(frame,100)
		function frame()
		{
			if (counter == 25)
			{
				clearInterval(interval);
				begin();
			}
			else
			{
				counter++;
			}
		}
	
}

function begin()
{
	var orbitalButtons =  document.getElementById("orbitalButtons");
	orbitalButtons.className = "orbitalButtons";
	var navButtons = document.getElementById("navButtons");
		if (navButtons.classList == "navButtons navButtons_enter")
		{
			navButtons.classList.toggle('navButtons_enter');
		}
	navButtons.classList.toggle('navButtons_enter');
	document.getElementById("button_state_left").innerHTML = "turn_left_4";
	document.getElementById("button_state_right").innerHTML = "turn_right_4";
	orbitalButtons.classList.toggle("orbitalButtons_pos_4");
}

function rotateLeft()
{	
	
	//setting navButtons to dim at END NO CLICK
	var navButtonLeft = document.getElementById("rotate_left");
	var navButtonRight = document.getElementById("rotate_right");
	document.getElementById("dataDump2").innerHTML = navButtonLeft.classList + "</br>" + navButtonRight.classList;
	
	
	var rotateLeft = document.querySelector('#rotate_left');
	var buttonLeftState = document.getElementById("button_state_left").innerHTML;
	var buttonRightState = document.getElementById("button_state_right").innerHTML;
	var orbitalButtons =  document.getElementById("orbitalButtons");
	orbitalButtons.className = "orbitalButtons";
	var currentDeg = 0;
	
	if (buttonLeftState == "turn_left_7")
	{
		document.getElementById("button_state_left").innerHTML = "turn_left_6";
		document.getElementById("button_state_right").innerHTML = "turn_right_2";
		orbitalButtons.classList.toggle("orbitalButtons_pos_6");		
		navButtonRight.classList.toggle("navButtonRight_dim");
	}
	
	if (buttonLeftState == "turn_left_6")
	{
		document.getElementById("button_state_left").innerHTML = "turn_left_5";
		document.getElementById("button_state_right").innerHTML = "turn_right_3";
		orbitalButtons.classList.toggle("orbitalButtons_pos_5");
		
	}

	if (buttonLeftState == "turn_left_5")
	{
		document.getElementById("button_state_left").innerHTML = "turn_left_4";
		document.getElementById("button_state_right").innerHTML = "turn_right_4";
		orbitalButtons.classList.toggle("orbitalButtons_pos_4");
		
	}
	
	if (buttonLeftState == "turn_left_4")
	{
		document.getElementById("button_state_left").innerHTML = "turn_left_3";
		document.getElementById("button_state_right").innerHTML = "turn_right_5";
		orbitalButtons.classList.toggle("orbitalButtons_pos_3");
		
	}

	if (buttonLeftState == "turn_left_3")
	{
		document.getElementById("button_state_left").innerHTML = "turn_left_2";
		document.getElementById("button_state_right").innerHTML = "turn_right_6";
		orbitalButtons.classList.toggle("orbitalButtons_pos_2");
		
	}

	if (buttonLeftState == "turn_left_2")
	{
		document.getElementById("button_state_left").innerHTML = "END NO CLICK";
		document.getElementById("button_state_right").innerHTML = "turn_right_7";
		orbitalButtons.classList.toggle("orbitalButtons_pos_1");
		
		navButtonLeft.classList.toggle("navButtonLeft_dim");
	}
	
	if (buttonLeftState == "END NO CLICK")
	{
		orbitalButtons.classList.toggle("orbitalButtons_pos_1");
		
	}
	
	//debug
	document.getElementById("dataDump").innerHTML =
	"var buttonLeftState = " + buttonLeftState + "</br>" +
	"var buttonRightState = " + buttonRightState + "</br>" +
	"::: .orbitalButtons :::</br></br>" +
	".orbitalButtons state = " + orbitalButtons.classList + "</br>" +
	"Current deg = " + currentDeg + "</br>" +
	"navButton = " + navButtonLeft.classList;
}

function rotateRight()
{

	var navButtonLeft = document.getElementById("rotate_left");
	var navButtonRight = document.getElementById("rotate_right");
	document.getElementById("dataDump2").innerHTML = navButtonLeft.classList + "</br>" + navButtonRight.classList;
	
	var rotateRight = document.querySelector('#rotate_right');
	var buttonLeftState = document.getElementById("button_state_left").innerHTML;
	var buttonRightState = document.getElementById("button_state_right").innerHTML;
	var orbitalButtons =  document.getElementById("orbitalButtons");
	orbitalButtons.className = "orbitalButtons";
	
	if (buttonRightState == "turn_right_7")
	{
		document.getElementById("button_state_right").innerHTML = "turn_right_6";
		document.getElementById("button_state_left").innerHTML = "turn_left_2";
		orbitalButtons.classList.toggle("orbitalButtons_pos_2");
		navButtonLeft.classList.toggle("navButtonLeft_dim");
	}

	if (buttonRightState == "turn_right_6")
	{
		document.getElementById("button_state_right").innerHTML = "turn_right_5";
		document.getElementById("button_state_left").innerHTML = "turn_left_3";
		orbitalButtons.classList.toggle("orbitalButtons_pos_3");
	}	
	
	if (buttonRightState == "turn_right_5")
	{
		document.getElementById("button_state_right").innerHTML = "turn_right_4";
		document.getElementById("button_state_left").innerHTML = "turn_left_4";
		orbitalButtons.classList.toggle("orbitalButtons_pos_4");
		
	}

	if (buttonRightState == "turn_right_4")
	{
		document.getElementById("button_state_right").innerHTML = "turn_right_3";
		document.getElementById("button_state_left").innerHTML = "turn_left_5";
		orbitalButtons.classList.toggle("orbitalButtons_pos_5");
		
	}

	if (buttonRightState == "turn_right_3")
	{
		document.getElementById("button_state_right").innerHTML = "turn_right_2";
		document.getElementById("button_state_left").innerHTML = "turn_left_6";
		orbitalButtons.classList.toggle("orbitalButtons_pos_6");
		
	}

	if (buttonRightState == "turn_right_2")
	{
		document.getElementById("button_state_right").innerHTML = "END NO CLICK";
		document.getElementById("button_state_left").innerHTML = "turn_left_7";
		orbitalButtons.classList.toggle("orbitalButtons_pos_7");
		
		navButtonRight.classList.toggle("navButtonRight_dim");
	}
	
	if (buttonRightState == "END NO CLICK")
	{
		orbitalButtons.classList.toggle("orbitalButtons_pos_7");
		
	}	
	
	//debug
	document.getElementById("dataDump").innerHTML =
	"var buttonLeftState = " + buttonLeftState + "</br>" +
	"var buttonRightState = " + buttonRightState + "</br>" +
	"::: .orbitalButtons :::</br></br>" +
	".orbitalButtons state = " + orbitalButtons.classList + "</br>"+
	"navButton = " + navButtonRight.classList;;
}