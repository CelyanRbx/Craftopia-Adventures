ServerEvents.recipes(event => {
    event.shaped('tconstruct:seared_heater', [
      'BFB',
      'BCB',
      'BBB'
    ], {
      B: 'tconstruct:seared_bricks',
      F: 'minecraft:furnace',
      C: 'minecraft:coal'
    })
  })