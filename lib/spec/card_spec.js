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
    return describe('#kingdom', function() {
      return it('returns the card\'s kingdom as a string', function() {
        var card;
        card = new Card({
          kingdom: "Test Kingdom"
        });
        return expect(card.kingdom).toEqual("Test Kingdom");
      });
    });
  });

}).call(this);
