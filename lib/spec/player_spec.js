(function() {
  describe('Player', function() {
    describe('attributes', function() {
      describe('name', function() {
        return it('returns the player\'s name as a string', function() {
          var player;
          player = new Player({
            name: 'Test Player'
          });
          return expect(player.name).toEqual('Test Player');
        });
      });
      describe('level', function() {
        return it('returns the player\'s level as an integer', function() {
          var player;
          player = new Player({
            level: 10
          });
          return expect(player.level).toEqual(10);
        });
      });
      describe('hp', function() {
        return it("returns the player's HP as an integer", function() {
          var player;
          player = new Player({
            hp: 1000
          });
          return expect(player.hp).toEqual(1000);
        });
      });
      describe('deck', function() {
        return it('returns the player\'s deck as an Array of objects', function() {
          var deck, player;
          deck = [
            {
              name: 'Test Card'
            }
          ];
          player = new Player({
            deck: deck
          });
          return expect(player.deck).toEqual(deck);
        });
      });
      describe('runes', function() {
        return it('returns the player\'s runes as an Array of objects', function() {
          var player, runes;
          runes = [
            {
              name: 'Test Rune'
            }
          ];
          player = new Player({
            runes: runes
          });
          return expect(player.runes).toEqual(runes);
        });
      });
      return describe('hand', function() {
        return it('returns the player\'s hand as an Array of Card objects', function() {
          var deck, player;
          deck = [
            {
              name: 'Test Card'
            }
          ];
          player = new Player({
            deck: deck
          });
          player.draw_card();
          expect(player.hand instanceof Array).toBe(true);
          return expect(player.hand[0] instanceof Card).toBe(true);
        });
      });
    });
    describe('properties', function() {
      return describe('damage_taken', function() {
        return it('returns the amount of damage the player has taken as an integer', function() {
          var player;
          player = new Player;
          player.take_damage(500);
          return expect(player.damage_taken).toEqual(500);
        });
      });
    });
    describe('#draw_card', function() {
      it('does nothing if the deck is empty', function() {
        var player;
        player = new Player();
        player.draw_card();
        return expect(player.hand.length).toEqual(0);
      });
      it('removes an object at a random index from the deck', function() {
        var player;
        player = new Player({
          deck: [
            {
              name: 'Test Card'
            }
          ]
        });
        player.draw_card();
        return expect(player.deck.length).toEqual(0);
      });
      return it('initializes a new Card using the object, and adds that Card to the hand', function() {
        var player;
        player = new Player({
          deck: [
            {
              name: 'Test Card'
            }
          ]
        });
        player.draw_card();
        expect(player.hand[0] instanceof Card).toBe(true);
        return expect(player.hand[0].name).toEqual('Test Card');
      });
    });
    describe('#play_cards', function() {
      it('decreases the wait count of all cards in the hand by 1', function() {
        var card, player;
        player = new Player();
        card = {
          wait: 2
        };
        player.hand.push(card);
        player.play_cards();
        return expect(player.hand[0].wait).toEqual(1);
      });
      return it('then moves all cards with wait times <= 0 to the field', function() {
        var card, player;
        player = new Player();
        card = {
          wait: 1
        };
        player.hand.push(card);
        player.play_cards();
        expect(player.hand).not.toContain(card);
        return expect(player.field).toContain(card);
      });
    });
    describe('#take_damage', function() {
      return it('increases the value of damage_taken by the given amount', function() {
        var player;
        player = new Player();
        player.take_damage(500);
        return expect(player.damage_taken).toEqual(500);
      });
    });
    describe('#attack', function() {
      beforeEach(function() {
        this.player = new Player();
        this.player.opponent = new Player();
        this.expected_damage = 50;
        this.player.field.push(new Card({
          base_attack: this.expected_damage
        }));
        this.player.opponent.field.push(new Card({
          base_attack: this.expected_damage
        }));
        spyOn(this.player.opponent, 'take_damage');
        return spyOn(this.player.opponent.field[0], 'take_damage');
      });
      it('damages opposing cards', function() {
        this.player.attack();
        expect(this.player.opponent.field[0].take_damage).toHaveBeenCalledWith(this.expected_damage);
        return expect(this.player.opponent.take_damage).not.toHaveBeenCalled();
      });
      return it('damages the opposing player if her field contains fewer cards then the attacker', function() {
        this.player.opponent.field = [];
        this.player.attack();
        return expect(this.player.opponent.take_damage).toHaveBeenCalledWith(this.expected_damage);
      });
    });
    describe('#dead', function() {
      it('returns true if damage_taken exceeds max_hp', function() {
        var player;
        player = new Player({
          base_hp: 100
        });
        player.take_damage(100);
        return expect(player.dead()).toBe(true);
      });
      return it('returns true if the player has no cards', function() {
        var player;
        player = new Player();
        expect(player.out_of_cards()).toBe(true);
        return expect(player.dead()).toBe(true);
      });
    });
    return describe('#out_of_cards', function() {
      return it("returns true if the player has no cards", function() {
        var player;
        player = new Player();
        expect(player.deck.length).toEqual(0);
        expect(player.hand.length).toEqual(0);
        expect(player.field.length).toEqual(0);
        return expect(player.out_of_cards()).toBe(true);
      });
    });
  });

}).call(this);
