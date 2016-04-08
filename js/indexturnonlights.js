$(document).ready(readyFunction);

function readyFunction() {

// STEP 1. SET A VARIABLE THAT CAN TOGGLE ON AND OFF

	// ONCE THAT VARIABLE IS SET, YOU JUST USE THE VARIABLE NAME GOING FORWARD

	var toggle = 'off';

// STEP 2. CHECK THE VARIABLE TO SEE WHAT STATE THE LIGHT IS IN

	// (FOR EXAMPLE) IF THE TOGGLE IS OFF, THEN GIVE IT COMMANDS TO RUN TO TURN THE LIGHT ON

		$('#light-switch').click(function() {

			if (toggle === 'off') {
		
		// 1. CHANGE THE IMAGE TO THE LIGHT ON IMAGE
		// 2. CHANGE THE BUTTON TO 'TURN LIGHT OFF' TEXT
		// 3. RESET THE TOGGLE TO NOW CHANGE THE LIGHT STATUS TO ON

				toggle = 'on';
				$('body').addClass('light-on');
				$('body').removeClass('light-off');
				$('#switch-label').text('off');
				
			} else {

		// 1. CHANGE THE IMAGE TO THE LIGHT OFF IMAGE
		// 2. CHANGE THE BUTTON TO 'TURN LIGHT ON' TEXT
		// 3. RESET THE TOGGLE TO NOW CHANGE THE LIGHT STATUS TO OFF
				
				toggle = 'off';
				$('body').addClass('light-off');
				$('body').removeClass('light-on');
				$('#switch-label').text('on');
			}



	// (FOR EXAMPLE) IF THE TOGGLE IS ON, THEN GIVE IT COMMANDS TO RUN TO TURN THE LIGHT OFF

		});

}