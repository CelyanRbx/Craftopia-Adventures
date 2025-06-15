ServerEvents.recipes(event => {
    event.shaped('alltheores:tin_ingot', [
      'TTT',
      'TTT',
      'TTT'
    ], {
      T: 'alltheores:tin_nugget'
    }).id('alltheores:tin_ingot_from_nuggets')
  })
  