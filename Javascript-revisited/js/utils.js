export const numberGenerator = (maxLimit, minLimit) => {
  return Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit;
};
