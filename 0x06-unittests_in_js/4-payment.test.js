const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  const check = sinon.spy(console, 'log');
  it('checking if numbers round with spies and stubs', () => {
    sendPaymentRequestToApi(100, 20);
    const stubb = sinon.stub(Utils, 'calculateNumber');
    stubb.withArgs('SUM', 100, 20).returns(120);
    expect(check.calledOnce).to.be.true;
    expect(console.log('The total is: 120')).to.be.all;
    check.restore();
    stubb.restore();
  });
});
