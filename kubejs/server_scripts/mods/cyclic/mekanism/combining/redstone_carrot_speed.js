ServerEvents.recipes(e => {
    e.custom({
        "type":"mekanism:combining",
        "extraInput": 
        {"ingredient":{"item":"minecraft:carrot"}},
        "mainInput":
        {"ingredient":{"item":"minecraft:redstone"}},
        "output":
        {"item":"cyclic:redstone_carrot_speed"}
  }).id('craftopia:mekanism/combining/redstone_carrot_speed')
})