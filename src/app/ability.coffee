window.Ability = class Ability
  constructor: (@cmd=( (options={}) -> ), options={}) ->

  activate: (player, options={}) ->
    @cmd.call(player, options)