ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:vibranium_furnace', [
      'VAV',
      'ENE',
      'VDV'
    ], {
      V: 'allthemodium:vibranium_ingot',
      A: 'allthemodium:allthemodium_ingot',
      N: 'minecraft:netherite_scrap',
      E: 'ironfurnaces:allthemodium_furnace',
      D: 'minecraft:diamond_block'
    })
})
  