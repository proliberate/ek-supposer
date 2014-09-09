(function() {
  var Card;

  window.Card = Card = (function() {
    function Card(options) {
      if (options == null) {
        options = {};
      }
      this.name = options['name'];
      this.kingdom = options['kingdom'];
      this.stars = options['stars'];
      this.wait = options['wait'];
      this.base_attack = options['base_attack'];
      this.attack_per_level = options['attack_per_level'];
      this.base_hp = options['base_hp'];
      this.hp_per_level = options['hp_per_level'];
      this.level_0_ability = options['level_0_ability'];
      this.level_5_ability = options['level_5_ability'];
      this.level_10_ability = options['level_10_ability'];
      this.level_15_ability = options['level_15_ability'];
    }

    return Card;

  })();

}).call(this);
