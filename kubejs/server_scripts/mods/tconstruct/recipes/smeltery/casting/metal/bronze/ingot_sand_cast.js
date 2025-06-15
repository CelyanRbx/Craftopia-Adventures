ServerEvents.recipes(e => {
  e.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/ingot"
  },
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "item": "alltheores:bronze_ingot"
    }
  ],
  "cooling_time": 47,
  "fluid": {
    "amount": 90,
  "fluid": "tconstruct:molten_bronze"
  },
  "result": {
    "item": "alltheores:bronze_ingot"
  }
})
})  