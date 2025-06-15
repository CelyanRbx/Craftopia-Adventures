ServerEvents.recipes(e => {

    /*********************************** AD ASTRA ***********************************/
    // ID
    e.remove({ id: 'ad_astra:compressing/iron_plate_from_compressing_iron_block' })
    e.remove({ id: 'ad_astra:compressing/iron_plate_from_compressing_iron_ingot' })
    e.remove({ id: 'ad_astra:compressing/steel_plate_from_compressing_steel_blocks' })
    e.remove({ id: 'ad_astra:compressing/steel_plate_from_compressing_steel_ingots' })

    /*********************************** ALLTHECOMPRESSED ***********************************/
    // ID
    e.remove({ id: 'allthecompressed:decompress/gravel_1x' })
    e.remove({ id: 'allthecompressed:decompress/sand_1x' })

    /*********************************** ALLTHEMODIUM ***********************************/
    // ID 
    e.remove({ id: 'allthemodium:allthemodium_plate' })
    e.remove({ id: 'allthemodium:unobtainium_plate' })
    e.remove({ id: 'allthemodium:vibranium_plate' })

    /*********************************** ALLTHEORES ***********************************/
    // ID 
    e.remove({ id: 'alltheores:aluminum_plate' })
    e.remove({ id: 'alltheores:brass_plate' })
    e.remove({ id: 'alltheores:bronze_block' })
    e.remove({ id: 'alltheores:bronze_dust_from_alloy_blending'})
    e.remove({ id: 'alltheores:bronze_ingot_from_block' })
    e.remove({ id: 'alltheores:bronze_ingot' })
    e.remove({ id: 'alltheores:bronze_nugget_from_ingot' })
    e.remove({ id: 'alltheores:bronze_plate' })
    e.remove({ id: 'alltheores:constantan_plate' })
    e.remove({ id: 'alltheores:copper_plate' })
    e.remove({ id: 'alltheores:diamond_plate' })
    e.remove({ id: 'alltheores:electrum_plate' })
    e.remove({ id: 'alltheores:enderium_plate' })
    e.remove({ id: 'alltheores:gold_plate' })
    e.remove({ id: 'alltheores:invar_plate' })
    e.remove({ id: 'alltheores:iridium_plate' })
    e.remove({ id: 'alltheores:iron_plate' })
    e.remove({ id: 'alltheores:lead_plate' })
    e.remove({ id: 'alltheores:lumium_plate' })
    e.remove({ id: 'alltheores:osmium_plate' })
    e.remove({ id: 'alltheores:nickel_plate' })
    e.remove({ id: 'alltheores:platinum_plate' })
    e.remove({ id: 'alltheores:signalum_plate' })
    e.remove({ id: 'alltheores:silver_plate' })
    e.remove({ id: 'alltheores:steel_plate' })
    e.remove({ id: 'alltheores:tin_ingot' })
    e.remove({ id: 'alltheores:tin_ingot_from_block' })
    e.remove({ id: 'alltheores:tin_plate' })
    e.remove({ id: 'alltheores:uranium_plate' })
    e.remove({ id: 'alltheores:zinc_plate' })

    // PULVERIZER
    // ID
    e.remove({ id: 'alltheores:thermal_pulverize/pulverizer_platinum_ore' })
    e.remove({ id: 'alltheores:thermal_pulverize/pulverizer_zinc_ore' })

    // SMELTING
    // ID
    e.remove({ id: 'alltheores:smelting_dust/tin_ingot' })

    /*********************************** ARS NOUVEAU ***********************************/
    // ID
    e.remove({ id: 'ars_nouveau:crush_cobblestone' })
    e.remove({ id: 'ars_nouveau:crush_gravel' })
    e.remove({ id: 'ars_nouveau:crush_stone' })
    e.remove({ id: 'ars_nouveau:crush_sandstone_to_sand' })

    /*********************************** BOTANIA ***********************************/
    // MANA INFUSION
    // ID
    e.remove({ id: 'botania:mana_infusion/clay_deconstruct' })
    e.remove({ id: 'botania:mana_infusion/cobble_to_sand' })
    e.remove({ id: 'botania:mana_infusion/gravel_dupe' })

    // PURE DAISY
    // ID
    e.remove({ id: 'botania:pure_daisy/sand' })

    /*********************************** BOTANY POTS CULTIVATING DREAMS ***********************************/
    // ID
    e.remove({ id: 'botanypotscultivatingdreams:crops/mekanism/ingot_bronze' })
    e.remove({ id: 'botanypotscultivatingdreams:crops/mekanism/tin_ore' })
    e.remove({ id: 'botanypotscultivatingdreams:crops/thermal/bronze_ingot' })
    e.remove({ id: 'botanypotscultivatingdreams:crops/thermal/tin_ore' })

    /*********************************** CRAFTING ON A STICK ***********************************/
    // ID
    e.remove({ id: 'crafting_on_a_stick:crafting_table' })
    e.remove({ id: 'crafting_on_a_stick:uncraft_crafting_table' })

    /*********************************** COBBLEFORDAYS ***********************************/
    // ID
    e.remove({ id: 'cobblefordays:tier_1' })
    e.remove({ id: 'cobblefordays:tier_2' })
    e.remove({ id: 'cobblefordays:tier_3' })
    e.remove({ id: 'cobblefordays:tier_4' })
    e.remove({ id: 'cobblefordays:tier_5'})

    /*********************************** CREATE ***********************************/
    // BLASTING
    // ID
    e.remove({ id: 'create:blasting/ingot_tin_compat_mekanism' })
    e.remove({ id: 'create:blasting/tin_ingot_compat_thermal' })

    // CRAFTING
    // ID
    e.remove({ id: 'create:crafting/kinetics/propeller' })
    e.remove({ id: 'create:crafting/kinetics/shaft' })
    e.remove({ id: 'create:crafting/materials/andesite_alloy' })
    e.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' })

    // CRUSHING
    // ID
    e.remove({ id: 'create:crushing/gravel' })

    // ITEM APPLICATION
    // ID
    e.remove({ id: 'create:item_application/andesite_casing_from_log' })

    // MILLING
    // ID
    e.remove({ id: 'create:milling/cobblestone' })
    e.remove({ id: 'create:milling/clay' })
    e.remove({ id: 'create:milling/dripstone_block' })
    e.remove({ id: 'create:milling/sandstone' })

    // MIXING
    // ID
    e.remove({ id: 'create:mixing/andesite_alloy' })
    e.remove({ id: 'create:mixing/andesite_alloy_from_zinc' })

    // PRESSING
    // ID
    e.remove({ id: 'create:pressing/brass_ingot' })
    e.remove({ id: 'create:pressing/copper_ingot' })
    e.remove({ id: 'create:pressing/gold_ingot' })
    e.remove({ id: 'create:pressing/iron_ingot' })
    e.remove({ id: 'create:pressing/steel_ingot' })

    // SEQUENCED ASSEMBLY
    // ID
    e.remove({ id: 'create:sequenced_assembly/sturdy_sheet' })

    // SMELTING
    // ID
    e.remove({ id: 'create:smelting/ingot_tin_compat_mekanism' })
    e.remove({ id: 'create:smelting/tin_ingot_compat_thermal' })

    /*********************************** CREATE ADDITION ***********************************/
    // PRESSING
    // ID
    e.remove({ id: 'createaddition:pressing/aluminum_ingot' })
    e.remove({ id: 'createaddition:pressing/constantan_ingot' })
    e.remove({ id: 'createaddition:pressing/electrum_ingot' })
    e.remove({ id: 'createaddition:pressing/lead_ingot' })
    e.remove({ id: 'createaddition:pressing/nickel_ingot' })
    e.remove({ id: 'createaddition:pressing/silver_ingot' })
    e.remove({ id: 'createaddition:pressing/steel_ingot' })
    e.remove({ id: 'createaddition:pressing/uranium_ingot' })
    e.remove({ id: 'createaddition:pressing/zinc_ingot' })
    
    /*********************************** CREATE DECO ***********************************/
    // PRESSING
    // ID
    e.remove({ id: 'createdeco:pressing/andesite_sheet' })
    e.remove({ id: 'createdeco:pressing/industrial_iron_sheet' })
    e.remove({ id: 'createdeco:pressing/netherite_sheet' })
    e.remove({ id: 'createdeco:pressing/zinc_sheet' })

    /*********************************** CYCLIC ***********************************/
    // Output
    e.remove({ output: 'cyclic:alatar_destruction' })
    e.remove({ output: 'cyclic:anti_beacon' })
    e.remove({ output: 'cyclic:beacon' })
    e.remove({ output: 'cyclic:beacon_redstone' })
    e.remove({ output: 'cyclic:blockstate_data' })
    e.remove({ output: 'cyclic:carrot_ender' })
    e.remove({ output: 'cyclic:chorus_spectral' })
    e.remove({ output: 'cyclic:computer_shape' })
    e.remove({ output: 'cyclic:compressed_cobblestone' })
    e.remove({ output: 'cyclic:compat/sturdy_stone' })
    e.remove({ output: 'cyclic:copper_lantern' })
    e.remove({ output: 'cyclic:copper_soul_lantern' })
    e.remove({ output: 'cyclic:crafter' })
    e.remove({ output: 'cyclic:crafting_bag' })
    e.remove({ output: 'cyclic:crafting_stick' })
    e.remove({ output: 'cyclic:dark_glass' })
    e.remove({ output: 'cyclic:diamond_carrot_health' })
    e.remove({ output: 'cyclic:dice' })
    e.remove({ output: 'cyclic:disenchanter' })
    e.remove({ output: 'cyclic:emerald_carrot_jump' })
    e.remove({ output: 'cyclic:ender_book' })
    e.remove({ output: 'cyclic:ender_eye_reuse' })
    e.remove({ output: 'cyclic:energy_pipe' })
    e.remove({ output: 'cyclic:entity_data' })
    e.remove({ output: 'cyclic:entity_data_wipenbt' })
    e.remove({ output: 'cyclic:stonecutting/dark_glass' })
    e.remove({ output: 'cyclic:detector_moon' })
    e.remove({ output: 'cyclic:fan' })
    e.remove({ output: 'cyclic:fan_slab' })
    e.remove({ output: 'cyclic:filter_data' })
    e.remove({ output: 'cyclic:fireplace' })
    e.remove({ output: 'cyclic:fisher' })
    e.remove({ output: 'cyclic:fluid_pipe' })
    e.remove({ output: 'cyclic:flute_summoning' })
    e.remove({ output: 'cyclic:generator_fluid'})
    e.remove({ output: 'cyclic:generator_food'})
    e.remove({ output: 'cyclic:generator_fuel'})
    e.remove({ output: 'cyclic:generator_item'})
    e.remove({ output: 'cyclic:generator_solar'})
    e.remove({ output: 'cyclic:ghost_phantom'})
    e.remove({ output: 'cyclic:gold_bars'})
    e.remove({ output: 'cyclic:gold_lantern' })
    e.remove({ output: 'cyclic:gold_soul_lantern' })
    e.remove({ output: 'cyclic:heart' })
    e.remove({ output: 'cyclic:heart_empty' })
    e.remove({ output: 'cyclic:item_pipe' })
    e.remove({ output: 'cyclic:lapis_carrot_variant' })
    e.remove({ output: 'cyclic:lever_remote' })
    e.remove({ output: 'cyclic:location_data' })
    e.remove({ output: 'cyclic:netherite_lantern' })
    e.remove({ output: 'cyclic:no_soliciting' })
    e.remove({ output: 'cyclic:obsidian_pressure_plate' })
    e.remove({ output: 'cyclic:packager' })
    e.remove({ output: 'cyclic:peace_candle' })
    e.remove({ output: 'cyclic:plate_launch' })
    e.remove({ output: 'cyclic:plate_launch_redstone' })
    e.remove({ output: 'cyclic:prospector' })
    e.remove({ output: 'cyclic:quiver_damage' })
    e.remove({ output: 'cyclic:quiver_lightning' })
    e.remove({ output: 'cyclic:redstone_carrot_speed' })
    e.remove({ output: 'cyclic:rotator' })
    e.remove({ output: 'cyclic:scaffold_fragile' })
    e.remove({ output: 'cyclic:scaffold_replace' })
    e.remove({ output: 'cyclic:scaffold_responsive' })
    e.remove({ output: 'cyclic:screen' })
    e.remove({ output: 'cyclic:slingshot' })
    e.remove({ output: 'cyclic:settings_data' })
    e.remove({ output: 'cyclic:shape_data' })
    e.remove({ output: 'cyclic:sound_data' })
    e.remove({ output: 'cyclic:sound_player' })
    e.remove({ output: 'cyclic:sound_recorder' })
    e.remove({ output: 'cyclic:soundproofing' })
    e.remove({ output: 'cyclic:soundproofing_ghost' })
    e.remove({ output: 'cyclic:spawner_seeker' })
    e.remove({ output: 'cyclic:spikes_curse' })
    e.remove({ output: 'cyclic:spikes_diamond' })
    e.remove({ output: 'cyclic:spikes_fire' })
    e.remove({ output: 'cyclic:spikes_iron' })
    e.remove({ output: 'cyclic:sprinkler' })
    e.remove({ output: 'cyclic:storage_bag' })
    e.remove({ output: 'cyclic:structure' })
    e.remove({ output: 'cyclic:teleport' })
    e.remove({ output: 'cyclic:terra_glass' })
    e.remove({ output: 'cyclic:terra_preta' })
    e.remove({ output: 'cyclic:tile_transporter_empty' })
    e.remove({ output: 'cyclic:toxic_carrot' })
    e.remove({ output: 'cyclic:trash' })
    e.remove({ output: 'cyclic:unbreakable_block' })
    e.remove({ output: 'cyclic:unbreakable_reactive' })
    e.remove({ output: 'cyclic:user' })
    e.remove({ output: 'cyclic:wand_hypno' })
    e.remove({ output: 'cyclic:wand_missile' })
    e.remove({ output: 'cyclic:water_candle' })
    e.remove({ output: 'cyclic:wireless_energy' })
    e.remove({ output: 'cyclic:wireless_fluid' })
    e.remove({ output: 'cyclic:wireless_item' })
    e.remove({ output: 'cyclic:wireless_receiver' })
    e.remove({ output: 'cyclic:wireless_transmitter' })

    // CRUSHER
    // ID
    e.remove({ id: 'cyclic:crusher/cobblestone' })
    e.remove({ id: 'cyclic:crusher/concrete_black_powder' })
    e.remove({ id: 'cyclic:crusher/concrete_blue_powder' })
    e.remove({ id: 'cyclic:crusher/concrete_brown_powder' })
    e.remove({ id: 'cyclic:crusher/concrete_cyan_powder' })
    e.remove({ id: 'cyclic:crusher/concrete_gray_powder' })
    e.remove({ id: 'cyclic:crusher/concrete_green_powder' })
    e.remove({ id: 'cyclic:crusher/concrete_light_blue_powder' })
    e.remove({ id: 'cyclic:crusher/concrete_light_gray_powder' })
    e.remove({ id: 'cyclic:crusher/concrete_lime_powder' })
    e.remove({ id: 'cyclic:crusher/concrete_magenta_powder' })
    e.remove({ id: 'cyclic:crusher/concrete_orange_powder' })
    e.remove({ id: 'cyclic:crusher/concrete_pink_powder' })
    e.remove({ id: 'cyclic:crusher/concrete_purple_powder' })
    e.remove({ id: 'cyclic:crusher/concrete_red_powder' })
    e.remove({ id: 'cyclic:crusher/concrete_white_powder' })
    e.remove({ id: 'cyclic:crusher/concrete_yellow_powder' })
    e.remove({ id: 'cyclic:crusher/glass' })
    e.remove({ id: 'cyclic:crusher/gravel' })
    e.remove({ id: 'cyclic:crusher/sandstone' })
    e.remove({ id: 'cyclic:crusher/terracotta' })
    e.remove({ id: 'cyclic:crusher/tnt' })

    // SOLIDIFIER
    // ID
    e.remove({ id: 'cyclic:solidifier/solidifier_amber' })
    e.remove({ id: 'cyclic:solidifier/solidifier_obs' })
    e.remove({ id: 'cyclic:solidifier/solidifier_obs_legacy'})
    e.remove({ id: 'cyclic:solidifier/solidifier_glass0' })
    e.remove({ id: 'cyclic:solidifier/solidifier_glass' })
    e.remove({ id: 'cyclic:solidifier/solidifier_gravel' })
    e.remove({ id: 'cyclic:solidifier/spark' })
    e.remove({ id: 'cyclic:solidifier/waxed_redstone' })
    
    // SHAPELESS
    // ID
    e.remove({ id: 'cyclic:shapeless/ender_torch' })
    e.remove({ id: 'cyclic:shapeless/milk_bottle' })
    e.remove({ id: 'cyclic:shapeless/waxed_redstone' })

    // CRAFTING
    // ID
    e.remove({ id: 'cyclic:crafting/clay' })

    // ID
    e.remove({ id: 'cyclic:ender_item_shelf' })
    e.remove({ id: 'cyclic:glowing_helmet'})
    e.remove({ id: 'cyclic:peat_unbaked' })
    e.remove({ id: 'cyclic:peat_unbaked_grass' })
    e.remove({ id: 'cyclic:peat_unbaked_podzol' })
    e.remove({ id: 'cyclic:solidifier' })

    /*********************************** ECOLOGICS ***********************************/
    // ID
    e.remove({ id: 'ecologics:crab_meat_from_campfire_cooking' })
    e.remove({ id: 'ecologics:crab_meat' }) 
    e.remove({ id: 'ecologics:crab_meat_from_smoking' })

    /*********************************** ENDER IO ***********************************/
    // ID
    e.remove({ id: 'enderio:advanced_capacitor_bank' })
    e.remove({ id: 'enderio:alloy_smelting/clear_glass_e_from_base' })
    e.remove({ id: 'enderio:alloy_smelting/clear_glass_e_from_main_alt' })
    e.remove({ id: 'enderio:alloy_smelting/clear_glass_e_from_main' })
    e.remove({ id: 'enderio:invert_clear_glass_a' })
    e.remove({ id: 'enderio:invert_clear_glass_da' })
    e.remove({ id: 'enderio:invert_clear_glass_dm' })
    e.remove({ id: 'enderio:invert_clear_glass_dp' })
    e.remove({ id: 'enderio:invert_clear_glass_ea' })
    e.remove({ id: 'enderio:invert_clear_glass_em' })
    e.remove({ id: 'enderio:invert_clear_glass_ep' })
    e.remove({ id: 'enderio:invert_clear_glass_m' })
    e.remove({ id: 'enderio:invert_clear_glass_p' })
    e.remove({ id: 'enderio:mek_elite_pressurized_tube_upgrade' })
    e.remove({ id: 'enderio:ender_fluid_conduit_upgrade' })
    e.remove({ id: 'enderio:invert_fused_quartz_a' })
    e.remove({ id: 'enderio:invert_fused_quartz_da' })
    e.remove({ id: 'enderio:invert_fused_quartz_dm' })
    e.remove({ id: 'enderio:invert_fused_quartz_dp' })
    e.remove({ id: 'enderio:invert_fused_quartz_ea' })
    e.remove({ id: 'enderio:invert_fused_quartz_em' })
    e.remove({ id: 'enderio:invert_fused_quartz_ep' })
    e.remove({ id: 'enderio:invert_fused_quartz_m' })
    e.remove({ id: 'enderio:invert_fused_quartz_p' })
    e.remove({ id: 'enderio:alloy_smelting/fused_quartz_alt' })
    e.remove({ id: 'enderio:ae_covered_cable' })

    // SAG MILLING
    // ID
    e.remove({ id: 'enderio:sag_milling/clay' })
    e.remove({ id: 'enderio:sag_milling/cobblestone' })
    e.remove({ id: 'enderio:sag_milling/glass' })
    e.remove({ id: 'enderio:sag_milling/gravel' })
    e.remove({ id: 'enderio:sag_milling/sandstone' })

    // SMELTING
    // ID
    e.remove({ id: 'enderio:smelting/alltheores/smelting_dust/tin_ingot' })
    e.remove({ id: 'enderio:smelting/create/smelting/ingot_tin_compat_mekanism' })
    e.remove({ id: 'enderio:smelting/create/smelting/tin_ingot_compat_thermal' })
    e.remove({ id: 'enderio:smelting/mekanism/processing/bronze/ingot/from_dust_smelting' })
    e.remove({ id: 'enderio:smelting/mekanism/processing/tin/ingot/from_dust_smelting' })
    e.remove({ id: 'enderio:smelting/mekanism/processing/tin/ingot/from_ore_smelting' })
    e.remove({ id: 'enderio:smelting/mekanism/processing/tin/ingot/from_raw_smelting' })
    e.remove({ id: 'enderio:smelting/thermal/smelting/bronze_ingot_from_dust_smelting' })
    e.remove({ id: 'enderio:smelting/thermal/smelting/tin_ingot_from_deepslate_ore_smelting' })
    e.remove({ id: 'enderio:smelting/thermal/smelting/tin_ingot_from_dust_smelting' })
    e.remove({ id: 'enderio:smelting/thermal/smelting/tin_ingot_from_ore_smelting' })
    e.remove({ id: 'enderio:smelting/thermal/smelting/tin_ingot_from_raw_smelting' })

    /*********************************** FARMERS DELIGHT ***********************************/
    // CUTTING
    // ID
    e.remove({ id: 'farmersdelight:cutting/clay_using_deployer' })
    e.remove({ id: 'farmersdelight:cutting/clay' })
    e.remove({ id: 'farmersdelight:cutting/gravel_using_deployer' })
    e.remove({ id: 'farmersdelight:cutting/gravel' })

    /*********************************** IMMERSIVE ENGINEERING ***********************************/
    // ID
    e.remove({ id: 'immersiveengineering:crafting/plate_aluminum_hammering' })
    e.remove({ id: 'immersiveengineering:crafting/plate_constantan_hammering' })
    e.remove({ id: 'immersiveengineering:crafting/plate_copper_hammering' })
    e.remove({ id: 'immersiveengineering:crafting/plate_electrum_hammering' })
    e.remove({ id: 'immersiveengineering:crafting/plate_gold_hammering' })
    e.remove({ id: 'immersiveengineering:crafting/plate_iron_hammering' })
    e.remove({ id: 'immersiveengineering:crafting/plate_lead_hammering' })
    e.remove({ id: 'immersiveengineering:crafting/plate_nickel_hammering' })
    e.remove({ id: 'immersiveengineering:crafting/plate_silver_hammering' })
    e.remove({ id: 'immersiveengineering:crafting/plate_steel_hammering' })
    e.remove({ id: 'immersiveengineering:crafting/plate_uranium_hammering' })

    // ALLOYSMELTER
    // ID
    e.remove({ id: 'immersiveengineering:alloysmelter/bronze' })

    // ARC FURNACE
    // ID
    e.remove({ id: 'immersiveengineering:arcfurnace/alloy_bronze' })
    e.remove({ id: 'immersiveengineering:arcfurnace/dust_tin' })
    e.remove({ id: 'immersiveengineering:arcfurnace/ore_tin' })
    e.remove({ id: 'immersiveengineering:arcfurnace/raw_block_tin' })
    e.remove({ id: 'immersiveengineering:arcfurnace/raw_ore_tin' })

    // BOTTLING
    // ID
    e.remove({ id: 'immersiveengineering:bottling/duroplast_plate' })

    // CRUSHER
    // ID
    e.remove({ id: 'immersiveengineering:crusher/clay' })
    e.remove({ id: 'immersiveengineering:crusher/cobblestone' })
    e.remove({ id: 'immersiveengineering:crusher/glass' })
    e.remove({ id: 'immersiveengineering:crusher/gravel' })
    e.remove({ id: 'immersiveengineering:crusher/ingot_bronze' })
    e.remove({ id: 'immersiveengineering:crusher/sandstone' })

    // METALPRESS
    // ID
    e.remove({ id: 'immersiveengineering:metalpress/plate_aluminum' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_brass' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_bronze' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_cobalt' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_constantan' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_copper' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_electrum' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_gold' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_invar' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_iron' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_lead' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_manyullyn' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_nickel' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_osmium' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_platinum' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_rose_gold' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_silver' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_steel' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_tin' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_uranium' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_zinc' })

    // RECYCLING
    // ID
    e.remove({ id: 'immersiveengineering:recycling/jetpack' })
    e.remove({ id: 'immersiveengineering:recycling/jetpack_armored' })
    e.remove({ id: 'immersiveengineering:recycling/tin_gear' })

    /*********************************** IRON CHEST ***********************************/
    // ID
    e.remove({ id: 'ironchest:chests/vanilla_dirt_chest' })
    e.remove({ id: 'ironchest:chests/trapped_dirt_chest' })

    /*********************************** IRON FURNACES ***********************************/
    // ID
    e.remove({ id: 'ironfurnaces:furnaces/copper_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/crystal_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/diamond_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/emerald_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/gold_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/gold_furnace2' })
    e.remove({ id: 'ironfurnaces:furnaces/iron_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/iron_furnace2' })
    e.remove({ id: 'ironfurnaces:furnaces/million_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/obsidian_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/obsidian_furnace2' })
    e.remove({ id: 'ironfurnaces:furnaces/silver_furnace' })
    e.remove({ id: 'ironfurnaces:furnaces/silver_furnace2' })

    /*********************************** MEKANISM ***********************************/
    // BLASTING
    // ID
    e.remove({ id: 'mekanism:processing/bronze/ingot/from_dust_blasting' })
    e.remove({ id: 'mekanism:processing/tin/ingot/from_dust_blasting' })
    e.remove({ id: 'mekanism:processing/tin/ingot/from_ore_blasting' })
    e.remove({ id: 'mekanism:processing/tin/ingot/from_raw_blasting' })

    // COMBINING
    // ID
    e.remove({ id: 'mekanism:combining/gravel' })

    // CRAFTING TABLE
    // ID
    e.remove({ id: 'mekanism:nuggets/bronze' })
    e.remove({ id: 'mekanism:processing/bronze/ingot/from_block' })
    e.remove({ id: 'mekanism:processing/bronze/ingot/from_nuggets' })
    e.remove({ id: 'mekanism:processing/tin/ingot/from_block' })
    e.remove({ id: 'mekanism:processing/tin/ingot/from_nuggets' })
    e.remove({ id: 'mekanism:storage_blocks/bronze' })

    // CRUSHING
    // ID
    e.remove({ id: 'mekanism:crushing/cobblestone_to_gravel' })
    e.remove({ id: 'mekanism:crushing/gravel_to_sand' })
    e.remove({ id: 'mekanism:crushing/sandstone_to_sand' })

    // ENRICHING
    // ID
    e.remove({ id: 'mekanism:enriching/clay_ball' })
    e.remove({ id: 'mekanism:enriching/conversion/sand_to_gravel' })

    // INFUSING
    // ID
    e.remove({ id: 'mekanism:processing/bronze/dust/from_infusing' })
    e.remove({ id: 'mekanism:processing/bronze/ingot/from_infusing' })

    // INJECTING
    // ID
    e.remove({ id: 'mekanism:injecting/brick_to_clay_ball' })

    // SMELTING
    // ID
    e.remove({ id: 'mekanism:processing/bronze/ingot/from_dust_smelting' })
    e.remove({ id: 'mekanism:processing/bronze/ingot/from_ore_smelting' })
    e.remove({ id: 'mekanism:processing/bronze/ingot/from_raw_smelting' })
    e.remove({ id: 'mekanism:processing/tin/ingot/from_dust_smelting' })
    e.remove({ id: 'mekanism:processing/tin/ingot/from_ore_smelting' })
    e.remove({ id: 'mekanism:processing/tin/ingot/from_raw_smelting' })

    /*********************************** MINECRAFT ***********************************/
    // ID
    e.remove({ id: 'minecraft:crafting_table' })

    /*********************************** PRODUCTIVE BEES ***********************************/
    // ID
    e.remove({ id: 'productivebees:gene_indexer' })
    e.remove({ id: 'productivebees:block_conversion/botania/soul_sand_to_sand' })
    e.remove({ id: 'productivebees:create/mixing/alloys/honeycomb_bronze' })

    /*********************************** QUARK ***********************************/
    // OUTPUT
    e.remove({ output: 'quark:backpack' })

    // ID
    e.remove({ id: 'quark:oddities/crafting/magnet' })

    /*********************************** RELIQUARY ***********************************/
    // ID
    e.remove({ id: 'reliquary:alkahestry/crafting/gravel' })
    e.remove({ id: 'reliquary:alkahestry/crafting/sand' })
    e.remove({ id: 'reliquary:alkahestry/crafting/tin_ingot' })

    /*********************************** TCONSTRUCT ***********************************/
    // ID
    e.remove({ id: 'tconstruct:common/materials_and_you' })
    e.remove({ id: 'tconstruct:compat/create/andesite_alloy_zinc' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/brass/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/brass/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/bronze/gear_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/bronze/gear_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/bronze/ingot_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/bronze/ingot_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/bronze/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/bronze/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/constantan/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/constantan/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/copper/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/copper/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/electrum/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/electrum/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/enderium/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/enderium/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/gold/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/gold/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/invar/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/invar/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/iron/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/iron/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/lead/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/lead/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/lumium/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/lumium/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/netherite/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/netherite/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/nickel/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/nickel/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/rose_gold/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/rose_gold/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/signalum/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/signalum/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/silver/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/silver/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/steel/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/steel/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/tin/ingot_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/tin/ingot_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/tin/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/tin/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/uranium/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/uranium/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/zinc/plate_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/zinc/plate_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/seared/basin' })
    e.remove({ id: 'tconstruct:smeltery/seared/faucet' })
    e.remove({ id: 'tconstruct:smeltery/seared/heater' })
    e.remove({ id: 'tconstruct:smeltery/seared/melter' })
    e.remove({ id: 'tconstruct:smeltery/seared/grout' })
    e.remove({ id: 'tconstruct:smeltery/seared/table' })
    e.remove({ id: 'tconstruct:tables/crafting_station' })
    e.remove({ id: 'tconstruct:tables/part_builder' })
    e.remove({ id: 'tconstruct:tables/tinker_station' })

    // TOOLS
    // ID
    e.remove({ id: 'tconstruct:tools/severing/terracube_clay' })

    /*********************************** THERMAL ***********************************/
    // BLASTING
    // ID
    e.remove({ id: 'thermal:smelting/bronze_ingot_from_dust_blasting' })
    e.remove({ id: 'thermal:smelting/tin_ingot_from_deepslate_ore_blasting' })
    e.remove({ id: 'thermal:smelting/tin_ingot_from_dust_blasting' })
    e.remove({ id: 'thermal:smelting/tin_ingot_from_ore_blasting' })
    e.remove({ id: 'thermal:smelting/tin_ingot_from_raw_blasting' })

    // CENTRIFUGE
    // ID
    e.remove({ id: 'thermal:compat/create/centrifuge_create_crushed_raw_copper' })
    e.remove({ id: 'thermal:machines/centrifuge/centrifuge_oil_sand' })

    // CHILLER
    // ID
    e.remove({ id: 'thermal_extra:machine/chiller/raw_tin' })
    e.remove({ id: 'thermal:compat/tconstruct/chiller_tconstruct_bronze_ingot' })
    e.remove({ id: 'thermal:compat/tconstruct/chiller_tconstruct_tin_ingot' })

    // CRAFTING TABLE
    // ID
    e.remove({ id: 'thermal_extra:crafting/bronze_rod' })
    e.remove({ id: 'thermal:bronze_dust_4' })
    e.remove({ id: 'thermal:fire_charge/bronze_ingot_4' })
    e.remove({ id: 'thermal:parts/bronze_gear' })
    e.remove({ id: 'thermal:storage/bronze_block' })
    e.remove({ id: 'thermal:storage/bronze_ingot_from_block' })
    e.remove({ id: 'thermal:storage/bronze_ingot_from_nuggets' })
    e.remove({ id: 'thermal:storage/tin_ingot_from_block' })
    e.remove({ id: 'thermal:storage/tin_ingot_from_nuggets' })

    // INDUCTION SMELTER
    // ID
    e.remove({ id: 'thermal:compat/create/smelter_create_crushed_raw_tin' })
    e.remove({ id: 'thermal:compat/immersiveengineering/smelter_ie_aluminum_ore' })
    e.remove({ id: 'thermal:machines/smelter/smelter_raw_tin' })
    e.remove({ id: 'thermal:machines/smelter/smelter_tin_dust' })
    e.remove({ id: 'thermal:machines/smelter/smelter_tin_ore' })
    e.remove({ id: 'thermal:machines/smelter/smelter_tin_plate_to_ingot' })

    // PRESS
    // ID
    e.remove({ id: 'thermal:compat/create/smelter_create_alloy_andesite_alloy' })
    e.remove({ id: 'thermal:compat/immersiveengineering/press_ie_aluminum_ingot_to_plate' })
    e.remove({ id: 'thermal:compat/immersiveengineering/press_ie_steel_ingot_to_plate' })
    e.remove({ id: 'thermal:compat/immersiveengineering/press_ie_uranium_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_bronze_ingot_to_gear' })
    e.remove({ id: 'thermal:machines/press/press_bronze_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_constantan_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_copper_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_electrum_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_enderium_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_gold_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_invar_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_iron_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_lead_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_lumium_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_netherite_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_nickel_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_rose_gold_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_signalum_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_silver_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_steel_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/press_tin_ingot_to_plate' })
    e.remove({ id: 'thermal:machines/press/packing3x3/press_bronze_packing' })
    e.remove({ id: 'thermal:machines/press/packing3x3/press_bronze_nugget_packing' })
    e.remove({ id: 'thermal:machines/press/packing3x3/press_tin_nugget_packing' })
    e.remove({ id: 'thermal:machines/press/unpacking/press_bronze_unpacking' })
    e.remove({ id: 'thermal:machines/press/unpacking/press_clay_unpacking' })
    e.remove({ id: 'thermal:machines/press/unpacking/press_sandstone_unpacking' })
    e.remove({ id: 'thermal:machines/press/unpacking/press_tin_unpacking' })
    e.remove({ id: 'thermal_extra:machine/press/abyssal_plate' })
    e.remove({ id: 'thermal_extra:machine/press/bronze_rod' })
    e.remove({ id: 'thermal_extra:machine/press/dragonsteel_plate' })
    e.remove({ id: 'thermal_extra:machine/press/shellite_plate' })
    e.remove({ id: 'thermal_extra:machine/press/soul_infused_plate' })
    e.remove({ id: 'thermal_extra:machine/press/twinite_plate' })

    // PULVERIZER
    // ID
    e.remove({ id: 'thermal:compat/create/pulverizer_create_zinc_ore' })
    e.remove({ id: 'thermal:compat/immersiveengineering/pulverizer_ie_aluminum_ore' })
    e.remove({ id: 'thermal:compat/immersiveengineering/pulverizer_ie_uranium_ore' })
    e.remove({ id: 'thermal:compat/mekanism/pulverizer_mek_fluorite_ore' })
    e.remove({ id: 'thermal:compat/mekanism/pulverizer_mek_osmium_ore' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_apatite_ore' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_bronze_ingot_to_dust' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_bronze_plate_to_dust' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_cinnabar_ore' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_coal_ore' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_cobblestone' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_copper_ore' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_diamond_ore' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_emerald_ore' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_gold_ore' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_gravel' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_iron_ore' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_lapis_ore' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_lead_ore' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_nickel_ore' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_redstone_ore' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_sandstone' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_sandstone_slab' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_silver_ore' })
    e.remove({ id: 'thermal:machines/pulverizer/pulverizer_tin_ore' })

    // REDSTONE FURNACE
    // ID
    e.remove({ id: 'thermal:furnace_1980812802' })
    e.remove({ id: 'thermal:furnace_729849378' })

    // SMELTER
    // ID
    e.remove({ id: 'thermal:machines/smelter/smelter_alloy_bronze' })
    e.remove({ id: 'thermal:machines/smelter/smelter_bronze_dust' })
    e.remove({ id: 'thermal:machines/smelter/smelter_bronze_plate_to_ingot' })

    // SMELTING
    // ID
    e.remove({ id: 'thermal:smelting/bronze_ingot_from_dust_smelting' })
    e.remove({ id: 'thermal:smelting/tin_ingot_from_dust_smelting' })
    e.remove({ id: 'thermal:smelting/tin_ingot_from_deepslate_ore_smelting' })
    e.remove({ id: 'thermal:smelting/tin_ingot_from_ore_smelting' })
    e.remove({ id: 'thermal:smelting/tin_ingot_from_raw_smelting' })

    /*********************************** TWILIGHT FOREST ***********************************/
    // CRUMBLE HORN
    // ID
    e.remove({ id: 'twilightforest:crumble_horn/cobblestone_to_gravel' })
    e.remove({ id: 'twilightforest:crumble_horn/sandstone_to_sand' })

    /*********************************** VINTAGE IMPROVEMENTS ***********************************/
    // HAMMERING
    // ID
    e.remove({ id: 'vintageimprovements:hammering/netherite_ingot' })

    // PRESSING
    // ID
    e.remove({ id: 'vintageimprovements:pressing/aluminum_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/amethyst_bronze_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/andesite_alloy' })
    e.remove({ id: 'vintageimprovements:pressing/bronze_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/cobalt_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/constantan_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/enderium_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/fiery_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/hepatizon_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/ironwood_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/knightmetal_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/invar_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/lead_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/lumium_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/manyullyn_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/nickel_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/osmium_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/pig_iron_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/platinum_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/queens_slime_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/refined_glowstone_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/refined_obsidian_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/rose_gold_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/signalum_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/silver_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/slimesteel_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/tin_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/uranium_ingot' })
    e.remove({ id: 'vintageimprovements:pressing/vanadium_ingot' })
})