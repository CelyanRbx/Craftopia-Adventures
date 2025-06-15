ServerEvents.recipes(e => { 
    e.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "item": "thermal_extra:soul_infused_block"
      },
      "result": {
        "amount": 810,
        "fluid": "thermal_extra:soul_infused"
      },
      "temperature": 900,
      "time": 190
    })
})