const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

const test = require("tape");
const testDouble = require("testdouble");
const { addOne, four } = require("./promises.js");

// setup test
test("verifies the test file name", (assert) => {
  assert.strictEqual(fileName(), "promises_test.js");
  assert.end();
});

// functional tests
