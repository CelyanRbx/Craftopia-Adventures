ServerEvents.recipes(e => {
    e.custom({
        "type":"create:filling",
        "ingredients": [
        {
          "item": "minecraft:glass_bottle"
        },
        {
          "amount": 25,
          "fluid": "minecraft:milk",
          "nbt": {}
        }],
        "results": [
        {
          "item": "cyclic:milk_bottle"
        }]
  }).id('craftopia:create/filling/milk_bottle')
})