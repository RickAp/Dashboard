import React from "react";
import TasksData from "./TasksData";
import { render } from "@testing-library/react";

describe('<TasksData/>', () => {

    // Test 1: Verificamos que se renderiza el componente correctamente
    it('renders without crashing', () => {
        render(<TasksData />);
    });

    // Test 2: Verificamos que se renderizan los elementos hijos correctamente
    it('renders nested components', () => {
        const { getByText, getByAltText } = render(<TasksData />);
        
        expect(getByText('Tasks')).toBeInTheDocument();
        expect(getByText('View all')).toBeInTheDocument();
        expect(getByText('Today')).toBeInTheDocument();
        expect(getByAltText('add')).toBeInTheDocument();
    });

    // Test 3: Verificamos que se aplica la clase del contenedor correctamente
    it('applies correct styles', () => {
        const { container } = render(<TasksData />);
        const div = container.firstChild;
        
        expect(div).toHaveClass('flex flex-col border border-[var(--grayscale-divider)] border-1 desktop:w-[546px] tablet:w-[628px] rounded-lg');
    });
});