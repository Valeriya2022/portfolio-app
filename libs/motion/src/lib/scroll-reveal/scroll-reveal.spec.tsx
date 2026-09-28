import { render } from '@testing-library/react';

import { ScrollReveal } from './scroll-reveal';

describe('ScrollReveal', () => {
  it('renders its content', () => {
    const { getByText } = render(
      <ScrollReveal>Experience content</ScrollReveal>,
    );

    expect(getByText('Experience content')).toBeTruthy();
  });
});
