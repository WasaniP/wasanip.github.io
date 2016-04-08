//
// console.log('hello');
//
// $.ajax({
//     method:"GET",
//     url:"https://api.doughnuts.ga/doughnuts",
//     success: function(donutsBack){
//
//   var donutArray = donutsBack;
//
// for (i = 0; i< donutsBack.length; i++) {
//       console.log(donutsBack[i].flavor);
//     }
//   }
// });
// $.ajax({
//     method:"GET",
//     url:"http://www.omdbapi.com/?t=Simpsons&y=&plot=short&r=json",
//     success: function(dataSet){
//
//   var dataArray = dataSet;
//
// $("h1").text(dataSet.Title);
// $("h3").text(dataSet.Actors);
// $("h4").text(dataSet.Awards);
// $("#mp").attr("src", dataSet.Poster);

$("#submit").click(function() {
  var movieChoice = $("#input-box").val();

$.ajax({
    method:"GET",
    url:"http://www.omdbapi.com/?t=" + movieChoice + "&y=&plot=short&r=json",
    success: function(dataSet){

  var dataArray = dataSet;

$("h1").text(dataSet.Title);
$("h3").text(dataSet.Actors);
$("h4").text(dataSet.Awards);
$("#mp").attr("src", dataSet.Poster);

}
});
});
