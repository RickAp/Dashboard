import React from "react";
import GraphicText from "./GraphicText";
import { render } from "@testing-library/react";

describe('<GraphicText />', () => {

    // Test 1: Verificamos que se renderiza correctamente
    it('renders without crashing', () => {
        render(<GraphicText />);
    });
  
    // Test 2: Verificamos que las clases correctas se renderizan
    it('has correct classes', () => {
        const { container } = render(<GraphicText />);
        expect(container.firstChild).toHaveClass(
            'flex flex-col desktop:w-[342px] tablet:w-[250px] border border-[var(--grayscale-divider)] border-1 mobile:hidden'
        );
    });
  
    // Test 3: Verificamos que los texto de los parrafos sean los correctos
    it('renders correct text', () => {
        const { getByText } = render(<GraphicText />);
        expect(getByText("Resolved")).toBeInTheDocument();
        expect(getByText("449")).toBeInTheDocument();
        expect(getByText("Received")).toBeInTheDocument();
        expect(getByText("426")).toBeInTheDocument();
        expect(getByText("Average first response time")).toBeInTheDocument();
        expect(getByText("33m")).toBeInTheDocument();
        expect(getByText("Average response time")).toBeInTheDocument();
        expect(getByText("33h 8m")).toBeInTheDocument();
        expect(getByText("Resolution within SLA")).toBeInTheDocument();
        expect(getByText("94%")).toBeInTheDocument();
    });
});
