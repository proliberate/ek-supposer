window.Player = class Player
  constructor: (options) ->
    @name = options['name']
    @level = options['level']
    @deck_blueprint = options['deck']