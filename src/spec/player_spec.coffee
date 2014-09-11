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

  describe '#play_cards', ->

    player = new Player()

    it 'decreases the wait count of all cards in the hand by 1', ->
      player.hand.push { wait: 2 }
      player.play_cards()
      expect(player.hand[0].wait).toEqual 1

    it 'then moves all cards with wait times <= 0 to the field', ->
      player.hand.push { wait: 1 }
      player.play_cards()
      expect(player.hand.length).toEqual 0
      expect(player.field[0]).toBeDefined()

  describe '#take_damage', ->
    it 'increases the value of damage_taken by the given amount', ->
      player = new Player()
      player.take_damage 500
      expect(player.damage_taken).toEqual 500

  describe '#attack', ->
    card = {base_attack: 50 }
    player1 = new Player()
    player2 = new Player()

    it 'calls opposite_card.take_damage(attacking_card.total_attack_score())', ->
      player1.field.push new Card(card)
      player2.field.push new Card(card)
      spyOn player2.field[0], 'take_damage'
      spyOn player2, 'take_damage'
      player1.attack(player2)
      expect(player2.field[0].take_damage).toHaveBeenCalledWith(50)
      expect(player2.take_damage).not.toHaveBeenCalled()

    it 'calls opponent.take_damage(attacking_card.total_attack_score()) where there is no opposite card', ->
      player1.field.push new Card(card)
      player1.attack(player2)
      spyOn player2, 'take_damage'
      player1.attack(player2)
      expect(player2.take_damage).toHaveBeenCalledWith(50)

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
    