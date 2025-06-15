ServerEvents.recipes(event => {
  event.shaped('ironfurnaces:gold_furnace', [
    'AEB',
    'CFC',
    'DGD'
  ], {
    A: 'mekanism:alloy_infused',
    B: 'create:electron_tube',
    C: 'thermal:machine_frame',
    D: 'minecraft:redstone',
    E: 'minecraft:observer',
    F: 'minecraft:furnace',
    G: 'create:andesite_alloy'
  })
})