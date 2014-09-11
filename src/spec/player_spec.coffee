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
    
    it 'does nothing if the deck is empty', ->
      player = new Player()
      player.draw_card()
      expect(player.hand.length).toEqual 0

    it 'removes an object at a random index from the deck', ->
      player = new Player(deck: [{name: 'Test Card'}])
      player.draw_card()
      expect(player.deck.length).toEqual 0

    it 'initializes a new Card using the object, and adds that Card to the hand', ->
      player = new Player(deck: [{name: 'Test Card'}])
      player.draw_card()
      expect(player.hand[0] instanceof Card).toBe true
      expect(player.hand[0].name).toEqual 'Test Card'

  describe '#play_cards', ->

    it 'decreases the wait count of all cards in the hand by 1', ->
      player = new Player()
      card = { wait: 2 }
      player.hand.push card
      player.play_cards()
      expect(player.hand[0].wait).toEqual 1

    it 'then moves all cards with wait times <= 0 to the field', ->
      player = new Player()
      card = { wait: 1 }
      player.hand.push card
      player.play_cards()
      expect(player.hand).not.toContain card
      expect(player.field).toContain card

  describe '#take_damage', ->
    it 'increases the value of damage_taken by the given amount', ->
      player = new Player()
      player.take_damage 500
      expect(player.damage_taken).toEqual 500

  describe '#attack', ->

    beforeEach ->
      @player = new Player()
      @player.opponent = new Player()
      @expected_damage = 50
      @player.field.push new Card(base_attack: @expected_damage)
      @player.opponent.field.push new Card(base_attack: @expected_damage)
      spyOn @player.opponent, 'take_damage'
      spyOn @player.opponent.field[0], 'take_damage'

    it 'damages opposing cards', ->
      @player.attack()
      expect(@player.opponent.field[0].take_damage).toHaveBeenCalledWith(@expected_damage)
      expect(@player.opponent.take_damage).not.toHaveBeenCalled()

    it 'damages the opposing player if her field contains fewer cards then the attacker', ->
      @player.opponent.field = []
      @player.attack()
      expect(@player.opponent.take_damage).toHaveBeenCalledWith(@expected_damage)

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
    