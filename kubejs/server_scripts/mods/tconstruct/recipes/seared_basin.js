ServerEvents.recipes(event => {
    event.shaped('tconstruct:seared_basin', [
      'B B',
      'C C',
      'BBB'
    ], {
      B: 'tconstruct:seared_bricks',
      C: 'minecraft:copper_ingot'  
    })
  })