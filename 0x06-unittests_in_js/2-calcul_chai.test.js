const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
    });
    it('checking if numbers round 2nd round', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('checking if numbers 3rd round', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
    it('negative and positive numbers', () => {
      expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
    });
    it('checking if numbers round 2nd round', () => {
        expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
    it('checking if numbers round 3rd round', () => {
        expect(calculateNumber('SUBTRACT', 6.2, 3.7)).to.equal(2);
    });
    it('negative and positive numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('positive numbers', () => {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
    });
    it('checking if operation is correct 3', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('checking if operation is correct 4', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
    it('positive number and number rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
    });

    it('negative number and 0', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
    });

    it('negative number and number rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });
  });
});
