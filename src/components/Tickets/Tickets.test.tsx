import React from "react";
import Tickets from "./Tickets";
import { render } from "@testing-library/react";

describe('<Tickets />', () => {

    // Test 1: Verificamos que se renderiza el componente correctamente
    it('should render without crashing', () => {
        render(<Tickets />);
    });

    // Test 2: Verificamos que se renderizan los elementos hijos correctamente
    it('renders nested components', () => {
        const { getByText } = render(<Tickets />);
        
        expect(getByText('Unresolved tickets')).toBeInTheDocument();
        expect(getByText('View details')).toBeInTheDocument();
        expect(getByText('Group:')).toBeInTheDocument();
        expect(getByText('Support')).toBeInTheDocument();
        expect(getByText('Waiting on Feature Request')).toBeInTheDocument();
        expect(getByText('Awaiting Customer Response')).toBeInTheDocument();
        expect(getByText('Awaiting Developer Fix')).toBeInTheDocument();
        expect(getByText('Pending')).toBeInTheDocument();
    });

    // Test 3: Verificamos que se aplica la clase del contenedor correctamente
    it('applies correct styles', () => {
        const { container } = render(<Tickets />);
        const div = container.firstChild;
        
        expect(div).toHaveClass('flex flex-col border border-[var(--grayscale-divider)] border-1 desktop:w-[546px] tablet:w-[628px] mobile:w-[390px] rounded-lg');
    });
      
});