const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(data) {
  let sum = 0;
  data.forEach((element) => {
    element.forEach((el) => {
      if (el == '^^') {
        sum += 1;
      }
    });
  });
  return sum;
}

module.exports = {
  countCats,
};
