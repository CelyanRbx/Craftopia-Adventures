ServerEvents.recipes(e => {
  e.shaped('cobblefordays:tier_5', [
    'SNS',
    'GTG',
    'DBD'
  ], {
    S: 'minecraft:nether_star',             
    N: 'create:precision_mechanism',        
    G: 'minecraft:glass',
    T: 'cobblefordays:tier_4',              
    D: 'minecraft:diamond_block',
    B: 'minecraft:beacon'                   
  })
})