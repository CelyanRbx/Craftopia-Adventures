ServerEvents.recipes(e => {
    e.custom({
        "type":"mekanism:combining",
        "extraInput": 
        {"ingredient":{"item":"minecraft:carrot"}},
        "mainInput":
        {"ingredient":{"item":"minecraft:lapis_lazuli"}},
        "output":
        {"item":"cyclic:lapis_carrot_variant"}
  }).id('craftopia:mekanism/combining/lapis_carrot_variant')
})