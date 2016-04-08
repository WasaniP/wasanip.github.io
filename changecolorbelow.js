$(document).ready(function () {




console.log("hello");

$(".change-color").click(function() {
  console.log("hello2");

  var color = $("#background-color").val();
  console.log(color);

  $("body").css("backgroundColor", color);

event.preventDefault();

});

});
