ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:iron_furnace', [
        'RIR',
        'IFI',
        'RCR'
      ], {
        R: 'minecraft:redstone',
        I: 'minecraft:iron_ingot',
        F: 'minecraft:furnace',
        C: 'minecraft:blast_furnace'
    })
})