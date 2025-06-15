ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:obsidian_furnace', [
      'OBO',
      'EFE',
      'OCO'
    ], {
      O: 'minecraft:obsidian',
      B: 'minecraft:blast_furnace',
      E: 'mekanism:alloy_reinforced',
      F: 'ironfurnaces:emerald_furnace',
      C: 'minecraft:crying_obsidian'
    })
})