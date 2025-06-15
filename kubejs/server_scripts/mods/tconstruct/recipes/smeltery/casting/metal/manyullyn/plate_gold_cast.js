ServerEvents.recipes(e => {
    e.custom({
    "type": "tconstruct:casting_table",
    "cast": {
      "tag": "tconstruct:casts/multi_use/plate"
    },
    "conditions": [
      {
        "type": "mantle:tag_filled",
        "item": "kubejs:manyullyn_plate"
      }
    ],
    "cooling_time": 47,
    "fluid": {
      "amount": 90,
    "fluid": "tconstruct:molten_manyullyn"
    },
    "result": {
      "item": "kubejs:manyullyn_plate"
    }
  })
})  