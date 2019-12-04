import draw_path from './03';

test('draw_path', () => {
  const wire1 = [{ dir: 'R', dist: '3' }, { dir: 'U', dist: '4' }, { dir: 'L', dist: '1' }]
  const wire2 = [{ dir: 'U', dist: '2' }, { dir: 'R', dist: '4' }, { dir: 'D', dist: '1' }]
  const response = {
    0: {
      0:
        { 1: 1, 2: 1 },
      1:
        { 1: 1, 2: 0 },
      2:
        { 1: 1, 2: 0 },
      3:
        { 1: 1, 2: 0 }
    },
    1: {
      0:
        { 1: 0, 2: 1 },
      3:
        { 1: 1, 2: 0 },
      4:
        { 1: 0, 2: 1 }
    },
    2: {
      0:
        { 1: 0, 2: 1 },
      1:
        { 1: 0, 2: 1 },
      2:
        { 1: 0, 2: 1 },
      3:
        { 1: 1, 2: 1 },
      4:
        { 1: 0, 2: 1 }
    },
    3: {
      3:
        { 1: 1, 2: 0 }
    },
    4: {
      2:
        { 1: 1, 2: 0 },
      3:
        { 1: 1, 2: 0 }
    }
  };
  expect(draw_path(wire1, wire2)).toStrictEqual(response);
})
