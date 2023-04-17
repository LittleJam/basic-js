const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(names) {
  let team = [];

  if (!Array.isArray(names)) return false;

  let item;
  for (let el of names) {
    if (typeof el === 'string' && el != ' ') {
      item = el.trim();
      console.log(item);
      team.push(item[0].toUpperCase());
    }
  }

  console.log(team.sort());

  return team.sort().join('');
}
module.exports = {
  createDreamTeam,
};
