ServerEvents.recipes(e => {
    e.custom({
        "type":"create:filling",
        "ingredients": [
        {
          "item": "minecraft:ender_pearl"
        },
        {
          "amount": 25,
          "fluid": "immersiveengineering:redstone_acid",
          "nbt": {}
        }],
        "results": [
        {
          "item": "cyclic:ender_eye_reuse"
        }]
  }).id('craftopia:create/filling/ender_eye_reuse')
})