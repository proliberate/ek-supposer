describe 'Card', ->

  describe '#name', ->
    it 'returns the card\'s name as a string', ->
      card = new Card(name: "Test Card")
      expect(card.name).toEqual "Test Card"
      
  describe '#kingdom', ->
    it 'returns the card\'s kingdom as a string', ->
      card = new Card(kingdom: "Test Kingdom")
      expect(card.kingdom).toEqual "Test Kingdom"
      
    