import NumArray, { INVALID_STD_DEV_ARRAY_MSG } from './NumArray';

export const calculateMedian = (arr) => {
  try {
    const numArray = new NumArray(arr);
    return numArray.Median();
  } catch (error) {
    console.error('calculateMedian', error);
  }
};

export const calculateMean = (arr) => {
  try {
    const numArray = new NumArray(arr);
    return numArray.Mean();
  } catch (error) {
    console.error('calculateMean', error);
  }
};

export const calculateMode = (arr) => {
  try {
    const numArray = new NumArray(arr);
    return numArray.Mode();
  } catch (error) {
    console.error('calculateMode', error);
  }
};
