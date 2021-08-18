const hello = require('./hello');

test('outputs the correct array', () => {
  expect(hello()).toBe([1, 2, 3]);
});
