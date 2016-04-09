$(document).ready(readyFunction);

function readyFunction(){

$("form").submit(function () {
  event.preventDefault();
  var newCity = $("#city-type").val().toLowerCase();


  if (newCity === "los angeles" || newCity === "la"){
    $("body").removeClass();
    $("body").addClass("la");
  }
  else if (newCity === "sydney" || newCity === "sy"){
    $("body").removeClass();
    $("body").addClass("sydney");
  }
  else if (newCity === "nyc" || newCity === "ny" || newCity === "new york city" ){
    $("body").removeClass();
    $("body").addClass("nyc");
  }
  else if (newCity === "san fransisco" || newCity === "sf"){
    $("body").removeClass();
    $("body").addClass("sf");
  }
  else if (newCity === "austin"){
    $("body").removeClass();
    $("body").addClass("austin");
  }
});

}
