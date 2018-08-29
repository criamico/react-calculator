import Lib from '../src/calculator';

describe('Function getRandomInRange', () => {
  it('returns result', () => {
    expect(Lib.getExpression('3+1').toBe('4'));
  });

});
