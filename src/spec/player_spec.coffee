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

    describe 'deck_blueprint', ->
      it 'returns the deck JSON object passed at initialization', ->
        deck = {cards: []}
        player = new Player(deck: deck)
        expect(player.deck_blueprint).toEqual deck
      