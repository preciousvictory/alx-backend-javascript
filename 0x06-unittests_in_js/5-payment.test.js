const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let spying;

  beforeEach(() => {
    if (!spying) {
      spying = sinon.spy(console);
    }
  });

  afterEach(() => {
    spying.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spying.log.calledWith('The total is: 120')).to.be.true;
    expect(spying.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spying.log.calledWith('The total is: 20')).to.be.true;
    expect(spying.log.calledOnce).to.be.true;
  });
});
