import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';

describe('<NavLinks />', () => {
  it('should render', () => {
    renderTheme(<NavLinks>texto</NavLinks>);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
