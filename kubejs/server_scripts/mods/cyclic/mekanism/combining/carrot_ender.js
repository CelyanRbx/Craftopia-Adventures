ServerEvents.recipes(e => {
    e.custom({
        "type":"mekanism:combining",
        "extraInput": 
        {"ingredient":{"item":"minecraft:carrot"}},
        "mainInput":
        {"ingredient":{"item":"minecraft:ender_pearl"}},
        "output":
        {"item":"cyclic:carrot_ender"}
  }).id('craftopia:mekanism/combining/carrot_ender')
})