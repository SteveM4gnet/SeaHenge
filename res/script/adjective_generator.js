function adjGenerator()
{
	var adjNumber = Math.floor(Math.random() * 8);
	var adjGet = "adj" + adjNumber;
	var adjective = document.getElementById(adjGet).innerHTML;
	document.getElementById("adjective").innerHTML=adjective;
}