window.Card = class Card
  constructor: (options={}) ->
    @name = options['name'] or ''
    @level = options['level'] or 0
    @kingdom = options['kingdom'] or ''
    @stars = options['stars'] or 0
    @wait = options['wait'] or -1
    @base_attack = options['base_attack'] or 0
    @attack_per_level = options['attack_per_level'] or 0
    @base_hp = options['base_hp'] or 0
    @hp_per_level = options['hp_per_level'] or 0
    @level_0_ability = options['level_0_ability'] or 0
    @level_5_ability = options['level_5_ability'] or 0
    @level_10_ability = options['level_10_ability'] or 0
    @level_15_ability = options['level_15_ability'] or 0
    @damage_taken = 0
    @effects = []

  take_damage: (amount) ->
    @damage_taken += amount
    true

  max_hp: ->
    @base_hp + @hp_per_level * @level

  dead: ->
    @damage_taken >= @max_hp()

  add_effect: (effect) ->
    @effects.push effect