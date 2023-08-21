import React from 'react';
import { render } from '@testing-library/react';
import ButtonLabel from './ButtonLabel';

describe('ButtonLabel Component', () => {

  // Test 1: Verificamos que el botón se renderiza con el texto correcto
  it('should display correct text', () => {
    const { getByRole } = render(<ButtonLabel content="Click Me" backgroundColor="bg-blue-500" textColor="text-white" width="w-20" height="h-10" />);
    expect(getByRole('button')).toHaveTextContent('Click Me');
  });
  
  // Test 2: Verificamos las clases asignadas al botón
  it('should have correct classes', () => {
    const { getByRole } = render(<ButtonLabel content="Click Me" backgroundColor="bg-blue-500" textColor="text-white" width="w-20" height="h-10" />);
    const button = getByRole('button');
  
    expect(button).toHaveClass('bg-blue-500');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('w-20');
    expect(button).toHaveClass('h-10');
    expect(button).toHaveClass('rounded-lg');
  });
  
});
