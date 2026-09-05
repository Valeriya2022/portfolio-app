import { render } from '@testing-library/react';

import { SpatialRing } from './spatial-ring';

describe('SpatialRing', () => {
  it('renders no canvas when WebGL is unavailable', () => {
    const { container } = render(
      <SpatialRing
        activeIndex={0}
        items={[{ id: 'about', label: 'About' }]}
        overview={false}
      />,
    );

    expect(container.childElementCount).toBe(0);
  });
});
