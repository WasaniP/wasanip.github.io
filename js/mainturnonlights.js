$(document).ready(readyFunction);

function readyFunction() {

	var lightStatus = 'on';
	
	$('#light-switch').click(function(){

		if (lightStatus === 'on') {
			lightStatus = 'off';
			$('body').addClass('light-on');
			$('body').removeClass('light-off');
			$('#switch-label').text('off');
		}
		else {
			lightStatus = 'on';
			$('body').addClass('light-off');
			$('body').removeClass('light-on');
			$('#switch-label').text('on');
		}

	});


}