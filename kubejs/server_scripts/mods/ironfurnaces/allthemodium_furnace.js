ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:allthemodium_furnace', [
      'AAA',
      'ENE',
      'ADA'
    ], {
      A: 'allthemodium:allthemodium_ingot',
      N: 'minecraft:netherite_scrap',
      E: 'ironfurnaces:netherite_furnace',
      D: 'minecraft:diamond_block'
    })
})