window.PokeDancer = function(top, left, timeBetweenSteps){ 
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="pokedancer" src="http://static.giantbomb.com/uploads/scale_small/0/6087/2438704-1202149925_t.png"></img>');
  this.setPosition(top, left);
};

PokeDancer.prototype = Object.create(Dancer.prototype);
PokeDancer.prototype.constructor = PokeDancer;
PokeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
