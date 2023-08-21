import React from "react";
import Icon from "./Icon";
import { render } from "@testing-library/react";

describe('<Icon />', () => {

    // Test 1: Verificamos que se renderiza correctamente
    it('renders without crashing', () => {
      render(<Icon src="test.jpg" alt="test" />);
    });
  
    // Test 2: Verificamos que se aplican los atributos correctamente
    it('applies src and alt attributes correctly', () => {
      const { getByAltText } = render(<Icon src="test.jpg" alt="test" />);
      const image = getByAltText('test');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', 'test.jpg');
    });
  
    // Test 3: Verificamos que se aplican las clases de dimensiones correctamente
    it('applies width and height classes correctly', () => {
      const { getByAltText } = render(<Icon src="test.jpg" alt="test" width="w-10" height="h-10" />);
      const image = getByAltText('test');
      expect(image).toHaveClass('w-10 h-10');
    });
});