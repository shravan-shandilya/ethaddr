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
