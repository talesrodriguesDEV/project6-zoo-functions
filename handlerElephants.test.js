const handlerElephants = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
  it('A função deve retornar "undefined" caso o parâmetro seja "undefined"', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('Verificação caso o parâmetro não seja do tipo "string"', () => {
    expect(handlerElephants(3)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Verificação da contagem de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Verificação dos nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Verificação da média das idades do elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Verificação do caso default', () => {
    expect(handlerElephants('qualquerCoisa')).toBe(null);
  });

  it('Verificação da consulta de uma propriedade do objeto dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
});
