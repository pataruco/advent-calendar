import { depthReport } from './depthReport.mjs';

export const countHowManyIncreases = (acc, depth) => {
  console.log('before', {
    acc,
    depth,
  });

  return depth > acc.previousReport
    ? {
        totalIncreases: acc.totalIncreases + 1,
        previousReport: depth,
      }
    : {
        totalIncreases: acc.totalIncreases,
        previousReport: depth,
      };
};

const { totalIncreases } = depthReport.reduce(countHowManyIncreases, {
  totalIncreases: 0,
  previousReport: depthReport[0],
});

console.log({ totalIncreases });
