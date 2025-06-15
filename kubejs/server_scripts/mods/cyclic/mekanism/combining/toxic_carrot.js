ServerEvents.recipes(e => {
    e.custom({
        "type":"mekanism:combining",
        "extraInput": 
        {"ingredient":{"item":"minecraft:carrot"}},
        "mainInput":
        {"ingredient":{"item":"minecraft:rotten_flesh"}},
        "output":
        {"item":"cyclic:toxic_carrot"}
  }).id('craftopia:mekanism/combining/toxic_carrot')
})