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

    describe 'hp', ->
      it "returns the player's HP as an integer", ->
        player = new Player(hp: 1000)
        expect(player.hp).toEqual 1000

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
      player = new Player()
      player.take_damage 500
      expect(player.damage_taken).toEqual 500

  describe '#attack', ->
    card = { name: 'Test Card 1', base_hp: 500, base_attack: 50 }
    card2 = { name: 'Test Card 2', base_hp: 500, base_attack: 70 }
    player1 = new Player()
    player2 = new Player()

    it 'increases defending card\'s damage_taken by adjacent attacking card\'s attack', ->
      player1.field.push new Card(card)
      player2.field.push new Card(card2)
      player1.attack(player2)
      expect(player2.damage_taken).toEqual 0
      expect(player2.field[0].damage_taken).toEqual 50


    it 'increases defending player\'s damage_taken by the summed attack of non-adjacent attacking cards', ->
      player1.field.push new Card(card)
      player1.attack(player2)
      expect(player2.damage_taken).toEqual 50

  describe '#take_turn', ->
    player1 = new Player()
    player2 = new Player()
    it 'takes a turn'

  describe '#dead', ->
    it 'returns true if damage_taken exceeds max_hp', ->
      player = new Player(base_hp: 100)
      player.take_damage 100
      expect(player.dead()).toBe true

    it 'returns true if the player has no cards', ->
      player = new Player()
      expect(player.out_of_cards()).toBe true
      expect(player.dead()).toBe true

  describe '#out_of_cards', ->
    it "returns true if the player has no cards", ->
      player = new Player()
      expect(player.deck.length).toEqual 0
      expect(player.hand.length).toEqual 0
      expect(player.field.length).toEqual 0
      expect(player.out_of_cards()).toBe true