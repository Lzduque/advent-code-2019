import draw_path from './03';

test('draw_path', () => {
  const wire1 = [{ dir: 'R', dist: '3' }, { dir: 'U', dist: '4' }, { dir: 'L', dist: '1' }]
  const wire2 = [{ dir: 'U', dist: '2' }, { dir: 'R', dist: '4' }, { dir: 'D', dist: '1' }]
  const response = [[0, 0], [3, 2]]
  expect(draw_path(wire1, wire2)).toStrictEqual(response);
})
