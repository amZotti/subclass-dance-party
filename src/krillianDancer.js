window.KrillianDancer = function(top, left, timeBetweenSteps){ 
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="krillian" src="http://media.animevice.com/uploads/0/2262/508877-krillin_large.png"></img>');
  this.setPosition(top, left);
};

KrillianDancer.prototype = Object.create(Dancer.prototype);
KrillianDancer.prototype.constructor = KrillianDancer;
KrillianDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
