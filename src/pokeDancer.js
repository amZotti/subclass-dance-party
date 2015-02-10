window.PokeDancer = function(top, left, timeBetweenSteps){ 
  Dancer.call(this, top, left, timeBetweenSteps);
  console.log(this);
};

PokeDancer.prototype = Object.create(Dancer.prototype);
PokeDancer.prototype.constructor = PokeDancer;
