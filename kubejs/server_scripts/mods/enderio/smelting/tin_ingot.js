ServerEvents.recipes(event => {
    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 5600,
        "experience": 0.3,
        "inputs": [
          {
            "count": 1,
            "ingredient": {
              "item": "alltheores:tin_dust"
            }
          }
        ],
        "result": {
          "item": "alltheores:tin_ingot"
        }
    }).id('enderio:smelting/alltheores/smelting_dust/tin_ingot')
})