const CropRegistry = Java.loadClass('com.blakebr0.mysticalagriculture.registry.CropRegistry')

// sets the chance for a seed to drop
const SecondarySeed = 0.01
const TierSecondaryCutoff = 5

ServerEvents.tags('item', craftopia => {
  let CropRegistryInstance = CropRegistry.getInstance()
  let cropTiers = CropRegistryInstance.getTiers()
  let tiers = Array.apply(null, Array(cropTiers.length))
  for (const CropTier of cropTiers) {
    tiers[CropTier.getValue() - 1] = CropTier.getFarmland()
    if (CropTier.getValue() >= TierSecondaryCutoff) {
      CropTier.setSecondarySeedDrop(false)
      CropTier.setBaseSecondaryChance(0)
    } else {
      CropTier.setBaseSecondaryChance(SecondarySeed)
    }
  }
  for (let i = 0; i < tiers.length; i++) {
    let farmA = tiers[i]
    let farmB = null
    if (i + 1 < tiers.length) {
      if (!farmA.equals(tiers[i + 1])) {
        farmB = tiers[i + 1]
      }
    }
    let tierA = farmA.getIdLocation().getPath().replace('_farmland', '')
    craftopia.add(`kubejs:farmland/${tierA}`, farmA.getId())
    if (farmB) {
      let tierB = farmB.getIdLocation().getPath().replace('_farmland', '')
      craftopia.add(`kubejs:farmland/${tierA}`, `#kubejs:farmland/${tierB}`)
    } else {
      break
    }
  }
})

ServerEvents.recipes(craftopia => {
  let JsonExport = { enabled: [], disabled: [] }
  let CropRegistryInstance = CropRegistry.getInstance()
  let CropList = CropRegistryInstance.getCrops()
  for (const Crop of CropList) {
    let CropName = Crop.getName()
    if (Crop.isEnabled()) {
      JsonExport.enabled.push(CropName)
    } else {
      JsonExport.disabled.push(CropName)
    }
  }
  JsonIO.write('kubejs/server_scripts/mods/mysticalagriculture/cropInfo.json', JsonExport)

  // Botany Pots
  if (Platform.isLoaded('botanypots')) {
    let seenSeeds = []
    let crux = {}
    let disabledSeedRecipes = []

    // add missing recipes
    for (const seed of JsonExport.enabled) {
      if (!seenSeeds.includes(seed)) {
        let Crop = CropRegistryInstance.getCropByName(seed)
        let drops = [{ chance: 1.0, output: Ingredient.of(Crop.getEssenceItem()).toJson() }]
        if (SecondarySeed > 0 && Crop.getTier().hasSecondarySeedDrop()) {
          drops.push({ chance: SecondarySeed, output: Ingredient.of(Crop.getSeedsItem()).toJson() })
        }
        drops.push({ chance: 0.01, output: Ingredient.of("mysticalagriculture:fertilized_essence").toJson(), minRolls: 1, maxRolls: 1 })
        let category = `${Crop.getTier().getFarmland().getIdLocation().getPath().replace('_farmland', '')}`
        let cruxBlock = Crop.getCruxBlock()
        if (cruxBlock) {
          category = `${cruxBlock.getIdLocation().getPath()}`
          crux[cruxBlock.getId()] = cruxBlock.getIdLocation().getPath()
        }
        craftopia.custom({
          type: 'botanypots:crop',
          seed: Ingredient.of(Crop.getSeedsItem()).toJson(),
          categories: [category],
          growthTicks: 1200 + (600 * Crop.getTier().getValue()),
          display: {
            type: 'botanypots:aging',
            block: Crop.getCropBlock().getId()
          },
          drops: drops
        }).id(`craftopia:botanypots/mysticalagriculture/${seed}`)
      }
    }
    // add crux 'soils'
    for (const block in crux) {
      let category = crux[block]
      craftopia.custom({
        type: 'botanypots:soil',
        input: { item: block },
        display: { block: block },
        categories: [category],
        growthModifier: 1.0
      }).id(`craftopia:botanypots/mysticalagriculture/crux/${category}`)
    }

    // remove disabled seed recipes by id using that array we made earlier
    disabledSeedRecipes.forEach(id => {
      craftopia.remove({id: id})
    })
  }

  // Thermal Insolator
  if (Platform.isLoaded('thermal')) {
    JsonExport.enabled.forEach(cropName => {
      let Crop = CropRegistryInstance.getCropByName(cropName)
      craftopia.custom({
        type: 'thermal:insolator',
        ingredient: Ingredient.of(Crop.getSeedsItem()).toJson(),
        result: [
          {
            item: Crop.getEssenceItem().getId(),
            chance: 1 + SecondarySeed
          },
          {
            item: Crop.getSeedsItem().getId(),
            chance: Crop.getTier().hasSecondarySeedDrop() ? (1 + SecondarySeed) : 1,
            locked: true
          }
        ]
      }).id(`craftopia:thermal/machines/insolator/mysticalagriculture/${cropName}`)
    })
  }

  // Immersive Engineering Cloche
  if (Platform.isLoaded('immersiveengineering')) {
    JsonExport.enabled.forEach(cropName => {
      let Crop = CropRegistryInstance.getCropByName(cropName)
      craftopia.custom({
        type: 'immersiveengineering:cloche',
        results: [
          {
            item: Crop.getEssenceItem().getId(),
            count: 2
          }
        ],
        input: Ingredient.of(Crop.getSeedsItem()).toJson(),
        soil: Ingredient.of(Crop.getCruxBlock() ?? `#kubejs:farmland/${Crop.getTier().getFarmland().getIdLocation().getPath().replace('_farmland', '')}`).toJson(),
        time: 250 + (750 * Crop.getTier().getValue()),
        render: {
          type: 'crop',
          block: Crop.getCropBlock().getId()
        }
      }).id(`craftopia:immersiveengineering/cloche/mysticalagriculture/${cropName}`)
    })
  }
})
