const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsLocation = (location) => species.filter((specie) => specie.location === location)
  .map((specie) => specie.name);

const defaultAnimalsLocation = {
  NE: getAnimalsLocation('NE'),
  NW: getAnimalsLocation('NW'),
  SE: getAnimalsLocation('SE'),
  SW: getAnimalsLocation('SW'),
};

const getResidentsNames = (animal) => species.find((specie) => specie
  .name === animal).residents.map((resident) => resident.name);

const animalsNamesByLocation = {
  NE: [
    { lions: getResidentsNames('lions') },
    { giraffes: getResidentsNames('giraffes') },
  ],
  NW: [
    { tigers: getResidentsNames('tigers') },
    { bears: getResidentsNames('bears') },
    { elephants: getResidentsNames('elephants') },
  ],
  SE: [
    { penguins: getResidentsNames('penguins') },
    { otters: getResidentsNames('otters') },
  ],
  SW: [
    { frogs: getResidentsNames('frogs') },
    { snakes: getResidentsNames('snakes') },
  ],
};

const animalsNamesByLocationSorted = {
  NE: [
    { lions: getResidentsNames('lions').sort() },
    { giraffes: getResidentsNames('giraffes').sort() },
  ],
  NW: [
    { tigers: getResidentsNames('tigers').sort() },
    { bears: getResidentsNames('bears').sort() },
    { elephants: getResidentsNames('elephants').sort() },
  ],
  SE: [
    { penguins: getResidentsNames('penguins').sort() },
    { otters: getResidentsNames('otters').sort() },
  ],
  SW: [
    { frogs: getResidentsNames('frogs').sort() },
    { snakes: getResidentsNames('snakes').sort() },
  ],
};

const getAnimalsBySex = (animal, sex) => species.find((specie) => specie.name === animal)
  .residents.filter((resident) => resident.sex === sex).map((individual) => individual.name);

const animalsBySex = (sex) => {
  const object = {
    NE: [{ lions: getAnimalsBySex('lions', sex) },
      { giraffes: getAnimalsBySex('giraffes', sex) }],
    NW: [{ tigers: getAnimalsBySex('tigers', sex) },
      { bears: getAnimalsBySex('bears', sex) },
      { elephants: getAnimalsBySex('elephants', sex) }],
    SE: [{ penguins: getAnimalsBySex('penguins', sex) },
      { otters: getAnimalsBySex('otters', sex) }],
    SW: [{ frogs: getAnimalsBySex('frogs', sex) },
      { snakes: getAnimalsBySex('snakes', sex) }],
  };
  return object;
};

const animalsBySexSorted = (sex) => {
  const object = {
    NE: [{ lions: getAnimalsBySex('lions', sex).sort() },
      { giraffes: getAnimalsBySex('giraffes', sex).sort() }],
    NW: [{ tigers: getAnimalsBySex('tigers', sex).sort() },
      { bears: getAnimalsBySex('bears', sex).sort() },
      { elephants: getAnimalsBySex('elephants', sex).sort() }],
    SE: [{ penguins: getAnimalsBySex('penguins', sex).sort() },
      { otters: getAnimalsBySex('otters', sex).sort() }],
    SW: [{ frogs: getAnimalsBySex('frogs', sex).sort() },
      { snakes: getAnimalsBySex('snakes', sex).sort() }],
  };
  return object;
};

const getIncludeNames = (object, options) => {
  if (options.includeNames && !options.sorted && !options.sex) {
    Object.assign(object, animalsNamesByLocation);
  }
};

const getIncludeNamesSorted = (object, options) => {
  if (options.sorted && !options.sex) {
    Object.assign(object, animalsNamesByLocationSorted);
  }
};

const getAnimalsBySexLint = (object, options) => {
  if ((options.sex === 'female' || options.sex === 'male') && !options.sorted) {
    Object.assign(object, animalsBySex(options.sex));
  }
};

const getAnimalsBySexSortedLint = (object, options) => {
  if ((options.sex === 'female' || options.sex === 'male') && options.sorted) {
    Object.assign(object, animalsBySexSorted(options.sex));
  }
};

const getAnimalMap = (options) => {
  const object = {};
  if (!options || !options.includeNames) {
    return defaultAnimalsLocation;
  }
  getIncludeNames(object, options);
  getIncludeNamesSorted(object, options);
  getAnimalsBySexLint(object, options);
  getAnimalsBySexSortedLint(object, options);
  return object;
};

module.exports = getAnimalMap;
