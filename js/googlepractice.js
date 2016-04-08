
// $("#stop-button").click(
//     function() {
//         $("#stop-light").css("background-color", "red");
//     }
// );
// console.log("hello");


$("#name").hover(
	function(){
		$("#name").css("color", "#4285F4" );
		$("#name").css("text-decoration", "underline");
	},
	function () {
		$("#name").css("color", "black");
		$("#name").css("text-decoration", "none");
	}
);

$("#mail").hover(
	function(){
		$("#mail").css("color", "#EA4335" );
		$("#mail").css("text-decoration", "underline");
	},
	function () {
		$("#mail").css("color", "black");
		$("#mail").css("text-decoration", "none");
	}
);

$("#images").hover(
	function(){
		$("#images").css("color", "#FBBC05" );
		$("#images").css("text-decoration", "underline");
	}, 
	function () {
		$("#images").css("color", "black");
		$("#images").css("text-decoration", "none");
	}
);

$("#google").click(
	function() {
		$(".footer").toggleClass("footertwo");
	}
);

$("#lucky").click(
	function() {
		$("#sectiontwo").attr("src", "https://upload.wikimedia.org/wikipedia/commons/a/a0/Manhattan_Pier.jpg");
		console.log("hello")
	}
);
