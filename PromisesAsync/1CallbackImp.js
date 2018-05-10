const crypto = require('crypto');

const createSecureRandom = function (size) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(size, function(err, buffer) {
      if(err) {
        reject(err);
      }
      else {
        let randomhex = buffer.toString('hex');
        resolve({"length": size,"random": randomhex});
      };
    });
  });
};

Promise.all([
  createSecureRandom(48), 
  createSecureRandom(40),
  createSecureRandom(32),
  createSecureRandom(24),
  createSecureRandom(16),
  createSecureRandom(8)])
  .then(resolve => {
    let randoms = {
      "title": "6 Secure Randoms",
      "randoms": resolve
    };
    console.log(randoms);
  })
  .catch(reject => {
    console.log(reject);
  });

  module.exports = createSecureRandom();