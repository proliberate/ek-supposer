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

  describe 'properties', ->

    describe 'damage_taken', ->
      it 'returns the amount of damage the player has taken as an integer', ->
        player = new Player
        player.take_damage 500
        expect(player.damage_taken).toEqual 500

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

  describe '#take_damage', ->
    it 'increases the value of damage_taken by the given amount', ->
      player = new Player
      player.take_damage 500
      expect(pl.damage_taken).toEqual 500

  describe '#attack', ->
    card = { name: 'Test Card 1', base_hp: 500, base_attack: 50 }
    card2 = { name: 'Test Card 2', base_hp: 500, base_attack: 70 }
    player1 = new Player
    player2 = new Player

    it 'increases defending card\'s damage by adjacent attacking card\'s attack', ->
      player1.field.push new Card(card)
      player2.field.push new Card(card2)
      player1.attack(player2)
      expect(player2.damage_taken).toEqual 0
      expect(player2.hand[0].damage_taken).toEqual 50


    it 'increases defending player\'s damage by the summed attack of unadjacent attacking cards', ->
      player1.field.push new Card(card)
      player1.attack(player2)
      expect(player2.damage_taken).toEqual 50