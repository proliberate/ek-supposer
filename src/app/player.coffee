window.Player = class Player
  constructor: (options={}) ->
    @name = options['name'] or ''
    @level = options['level'] or 0
    @hp = options['hp'] or 0
    @deck = options['deck'] or []
    @runes = options['runes'] or []
    @opponent = options['opponent']
    @hand = []
    @field = []
    @damage_taken = 0

  draw_card: ->
    unless @deck.length <= 0
      index = Math.floor(Math.random() * @deck.length)
      card = @deck.splice(index, 1)
      card = new Card( card[0] )
      @hand.push card

  play_cards: ->
    for card, index in @hand
      card.wait--
      @field.push @hand.splice(index,1)[0] if card.wait <= 0

  take_damage: (amount) ->
    @damage_taken += amount

  attack: (opponent) ->
    for card, index in @field
      if index >= opponent.field.length
        opponent.take_damage card.total_attack_score()
      else
        opponent.field[index].take_damage card.total_attack_score()

  dead: ->
    (@damage_taken >= @hp) or @out_of_cards()

  out_of_cards: ->
    @hand.length + @deck.length + @field.length == 0

  take_turn: ->
    return false if @dead()
    @draw_card()
    @play_cards()
    window.abilities[card.level_0_ability]() for card in @field
    window.abilities[card.level_5_ability]() for card in @field
    window.abilities[card.level_10_ability]() for card in @field
    window.abilities[card.level_15_ability]() for card in @field
    @attack()
    return not @dead()