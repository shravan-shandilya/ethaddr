
var SHA3 = require('sha3');

function sha3(content){
  if(content){
    return new SHA3.SHA3Hash(256).update(content).digest('hex');
  }else{
    throw new Error('Cant compute SHA3');
  }
}

function toChecksumAddress(address){
  //Strip '0x' prefix and convert address to lowercase.
  //This is the important step which gives the special propery of checksum addresses
  // Refer to EIP 55
  address = address.replace('0x','').toLowerCase()
  var addressHash = sha3(address).toString('hex')
  var checksumAddr = "0x"
  for (var i = 0; i < address.length; i++) {
    if (parseInt(addressHash[i], 16) >= 8) {
      checksumAddr += address[i].toUpperCase()
    } else {
      checksumAddr += address[i]
    }
  }
  return checksumAddr
}

function isValidAddress(address){
  //Regex check for ethereum address format.
  //1. Check if address starts with '0x'
  //2. Check if the next 40 chars,contain only valid characters.
  return /^(0x)?[0-9a-fA-F]{40}/.test(address)
}

function isChecksumAddress(address){
  //Leveraging the property of checkcum addresses.
  //Checksum of a checksum address is always be equal to itself
  return isValidAddress(address) && (toChecksumAddress(address) === address)
}

function isValidAddressStrict(address){
  return isValidAddress(address) && (toChecksumAddress(address) === address)
}

module.exports = {
  isValidAddress:isValidAddress,
  isChecksumAddress:isChecksumAddress,
  isValidAddressStrict:isValidAddressStrict,
}
