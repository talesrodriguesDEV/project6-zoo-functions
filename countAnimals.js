const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (parameters) => {
  if (parameters === undefined) {
    const object = {};
    species.forEach((specie) => {
      object[specie.name] = specie.residents.length;
    });
    return object;
  }
  if (typeof parameters === 'object') {
    if (parameters.sex === undefined) {
      return species.find((specie) => specie.name === parameters.specie).residents.length;
    }
    return species.find((specie) => specie.name === parameters.specie)
      .residents.filter((resident) => resident.sex === parameters.sex).length;
  }
};

module.exports = countAnimals;
