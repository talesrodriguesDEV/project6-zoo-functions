const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const speciesResidents = species
    .find((specie) => specie.id === employees.find((employee) => employee.id === id)
      .responsibleFor[0]).residents;
  let oldest = {};
  let greaterAge = 0;
  speciesResidents.forEach((resident) => {
    if (resident.age > greaterAge) {
      oldest = resident;
      greaterAge = resident.age;
    }
  });
  return [oldest.name, oldest.sex, oldest.age];
};

module.exports = getOldestFromFirstSpecies;
