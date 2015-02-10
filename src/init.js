$(document).ready(function(){
  window.dancers = [];

  var lineup = function(middleOfPage) {
    $(".dancer, .pokedancer, .krillian").animate({ "left": middleOfPage });
  };

  $(".lineup").on("click", function(event) {
    var middleOfPage = $("body").width() / 2;
    lineup(middleOfPage);
  });

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer.$node);
    $('body').append(dancer.$node);
  });
});
