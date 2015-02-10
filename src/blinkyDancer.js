var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step;
  this.oldStep();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.step = function(){
  //setInterval(this.$node.toggle, 900);
  this.$node.toggle();

};

BlinkyDancer.prototype.constructor = BlinkyDancer;
