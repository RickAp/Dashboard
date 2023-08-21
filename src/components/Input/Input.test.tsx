import React from "react";
import Input from "./Input";
import { fireEvent, render } from "@testing-library/react";

describe('<Input />', () => {

    // Test 1: Verificamos que se renderiza el componente correctamente
    it('renders without crashing', () => {
      render(<Input type="text" label="Email" placeholder="Enter Email" />);
    });

    // Test 2: Verificamos que renderiza todos los elementos del Input
    it('renders label and input elements correctly', () => {
      const { getByPlaceholderText, getByText } = render(
        <Input type="text" label="Email" destination="Forgot Password?" placeholder="Enter Email" />
      );
      
      expect(getByPlaceholderText('Enter Email')).toBeInTheDocument();
      expect(getByText('Email')).toBeInTheDocument();
      expect(getByText('Forgot Password?')).toBeInTheDocument();
    });
  
    // Test 3: Verificamos que funcione el evento OnChange correctamente
    it('handles onChange events correctly', () => {
      const handleChange = jest.fn();
      const { getByPlaceholderText } = render(
        <Input type="text" label="Email" placeholder="Enter Email" onChange={handleChange} />
      );
  
      fireEvent.change(getByPlaceholderText('Enter Email'), { target: { value: 'test@email.com' } });
      expect(handleChange).toHaveBeenCalled();
    });
  
    // Test 4: Verificamos que funcione correctamente la prop ShowImage
    it('shows image only when showImage prop is true', () => {
      const { queryByAltText } = render(
        <Input type="text" label="Email" placeholder="Enter Email" showImage={true} />
    );
  
      expect(queryByAltText('active')).toBeInTheDocument();
    });
  
});
  
  
  
  
  
  
  