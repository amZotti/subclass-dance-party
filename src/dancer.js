var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  setTimeout(this.step, timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
