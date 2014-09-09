window.Player = class Player
  constructor: (options={}) ->
    @name = options['name'] or ''
    @level = options['level'] or 0
    @deck = options['deck'] or []
    @runes = options['runes'] or []
    @hand = []
    @field = []
    @damage_taken = 0

  draw_card: ->
    index = Math.floor(Math.random() * @deck.length)
    card = @deck.splice(index, 1)
    card = new Card( card[0] )
    @hand.push card

  take_damage: (amount) ->
    @damage_taken += amount

  attack: (opponent) ->
    for card, index in @field
      if index >= opponent.field.length
        opponent.take_damage card.total_attack_score()
      else
        opponent.field[index].take_damage card.total_attack_score()