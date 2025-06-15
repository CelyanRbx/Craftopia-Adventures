ServerEvents.recipes(e => {
    e.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "group": "alltheores",
        "key": {
          "i": {
            "item": "alltheores:iridium_ingot"
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
          "item": "alltheores:iridium_plate"
        },
        "show_notification": true
      })
})  