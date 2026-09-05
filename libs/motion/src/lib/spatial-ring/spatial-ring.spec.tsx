import { render } from '@testing-library/react';

import {
  getDragRoomOffset,
  getShortestCircularDelta,
  SpatialRing,
} from './spatial-ring';

describe('SpatialRing', () => {
  it('renders no canvas when WebGL is unavailable', () => {
    const { container } = render(
      <SpatialRing
        activeIndex={0}
        items={[
          {
            description: 'Who I am and how I work.',
            id: 'about',
            label: 'About',
          },
        ]}
        overview={false}
      />,
    );

    expect(container.childElementCount).toBe(0);
  });

  it('takes one step across either ring boundary', () => {
    expect(getShortestCircularDelta(0, 8, 9)).toBe(-1);
    expect(getShortestCircularDelta(8, 0, 9)).toBe(1);
  });

  it('keeps the number of rooms crossed during a long drag', () => {
    expect(getDragRoomOffset(-410, 9)).toBe(2);
    expect(getDragRoomOffset(610, 9)).toBe(-3);
    expect(getDragRoomOffset(30, 9)).toBe(0);
  });
});
