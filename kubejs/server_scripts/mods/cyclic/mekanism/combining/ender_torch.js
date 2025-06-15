ServerEvents.recipes(e => {
    e.custom({
        "type":"mekanism:combining",
        "extraInput": 
        {"ingredient":{"item":"minecraft:torch"}},
        "mainInput":
        {"ingredient":{"item":"minecraft:ender_pearl"}},
        "output":
        {"item":"cyclic:ender_torch"}
  }).id('craftopia:mekanism/combining/ender_torch')
})