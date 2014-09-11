(function() {
  var Player;

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
      if (!(this.deck.length <= 0)) {
        index = Math.floor(Math.random() * this.deck.length);
        card = this.deck.splice(index, 1);
        card = new Card(card[0]);
        return this.hand.push(card);
      }
    };

    Player.prototype.play_cards = function() {
      var card, index, _i, _len, _ref, _results;
      _ref = this.hand;
      _results = [];
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        card = _ref[index];
        card.wait--;
        if (card.wait <= 0) {
          _results.push(this.field.push(this.hand.splice(index, 1)[0]));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

    Player.prototype.take_turn = function() {
      var card, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1, _ref2, _ref3;
      if (this.dead()) {
        return false;
      }
      this.draw_card();
      this.play_cards();
      _ref = this.field;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        card = _ref[_i];
        window.abilities[card.level_0_ability]();
      }
      _ref1 = this.field;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        card = _ref1[_j];
        window.abilities[card.level_5_ability]();
      }
      _ref2 = this.field;
      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
        card = _ref2[_k];
        window.abilities[card.level_10_ability]();
      }
      _ref3 = this.field;
      for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
        card = _ref3[_l];
        window.abilities[card.level_15_ability]();
      }
      this.attack();
      return !this.dead();
    };

    return Player;

  })();

}).call(this);
