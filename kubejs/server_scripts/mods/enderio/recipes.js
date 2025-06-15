ServerEvents.recipes(e => {
    e.shaped('enderio:creative_power', [
        'CCC', 
        'CEC',
        'CCC'  
      ], {
        C: 'enderio:conductive_alloy_block',
        E: 'mekanism:creative_energy_cube'  
      }
    ) .id('craftopia:enderio/creative_power') 
})