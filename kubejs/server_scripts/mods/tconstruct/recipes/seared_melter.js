ServerEvents.recipes(event => {
    event.shaped('tconstruct:seared_melter', [
      'BSB',
      'GFG',
      'BBB'
    ], {
      B: 'tconstruct:seared_bricks',
      S: 'minecraft:glass',
      G: 'minecraft:copper_ingot',
      F: 'minecraft:blast_furnace' 
    })
  })