ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:emerald_furnace', [
      'GEG',
      'DFD',
      'GRG'
    ], {
      G: 'minecraft:emerald',
      E: 'mekanism:elite_control_circuit',
      D: 'minecraft:diamond_block',
      F: 'ironfurnaces:diamond_furnace',
      R: 'minecraft:redstone_block'
    })
})