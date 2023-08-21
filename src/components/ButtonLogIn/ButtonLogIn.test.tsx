import React from 'react';
import { render } from '@testing-library/react';
import ButtonLogIn from './ButtonLogIn';

describe('ButtonLogIn Component', () => {
  
  // Test 1: Verificamos que el botón se renderiza con el texto correcto
  it('should display the correct text', () => {
    const { getByRole } = render(<ButtonLogIn content="Log In" />);
    expect(getByRole('button')).toHaveTextContent('Log In');
  });

  // Test 2: Verificamos las clases asignadas al botón
  it('should have correct classes', () => {
    const { getByRole } = render(<ButtonLogIn content="Log In" />);
    const button = getByRole('button');
    expect(button).toHaveClass('w-[316px]');
    expect(button).toHaveClass('h-[48px]');
    expect(button).toHaveClass('rounded-lg');
    expect(button).toHaveClass('bg-[var(--main-blue)]');
    expect(button).toHaveClass('text-[white]');
    expect(button).toHaveClass('hover:bg-[var(--hover-blue)]');
    expect(button).toHaveClass('transition');
    expect(button).toHaveClass('duration-300');
    expect(button).toHaveClass('ease-in-out');
  });

  // Test 3: Verificamos que el tipo del botón sea 'submit'
  it('should have the correct type', () => {
    const { getByRole } = render(<ButtonLogIn content="Log In" />);
    const button = getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});