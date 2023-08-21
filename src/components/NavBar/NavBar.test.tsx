import React from "react";
import NavBar from "./NavBar";
import { render } from "@testing-library/react";

describe('<NavBar />', () => {

    // Test 1: Verificamos que se renderiza el componente correctamente
    it('renders without crashing', () => {
        render(<NavBar />);
    });

    // Test 2: Verificamos que se renderiza correctamente cuando las dimensiones son para mobile
    it('renders mobile layout when screen width is <= 767', () => {
        window.resizeTo(500, 600);
        
        const { getByAltText } = render(<NavBar />);
        
        expect(getByAltText('notification icon')).toBeInTheDocument();
    });
    
    // Test 3: Verificamos que se renderiza correctamente cuando las dimensiones son para tablet y desktop
    it('renders desktop layout when screen width is > 767', () => {
        // Mock window size for desktop
        window.resizeTo(1024, 768);
      
        const { getByText, getByAltText } = render(<NavBar />);
        
        expect(getByText('Overview')).toBeInTheDocument();
        expect(getByAltText('search icon')).toBeInTheDocument();
        expect(getByAltText('notification icon')).toBeInTheDocument();
    });

    // Test 3: Verificamos que se renderiza la clase contenedor correctamente
    it('has the correct classes applied', () => {
        const { container } = render(<NavBar />);
        expect(container.firstChild).toHaveClass("flex desktop:mt-[30px] tablet:mt-[30px] desktop:ml-[30px] tablet:ml-[30px] items-center");
    });
});