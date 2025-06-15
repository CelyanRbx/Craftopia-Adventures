ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:million_furnace', [
      'RGR',
      'BFB',
      'RDR'
    ], {
      R: 'minecraft:redstone_block',
      G: 'minecraft:emerald_block',
      B: 'minecraft:lapis_block',
      F: 'ironfurnaces:unobtainium_furnace',
      D: 'minecraft:diamond_block'
    })
})