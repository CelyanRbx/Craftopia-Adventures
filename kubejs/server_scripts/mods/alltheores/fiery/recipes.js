ServerEvents.recipes(e => {
    e.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "group": "alltheores",
        "key": {
          "f": {
            "item": "twilightforest:fiery_ingot"
          },
          "h": {
            "tag": "alltheores:ore_hammers"
          }
        },
        "pattern": [
          "hf ",
          "f  ",
          "   "
        ],
        "result": {
          "item": "kubejs:fiery_plate"
        },
        "show_notification": true
      })
})  