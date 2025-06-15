// BRONZE
ServerEvents.recipes(e => {
    e.custom(
        {
          "type": "immersiveengineering:arc_furnace",
          "additives": [
            {
              "item": "alltheores:tin_ingot"
            }
          ],
          "energy": 51200,
          "input": {
            "base_ingredient": {
              "item": "minecraft:copper_ingot"
            },
            "count": 3
          },
          "results": [
            {
              "base_ingredient": {
                "item": "alltheores:bronze_ingot"
              },
              "count": 4
            }
          ],
          "time": 100
        }
    ).id('immersiveengineering:arcfurnace/alloy_bronze')
})