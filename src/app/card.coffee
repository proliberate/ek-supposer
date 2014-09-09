window.Card = class Card
  constructor: (options={}) ->
    @name = options['name']
    @kingdom = options['kingdom']
    @stars = options['stars']
    @wait = options['wait']