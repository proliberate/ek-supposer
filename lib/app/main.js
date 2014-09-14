(function() {
  var Card;

  window.Card = Card = (function() {
    function Card(options) {
      if (options == null) {
        options = {};
      }
      this.name = options['name'] || '';
      this.level = options['level'] || 0;
      this.kingdom = options['kingdom'] || '';
      this.stars = options['stars'] || 0;
      this.wait = options['wait'] || -1;
      this.base_attack = options['base_attack'] || 0;
      this.attack_per_level = options['attack_per_level'] || 0;
      this.base_hp = options['base_hp'] || 0;
      this.hp_per_level = options['hp_per_level'] || 0;
      this.level_0_ability = options['level_0_ability'] || "NullAbility";
      this.level_5_ability = options['level_5_ability'] || "NullAbility";
      this.level_10_ability = options['level_10_ability'] || "NullAbility";
      this.level_15_ability = options['level_15_ability'] || "NullAbility";
      this.damage_taken = 0;
      this.effects = [];
    }

    Card.prototype.take_damage = function(amount) {
      this.damage_taken += amount;
      return true;
    };

    Card.prototype.max_hp = function() {
      return this.base_hp + this.hp_per_level * this.level;
    };

    Card.prototype.dead = function() {
      return this.damage_taken >= this.max_hp();
    };

    Card.prototype.add_effect = function(effect) {
      return this.effects.push(effect);
    };

    Card.prototype.total_attack_score = function() {
      return this.base_attack + this.attack_per_level * this.level;
    };

    return Card;

  })();

}).call(this);

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

(function() {
  var Player;

  window.abilities = {
    NullAbility: function() {}
  };

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
      this.cemetery = [];
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

    Player.prototype.attack = function() {
      var card, defender, index, _i, _len, _ref, _results;
      _ref = this.field;
      _results = [];
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        card = _ref[index];
        if (index >= this.opponent.field.length) {
          _results.push(this.opponent.take_damage(card.total_attack_score()));
        } else {
          defender = this.opponent.field[index];
          defender.take_damage(card.total_attack_score());
          if (defender.dead()) {
            _results.push(this.opponent.cemetery.push(this.opponent.field.splice(index, 1)));
          } else {
            _results.push(void 0);
          }
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
      this.play_cards();
      this.draw_card();
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
