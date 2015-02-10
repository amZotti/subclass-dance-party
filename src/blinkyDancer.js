var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.oldStep = this.step;
  //this.oldStep = this.oldStep.bind(this);
  //this.oldStep();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.step = function(){
/*
Dancer.prototype.step.call(this, this.top, this.left, this.timeBetweenSteps);
*/
//Dancer.prototype.step.call(this);
setTimeout(this.step.bind(this), this.timeBetweenSteps);
this.$node.toggle();


};

BlinkyDancer.prototype.constructor = BlinkyDancer;
