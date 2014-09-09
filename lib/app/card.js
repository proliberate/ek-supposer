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
      this.level_0_ability = options['level_0_ability'] || 0;
      this.level_5_ability = options['level_5_ability'] || 0;
      this.level_10_ability = options['level_10_ability'] || 0;
      this.level_15_ability = options['level_15_ability'] || 0;
      this.damage_taken = 0;
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

    return Card;

  })();

}).call(this);
