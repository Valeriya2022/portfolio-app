import { fireEvent, render } from '@testing-library/react';

import { ThemeControl } from './theme-control';

describe('ThemeControl', () => {
  beforeEach(() => {
    window.localStorage.clear();
    delete document.documentElement.dataset.theme;
  });

  it('persists a manual theme selection', () => {
    const { getByRole } = render(<ThemeControl />);

    fireEvent.click(getByRole('button', { name: 'day' }));

    expect(window.localStorage.getItem('portfolio-theme')).toBe('day');
    expect(
      getByRole('button', { name: 'day' }).getAttribute('aria-pressed'),
    ).toBe('true');
  });
});
