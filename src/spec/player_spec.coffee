describe 'Player', ->

  describe 'attributes', ->

    describe 'name', ->
      it 'returns the player\'s name as a string', ->
        player = new Player(name: 'Test Player')
        expect(player.name).toEqual 'Test Player'

    describe 'level', ->
      it 'returns the player\'s level as an integer', ->
        player = new Player(level: 10)
        expect(player.level).toEqual 10

    describe 'deck', ->
      it 'returns the player\'s deck as an Array of objects', ->
        deck = [{name: 'Test Card'}]
        player = new Player(deck: deck)
        expect(player.deck).toEqual deck
      
    describe 'runes', ->
      it 'returns the player\'s runes as an Array of objects', ->
        runes = [{name: 'Test Rune'}]
        player = new Player(runes: runes)
        expect(player.runes).toEqual runes

    describe 'hand', ->
      it 'returns the player\'s hand as an Array of Card objects', ->
        deck = [{name: 'Test Card'}]
        player = new Player(deck: deck)
        player.draw_card()
        expect(player.hand instanceof Array).toBe true
        expect(player.hand[0] instanceof Card).toBe true

  describe '#draw_card', ->
    deck = [{name: 'Test Card'}]
    player = new Player(deck: deck)

    it 'removes an object at a random index from the deck', ->
      player.draw_card()
      expect(player.deck.length).toEqual 0

    it 'initializes a new Card using the object, and adds that Card to the hand', ->
      player.draw_card()
      expect(player.hand[0] instanceof Card).toBe true
      expect(player.hand[0].name).toEqual 'Test Card'