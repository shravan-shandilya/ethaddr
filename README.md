# ethaddr
* Install
```
npm install ethaddr
```
* Usage
```
var ethaddr = require('ethaddr')

console.log(ethaddr.isValidAddress("0x52908400098527886E0f7030069857D2a4169EE7"))
console.log(ethaddr.isChecksumAddress("0x52908400098527886E0f7030069857D2a4169EE7"))
console.log(ethaddr.isValidAddressStrict("0x52908400098527886E0f7030069857D2a4169EE7"))
```
* Test Coverage
```
> mocha --reporter spec



  Ethereum Address Validator
    checks isValidAddress()
      ✓ should return 'true' for 0x52908400098527886E0f7030069857D2a4169EE7
      ✓ should return 'true' for 0x8617E340B3D01FA5F11F306F4090FD50E238070d
      ✓ should return 'true' for 0xde709f2102306220921060314715629080e2fb77
      ✓ should return 'true' for 0x27b1fDb04752bbc536007a920d24acb045561c26
      ✓ should return 'true' for 0x5aAEB6053F3E94C9b9A09f33669435E7Ef1BeAed
      ✓ should return 'true' for 0xfb6916095ca1df60bB79CE92cE3Ea74c37c5d359
      ✓ should return 'true' for 0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6fb
      ✓ should return 'true' for 0xD1220A0Cf47c7B9Be7A2E6BA89F429762e7b9adB
      ✓ should return 'false' for 0x52908400098527886e0f7030069857d2e416
      ✓ should return 'false' for 0x8617e340b3d01fa5fi1f306f4090fd50e238070d
      ✓ should return 'false' for 0xde709f2102zw6220921060314715629080e2fb77
      ✓ should return 'false' for 0x27b1fdb04752bbc536007a92Od24acb045561c26
      ✓ should return 'false' for 0x9cd8e75f1db20bcedfadab0966fa58bc8b0ef
      ✓ should return 'false' for 0xa30490a10d3ad0a1b$$97528d24d2f5070dbcb60
      ✓ should return 'false' for 0xdeadbeef
    checks isChecksumAddress()
      ✓ should return 'true' for 0x52908400098527886E0F7030069857D2E4169EE7
      ✓ should return 'true' for 0x8617E340B3D01FA5F11F306F4090FD50E238070D
      ✓ should return 'true' for 0xde709f2102306220921060314715629080e2fb77
      ✓ should return 'true' for 0x27b1fdb04752bbc536007a920d24acb045561c26
      ✓ should return 'true' for 0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed
      ✓ should return 'true' for 0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359
      ✓ should return 'true' for 0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB
      ✓ should return 'true' for 0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb
      ✓ should return 'false' for 0x2f015c60e0be116b1f0cd534704db9c92118fb6a
    checks isValidAddressStrict()
      ✓ should return 'true' for 0x52908400098527886E0F7030069857D2E4169EE7
      ✓ should return 'true' for 0x8617E340B3D01FA5F11F306F4090FD50E238070D
      ✓ should return 'true' for 0xde709f2102306220921060314715629080e2fb77
      ✓ should return 'true' for 0x27b1fdb04752bbc536007a920d24acb045561c26
      ✓ should return 'true' for 0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed
      ✓ should return 'true' for 0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359
      ✓ should return 'true' for 0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB
      ✓ should return 'true' for 0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb
      ✓ should return 'false' for 0x2f015c60e0be116b1f0cd534704db9c92118fb6a
      ✓ should return 'false' for 0xde709f2102306220921060314715629080e2fb77
      ✓ should return 'false' for 0x27b1fDb04752bbc536007a920d24acb045561c26
      ✓ should return 'false' for 0x5aAEB6053F3E94C9b9A09f33669435E7Ef1BeAed


  36 passing (30ms)
```
