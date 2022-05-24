const { hours } = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se a função retorna o objeto hours ao não receber parâmetros', () => {
    expect(getOpeningHours()).toEqual(hours);
  });

  it('Verifica se a função retorna que o zoológico não funciona na segunda-feira', () => {
    expect(getOpeningHours('Monday', '04:00-PM')).toBe('The zoo is closed');
  });

  it('Verifica se a função retorna que o zoológico funciona nos demais dias', () => {
    const closedMessage = 'The zoo is open';
    expect(getOpeningHours('Tuesday', '04:00-PM')).toBe(closedMessage);
    expect(getOpeningHours('Wednesday', '04:00-PM')).toBe(closedMessage);
    expect(getOpeningHours('Thursday', '04:00-PM')).toBe(closedMessage);
    expect(getOpeningHours('Friday', '04:00-PM')).toBe(closedMessage);
    expect(getOpeningHours('Saturday', '04:00-PM')).toBe(closedMessage);
    expect(getOpeningHours('Sunday', '04:00-PM')).toBe(closedMessage);
  });

  it('Verifica se a função retorna que o zoológico não funciona em certo horário', () => {
    expect(getOpeningHours('Friday', '10:00-PM')).toBe('The zoo is closed');
  });

  it('Verifica se a função retorna erro ao receber um dia inválido', () => {
    expect(() => {
      getOpeningHours('Fri', '04:00-PM');
    }).toThrow('The day must be valid. Example: Monday');
  });

  it('Verifica se a função retorna erro ao receber uma abreviação inválida', () => {
    expect(() => {
      getOpeningHours('Friday', '04:00-TM');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Verifica se a função retorna erro ao receber um valor de hora inválido', () => {
    expect(() => {
      getOpeningHours('Friday', 'x4:00-PM');
    }).toThrow('The hour should represent a number');
  });

  it('Verifica se a função retorna erro ao receber um valor de minuto inválido', () => {
    expect(() => {
      getOpeningHours('Friday', '04:x0-PM');
    }).toThrow('The minutes should represent a number');
  });

  it('Verifica se a função retorna erro ao receber um valor de hora fora do intervalo adequado [0, 12]', () => {
    expect(() => {
      getOpeningHours('Friday', '15:00-PM');
    }).toThrow('The hour must be between 0 and 12');
  });

  it('Verifica se a função retorna erro ao receber um valor de minuto fora do intervalo adequado [0, 59]', () => {
    expect(() => {
      getOpeningHours('Friday', '10:60-PM');
    }).toThrow('The minutes must be between 0 and 59');
  });
});
