ServerEvents.recipes(e => {
    e.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "group": "alltheores",
        "key": {
          "i": {
            "item": "twilightforest:ironwood_ingot"
          },
          "h": {
            "tag": "alltheores:ore_hammers"
          }
        },
        "pattern": [
          "hi ",
          "i  ",
          "   "
        ],
        "result": {
          "item": "kubejs:ironwood_plate"
        },
        "show_notification": true
      })
})  