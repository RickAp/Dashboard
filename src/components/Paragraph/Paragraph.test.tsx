import React from "react";
import Paragraph from "./Paragraph";
import { render } from "@testing-library/react";

describe('<Paragraph/>', () => {

    // Test 1: Verificamos que se renderiza el componente correctamente
    it('renders without crashing', () => {
        render(<Paragraph content="Hello, world!" />);
    });

    // Test 2: Verificamos que se renderiza el texto correctamente
    it('displays the content', () => {
        const { getByText } = render(<Paragraph content="Hello, world!" />);
        expect(getByText('Hello, world!')).toBeInTheDocument();
    });

    // Test 3: Verificamos que se aplican las propiedades de color, tamaño y fuente al texto
    it('applies color, text size, and font weight', () => {
        const { getByTestId } = render(
          <Paragraph 
            content="Styled text" 
            color="text-red" 
            size="xl" 
            fontWeight="font-[700]" 
            testId="paragraph-test"
          />
        );
        const element = getByTestId('paragraph-test');
        expect(element).toHaveClass('text-red text-xl font-[700]');
    });

    // Test 4: Verificamos que se aplica el alineado correctamente al texto
    it('aligns text correctly', () => {
        const { getByTestId } = render(
          <Paragraph content="Aligned text" textAlign="right" testId="paragraph-test" />
        );
        const element = getByTestId('paragraph-test');
        expect(element).toHaveClass('text-right');
    });

    // Test 5: Verificamos que se aplica el role correctamente al parrafo
    it('sets the role attribute', () => {
        const { getByRole } = render(
          <Paragraph content="Text with role" role="heading" />
        );
        expect(getByRole('heading')).toBeInTheDocument();
    });

    // Test 6: Verificamos que se renderiza el componente correctamente cuando no se especifican las propiedades opcionales
    it('renders with default props if none are specified', () => {
        const { getByTestId } = render(<Paragraph content="Default props" testId="paragraph-test" />);
        const element = getByTestId('paragraph-test');
        expect(element).toHaveClass('text-md font-[400] text-center');
    });

    // Test 7: Verificamos que se aplica correctamente la propiedad hideText
    it('applies hideText class correctly', () => {
        const { getByTestId } = render(
          <Paragraph content="Hidden text" hideText="hidden" testId="paragraph-test" />
        );
        const element = getByTestId('paragraph-test');
        expect(element).toHaveClass('hidden');
    });
});