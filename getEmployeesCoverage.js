const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeFullName = (id) => {
  const lintEmployee = employees.find((employee) => employee.id === id);
  return `${lintEmployee.firstName} ${lintEmployee.lastName}`;
};

const getEmployeeAnimals = (id) => {
  const lintEmployee = employees.find((employee) => employee.id === id);
  const speciesArray = [];
  lintEmployee.responsibleFor.forEach((specieId) => {
    const lintSpecie = species.find((specie) => specie.id === specieId);
    speciesArray.push(lintSpecie.name);
  });
  return speciesArray;
};

const getLocations = (id) => {
  const lintEmployee = employees.find((employee) => employee.id === id);
  const locationsArray = [];
  lintEmployee.responsibleFor.forEach((specieId) => {
    const lintSpecie = species.find((specie) => specie.id === specieId);
    locationsArray.push(lintSpecie.location);
  });
  return locationsArray;
};

const nigelId = 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const wilburnId = '56d43ba3-a5a7-40f6-8dd7-cbb05082383f';
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const sharondaId = '4b40a139-d4dc-4f09-822d-ec25e819a5ad';
const ardithId = 'c1f50212-35a6-4ecd-8223-f835538526c2';
const emeryId = 'b0dc644a-5335-489b-8a2c-4e086c7819a2';

const employeesInformation = [
  {
    id: nigelId,
    fullName: getEmployeeFullName(nigelId),
    species: getEmployeeAnimals(nigelId),
    locations: getLocations(nigelId),
  },
  {
    id: burlId,
    fullName: getEmployeeFullName(burlId),
    species: getEmployeeAnimals(burlId),
    locations: getLocations(burlId),
  },
  {
    id: olaId,
    fullName: getEmployeeFullName(olaId),
    species: getEmployeeAnimals(olaId),
    locations: getLocations(olaId),
  },
  {
    id: wilburnId,
    fullName: getEmployeeFullName(wilburnId),
    species: getEmployeeAnimals(wilburnId),
    locations: getLocations(wilburnId),
  },
  {
    id: stephanieId,
    fullName: getEmployeeFullName(stephanieId),
    species: getEmployeeAnimals(stephanieId),
    locations: getLocations(stephanieId),
  },
  {
    id: sharondaId,
    fullName: getEmployeeFullName(sharondaId),
    species: getEmployeeAnimals(sharondaId),
    locations: getLocations(sharondaId),
  },
  {
    id: ardithId,
    fullName: getEmployeeFullName(ardithId),
    species: getEmployeeAnimals(ardithId),
    locations: getLocations(ardithId),
  },
  {
    id: emeryId,
    fullName: getEmployeeFullName(emeryId),
    species: getEmployeeAnimals(emeryId),
    locations: getLocations(emeryId),
  },
];

const getEmployeesCoverage = (object) => {
  if (!object) {
    return employeesInformation;
  }
  if (employeesInformation.find((employee) => employee
    .fullName.includes(object.name) || employee.id === object.id)) {
    return employeesInformation.find((employee) => employee
      .fullName.includes(object.name) || employee.id === object.id);
  }
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
