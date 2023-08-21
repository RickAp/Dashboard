import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CreateAccountForm from './CreateAccountForm';
import { useRouter } from 'next/router';
import useFormValidation from '../../hooks/useFormValidation';

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

describe('<CreateAccountForm />', () => {

    // Test 1: Verificamos que se renderizan los Inputs correctamente en base al texto que contienen
    it('renders form fields and button', () => {
        const { getByText } = render(<CreateAccountForm />);
        expect(getByText(/Email/i)).toBeInTheDocument();
        expect(getByText(/Password/i)).toBeInTheDocument();
        expect(getByText(/Create Account/i)).toBeInTheDocument();
    });

    // Test 2: Verificamos que funcione la logica del formulario correctamente
    it('submits the form when fields are valid', () => {
        render(<CreateAccountForm />);
        const emailInput = screen.getByPlaceholderText('Email address');
        const passwordInput = screen.getByPlaceholderText('Password');
        const submitButton = screen.getByText(/Create Account/i);
    
        fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
        fireEvent.change(passwordInput, { target: { value: 'test1234' } });
        
        fireEvent.click(submitButton);
        
        expect(mockPush).toHaveBeenCalledWith('/#');
    });
});