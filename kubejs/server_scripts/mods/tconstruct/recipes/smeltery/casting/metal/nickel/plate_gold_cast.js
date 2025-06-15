ServerEvents.recipes(e => {
    e.custom({
    "type": "tconstruct:casting_table",
    "cast": {
      "tag": "tconstruct:casts/multi_use/plate"
    },
    "conditions": [
      {
        "type": "mantle:tag_filled",
        "item": "alltheores:nickel_plate"
      }
    ],
    "cooling_time": 47,
    "fluid": {
      "amount": 90,
    "fluid": "tconstruct:molten_nickel"
    },
    "result": {
      "item": "alltheores:nickel_plate"
    }
  })
})  