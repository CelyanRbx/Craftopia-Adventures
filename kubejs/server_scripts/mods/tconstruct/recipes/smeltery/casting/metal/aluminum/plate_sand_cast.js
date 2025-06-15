ServerEvents.recipes(e => {
  e.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/plate"
  },
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "item": "alltheores:aluminum_plate"
    }
  ],
  "cooling_time": 47,
  "fluid": {
    "amount": 90,
  "fluid": "tconstruct:molten_aluminum"
  },
  "result": {
    "item": "alltheores:aluminum_plate"
  }
})
})  