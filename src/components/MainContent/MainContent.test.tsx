import React from 'react';
import { render } from '@testing-library/react';
import MainContent from './MainContent';

describe('<MainContent />', () => {
  
  // Test 1: Verificamos que se renderiza el componente correctamente
  it('renders without crashing', () => {
    render(<MainContent />);
  });

  // Test 2: Verificamos que se aplique la clase contenedor correctamente
  it('has correct classes applied', () => {
    const { container } = render(<MainContent />);
    
    expect(container.firstChild).toHaveClass("flex flex-col bg-[var(--grayscale-bg)] w-full mobile:w-[390px]");
  });

});