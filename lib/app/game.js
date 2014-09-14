(function() {
  var Game;

  window.Game = Game = (function() {
    function Game(options) {
      this.players = new Array;
      this.players.push(new Player(options['player1']));
      this.players.push(new Player(options['player2']));
      this.players[0].opponent = this.players[1];
      this.players[1].opponent = this.players[0];
      this.round = 0;
    }

    Game.prototype.run = function() {
      var winner;
      while (this.players[this.round % 2].take_turn()) {
        this.round++;
      }
      winner = this.players[(this.round + 1) % 2];
      return console.log(winner);
    };

    return Game;

  })();

}).call(this);
