window.PokeDancer = function(top, left, timeBetweenSteps){ 
  Dancer.call(this, top, left, timeBetweenSteps);
  var pokemonURL = PokeDancer.prototype.getRandomPokemon();
  this.$node = $('<img class="pokedancer" src=' + pokemonURL + '></img>');
  this.setPosition(top, left);
};

PokeDancer.prototype = Object.create(Dancer.prototype);
PokeDancer.prototype.constructor = PokeDancer;

PokeDancer.prototype.pokemon = function() {
  return ['http://images6.fanpop.com/image/polls/1116000/1116583_1347464724406_full.png', 'http://3.bp.blogspot.com/-KWWIqhkdc04/T9iNoFuHX0I/AAAAAAAAO5w/LM-WMOb7lPY/s1600/146Moltres+pokemon+red+and+blue+legendary+fire+pokemon.png', 'http://guidesmedia.ign.com/guides/059687/images/blackwhite/pokemans_144.gif', 'http://guidesmedia.ign.com/guides/059687/images/blackwhite/pokemans_144.gif'];
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
