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
    @level_0_ability = options['level_0_ability'] or "NullAbility"
    @level_5_ability = options['level_5_ability'] or "NullAbility"
    @level_10_ability = options['level_10_ability'] or "NullAbility"
    @level_15_ability = options['level_15_ability'] or "NullAbility"
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

  total_attack_score: ->
    @base_attack + @attack_per_level * @level