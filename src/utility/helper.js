export const calculateMean = (arr, property) => {
  // Check if the array is empty
  if (arr.length === 0) {
    return NaN;
  }

  // to sum up the values of the specified property across all objects
  const sum = arr.reduce((accumulator, currentValue) => {
    // to extract the property value from each object
    const value = currentValue[property];

    // to ensure the value is a number
    const numericValue = parseFloat(value);

    // If the value is a valid number, add it to the accumulator
    if (!isNaN(numericValue)) {
      return accumulator + numericValue;
    } else {
      return accumulator; // Skip invalid values
    }
  }, 0);

  // Calculate the mean by dividing the sum by the number of elements
  const mean = Math.round(sum / arr.length);

  return mean;
};

export const calculateMedian = (arr, property) => {
  const length = arr.length;

  // Here in some of the flavanoid values were of string type so first converting it to number then filtering out any NaN values to avoid invalid or non-numberic data
  const numericValues = arr
    .map((obj) => parseFloat(obj[property]))
    .filter((value) => !isNaN(value));

  numericValues.sort((a, b) => a - b);

  if (length % 2 === 0) {
    return Math.round(
      (numericValues[length / 2 - 1] + numericValues[length / 2]) / 2
    );
  }

  return Math.round(numericValues[(length - 1) / 2]);
};

export const calculateMode = (arr, property) => {
  //  to count occurrences of each value need to store it first
  const counts = {};
  arr.forEach((obj) => {
    const value = obj[property];
    counts[value] = (counts[value] || 0) + 1;
  });

  // now find the value with the highest count
  let modeValue;
  let maxCount = 0;
  for (const value in counts) {
    if (counts[value] > maxCount) {
      modeValue = value;
      maxCount = counts[value];
    }
  }

  // when  modeValue returned is  a string, parse it to a float
  if (typeof modeValue === "string") {
    modeValue = parseFloat(modeValue);
  }

  return Math.round(modeValue);
};
