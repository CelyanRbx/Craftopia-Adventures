ServerEvents.recipes(e => {
    e.custom({
        "type":"mekanism:combining",
        "extraInput": 
        {"ingredient":{"item":"minecraft:carrot"}},
        "mainInput":
        {"ingredient":{"item":"minecraft:emerald"}},
        "output":
        {"item":"cyclic:emerald_carrot_jump"}
  }).id('craftopia:mekanism/combining/emerald_carrot_jump')
})