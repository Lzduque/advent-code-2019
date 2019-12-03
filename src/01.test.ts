import module_fuel from './01';

test('module_fuel', () => {
  expect(module_fuel(12)).toBe(2);
  expect(module_fuel(14)).toBe(2);
  expect(module_fuel(1969)).toBe(654);
  expect(module_fuel(100756)).toBe(33583);
})
