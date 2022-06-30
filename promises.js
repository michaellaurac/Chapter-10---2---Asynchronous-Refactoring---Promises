/* eslint-disable n/no-callback-literal */

function addOne (addend) {
  return Promise.resolve(addend + 1);
}

function four () {
  return new Promise((resolve, _reject) => {
    setTimeout(() => resolve(4), 500);
  });
}

four()
  .then(addOne)
  .then(console.log);

module.exports = { addOne, four };
