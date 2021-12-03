import { depthReport } from './depthReport.mjs';
import { countHowManyIncreases } from '../1/index.mjs';

const createThreeMeasureSet = (_, index, array) => {
  return array.slice(index, index + 3);
};

const sanitiseThreeMeasureSet = (set) => set.length === 3;

const sumValueOfEachSet = (set) => {
  return set.reduce((acc, depth) => {
    return acc + depth;
  }, 0);
};

const depthReportTrupleSum = depthReport
  .map(createThreeMeasureSet)
  .filter(sanitiseThreeMeasureSet)
  .map(sumValueOfEachSet);

const { totalIncreases } = depthReportTrupleSum.reduce(countHowManyIncreases, {
  totalIncreases: 0,
  previousReport: depthReportTrupleSum[0],
});

console.log({ totalIncreases });
