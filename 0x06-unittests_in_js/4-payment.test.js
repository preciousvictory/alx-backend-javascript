const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const bigBro = sinon.spy(Utils);
    const dummy = sinon.stub(Utils, 'calculateNumber');

    dummy.returns(10);

    sendPaymentRequestToApi(200, 2);
    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
    expect(dummy.callCount).to.be.equal(1);
    expect(bigBro.calculateNumber.calledWith('SUM', 200, 2)).to.be.true;
    expect(bigBri.calculateNumber.callCount).to.be.equal(1);

    dummy.restore();	  
    bigBro.calculateNumber.restore();
  });
});
