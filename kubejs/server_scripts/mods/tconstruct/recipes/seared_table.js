ServerEvents.recipes(event => {
    event.shaped('tconstruct:seared_table', [
      'B B',
      ' C ',
      'BBB'
    ], {
      B: 'tconstruct:seared_bricks',
      C: 'minecraft:copper_ingot'
    })
  })