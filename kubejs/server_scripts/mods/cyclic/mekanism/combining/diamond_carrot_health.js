ServerEvents.recipes(e => {
    e.custom({
        "type":"mekanism:combining",
        "extraInput": 
        {"ingredient":{"item":"minecraft:carrot"}},
        "mainInput":
        {"ingredient":{"item":"minecraft:diamond"}},
        "output":
        {"item":"cyclic:diamond_carrot_health"}
  }).id('craftopia:mekanism/combining/diamond_carrot_health')
})