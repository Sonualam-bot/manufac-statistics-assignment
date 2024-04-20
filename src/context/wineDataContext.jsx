import { createContext } from "react";
import { wineDataSet } from "../utils/wineDataSet";
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from "../utility/helper";

export const WineDataContext = createContext();

export const WineDataContextProvider = ({ children }) => {
  // add gamma for each point of the dataset
  const addingGammaForEachDataSet = wineDataSet.map((wine) => {
    const { Ash, Hue, Magnesium } = wine;

    const numericAsh = parseFloat(Ash);
    const numericHue = parseFloat(Hue);
    const numericMagnesium = parseFloat(Magnesium);

    if (!isNaN(numericAsh) && !isNaN(numericHue) && !isNaN(numericMagnesium)) {
      // to calculate gamma and add it to the object
      wine.gamma = (numericAsh * numericHue) / numericMagnesium;
    } else {
      // If any property is not a valid number, set gamma to NaN since some values are also present as strings
      wine.gamma = NaN;
    }
    return wine;
  });

  // extracting array according to Alcohol class
  const classOneAlcohol = [...addingGammaForEachDataSet]?.filter(
    (wineSet) => wineSet.Alcohol === 1
  );

  const classTwoAlcohol = [...addingGammaForEachDataSet]?.filter(
    (wineSet) => wineSet.Alcohol === 2
  );

  const classThreeAlcohol = [...addingGammaForEachDataSet]?.filter(
    (wineSet) => wineSet.Alcohol === 3
  );

  //   calculating mean according to flavoids
  const classOneAlcoholMean = calculateMean(classOneAlcohol, "Flavanoids");
  const classTwoAlcoholMean = calculateMean(classTwoAlcohol, "Flavanoids");
  const classThreeAlcoholMean = calculateMean(classThreeAlcohol, "Flavanoids");

  //   calculating mean according to gamma
  const classOneGammaMean = calculateMean(classOneAlcohol, "gamma");
  const classTwoGammaMean = calculateMean(classTwoAlcohol, "gamma");
  const classThreeGammaMean = calculateMean(classThreeAlcohol, "gamma");

  //   calculating median according alcohol class flavoids
  const classOneAlcoholMedian = calculateMedian(classOneAlcohol, "Flavanoids");
  const classTwoAlcoholMedian = calculateMedian(classTwoAlcohol, "Flavanoids");
  const classThreeAlcoholMedian = calculateMedian(
    classThreeAlcohol,
    "Flavanoids"
  );

  //   calculating median according alcohol class gamma
  const classOneGammaMedian = calculateMedian(classOneAlcohol, "gamma");
  const classTwoGammaMedian = calculateMedian(classTwoAlcohol, "gamma");
  const classThreeGammaMedian = calculateMedian(classThreeAlcohol, "gamma");

  //   calculating mode according alcohol class flavoids
  const classOneAlcoholMode = calculateMode(classOneAlcohol, "Flavanoids");
  const classTwoAlcoholMode = calculateMode(classTwoAlcohol, "Flavanoids");
  const classThreeAlcoholMode = calculateMode(classThreeAlcohol, "Flavanoids");

  //   calculating mode according alcohol class gamma
  const classOneGammaMode = calculateMode(classOneAlcohol, "gamma");
  const classTwoGammaMode = calculateMode(classTwoAlcohol, "gamma");
  const classThreeGammaMode = calculateMode(classThreeAlcohol, "gamma");

  const flavanoidsDataTable = [
    {
      title: "Flavanoids Mean",
      class1: classOneAlcoholMean,
      class2: classTwoAlcoholMean,
      class3: classThreeAlcoholMean,
    },
    {
      title: "Flavanoids Median",
      class1: classOneAlcoholMedian,
      class2: classTwoAlcoholMedian,
      class3: classThreeAlcoholMedian,
    },
    {
      title: "Flavanoids Mode",
      class1: classOneAlcoholMode,
      class2: classTwoAlcoholMode,
      class3: classThreeAlcoholMode,
    },
  ];

  const gammaDataTable = [
    {
      title: "Gamma Mean",
      class1: classOneGammaMean,
      class2: classTwoGammaMean,
      class3: classThreeGammaMean,
    },
    {
      title: "Gamma Median",
      class1: classOneGammaMedian,
      class2: classTwoGammaMedian,
      class3: classThreeGammaMedian,
    },
    {
      title: "Gamma Mode",
      class1: classOneGammaMode,
      class2: classTwoGammaMode,
      class3: classThreeGammaMode,
    },
  ];

  const value = {
    flavanoidsDataTable,
    gammaDataTable,
  };

  return (
    <WineDataContext.Provider value={value}>
      {children}
    </WineDataContext.Provider>
  );
};
