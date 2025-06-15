ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:unobtainium_furnace', [
      'UUU',
      'VFV',
      'UDU'
    ], {
      U: 'allthemodium:unobtainium_ingot',
      V: 'allthemodium:vibranium_ingot',
      F: 'ironfurnaces:vibranium_furnace',
      D: 'minecraft:diamond_block'
    })
})