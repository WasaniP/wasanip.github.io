//Implement the red light using jQuery. Don't forget to add the script tags.

$("#stop-button").click(illuminateRed);


function illuminateRed() {
	clearLights();
	$("#stop-light").css("background-color", "red");
}

$("#slow-button").click(illuminateYellow);

function illuminateYellow() {
	clearLights();
	$("#slow-light").css("background-color", "yellow");
}

$("#go-button").click(illuminateGreen);

function illuminateGreen() {
	clearLights();
	$("#go-light").css("background-color", "green");
}

function clearLights() {
	$(".bulb"). css("background-color", "black");
}
	
//Create a function called clearLights that blacks out the lights
