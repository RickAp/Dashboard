import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

describe('<Logo />', () => {
  
  // Test 1: Verificamos que se renderiza el componente correctamente
  it('renders without crashing', () => {
    render(<Logo width="w-10" height="h-10" />);
  });

  // Test 2: Verificamos que se aplican correctamente sus propeidades de dimensiones
  it('applies width and height correctly', () => {
    const { getByAltText } = render(<Logo width="w-10" height="h-10" />);
    const img = getByAltText('logo');
    
    expect(img).toHaveClass('w-10');
    expect(img).toHaveClass('h-10');
  });

  // Test 3: Verificamos que se aplican correctamente sus propeidades src y alt
  it('has correct src and alt attributes', () => {
    const { getByAltText } = render(<Logo width="w-10" height="h-10" />);
    const img = getByAltText('logo');
    
    expect(img).toHaveAttribute('src', 'logo.png');
    expect(img).toHaveAttribute('alt', 'logo');
  });
});






