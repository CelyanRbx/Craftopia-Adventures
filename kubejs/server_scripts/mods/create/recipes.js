ServerEvents.recipes(e => { 
    e.shaped('1x create:propeller', [
        ' I ', 
        'ICI', 
        ' I '  
      ], {
        C: 'create:andesite_alloy', 
        I: 'alltheores:iron_plate'   
      }
    ).id('create/crafting/kinetics/propeller')
})