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
    return describe('#draw_card', function() {
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
  });

}).call(this);
