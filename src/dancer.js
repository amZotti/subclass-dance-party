window.Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.left = left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  window.test = this;
};

Dancer.prototype.lineUp = function() {
  var middleOfPage = $("body").width() / 2;
  $(this.$node).animate({ "left": middleOfPage });
};

Dancer.prototype.step = function(){
  window.setTimeout(this.step.bind(this), this.timeBetweenSteps);
  step();
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.$node.toggle();
};
