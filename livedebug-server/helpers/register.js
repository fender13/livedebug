const bcrypt = require('bcrypt');

module.exports = {
  hashPassword: function(plainPassword) {
    return bcrypt.hashSync(plainPassword, 8);
  },
  checkPassword: function(plainPassword, hash) {
    let status = bcrypt.compareSync(plainPassword, hash);
    return status;
  },
  generateNum: function(digit) {
    if(digit > 0 ) {
      digit = this.generateNum(digit - 1) + Math.floor(100000 + Math.random() * 90000);
    }
  
    return digit;
  }
}
