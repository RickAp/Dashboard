import React from "react";
import Sidebar from "./Sidebar";
import { render } from "@testing-library/react";

describe('<Sidebar />', () => {

    // Test 1: Verificamos que se renderizan el componente correctamente
    it('renders without crashing', () => {
        render(<Sidebar />);
    });

    // Test 2: Verificamos que se aplican las clases del contenedor correctamente
    it('applies the correct styles', () => {
        const { container } = render(<Sidebar />);
        const sidebar = container.firstChild;
        
        expect(sidebar).toHaveClass('flex flex-col w-[255px] tablet:w-[76px] mobile:hidden h-auto bg-[var(--sidebar-bg)]');
    });
});