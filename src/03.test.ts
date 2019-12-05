import make_wire from './03';

test('make_wire', () => {
  const wire1 = [{ dir: 'R', dist: '3' }, { dir: 'U', dist: '4' }, { dir: 'L', dist: '1' }]
  const response = [[1, 0], [2,0], [3,0], [3,1], [3, 2], [3,3], [3,4], [2,4]]
  expect(make_wire(wire1)).toStrictEqual(response);
})

// test('draw_path', () => {
//   const wire1 = [{ dir: 'R', dist: '3' }, { dir: 'U', dist: '4' }, { dir: 'L', dist: '1' }]
//   const wire2 = [{ dir: 'U', dist: '2' }, { dir: 'R', dist: '4' }, { dir: 'D', dist: '1' }]
//   const response = [[0, 0], [3, 2]]
//   expect(draw_path(wire1, wire2)).toStrictEqual(response);
// })
