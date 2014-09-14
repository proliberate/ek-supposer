window.Game = class Game
  constructor: (options) ->
    @players = new Array
    @players.push new Player(options['player1'])
    @players.push new Player(options['player2'])
    @players[0].opponent = @players[1]
    @players[1].opponent = @players[0]
    @round = 0

  run: ->
    @round++ while @players[@round % 2].take_turn()
    winner = @players[(@round + 1) % 2]
    console.log winner