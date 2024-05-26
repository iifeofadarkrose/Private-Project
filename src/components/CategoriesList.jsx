import { useState } from "react";
import { useTranslation } from 'react-i18next';
const CategoriesList = () => {
  const categories = [
    {
      "IndustrialHeatingElements": {
        mainPh:
          "../src/assets/img/IndustrialHeatingElements/Ring/RingBronze/1.png",
        categories: {
          extruderRingHeaters: {
            mainPh:
              "../src/assets/img/IndustrialHeatingElements/Ring/RingBronze/1.png",
            translationKey: "extruderRingHeaters",

            subcategories: {
              bronze: {
                descr: "extruderRingHeaters.bronze.descr",
                diameter: "25 - 100mm",
                width: "20 – 90mm",
                thickness: "2.5 - 3mm",
                maxElPower: "5 W/cm",
                maxVolt: "12, 24, 48, 110, 220/230, 400 (others on order)",
                maxTempr: "500 °C",
                mainPh:
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingBronze/1.png",
                ph: [
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingBronze/1.png",
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingBronze/2.png",
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingBronze/3.png",
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingBronze/4.png",
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingBronze/5.png",
                ],
              },

              ceramic: {
                descr: "extruderRingHeaters.ceramic.descr",
                diameter: "60 - 1000mm",
                width: "30 – 500mm",
                thickness: "10 - 12mm",
                maxElPower: "9 W/cm",
                maxVolt: "12, 24, 48, 110, 220/230, 400 (others on order)",
                maxTempr: "500 °C",
                ph: [
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingCeramic/1.png",
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingCeramic/2.png",
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingCeramic/3.png",
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingCeramic/4.png",
                ],
                mainPh:
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingCeramic/1.png",
              },

              metal: {
                descr: "extruderRingHeaters.metal.descr",
                diameter: "25 - 300mm",
                width: "20 – 90mm",
                thickness: "3 - 4mm",
                maxElPower: "4 W/cm",
                maxVolt: "12, 24, 48, 110, 220/230, 400 (others on order)",
                maxTempr: "350 °C",
                extraDescr: "extruderRingHeaters.metal.extraDescr",
                ph: [
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingMetal/1.png",
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingMetal/2.png",
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingMetal/3.png",
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingMetal/4.png",
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingMetal/5.png",
                ],
                mainPh:
                  "../src/assets/img/IndustrialHeatingElements/Ring/RingMetal/1.png",
              },
            },
          },

          flatHeatingElements: {
            mainPh:
              "../src/assets/img/IndustrialHeatingElements/Flat/FlatAluminum/1.png",
            translationKey: "flatHeatingElements",

            subcategories: {
              aluminium: {
                mainPh:
                  "../../src/assets/img/IndustrialHeatingElements/Flat/FlatAluminum/1.png",
                descr: "flatHeatingElements.aluminium.descr",
                width: "25 – 1000 mm",
                length: "40 - 1000 mm",
                thickness: "18 - 20 mm",
                maxElPower: "2 W/cm",
                maxVolt: "12, 24, 48, 110, 220/230, 400 V (others on order)",
                maxTempr: "400 °C",
                ph: [
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatAluminium/1.png",
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatAluminium/2.png",
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatAluminium/3.png",
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatAluminium/4.png",
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatAluminium/5.png",
                ],
              },

              ceramic: {
                descr: "flatHeatingElements.ceramic.descr",
                width: "50 – 400 mm",
                length: "120 - 1200",
                thickness: "12 mm",
                maxElPower: "6 W/cm",
                maxVolt: "12, 24, 48, 110, 220/230, 400 V(others on order)",
                maxTempr: "500 °C",
                ph: [
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatCeramic/1.png",
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatCeramic/2.png",
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatCeramic/3.png",
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatCeramic/4.png",
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatCeramic/5.png",
                ],
                mainPh:
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatCeramic/1.png",
              },

              metal: {
                descr: "flatHeatingElements.metal.descr",
                width: "20 – 1000 mm",
                length: "40 - 1000",
                thickness: "3 - 4 mm",
                maxElPower: "4 W/cm",
                maxVolt: "12, 24, 48, 110, 220/230, 400 V(others on order)",
                maxTempr: "350 °C",
                ph: [
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatMetal/1.png",
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatMetal/2.png",
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatMetal/3.png",
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatMetal/4.png",
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatMetal/5.png",
                ],
                mainPh:
                  "../src/assets/img/IndustrialHeatingElements/Flat/FlatMetal/1.png",
              },
            },
          },

          cartridgeHeatingElements: {
            mainPh:
              "../../src/assets/img/IndustrialHeatingElements/Сartridge/CartridgeHeaters/1.png",
            translationKey: "cartridgeHeatingElements",
            subcategories: {
              cartridgeHeatingElements: {
                mainPh:
                  "../../src/assets/img/IndustrialHeatingElements/Сartridge/CartridgeHeaters/1.png",
                descr: "cartridgeHeatingElements.descr",
                diameter: "3 - 50mm",
                length: "40 - 1300mm",
                maxElPower: "50 W/cm",
                maxVolt: "V: 12, 24, 48, 110, 220/230, 400V",
                maxTempr: "500 °C",
                ph: [
                  "../src/assets/img/IndustrialHeatingElements/Cartridge/CartridgeHeating/1.png",
                  "../src/assets/img/IndustrialHeatingElements/Cartridge/CartridgeHeating/2.png",
                  "../src/assets/img/IndustrialHeatingElements/Cartridge/CartridgeHeating/3.png",
                  "../src/assets/img/IndustrialHeatingElements/Cartridge/CartridgeHeating/4.png",
                  "../src/assets/img/IndustrialHeatingElements/Cartridge/CartridgeHeating/5.png",
                ],
              },
            },
          },
          spiralHeaters: {
            mainPh:
              "../../src/assets/img/IndustrialHeatingElements/Spiral/SpiralHeaters/3.png",
            translationKey: "spiralHeaters",
            subcategories: {
              spiralHeaters: {
                mainPh:
                  "../../src/assets/img/IndustrialHeatingElements/Spiral/SpiralHeaters/3.png",
                descr: "spiralHeaters.descr",
                diameter: "7 – 120mm",
                length: "6 - 400mm",
                maxElPower: "6 W/cm",
                maxVolt: "12, 24, 48, 110, 220/230, 400V",
                maxTempr: "500 °C",
                ph: [
                  "../src/assets/img/IndustrialHeatingElements/Spiral/SpiralHeater/1.png",
                  "../src/assets/img/IndustrialHeatingElements/Spiral/SpiralHeater/2.png",
                  "../src/assets/img/IndustrialHeatingElements/Spiral/SpiralHeater/3.png",
                  "../src/assets/img/IndustrialHeatingElements/Spiral/SpiralHeater/4.png",
                  "../src/assets/img/IndustrialHeatingElements/Spiral/SpiralHeater/5.png",
                ],
              },
            },
          },
        },
      },
      "Infrared Heaters": {
        mainPh: "../src/assets/img/InfraredРeaters/InfraredCeramic/1.png",
        categories: {
          ceramic: {
            
            mainPh:
              "../../src/assets/img/InfraredРeaters/InfraredCeramic/1.png",
            descr: "InfraredHeatingElements.ceramic.descr",
            translationKey: "InfraredHeatingElements",
            subcategories: {
              "spherical": {
                mainPh:
                  "../../src/assets/img/InfraredРeaters/InfraredCeramic/1.png",
                subcategories: {
                  first: {
                    mainPh:
                      "../../src/assets/img/InfraredРeaters/InfraredCeramic/1.png",
                    dimensions: "290mm*90mm",
                    power: "150-1500W",
                    maxVolt: "12-400V",
                    maxTempr: "700°C",
                    infraredWaveRange: "1.0 – 10.0 microns",
                    descr: "InfraredHeatingElements.spherical.first.descr"
                  },
                  second: {
                    mainPh:
                      "../../src/assets/img/InfraredРeaters/InfraredCeramic/2.png",
                    dimensions: "245mm*60mm",
                    power: "100-1000W",
                    maxVolt: "12-400V",
                    maxTempr: "700°C",
                    infraredWaveRange: "1.0 – 10.0 microns",
                  },
                  third: {
                    mainPh:
                      "../../src/assets/img/InfraredРeaters/InfraredCeramic/1.png",
                    dimensions: "122mm*60mm",
                    power: "100-500W",
                    maxVolt: "12-400V",
                    maxTempr: "700°C",
                    infraredWaveRange: "1.0 – 10.0 microns",
                  },
                  fourth: {
                    mainPh:
                      "../../src/assets/img/InfraredРeaters/InfraredCeramic/1.png",
                    dimensions: "60mm*60mm",
                    power: "100-250W",
                    maxVolt: "12-400V",
                    maxTempr: "650°C",
                    infraredWaveRange: "1.0 – 10.0 microns",
                  },
                },
              },
              flat: {
                mainPh:
                  "../../src/assets/img/InfraredРeaters/InfraredCeramic/8.png",
                subcategories: {
                  first: {
                    dimensions: "290mm*90mm",
                    power: "150-1500W",
                    maxVolt: "12-400V",
                    maxTempr: "700°C",
                    infraredWaveRange: "1.0 – 10.0 microns",
                  },
                  second: {
                    dimensions: "245mm*60mm",
                    power: "100-1000W",
                    maxVolt: "12-400V",
                    maxTempr: "700°C",
                    infraredWaveRange: "1.0 – 10.0 microns",
                  },
                  third: {
                    dimensions: "122mm*60mm",
                    power: "100-500W",
                    maxVolt: "12-400V",
                    maxTempr: "700°C",
                    infraredWaveRange: "1.0 – 10.0 microns",
                  },
                  fourth: {
                    dimensions: "60mm*60mm",
                    power: "100-250W",
                    maxVolt: "12-400V",
                    maxTempr: "650°C",
                    infraredWaveRange: "1.0 – 10.0 microns",
                  },
                },
              },
              lamps: {
                mainPh:
                  "../../src/assets/img/InfraredРeaters/InfraredCeramic/4.png",
                subcategories: {
                  first: {
                    dimensions: "Ø 90 mm",
                    power: "75-250W",
                    maxVolt: "230V",
                    maxTempr: "300-500°C",
                    infraredWaveRange: "1.0 – 10.0 microns",
                  },
                  second: {
                    dimensions: "Ø 76 mm",
                    power: "50-125W",
                    maxVolt: "230V",
                    maxTempr: "300-500°C",
                    infraredWaveRange: "1.0 – 10.0 microns",
                  },
                },
              },
            },
          },
          quartz: {
            descr: "InfraredHeatingElements.quartz.descr",
            mainPh: "../../src/assets/img/InfraredРeaters/InfraredQuartz/1.png",
            additionalInfo: "InfraredHeatingElements.quartz.extraDescr",
            subcategories: {
              "first":
                {
                mainPh: "../../src/assets/img/InfraredРeaters/InfraredQuartz/1.png",
                dimensions: "247mm*62mm",
                power: "100-1000W",
                maxVolt: "230V",
                maxTempr: "700 °C",
                infraredWaveRange: "1.0 – 10.0 microns",
                },
            
              "second":{
                mainPh: "../../src/assets/img/InfraredРeaters/InfraredQuartz/2.png",
                dimensions: "123mm*123mm",
                power: "100-1000W",
                maxVolt: "230V",
                maxTempr: "700 °C",
                infraredWaveRange: "1.0 – 10.0 microns",
              }
            },
            }
          },
        },
      
      "ceramicHeatingElements": {
        mainPh:
          "../src/assets/img/СeramicHeatingFoams/Annealing Furnaces/1.png",
        categories: {
          ceramicHeatingElements: {
            mainPh:
              "../src/assets/img/СeramicHeatingFoams/Annealing Furnaces/1.png",
            subcategories: {
              annealingFurnaces: {
                descr: "ceramicHeatingElements.annealingFurnaces.descr",
                width: "160mm",
                length: "150mm",
                thickness: "15mm",
                maxVolt: "110, 230, 400V",
                maxTempr: "1350°C",
                ph: [
                  "../src/assets/img/СeramicHeatingFoams/Annealing Furnaces/1.png",
                  "../src/assets/img/СeramicHeatingFoams/Annealing Furnaces/2.png",
                  "../src/assets/img/СeramicHeatingFoams/Annealing Furnaces/3.png",
                ],
                mainPh:
                  "../src/assets/img/СeramicHeatingFoams/Annealing Furnaces/1.png",
              },
              dryHeaters: {
                descr: "ceramicHeatingElements.dryHeaters.descr",
                length: "60 – 3000mm",
                minlengthColdZone: "10mm",
                diameter: "30, 36, 46, 57mm",
                maxVolt:
                  "220; 230; 380; 3x380; 400; 3x400V (and others on order)",
                connectionType: "flexible wires or bolts.",
                maxElPower: "9 W/cm",
                maxTempr: "800°C",
                ph: [
                  "../src/assets/img/СeramicHeatingFoams/Dry Heaters/1.png",
                  "../src/assets/img/СeramicHeatingFoams/Dry Heaters/2.png",
                  "../src/assets/img/СeramicHeatingFoams/Dry Heaters/3.png",
                  "../src/assets/img/СeramicHeatingFoams/Dry Heaters/4.png",
                  "../src/assets/img/СeramicHeatingFoams/Dry Heaters/5.png",
                  "../src/assets/img/СeramicHeatingFoams/Dry Heaters/6.png",
                  "../src/assets/img/СeramicHeatingFoams/Dry Heaters/7.png",
                  "../src/assets/img/СeramicHeatingFoams/Dry Heaters/8.png",
                ],
                mainPh:
                  "../../src/assets/img/СeramicHeatingFoams/DryHeaters/4.png",
              },
            },
            translationKey: "ceramicHeatingElements",
          },
        },
      },
      "flexibleHeaters": {
        mainPh: "../src/assets/img/FlexibleHeaters/9.png",
        categories: {
          flexibleHeaters: {
            descr: "flexibleHeaters.descr",
            mainPh: "../src/assets/img/FlexibleHeaters/7.png",
            translationKey: "flexibleHeaters",
            subcategories: {
              flexibleHeaters: {
                manufactOptions:
                  "ø 6.5 mm; ø 8.5 mm; 6 × 6mm; 7 × 7mm; 8 × 8mm",
                length: "300 - 1400mm",
                maxVolt: "12, 24, 48, 110, 220/230, 380V",
                maxTempr: "500°C",
                ph: [
                  "../src/assets/img/FlexibleHeaters/9.png",
                  "../src/assets/img/FlexibleHeaters/10.png",
                  "../src/assets/img/FlexibleHeaters/11.png",
                  "../src/assets/img/FlexibleHeaters/12.png",
                  "../src/assets/img/FlexibleHeaters/13.png",
                  "../src/assets/img/FlexibleHeaters/14.png",
                  "../src/assets/img/FlexibleHeaters/15.png",
                  "../src/assets/img/FlexibleHeaters/16.png",
                ],
                mainPh: "../src/assets/img/FlexibleHeaters/7.png",
              },
            },
          },
        },
      },
      "components": {
        mainPh: "../src/assets/img/Accesories/pads/1.png",
        categories: {
          networkConnectors: {
            descr: "components.networkConnectors.descr",
            mainPh: "../../src/assets/img/Accesories/NetworkСonnectors/1.png",
            ph: [
              "../src/assets/img/Accesories/pads/1.png",
              "../src/assets/img/Accesories/pads/2.png",
              "../src/assets/img/Accesories/pads/3.png",
              "../src/assets/img/Accesories/pads/4.png",
              "../src/assets/img/Accesories/pads/5.png",
              "../src/assets/img/Accesories/pads/6.png",
              "../src/assets/img/Accesories/pads/7.png",
              "../src/assets/img/Accesories/pads/8.png",
              "../src/assets/img/Accesories/pads/9.png",
              "../src/assets/img/Accesories/pads/10.png",
              "../src/assets/img/Accesories/pads/11.png",
              "../src/assets/img/Accesories/pads/12.png",
              "../src/assets/img/Accesories/pads/13.png",
              "../src/assets/img/Accesories/pads/14.png",
            ],
            subcategories: {},
          },
          Pads: {
            descr: "components.Pads.descr",
            mainPh: "../src/assets/img/Accesories/pads/1.png",
            ph: [
              "../src/assets/img/Accesories/pads/1.png",
              "../src/assets/img/Accesories/pads/2.png",
              "../src/assets/img/Accesories/pads/3.png",
              "../src/assets/img/Accesories/pads/4.png",
              "../src/assets/img/Accesories/pads/5.png",
              "../src/assets/img/Accesories/pads/6.png",
              "../src/assets/img/Accesories/pads/7.png",
              "../src/assets/img/Accesories/pads/8.png",
              "../src/assets/img/Accesories/pads/9.png",
              "../src/assets/img/Accesories/pads/10.png",
              "../src/assets/img/Accesories/pads/11.png",
              "../src/assets/img/Accesories/pads/12.png",
              "../src/assets/img/Accesories/pads/13.png",
              "../src/assets/img/Accesories/pads/14.png",
            ],
            subcategories: {
              openTwoPole: {
                material: "ceramic",
                operTempr: "-40°C; 350°C",
                maxTempr: "500°C",
                materialConection: "external (brass)",
                maxWire: "2.5 mm² - 6 mm²",
                size: "33x8x23mm",
                operating: "24 A",
                maxVolt: "500V",
                ph: [
                  "../assets/img/Accesories/pads/5.png",
                  "../assets/img/Accesories/pads/5(1).png",
                ],
                mainPh: "../../src/assets/img/Accesories/pads/5.png",
              },
              openThreePole: {
                material: "ceramic",
                operTempr: "-40°C; 350°C",
                maxTempr: "500°C",
                materialConection: "external (brass)",
                maxWire: "2.5 mm² - 6 mm²",
                size: "54x10x23mm",
                operating: "24 A",
                maxVolt: "500V",
                ph: [
                  "../assets/img/Accesories/pads/4.png",
                  "../assets/img/Accesories/pads/4(1).png",
                ],
                mainPh: "../../src/assets/img/Accesories/pads/4.png",
              },
              openFourPole: {
                material: "ceramic",
                operTempr: "-40°C; 350°C",
                maxTempr: "500°C",
                materialConection: "external (brass)",
                maxWire: "2.5 mm² - 6 mm²",
                size: "54x10x23mm",
                operating: "24 A",
                maxVolt: "500V",
                ph: [
                  "../assets/img/Accesories/pads/3.png",
                  "../assets/img/Accesories/pads/3(1).png",
                ],
                mainPh: "../../src/assets/img/Accesories/pads/3.png",
              },
              closedTwoPole: {
                material: "ceramic",
                operTempr: "-40°C; 350°C",
                maxTempr: "500°C",
                materialConection: "external (brass)",
                maxWire: "2.5 mm² - 6 mm²",
                size: "54x10x23mm",
                operating: "24 A",
                maxVolt: "500V",
                ph: [
                  "../assets/img/Accesories/pads/2.png",
                  "../assets/img/Accesories/pads/2(1).png",
                ],
                mainPh: "../../src/assets/img/Accesories/pads/2.png",
              },
            },
          },
          thermocouples: {
            descr: "components.thermocouples.descr",
            mainPh: "../../src/assets/img/Accesories/thermocouples/1.png",
            subcategories: {
              typeK: {
                mainPh: "../../src/assets/img/Accesories/thermocouples/1.png",
                descr: "components.thermocouples.typeK.descr",
                ph: [
                  "../../src/assets/img/Accesories/thermocouples/1.png",
                  "../../src/assets/img/Accesories/thermocouples/2.png",
                ],
              },
              typeJ: {
                mainPh: "../../src/assets/img/Accesories/thermocouples/3.png",
                descr: "components.thermocouples.typeJ.descr",
                ph: [
                  "../../src/assets/img/Accesories/thermocouples/3.png",
                  "../../src/assets/img/Accesories/thermocouples/4.png",
                ],
              },
            },
          },
          bands: {
            descr: "components.bands.descr",
            mainPh: "../../src/assets/img/Accesories/wires/band.png",
            ph: "../../src/assets/img/Accesories/wires/band.png",
            width: "15 – 500mm",
            length: "50 - 1500mm",
            thickness: "10 - 14mm",
            maxElPower: "9 W/cm",
            maxVolt: "12, 24, 48, 110, 220/230, 400 (others on order)",
            maxTempr: "500°C",
          },
        },
      },
    },
  ];
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSubsubcategory, setSelectedSubsubcategory] = useState(null);
  const [selectedSubsubsubcategory, setSelectedSubsubsubcategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedSubcategory(null);
    setSelectedSubsubcategory(null);
    setSelectedSubsubsubcategory(null);
  };

  const handleSubcategoryClick = (subcategoryName) => {
    setSelectedSubcategory(subcategoryName);
    setSelectedSubsubcategory(null);
    setSelectedSubsubsubcategory(null);
  };

  const handleSubsubcategoryClick = (subsubcategoryName) => {
    setSelectedSubsubcategory(subsubcategoryName);
    setSelectedSubsubsubcategory(null);
  };

  const handleSubsubsubcategoryClick = (subsubsubcategoryName) => {
    setSelectedSubsubsubcategory(subsubsubcategoryName);
  };

  const renderSubSubsubcategories = () => {
    if (!selectedCategory || !selectedSubcategory || !selectedSubsubcategory) return null;

    const category = categories[0][selectedCategory];
    const subcategory = category.categories[selectedSubcategory];
    const subsubcategory = subcategory.subcategories[selectedSubsubcategory];
    if (!subsubcategory || !subsubcategory.subcategories) return null;

    return Object.keys(subsubcategory.subcategories).map((subsubsubcategoryKey) => {
      const subsubsubcategory = subsubcategory.subcategories[subsubsubcategoryKey];
      return (
        <div
          className="cursor-pointer"
          key={subsubsubcategoryKey}
          onClick={() => handleSubsubsubcategoryClick(subsubsubcategoryKey)}
        >
          <div className="text-center">
            <img
              src={subsubsubcategory.mainPh}
              alt={subsubsubcategory.name}
              className="h-[180px] w-[180px]"
            />
            <h3>{t(`${selectedCategory}.categories.${selectedSubcategory}.subcategories.${selectedSubsubcategory}.subcategories.${subsubsubcategoryKey}.name`)}</h3>
            <button 
              className="mt-2 px-4 py-2 w-full bg-[#279CD5] text-white rounded"
              onClick={() => handleSubsubsubcategoryClick(subsubsubcategoryKey)}
            >
              More Info
            </button>
          </div>
        </div>
      );
    });
  };

  const renderSubSubcategories = () => {
    if (!selectedCategory || !selectedSubcategory) return null;

    const category = categories[0][selectedCategory];
    const subcategory = category.categories[selectedSubcategory];
    if (!subcategory || !subcategory.subcategories) return null;

    return Object.keys(subcategory.subcategories).map((subsubcategoryKey) => {
      const subsubcategory = subcategory.subcategories[subsubcategoryKey];
      return (
        <div
          className="cursor-pointer"
          key={subsubcategoryKey}
          onClick={() => handleSubsubcategoryClick(subsubcategoryKey)}
        >
          <div className="text-center">
            <img
              src={subsubcategory.mainPh}
              alt={subsubcategory.name}
              className="h-[180px] w-[180px]"
            />
            <h3>{t(`${selectedCategory}.categories.${selectedSubcategory}.subcategories.${subsubcategoryKey}.name`)}</h3>
          </div>
        </div>
      );
    });
  };

  const renderSubcategories = () => {
    if (!selectedCategory) return null;

    const category = categories[0][selectedCategory];
    if (!category || !category.categories) return null;

    return Object.keys(category.categories).map((subcategoryKey) => {
      const subcategory = category.categories[subcategoryKey];
      return (
        <div
          className="cursor-pointer"
          key={subcategoryKey}
          onClick={() => handleSubcategoryClick(subcategoryKey)}
        >
          <div className="text-center">
            <img
              src={subcategory.mainPh}
              alt={subcategory.name}
              className="h-[180px] w-[180px]"
            />
            <h3>{t(`${selectedCategory}.categories.${subcategoryKey}.name`)}</h3>
          </div>
        </div>
      );
    });
  };

  const renderCategories = () => {
    return Object.keys(categories[0]).map((categoryKey) => {
      const category = categories[0][categoryKey];
      return (
        <div
          className="cursor-pointer"
          key={categoryKey}
          onClick={() => handleCategoryClick(categoryKey)}
        >
          <div className="text-center border border-black p-2 rounded-sm bg-white">
            <div className="flex justify-center">
              <img
                src={category.mainPh}
                alt={category.name}
                className="text-center h-[220px] w-[220px] bg-center"
              />
            </div>
            <h2 className="font-serif">{t(`${categoryKey}.name`)}</h2>
          </div>
        </div>
      );
    });
  };

  const renderSelectedSubsubsubcategory = () => {
    if (!selectedSubsubsubcategory) return null;

    const category = categories[0][selectedCategory];
    const subcategory = category.categories[selectedSubcategory];
    const subsubcategory = subcategory.subcategories[selectedSubsubcategory];
    const subsubsubcategory = subsubcategory.subcategories[selectedSubsubsubcategory];

    if (!subsubsubcategory) return null;

    return (
      <div className="bg-[#F5F5F5]">
        <h3 className="capitalize text-2xl font-thin text-[#818590]">{subsubsubcategory.name}</h3>
        <div className="text-center flex">
          <img
            src={subsubsubcategory.mainPh}
            alt={subsubsubcategory.name}
            className="h-[250px] w-[300px]"
          />
          <div className="text-left bg-[#F5F5F5] items-center ml-[15%]">
            <ul className="capitalize">
              {Object.entries(subsubsubcategory).map(([key, value]) => {
                if (key === 'mainPh' || key === 'ph' || key === 'descr') return null;
                return (
                  <li key={key}>
                    {key}: {typeof value === 'string' || typeof value === 'number' ? value : JSON.stringify(value)}
                  </li>
                );
              })}
            </ul>
            {subsubsubcategory.descr && (
              <h3 className="mt-[12%] list-none">
                <li key="descr">
                  {t(`categories.${selectedCategory}.${selectedSubcategory}.${selectedSubsubcategory}.${selectedSubsubsubcategory}.descr`)}
                </li>
              </h3>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderSelectedSubsubcategory = () => {
    if (!selectedSubsubcategory) return null;

    const category = categories[0][selectedCategory];
    if (!category || !category.categories || !selectedSubcategory) return null;

    const subcategory = category.categories[selectedSubcategory];
    if (!subcategory || !subcategory.subcategories) return null;

    const subsubcategory =  subcategory.subcategories[selectedSubsubcategory];
    if (!subsubcategory) return null;

    return (
      <div>
        <h3 className="capitalize text-2xl font-thin text-[#818590]">{subsubcategory.name}</h3>
        <div className="text-center flex">
          <img
            src={subsubcategory.mainPh}
            alt={subsubcategory.name}
            className="h-[310px] w-[330px] "
          />
          <div className="text-left bg-[#F5F5F5] items-center ml-[15%]">
            <ul className="">
              {Object.entries(subsubcategory).map(([key, value]) => {
                if (key === 'mainPh' || key === 'ph' || key === 'descr')
                  return null;
                return (
                  <li className="capitalize mb-1" key={key}>
                    {key}: {value}
                  </li>
                );
              })}
            </ul>
            <h3 className="mt-[12%] list-none">
              {Object.entries(subsubcategory).map(([key, value]) => {
                if (key === 'descr')
                  return (
                    <li key={key}>
                      {key}: <br /> {value}
                    </li>
                  );
              })}
            </h3>
          </div>
        </div>
        <div className="flex justify-center gap-8 my-8">
          <h3 className="mr-4"> Details can be obtained from the 
            <br/>  manager by phone +33 749 143 577 
          </h3>
          <button className="p-4 border-[#279CD5] border text-[#279CD5] w-[220px] hover:text-black">Ask for consultations</button>
          <button className="bg-[#279CD5] p-4 text-white w-[220px] hover:border-black hover:border">Send request</button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex mx-[2%] mt-[2%] flex-wrap gap-5 justify-center">
      {selectedSubsubsubcategory
        ? renderSelectedSubsubsubcategory() // Отображение выбранной подподподкатегории
        : selectedSubsubcategory && categories[0][selectedCategory]?.categories[selectedSubcategory]?.subcategories[selectedSubsubcategory]?.subcategories
        ? renderSubSubsubcategories() // Отображение подподподкатегорий
        : selectedSubsubcategory
        ? renderSelectedSubsubcategory() // Отображение выбранной подподкатегории
        : selectedSubcategory
        ? renderSubSubcategories() // Отображение подподкатегорий
        : selectedCategory
        ? renderSubcategories() // Отображение подкатегорий
        : renderCategories()}
    </div>
  );
};

export default CategoriesList;