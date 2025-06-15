ServerEvents.recipes(e => {
// Glowing Helmet
e.shaped('cyclic:glowing_helmet', [
    'AGA', 
    'A A'  
  ], {
    A: 'kubejs:amber_ingot', 
    G: 'minecraft:glowstone' 
  }).id('craftopia:cyclic/glowing_helmet')
})

ServerEvents.recipes(e => {
// Solidifier
e.shaped('cyclic:solidifier', [
  'LQL', 
  'GCG',
  'OOO'  
  ], {
   L: 'minecraft:lapis_block', 
   Q: 'minecraft:quartz',
   G: '#forge:glass/colorless',
   C: '#forge:cobblestone',
   O: 'quark:obsidian_pressure_plate'   
  }).id('craftopia:cyclic/solidifier')
})

ServerEvents.recipes(e => {
// Ender Item Shelf
e.shaped('cyclic:ender_item_shelf', [
  'PPP', 
  'PCP',
  'PPP'  
  ], {
   P: '#minecraft:planks',
   C: '#forge:chests'  
  }).id('craftopia:cyclic/ender_item_shelf')
})

ServerEvents.recipes(e => {
  // Item Infinite
  e.shaped('cyclic:item_infinite', [
    'EEE', 
    'EEE',
    'EEE'  
    ], {
     E: 'minecraft:emerald_block'  
    }).id('craftopia:cyclic/item_infinite')
  })

ServerEvents.recipes(e => {
  // Prospector
  e.shaped('cyclic:prospector', [
      ' GD', 
      ' CG',
      'C  '  
      ], {
       D: 'minecraft:diamond',
       C: 'minecraft:cobblestone',
       G: 'minecraft:light_blue_stained_glass'  
      }).id('craftopia:cyclic/prospector')
})  