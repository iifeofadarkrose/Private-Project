const dataList = [
  {
    name: "Industrial Heating Elements",
    categories: {
      extruderRingHeaters: {
        subcategories: {
          bronze: {
            descr: i18n.t("extruderRingHeaters.bronze.descr"),
            diameter: "25 - 100mm",
            width: "20 – 90mm",
            thickness: "2.5 - 3mm",
            maxElPower: "5 W/cm",
            maxVolt: "12, 24, 48, 110, 220/230, 400 (others on order)",
            maxTempr: "500 °C",
          },
          ceramic: {
            descr: i18n.t("extruderRingHeaters.ceramic.descr"),
            diameter: "60 - 1000mm",
            width: "30 – 500mm",
            thickness: "10 - 12mm",
            maxElPower: "9 W/cm",
            maxVolt: "12, 24, 48, 110, 220/230, 400 (others on order)",
            maxTempr: "500 °C",
          },
          metal: {
            descr: i18n.t("extruderRingHeaters.metal.descr"),
            diameter: "25 - 300mm",
            width: "20 – 90mm",
            thickness: "3 - 4mm",
            maxElPower: "4 W/cm",
            maxVolt: "12, 24, 48, 110, 220/230, 400 (others on order)",
            maxTempr: "350 °C",
            extraDescr: i18n.t("extruderRingHeaters.metal.extraDescr"),
          },
        },
        mainPh: {},
        images: [],
        translationKey: "extruderRingHeaters",
      },
      flatHeatingElements: {
        subcategories: {
          aluminium: {
            descr: i18n.t("flatHeatingElements.aluminium.descr"),
            width: "25 – 1000 mm",
            length: "40 - 1000 mm",
            thickness: "18 - 20 mm",
            maxElPower: "2 W/cm",
            maxVolt: "12, 24, 48, 110, 220/230, 400 V (others on order)",
            maxTempr: "400 °C",
          },
          ceramic: {
            descr: i18n.t("flatHeatingElements.ceramic.descr"),
            width: "50 – 400 mm",
            length: "120 - 1200",
            thickness: "12 mm",
            maxElPower: "6 W/cm",
            maxVolt: "12, 24, 48, 110, 220/230, 400 V(others on order)",
            maxTempr: "500 °C",
          },
          metal: {
            descr: i18n.t("flatHeatingElements.metal.descr"),
            width: "20 – 1000 mm",
            length: "40 - 1000",
            thickness: "3 - 4 mm",
            maxElPower: "4 W/cm",
            maxVolt: "12, 24, 48, 110, 220/230, 400 V(others on order)",
            maxTempr: "350 °C",
          },
        },
        mainPh: {},
        images: [],
        translationKey: "flatHeatingElements",
      },
      cartridgeHeatingElements: {
        descr: i18n.t("cartridgeHeatingElements.descr"),
        diameter: "3 - 50mm",
        length: "40 - 1300mm",
        maxElPower: "50 W/cm",
        maxVolt: "V: 12, 24, 48, 110, 220/230, 400V",
        maxTempr: "500 °C",
        mainPh: {},
        images: [],
        translationKey: "cartridgeHeatingElements",
      },
      spiralHeaters: {
        descr: i18n.t("spiralHeaters.descr"),
        diameter: "7 – 120mm",
        length: "6 - 400mm",
        maxElPower: "6 W/cm",
        maxVolt: "12, 24, 48, 110, 220/230, 400V",
        maxTempr: "500 °C",
        mainPh: {},
        images: [],
        translationKey: "spiralHeaters",
      },
    },
  },
  {
    name: "Infrared Heaters",
    categories: {
      InfraredHeatingElements: {
        subcategories: {
          ceramic: {
            descr: i18n.t("InfraredHeatingElements.ceramic.descr"),
            spherical: [
              {
                dimensions: "290mm*90mm",
                power: "150-1500W",
                maxVolt: "12-400V",
                maxTempr: "700°C",
                infraredWaveRange: "1.0 – 10.0 microns",
              },
              {
                dimensions: "245mm*60mm",
                power: "100-1000W",
                maxVolt: "12-400V",
                maxTempr: "700°C",
                infraredWaveRange: "1.0 – 10.0 microns",
              },
              {
                dimensions: "122mm*60mm",
                power: "100-500W",
                maxVolt: "12-400V",
                maxTempr: "700°C",
                infraredWaveRange: "1.0 – 10.0 microns",
              },
              {
                dimensions: "60mm*60mm",
                power: "100-250W",
                maxVolt: "12-400V",
                maxTempr: "650°C",
                infraredWaveRange: "1.0 – 10.0 microns",
              },
              {
                extraDescr: i18n.t(
                  "InfraredHeatingElements.ceramic.spherical.extraDescr"
                ),
              },
            ],

            flat: [
              {
                dimensions: "290mm*90mm",
                power: "150-1500W",
                maxVolt: "12-400V",
                maxTempr: "700°C",
                infraredWaveRange: "1.0 – 10.0 microns",
              },
              {
                dimensions: "245mm*60mm",
                power: "100-1000W",
                maxVolt: "12-400V",
                maxTempr: "700°C",
                infraredWaveRange: "1.0 – 10.0 microns",
              },
              {
                dimensions: "122mm*60mm",
                power: "100-500W",
                maxVolt: "12-400V",
                maxTempr: "700°C",
                infraredWaveRange: "1.0 – 10.0 microns",
              },
              {
                dimensions: "60mm*60mm",
                power: "100-250W",
                maxVolt: "12-400V",
                maxTempr: "650°C",
                infraredWaveRange: "1.0 – 10.0 microns",
              },
              {
                extraDescr: i18n.t(
                  "InfraredHeatingElements.ceramic.flat.extraDescr"
                ),
              },
            ],

            lamps: [
              {
                dimensions: "Ø 90 mm",
                power: "75-250W",
                maxVolt: "230V",
                maxTempr: "300-500°C",
                infraredWaveRange: "1.0 – 10.0 microns",
              },
              {
                dimensions: "Ø 76 mm",
                power: "50-125W",
                maxVolt: "230V",
                maxTempr: "300-500°C",
                infraredWaveRange: "1.0 – 10.0 microns",
              },
              {
                extraDescr: i18n.t(
                  "InfraredHeatingElements.ceramic.lamps.extraDescr"
                ),
              },
            ],
          },
        },
        quartz: {
          descr: i18n.t("InfraredHeatingElements.quartz.descr"),
          options: [
            {
              dimensions: "247mm*62mm",
              power: "100-1000W",
              maxVolt: "230V",
              maxTempr: "700 °C",
              infraredWaveRange: "1.0 – 10.0 microns",
            },
            {
              dimensions: "123mm*123mm",
              power: "100-1000W",
              maxVolt: "230V",
              maxTempr: "700 °C",
              infraredWaveRange: "1.0 – 10.0 microns",
            },
            {
              dimensions: "125mm*62mm",
              power: "75-500W",
              maxVolt: "230V",
              maxTempr: "700 °C",
              infraredWaveRange: "1.0 – 10.0 microns",
            },
            {
              dimensions: "80mm*62mm",
              power: "W:250-600",
              maxVolt: "230V",
              maxTempr: "700 °C",
              infraredWaveRange: "1.0 – 10.0 microns",
            },
            {
              dimensions: "62mm * 62mm",
              power: "50-150W",
              maxVolt: "230V",
              maxTempr: "600 °C",
              infraredWaveRange: "1.0 – 10.0 microns",
            },
          ],
          additionalInfo: i18n.t("InfraredHeatingElements.quartz.extraDescr"),
        },
      },
      mainPh: {},
      images: [],
      translationKey: "InfraredHeatingElements",
    },
  },
  {
    name: "Ceramic Heating Elements",
    categories: {
      ceramicHeatingElements: {
        subcategories: {
          annealingFurnaces: {
            descr: i18n.t("ceramicHeatingElements.annealingFurnaces.descr"),
            width: "160mm",
            length: "150mm",
            thickness: "15mm",
            maxVolt: "110, 230, 400V",
            maxTempr: "1350°C",
          },
          dryHeaters: {
            descr: i18n.t("ceramicHeatingElements.dryHeaters.descr"),
            length: "60 – 3000mm",
            minlengthColdZone: "10mm",
            diameter: "30, 36, 46, 57mm",
            maxVolt: "220; 230; 380; 3x380; 400; 3x400V (and others on order)",
            connectionType: "flexible wires or bolts.",
            maxElPower: "9 W/cm",
            maxTempr: "800°C",
          },
        },
        mainPh: {},
        images: [],
        translationKey: "ceramicHeatingElements",
      },
    },
  },
  {
    name: "Flexible Heaters",
    categories: {
      flexibleHeaters: {
        descr: i18n.t("flexibleHeaters.descr"),
        manufactOptions: "ø 6.5 mm; ø 8.5 mm; 6 × 6mm; 7 × 7mm; 8 × 8mm",
        length: "300 - 1400mm",
        maxVolt: "12, 24, 48, 110, 220/230, 380V",
        maxTempr: "500°C",
        mainPh: {},
        images: [],
        translationKey: "flexibleHeaters",
      },
    },
  },
  {
    name: "Heating Element Materials",
    categories: {
      networkConnectors: {
        descr: i18n.t("components.networkConnectors.descr"),
      },
      thermocouples: {
        descr: i18n.t("components.thermocouples.descr"),
        typeK: {
          descr: i18n.t("components.thermocouples.typeK.descr"),
        },
        typeJ: {
          descr: i18n.t("components.thermocouples.typeJ.descr"),
        },
      },
      pads: {
        subcategories: {
          descr: "components.pads.descr",
          openTwoPole: {
            material: "ceramic",
            operTempr: "-40°C; 350°C",
            maxTempr: "500°C",
            materialConection: "external (brass)",
            maxWire: "2.5 mm² - 6 mm²",
            size: "33x8x23mm",
            operating: "24 A",
            maxVolt: "500V",
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
          },
          openFourPole: {
            material: "ceramic",
            operTempr: "-40°C; 350°C",
            maxTempr: "500°C",
            materialConection: "external (brass)",
            maxWire: "2.5 mm² - 6 mm²",
            size: "56x8x23mm",
            operating: "24 A",
            maxVolt: "500V",
          },
          closedTwoPole: {
            material: "ceramic",
            operTempr: "-40°C; 350°C",
            maxTempr: "500°C",
            materialConection: "internal (brass)",
            maxWire: "2.5 mm² - 6 mm²",
            size: "56x8x23mm",
            operating: "24 A",
            maxVolt: "500V",
          },
        },
      },
      bands: {
        descr: i18n.t("components.bands.descr"),
        width: "15 – 500mm",
        length: "50 - 1500mm",
        thickness: "10 - 14mm",
        maxElPower: "9 W/cm",
        maxVolt: "12, 24, 48, 110, 220/230, 400 (others on order)",
        maxTempr: "500°C",
      },
      mainPh: {},
      images: [],
      translationKey: "components",
    },
  },
];
