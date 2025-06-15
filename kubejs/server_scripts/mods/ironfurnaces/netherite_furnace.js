ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:netherite_furnace', [
      'SNS',
      'OFO',
      'DBD'
    ], {
      S: 'minecraft:netherite_scrap',
      N: 'minecraft:nether_star',
      O: 'minecraft:obsidian',
      F: 'ironfurnaces:obsidian_furnace',
      D: 'minecraft:diamond_block',
      B: 'minecraft:blast_furnace'
    })
})