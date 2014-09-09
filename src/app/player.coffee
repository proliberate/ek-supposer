window.Player = class Player
  constructor: (options) ->
    @name = options['name']
    @level = options['level']
    @deck = options['deck']
    @runes = options['runes']
    @hand = []

  draw_card: ->
    index = Math.floor(Math.random() * @deck.length)
    card = @deck.splice(index, 1)
    card = new Card( card[0] )
    @hand.push card