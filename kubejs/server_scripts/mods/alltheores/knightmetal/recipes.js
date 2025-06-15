ServerEvents.recipes(e => {
    e.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "group": "alltheores",
        "key": {
          "k": {
            "item": "twilightforest:knightmetal_ingot"
          },
          "h": {
            "tag": "alltheores:ore_hammers"
          }
        },
        "pattern": [
          "hk ",
          "k  ",
          "   "
        ],
        "result": {
          "item": "kubejs:knightmetal_plate"
        },
        "show_notification": true
      })
})  