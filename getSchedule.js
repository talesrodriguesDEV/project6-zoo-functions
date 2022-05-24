const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const exhibition = (day) => species.filter((specie) => specie
  .availability.includes(day)).map((specie) => specie.name);

const cronogram = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: exhibition('Tuesday'),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: exhibition('Wednesday'),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: exhibition('Thursday'),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: exhibition('Friday'),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: exhibition('Saturday'),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: exhibition('Sunday'),
  },
};

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getSchedule = (scheduleTarget) => {
  if (species.some((specie) => specie.name === scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (weekDays.includes(scheduleTarget)) {
    const displayDay = {};
    displayDay[scheduleTarget] = cronogram[scheduleTarget];
    return displayDay;
  }
  return cronogram;
};

module.exports = getSchedule;
