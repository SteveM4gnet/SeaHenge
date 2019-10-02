var pageStyle = document.querySelector('#pageStyle');

window.onresize =
window.onload =
function()
{
	getSize();
}

function getSize()
{
	var winWidth = window.innerWidth,
		winHeigh = window.innerHeight,
		winRatio = (winWidth/winHeigh);
	
	if (winRatio < 1.4)
	{
		pageStyle.setAttribute("href", "res/css/styles_mobile.css");
	}
	else
	{
		pageStyle.setAttribute("href", "res/css/styles_desktop.css");
	}
}
function expand()
{

	var active = document.activeElement,
		parentDiv = active.parentNode.id,
		latestHeight = document.querySelector('#' + parentDiv),
		expandButton = document.querySelector('#' + parentDiv + ' .expand');

	if (latestHeight.classList.contains('latest-steam'))
	{
		latestHeight.style.minHeight = '500px';
	}
	
	latestHeight.style.maxHeight = '100vh';
	expandButton.style.transform = 'scale(1,-1)';
	expandButton.style.height = '10vh';
	expandButton.setAttribute('onclick','minimise()');
}

function minimise()
{
	var active = document.activeElement,
		parentDiv = active.parentNode.id,
		latestHeight = document.querySelector('#' + parentDiv),
		expandButton = document.querySelector('#' + parentDiv + ' .expand');
	
	if (latestHeight.classList.contains('latest-steam'))
	{
		latestHeight.style.minHeight = '10vh';
	}
	
	latestHeight.style.maxHeight = '10vh';
	expandButton.style.transform = 'scale(1,1)';
	expandButton.style.height = '100%';
	expandButton.setAttribute('onclick','expand()');
}