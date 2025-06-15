// BRONZE
ServerEvents.recipes(e => {
    e.custom({
        "type": "immersiveengineering:alloy",
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "item": "alltheores:bronze_ingot"
            }
          },
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "item": "alltheores:tin_ingot"
            }
          }
        ],
        "input0": {
          "base_ingredient": {
            "item": "minecraft:copper_ingot"
          },
          "count": 3
        },
        "input1": {
          "item": "alltheores:tin_ingot"
        },
        "result": {
          "base_ingredient": {
            "item": "alltheores:bronze_ingot"
          },
          "count": 4
        },
        "time": 200
      }).id('immersiveengineering:alloysmelter/bronze')
})