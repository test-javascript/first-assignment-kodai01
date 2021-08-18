const hello = require('./hello');

test('outputs the correct string', () => {
  expect(hello()).toBe([1, 2, 3]);
});
