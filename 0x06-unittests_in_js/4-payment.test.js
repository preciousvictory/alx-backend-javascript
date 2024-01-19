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
    expect(dummy.calledWith('SUM', 200, 2)).to.be.true;
    expect(dummy.callCount).to.be.equal(1);
    expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
    expect(bigBrother.log.callCount).to.be.equal(1);
    dummy.restore();
    bigBrother.log.restore();
  });
});
