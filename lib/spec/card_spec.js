(function() {
  describe('Card', function() {
    describe('#name', function() {
      return it('returns the card\'s name as a string', function() {
        var card;
        card = new Card({
          name: "Test Card"
        });
        return expect(card.name).toEqual("Test Card");
      });
    });
    describe('#kingdom', function() {
      return it('returns the card\'s kingdom as a string', function() {
        var card;
        card = new Card({
          kingdom: "Test Kingdom"
        });
        return expect(card.kingdom).toEqual("Test Kingdom");
      });
    });
    describe('#stars', function() {
      return it('returns the card\'s star count as an integer', function() {
        var card;
        card = new Card({
          stars: 5
        });
        return expect(card.stars).toEqual(5);
      });
    });
    describe('#wait', function() {
      return it('returns the card\'s original wait time as an integer', function() {
        var card;
        card = new Card({
          wait: 6
        });
        return expect(card.wait).toEqual(6);
      });
    });
    describe('#base_attack', function() {
      return it('returns the card\'s base attack as an integer', function() {
        var card;
        card = new Card({
          base_attack: 500
        });
        return expect(card.base_attack).toEqual(500);
      });
    });
    describe('#attack_per_level', function() {
      return it('returns the amount the card\'s attack increases per level as an integer', function() {
        var card;
        card = new Card({
          attack_per_level: 32
        });
        return expect(card.attack_per_level).toEqual(32);
      });
    });
    describe('#base_hp', function() {
      return it('returns the card\'s base HP as an integer', function() {
        var card;
        card = new Card({
          base_hp: 500
        });
        return expect(card.base_hp).toEqual(500);
      });
    });
    describe('#hp_per_level', function() {
      return it('returns the amount the card\'s HP increases per level as an integer', function() {
        var card;
        card = new Card({
          hp_per_level: 32
        });
        return expect(card.hp_per_level).toEqual(32);
      });
    });
    describe('#level_0_ability', function() {
      return it('returns the name of the card\'s level 0 ability as a string', function() {
        var card;
        card = new Card({
          level_0_ability: "Test Ability 1"
        });
        return expect(card.level_0_ability).toEqual("Test Ability 1");
      });
    });
    describe('#level_5_ability', function() {
      return it('returns the name of the card\'s level 5 ability as a string', function() {
        var card;
        card = new Card({
          level_0_ability: "Test Ability 2"
        });
        return expect(card.level_0_ability).toEqual("Test Ability 2");
      });
    });
    describe('#level_10_ability', function() {
      return it('returns the name of the card\'s level 10 ability as a string', function() {
        var card;
        card = new Card({
          level_0_ability: "Test Ability 3"
        });
        return expect(card.level_0_ability).toEqual("Test Ability 3");
      });
    });
    return describe('#level_15_ability', function() {
      return it('returns the name of the card\'s level 15 ability as a string', function() {
        var card;
        card = new Card({
          level_0_ability: "Test Ability 4"
        });
        return expect(card.level_0_ability).toEqual("Test Ability 4");
      });
    });
  });

}).call(this);
