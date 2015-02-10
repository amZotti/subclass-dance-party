$(document).ready(function(){
  window.dancers = [];

  window.createDancers = function() {
    for (var i = 0;i < 50;i++) {
      createDancer(window.PokeDancer);
    }
  };

  var lineup = function(middleOfPage) {
    $(".dancer, .pokedancer, .krillian").animate({ "left": middleOfPage });
  };

  $(".lineup").on("click", function(event) {
    var middleOfPage = $("body").width() / 2;
    lineup(middleOfPage);
  });

  var createDancer = function(fn) {
    var dancer = new fn(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer.$node);
    $('body').append(dancer.$node);
  };

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    createDancer(dancerMakerFunction);
  });
});
