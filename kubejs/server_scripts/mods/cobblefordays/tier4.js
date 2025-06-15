ServerEvents.recipes(e => {
  e.shaped('cobblefordays:tier_4', [
    'ESE',
    'GTG',
    'BMB'
  ], {
    E: 'minecraft:emerald',
    S: 'create:sturdy_sheet',        
    G: 'minecraft:glass',
    T: 'cobblefordays:tier_3',
    B: 'minecraft:blaze_rod',
    M: 'mekanism:steel_casing'            
  })
})