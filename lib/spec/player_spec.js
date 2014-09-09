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
      var deck, player;
      deck = [
        {
          name: 'Test Card'
        }
      ];
      player = new Player({
        deck: deck
      });
      it('removes an object at a random index from the deck', function() {
        player.draw_card();
        return expect(player.deck.length).toEqual(0);
      });
      return it('initializes a new Card using the object, and adds that Card to the hand', function() {
        player.draw_card();
        expect(player.hand[0] instanceof Card).toBe(true);
        return expect(player.hand[0].name).toEqual('Test Card');
      });
    });
    describe('#take_damage', function() {
      return it('increases the value of damage_taken by the given amount', function() {
        var player;
        player = new Player;
        player.take_damage(500);
        return expect(pl.damage_taken).toEqual(500);
      });
    });
    return describe('#attack', function() {
      var card, card2, player1, player2;
      card = {
        name: 'Test Card 1',
        base_hp: 500,
        base_attack: 50
      };
      card2 = {
        name: 'Test Card 2',
        base_hp: 500,
        base_attack: 70
      };
      player1 = new Player;
      player2 = new Player;
      it('increases defending card\'s damage by adjacent attacking card\'s attack', function() {
        player1.field.push(new Card(card));
        player2.field.push(new Card(card2));
        player1.attack(player2);
        expect(player2.damage_taken).toEqual(0);
        return expect(player2.hand[0].damage_taken).toEqual(50);
      });
      return it('increases defending player\'s damage by the summed attack of unadjacent attacking cards', function() {
        player1.field.push(new Card(card));
        player1.attack(player2);
        return expect(player2.damage_taken).toEqual(50);
      });
    });
  });

}).call(this);
