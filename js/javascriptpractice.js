$(document).ready(function () {

var changeNumber = 0;

$("#first-add").click(function() {
  changeNumber +=1;
  $("#showNumber").text(changeNumber);
});

$("#second-add").click(function() {
  changeNumber +=5;
  $("#showNumber").text(changeNumber);
});

$("#third-add").click(function() {
  changeNumber +=10;
  $("#showNumber").text(changeNumber);
});

$("#reset").click(function() {
  changeNumber =0;
  $("#showNumber").text(changeNumber);
});

});
