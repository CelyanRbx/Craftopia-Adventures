ServerEvents.recipes(e => {
    e.shaped('productivebees:gene_indexer', [
        'ICI', 
        'ISI',
        'III'  
      ], {
        I: 'minecraft:iron_ingot',
        C: 'minecraft:comparator' ,
        S: 'tconstruct:crafting_station' 
      }
    ) .id('productivebees:gene_indexer') 
})