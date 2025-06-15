ServerEvents.recipes(craftopia => {

    //daybloom motif
    craftopia.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [
    {
      "tag": "botania:petals/yellow"
    },
    {
      "tag": "botania:petals/yellow"
    },
    {
      "tag": "botania:petals/orange"
    },
    {
      "tag": "botania:petals/light_blue"
    }
  ],
  "output": {
    "item": "botania:daybloom_motif"
  },
  "reagent": {
    "tag": "botania:seed_apothecary_reagent"
  }
    }).id('craftopia:botania/daybloom_motif')
})

ServerEvents.recipes(craftopia => {

    //nightshade motif
    craftopia.custom({
      "type": "botania:petal_apothecary",
      "ingredients": [
        {
          "tag": "botania:petals/black"
        },
        {
          "tag": "botania:petals/black"
        },
        {
          "tag": "botania:petals/purple"
        },
        {
          "tag": "botania:petals/gray"
        }
      ],
      "output": {
        "item": "botania:nightshade_motif"
      },
      "reagent": {
        "tag": "botania:seed_apothecary_reagent"
      }
    }).id('craftopia:botania/nightshade_motif')
})  

ServerEvents.recipes(craftopia => {

  //overgrowth seeds
  craftopia.custom({
      "type": "botania:petal_apothecary",
      "ingredients":[
    {
      "item": "minecraft:wheat"
    }
  ],
  "output": {
   "item": "botania:overgrowth_seed"
  },
  "reagent": {
     "tag": "botania:seed_apothecary_reagent"
    }
   }).id('craftopia:botania/overgrowth_seeds')
})