(function() {
  var Player,
    __slice = [].slice;

  window.Player = Player = (function() {
    function Player(options) {
      if (options == null) {
        options = {};
      }
      this.name = options['name'] || '';
      this.level = options['level'] || 0;
      this.hp = options['hp'] || 0;
      this.deck = options['deck'] || [];
      this.runes = options['runes'] || [];
      this.opponent = options['opponent'];
      this.hand = [];
      this.field = [];
      this.damage_taken = 0;
    }

    Player.prototype.draw_card = function() {
      var card, index;
      index = Math.floor(Math.random() * this.deck.length);
      card = this.deck.splice(index, 1);
      card = new Card(card[0]);
      return this.hand.push(card);
    };

    Player.prototype.take_damage = function(amount) {
      return this.damage_taken += amount;
    };

    Player.prototype.attack = function(opponent) {
      var card, index, _i, _len, _ref, _results;
      _ref = this.field;
      _results = [];
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        card = _ref[index];
        if (index >= opponent.field.length) {
          _results.push(opponent.take_damage(card.total_attack_score()));
        } else {
          _results.push(opponent.field[index].take_damage(card.total_attack_score()));
        }
      }
      return _results;
    };

    Player.prototype.dead = function() {
      return (this.damage_taken >= this.hp) || this.out_of_cards();
    };

    Player.prototype.out_of_cards = function() {
      return this.hand.length + this.deck.length + this.field.length === 0;
    };

    Player.prototype.use_ability = function() {
      var ability, options;
      ability = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return ability.cmd(options);
    };

    return Player;

  })();

}).call(this);
