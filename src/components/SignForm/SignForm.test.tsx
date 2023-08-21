import React from "react";
import SignForm from "./SignForm";
import { render } from "@testing-library/react";

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

describe('<SignForm />', () => {
    
    // Test 1: Verificamos que se renderiza el componente correctamente
    it('renders without crashing', () => {
        render(<SignForm />);
    });

    // Test 2: Verificamos que se renderiza los componentes hijos correctamente
    it('renders Logo and CreateAccountForm components', () => {
        const { getByText } = render(<SignForm />);
        
        expect(getByText('Dashboard Kit')).toBeInTheDocument();
        expect(getByText('Enter your email and password below to create an account')).toBeInTheDocument();
    });

    // Test 3: Verificamos que se aplican las clases del contenedor correctamente
    it('applies the correct styles', () => {
        const { container } = render(<SignForm />);
        const signForm = container.firstChild;
        
        expect(signForm).toHaveClass('flex flex-col w-[380px] h-[582px] items-center bg-white rounded-lg');
    });
});