(function() {
  describe('Player', function() {
    return describe('attributes', function() {
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
      return describe('deck_blueprint', function() {
        return it('returns the deck JSON object passed at initialization', function() {
          var deck, player;
          deck = {
            cards: []
          };
          player = new Player({
            deck: deck
          });
          return expect(player.deck_blueprint).toEqual(deck);
        });
      });
    });
  });

}).call(this);
