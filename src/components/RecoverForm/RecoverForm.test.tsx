import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RecoverForm from './RecoverForm';

const mockPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: mockPush,
    };
  },
}));

jest.mock('../../hooks/useFormValidation', () => {
    return jest.fn(() => ({
      values: {email: '', password: ''},
      errors: {},
      handleChange: jest.fn(),
      validateForm: () => true,
    }));
});

describe('<RecoverForm />', () => {

    // Test 1: Verificamos que se renderizan los Inputs correctamente en base al texto que contienen
    it('renders form fields and button', () => {
        const { getByText } = render(<RecoverForm />);
        expect(getByText(/Enter your email/i)).toBeInTheDocument();
        expect(getByText(/Send Recovery Code To Email/i)).toBeInTheDocument();
    });

    // Test 2: Verificamos que funcione la logica del formulario correctamente
    it('submits the form when fields are valid', () => {
        render(<RecoverForm />);
        const emailInput = screen.getByPlaceholderText('Email address');
        const submitButton = screen.getByText(/Send Recovery Code To Email/i);
    
        fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
        
        fireEvent.click(submitButton);
        
        expect(mockPush).toHaveBeenCalledWith('#');
    });
});