describe 'Card', ->

  describe '#name', ->
    it 'returns the card\'s name as a string', ->
      card = new Card(name: "Test Card")
      expect(card.name).toEqual "Test Card"
      
  describe '#kingdom', ->
    it 'returns the card\'s kingdom as a string', ->
      card = new Card(kingdom: "Test Kingdom")
      expect(card.kingdom).toEqual "Test Kingdom"
      
  describe '#stars', ->
    it 'returns the card\'s star count as an integer', ->
      card = new Card(stars: 5)
      expect(card.stars).toEqual 5

  describe '#wait', ->
    it 'returns the card\'s original wait time as an integer', ->
      card = new Card(wait: 6)
      expect(card.wait).toEqual 6

  describe '#base_attack', ->
    it 'returns the card\'s base attack as an integer', ->
      card = new Card(base_attack: 500)
      expect(card.base_attack).toEqual 500

  describe '#attack_per_level', ->
    it 'returns the amount the card\'s attack increases per level as an integer', ->
      card = new Card(attack_per_level: 32)
      expect(card.attack_per_level).toEqual 32

  describe '#base_hp', ->
    it 'returns the card\'s base HP as an integer', ->
      card = new Card(base_hp: 500)
      expect(card.base_hp).toEqual 500

  describe '#hp_per_level', ->
    it 'returns the amount the card\'s HP increases per level as an integer', ->
      card = new Card(hp_per_level: 32)
      expect(card.hp_per_level).toEqual 32

  describe '#level_0_ability', ->
    it 'returns the name of the card\'s level 0 ability as a string', ->
      card = new Card(level_0_ability: "Test Ability 1")
      expect(card.level_0_ability).toEqual "Test Ability 1"
      
  describe '#level_5_ability', ->
    it 'returns the name of the card\'s level 5 ability as a string', ->
      card = new Card(level_0_ability: "Test Ability 2")
      expect(card.level_0_ability).toEqual "Test Ability 2"

  describe '#level_10_ability', ->
    it 'returns the name of the card\'s level 10 ability as a string', ->
      card = new Card(level_0_ability: "Test Ability 3")
      expect(card.level_0_ability).toEqual "Test Ability 3"

  describe '#level_15_ability', ->
    it 'returns the name of the card\'s level 15 ability as a string', ->
      card = new Card(level_0_ability: "Test Ability 4")
      expect(card.level_0_ability).toEqual "Test Ability 4"
    
      
      
    
      
    
      
    