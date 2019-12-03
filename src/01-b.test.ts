import module_fuel from './01-b';

test('module_fuel', () => {
  expect(module_fuel(14)).toBe(2);
  expect(module_fuel(1969)).toBe(966);
  expect(module_fuel(100756)).toBe(50346);
})
