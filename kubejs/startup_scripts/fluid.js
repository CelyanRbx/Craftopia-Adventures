Platform.getInfo('kubejs').name = 'Craftopia'

StartupEvents.registry('fluid' , e => {
    e.create('calorite')
    .displayName('Molten Calorite')
    .stillTexture('kubejs:block/calorite_still')
    .flowingTexture('kubejs:block/calorite_flow')
    .bucketColor(0xCD5C5C)
})

StartupEvents.registry('fluid' , e => {
    e.create('desh')
    .displayName('Molten Desh')
    .stillTexture('kubejs:block/desh_still')
    .flowingTexture('kubejs:block/desh_flow')
    .bucketColor(0xCC9966)
})

StartupEvents.registry('fluid' , e => {
    e.create('ostrum')
    .displayName('Molten Ostrum')
    .stillTexture('kubejs:block/ostrum_still')
    .flowingTexture('kubejs:block/ostrum_flow')
    .bucketColor(0x999999)
})

StartupEvents.registry('fluid' , e => {
    e.create('vanadium')
    .displayName('Molten Vanadium')
    .stillTexture('kubejs:block/vanadium_still')
    .flowingTexture('kubejs:block/vanadium_flow')
    .bucketColor(0xFFFFFF)
})