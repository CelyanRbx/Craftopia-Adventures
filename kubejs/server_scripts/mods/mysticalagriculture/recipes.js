let cropAdjust = [
    {crop:"steel", tier:"imperium"},
    {crop:"bronze", tier:"tertium"},
    {crop:"brass", tier:"tertium", block:"alltheores:brass_block"},
    {crop:"nitro_crystal", tier:"insanium"},
    {crop:"spirited_crystal", tier:"supremium"},
    {crop:"niotic_crystal", tier:"supremium"},
    {crop:"blazing_crystal", tier:"imperium"},
    {crop:"energized_steel", tier:"imperium"},
    {crop:"certus_quartz", tier:"tertium", block:"ae2:quartz_block"},
    {crop:"fluix", tier:"imperium", block:"ae2:fluix_block"},
    {crop:"soularium", tier:"imperium"},
    {crop:"conductive_alloy", tier:"tertium"},
    {crop:"copper_alloy", tier:"tertium"},
    {crop:"end_steel", tier:"supremium"},
    {crop:"redstone_alloy", tier:"tertium"},
    {crop:"vibrant_alloy", tier:"supremium"},
    {crop:"dark_steel", tier:"imperium"},
    {crop:"pulsating_alloy", tier:"imperium"},
    {crop:"energetic_alloy", tier:"imperium"},
    {crop:"refined_glowstone", tier:"imperium", block:"mekanism:block_refined_glowstone"},
    {crop:"refined_obsidian", tier:"imperium", block:"mekanism:block_refined_obsidian"},
    {crop:"constantan", tier:"imperium"},
  ]
  
  ServerEvents.recipes(craftopia => {
    // essence crafting for custom seeds
    function essenceCircle(result, essenceType) {
      craftopia.shaped(result, ['aaa', 'a a', 'aaa'], { a: `mysticalagriculture:${essenceType}_essence` }).id(`craftopia:mysticalagriculture/${essenceType}_essence_crafting`)
    }
    essenceCircle('allthemodium:allthemodium_ingot', 'allthemodium')
    essenceCircle('allthemodium:vibranium_ingot', 'vibranium')
    essenceCircle('allthemodium:unobtainium_ingot', 'unobtainium')
  
    // infusion seed crafting
    function seedCrafting(output, middle, item1, item2, item3, item4, item5, item6, item7, item8){
      craftopia.custom({
        type: 'mysticalagriculture:infusion',
        input: { item: middle },
        ingredients: [
          { item: item1 },
          { item: item2 },
          { item: item3 },
          { item: item4 },
          { item: item5 },
          { item: item6 },
          { item: item7 },
          { item: item8 }
        ],
        result: { item: output }
      }).id(`craftopia:${output.replace(':', '/')}/infusion`)
    }
  
    // make alloy seeds use blocks to craft
    cropAdjust.forEach(entry => {
      let ess = ''
      let block = ''
  
      if (entry.tier == 'insanium') {
        ess = `mysticalagradditions:insanium_essence`
      } else {
        ess = `mysticalagriculture:${entry.tier}_essence`
      }
  
      if (Item.exists(`allthecompressed:${entry.crop}_block_1x`)){
        // use the allthecompressed block if it exists
        block = `allthecompressed:${entry.crop}_block_1x`
      } else if (entry.block !== undefined){
        // else use the provided block in cropAdjust
        block = entry.block
      } else {
        // else neither exists, fallback to the first thing we can find via the storage_blocks tag
        block = Ingredient.of(`#forge:storage_blocks/${entry.crop}`).getItemIds()[0]
      }
      craftopia.remove({id:`mysticalagriculture:seed/infusion/${entry.crop}`})
      seedCrafting(`mysticalagriculture:${entry.crop}_seeds`, 'mysticalagriculture:prosperity_seed_base', ess, block, ess, block, ess, block, ess, block)
    })
  
    // magical soil crafting
    let soilMid = 'mysticalagradditions:insanium_farmland'
    let soil1 = 'mysticalagradditions:dragon_scale'
    let soil2 = 'mysticalagradditions:insanium_block'
    seedCrafting('kubejs:magical_soil', soilMid, soil1, soil2, soil1, soil2, soil1, soil2, soil1, soil2)
  
    // add recipe to make turtle eggs from turtle essence
    craftopia.shaped('4x minecraft:turtle_egg', ['   ', '   ', 'EEE'], {
      E: 'mysticalagriculture:turtle_essence'
    }).id('craftopia:mysticalagriculture/turtle_egg')
  
    // add recipe for warped wart block
    craftopia.shaped('8x minecraft:warped_wart_block', [' A ', 'A  ', 'AAA'], {
        A: 'mysticalagriculture:nether_essence'
    }).id('craftopia:minecraft/warped_wart_block')
    
    // add recipe for shroomlight
    craftopia.shaped('6x minecraft:shroomlight', ['AGA', 'GAG', 'AGA'],{
        A: 'mysticalagriculture:nether_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('craftopia:minecraft/shroomlight')
    
    //add recipes for froglights
    craftopia.shaped('8x minecraft:ochre_froglight', ['NDG', 'GDN', 'NDG'],{
        N: 'mysticalagriculture:nature_essence',
        D: 'mysticalagriculture:dye_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('craftopia:minecraft/ochre_froglight')
    
      craftopia.shaped('8x minecraft:pearlescent_froglight', ['DDD', 'GNG', 'NGN'],{
        N: 'mysticalagriculture:nature_essence',
        D: 'mysticalagriculture:dye_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('craftopia:minecraft/pearlescent_froglight')
    
      craftopia.shaped('8x minecraft:verdant_froglight', ['NGD', 'GND', 'NGD'],{
        N: 'mysticalagriculture:nature_essence',
        D: 'mysticalagriculture:dye_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('craftopia:minecraft/verdant_froglight')
  })