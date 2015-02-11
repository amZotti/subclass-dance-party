


$(document).ready(function(){
  window.dancers = [];

  window.createDancers = function() {
    for (var i = 0;i < 50;i++) {
      createDancer(window.PokeDancer);
    }
  };

  var createDancer = function(fn) {
    var dancer = new fn(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    dancer.step();
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  };

  $(".lineup").click(function() {
    for (var i = 0;i < window.dancers.length;i++) {
      window.dancers[i].lineUp();
    }
  });

  $(".addDancerButton").click(function() {
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    createDancer(dancerMakerFunction);
  });
});
