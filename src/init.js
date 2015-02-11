


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
  
  var getRandomDancer = function() {
    return window.dancers[Math.floor(Math.random() * window.dancers.length)];
  };

  var coordinates = function(dancer) {
    var x = $(dancer.$node).position().left;
    var y = $(dancer.$node).position().top;
    return [x, y];
  };

  var randomCoordinates = function() {
    var randomDancer = getRandomDancer();
    return coordinates(randomDancer);
  };

  var specificCoordinates = function(dancer) {
    return coordinates(dancer);
  };

  var chaseDancer = function(dancer, coords) {
      $(dancer.$node).animate({ left: coords[0], top: coords[1] });
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


  $(".random-chase").click(function() {
    var dancer = getRandomDancer();
    setInterval(function() {
      var coords = randomCoordinates();
      chaseDancer(dancer, coords);
      dancer = getRandomDancer();
    }, 50);
  });

  $(".specific-chase").click(function() {
    var lead = window.dancers[0];
    var coords = specificCoordinates(lead);
    setInterval(function() {
      var dancer = getRandomDancer();
      chaseDancer(dancer, coords);
    });
  });
});
