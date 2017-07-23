var ethaddr = require('../lib/ethaddr');
var expect = require('chai').expect;

var validAddresses = [
  '0x52908400098527886E0f7030069857D2a4169EE7',
  '0x8617E340B3D01FA5F11F306F4090FD50E238070d',
  '0xde709f2102306220921060314715629080e2fb77',
  '0x27b1fDb04752bbc536007a920d24acb045561c26',
  '0x5aAEB6053F3E94C9b9A09f33669435E7Ef1BeAed',
  '0xfb6916095ca1df60bB79CE92cE3Ea74c37c5d359',
  '0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6fb',
  '0xD1220A0Cf47c7B9Be7A2E6BA89F429762e7b9adB',
]

var invalidAddresses = [
  '0x52908400098527886e0f7030069857d2e416',
  '0x8617e340b3d01fa5fi1f306f4090fd50e238070d',
  '0xde709f2102zw6220921060314715629080e2fb77',
  '0x27b1fdb04752bbc536007a92Od24acb045561c26',
  '0x9cd8e75f1db20bcedfadab0966fa58bc8b0ef',
  '0xa30490a10d3ad0a1b$$97528d24d2f5070dbcb60',
  '0xdeadbeef',
]

var validChecksumAddresses = [
  '0x52908400098527886E0F7030069857D2E4169EE7',
  '0x8617E340B3D01FA5F11F306F4090FD50E238070D',
  '0xde709f2102306220921060314715629080e2fb77',
  '0x27b1fdb04752bbc536007a920d24acb045561c26',
  '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed',
  '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359',
  '0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB',
  '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb',
]

var invalidChecksumAddresses = [
  '0x2f015c60e0be116b1f0cd534704db9c92118fb6a',
]

var validStrictAddresses = [
  '0x52908400098527886E0F7030069857D2E4169EE7',
  '0x8617E340B3D01FA5F11F306F4090FD50E238070D',
  '0xde709f2102306220921060314715629080e2fb77',
  '0x27b1fdb04752bbc536007a920d24acb045561c26',
  '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed',
  '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359',
  '0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB',
  '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb',
]

var invalidStrictAddresses = [
  '0x2f015c60e0be116b1f0cd534704db9c92118fb6a',
  '0xde709f2102306220921060314715629080e2fb77',
  '0x27b1fDb04752bbc536007a920d24acb045561c26',
  '0x5aAEB6053F3E94C9b9A09f33669435E7Ef1BeAed',
]
describe("Ethereum Address Validator",function(){
  describe("checks isValidAddress()",function(){
    for(var i = 0; i < validAddresses.length; i++){
      it("should return 'true' for "+validAddresses[i],function(){
        expect(ethaddr.isValidAddress(validAddresses[i])).to.equal(true)
      });
    }
    for(var i = 0; i < invalidAddresses.length; i++){
      it("should return 'false' for "+invalidAddresses[i],function(){
        expect(ethaddr.isValidAddress(invalidAddresses[i])).to.equal(false)
      });
    }

  });
  describe("checks isChecksumAddress()",function(){
    for(var i = 0; i < validChecksumAddresses.length; i++){
      it("should return 'true' for "+validChecksumAddresses[i],function(){
        expect(ethaddr.isChecksumAddress(validChecksumAddresses[i])).to.equal(true)
      });
    }

    for(var i = 0; i < invalidChecksumAddresses.length; i++){
      it("should return 'false' for "+invalidChecksumAddresses[i],function(){
        expect(ethaddr.isChecksumAddress(invalidChecksumAddresses[i])).to.equal(false)
      });
    }

  });
  describe("checks isValidAddressStrict()",function(){
    for(var i = 0; i < validStrictAddresses.length; i++){
      it("should return 'true' for "+validStrictAddresses[i],function(){
        expect(ethaddr.isChecksumAddress(validStrictAddresses[i])).to.equal(true)
      });
    }

    for(var i = 0; i < invalidStrictAddresses.length; i++){
      it("should return 'false' for "+invalidStrictAddresses[i],function(){
        expect(ethaddr.isChecksumAddress(invalidStrictAddresses[i])).to.equal(false)
      });
    }

  });
});
