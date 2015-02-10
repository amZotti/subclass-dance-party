window.PokeDancer = function(top, left, timeBetweenSteps){ 
  Dancer.call(this, top, left, timeBetweenSteps);
  var pokemonURL = PokeDancer.prototype.getRandomPokemon();
  this.$node = $('<img class="pokedancer" src=' + pokemonURL + '></img>');
  console.log(this);
  this.setPosition(top, left);
};

PokeDancer.prototype = Object.create(Dancer.prototype);
PokeDancer.prototype.constructor = PokeDancer;

PokeDancer.prototype.pokemon = function() {
  return ['http://images6.fanpop.com/image/polls/1116000/1116583_1347464724406_full.png', 'http://th00.deviantart.net/fs70/PRE/i/2012/261/2/b/pokemon_conquest___vaporeon_by_kalas17-d5f4nup.png', 'http://assets22.pokemon.com/assets/cms2/img/pokedex/full/007.png', 'http://assets22.pokemon.com/assets/cms2/img/pokedex/full/010.png'];
};

PokeDancer.prototype.getRandomPokemon = function() {
  var pokemonURLs = PokeDancer.prototype.pokemon();
  var randomIndex = Math.floor(Math.random() * pokemonURLs.length);
  return pokemonURLs[randomIndex];
};

PokeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
