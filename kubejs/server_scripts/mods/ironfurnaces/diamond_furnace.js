ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:diamond_furnace', [
      'DED',
      'GFG',
      'DRD'
    ], {
      D: 'minecraft:diamond',
      E: 'mekanism:alloy_reinforced',
      G: 'create:andesite_alloy',
      F: 'ironfurnaces:gold_furnace',
      R: 'minecraft:redstone_block'
    })
})