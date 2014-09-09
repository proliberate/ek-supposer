(function() {
  var Player;

  window.Player = Player = (function() {
    function Player(options) {
      this.name = options['name'];
      this.level = options['level'];
      this.deck_blueprint = options['deck'];
    }

    return Player;

  })();

}).call(this);
