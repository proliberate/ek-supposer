(function() {
  var Player;

  window.Player = Player = (function() {
    function Player(options) {
      this.name = options['name'];
      this.level = options['level'];
      this.deck = options['deck'];
      this.runes = options['runes'];
      this.hand = [];
    }

    Player.prototype.draw_card = function() {
      var card, index;
      index = Math.floor(Math.random() * this.deck.length);
      card = this.deck.splice(index, 1);
      card = new Card(card[0]);
      return this.hand.push(card);
    };

    return Player;

  })();

}).call(this);
