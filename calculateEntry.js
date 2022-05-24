const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  if (!entrants) {
    return 0;
  }
  if (Array.isArray(entrants)) {
    const childrenCount = entrants.filter((entrant) => entrant.age < 18).length;
    const adultsCount = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
    const seniorCount = entrants.filter((entrant) => entrant.age >= 50).length;
    return { child: childrenCount, adult: adultsCount, senior: seniorCount };
  }
};

const calculateEntry = (entrants) => {
  let total = 0;
  const object = countEntrants(entrants);
  if (object === 0 || !Array.isArray(entrants)) {
    return 0;
  }
  total += object.child * prices.child + object.adult * prices.adult
  + object.senior * prices.senior;
  return total;
};

console.log(countEntrants());

console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));

console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
