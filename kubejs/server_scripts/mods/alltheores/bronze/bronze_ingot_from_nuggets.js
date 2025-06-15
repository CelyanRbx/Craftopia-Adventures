ServerEvents.recipes(event => {
    event.shaped('alltheores:bronze_ingot', [
      'BBB',
      'BBB',
      'BBB'
    ], {
      B: 'alltheores:bronze_nugget'
    }).id('alltheores:bronze_ingot_from_nuggets')
  })
  