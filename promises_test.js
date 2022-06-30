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
test("verifies that addOne yields 4 when given 3 as a parameter", (assert) => {
  addOne(3).then((result) => {
    assert.strictEqual(result, 4);
    assert.end();
  });
});

test("verifies that four takes 4 as a parameter and waits 500ms", (assert) => {
  four(3).then((result) => {
    assert.strictEqual(result, 4);
    assert.end();
  });
});

test("verifies that four yields 5 after 500ms when given 4 as a parameter", (assert) => {
  testDouble.replace(console, "log");
  four()
    .then(addOne)
    .then(console.log)
    .then(() => {
      testDouble.verify(console.log(5));
      assert.pass();
      testDouble.reset();
      assert.end();
    }).catch((e) => {
      testDouble.reset();
      console.log(e);
    });
});
