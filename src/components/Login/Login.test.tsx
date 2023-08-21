import React from "react";
import Login from "./Login";
import { render, fireEvent } from '@testing-library/react';
import Link from "next/link";

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

describe('<Login />', () => {

    // Test 1: Verificamos que se renderiza el componente correctamente
    it('renders without crashing', () => {
      render(<Login />);
    });
  
    // Test 1: Verificamos que se renderizan los elementos en base al texto
    it('renders static content correctly', () => {
      const { getByText } = render(<Login />);
      
      expect(getByText('Dashboard Kit')).toBeInTheDocument();
      expect(getByText('Log In to Dashboard Kit')).toBeInTheDocument();
      expect(getByText('Enter your email and password below')).toBeInTheDocument();
      expect(getByText('Don’t have an account?')).toBeInTheDocument();
      expect(getByText('Sign up')).toBeInTheDocument();
    });
  
    // Test 3: Verificamos que funciona el redireccionamiento a la pagina de Crear cuenta
    it('navigates to sign up page when sign up is clicked', () => {
      const { getByText } = render(<Login />);
      const signUpLink = getByText('Sign up');
  
      fireEvent.click(signUpLink);
      
    });
  
});

