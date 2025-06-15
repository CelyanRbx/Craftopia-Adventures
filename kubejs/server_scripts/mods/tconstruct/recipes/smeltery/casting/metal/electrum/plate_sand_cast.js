ServerEvents.recipes(e => {
  e.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/plate"
  },
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "item": "alltheores:electrum_plate"
    }
  ],
  "cooling_time": 47,
  "fluid": {
    "amount": 90,
  "fluid": "tconstruct:molten_electrum"
  },
  "result": {
    "item": "alltheores:electrum_plate"
  }
})
})  