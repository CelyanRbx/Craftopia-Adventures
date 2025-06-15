ServerEvents.recipes(e => {
  e.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/single_use/plate"
  },
  "conditions": [
    {
      "type": "mantle:tag_filled",
      "item": "kubejs:pig_iron_plate"
    }
  ],
  "cooling_time": 47,
  "fluid": {
    "amount": 90,
  "fluid": "tconstruct:molten_pig_iron"
  },
  "result": {
    "item": "kubejs:pig_iron_plate"
  }
})
})  