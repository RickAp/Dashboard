import React from "react";
import Tasks from "./Tasks";
import { render } from "@testing-library/react";

describe('<Task />', () => {

    // Test 1: Verificamos que se renderiza el componente correctamente
    it('renders without crashing', () => {
        render(<Tasks />);
    });

    // Test 2: Verificamos que se aplican las clases del contenedor correctamente
    it('applies the correct styles', () => {
        const { container } = render(<Tasks />);
        const signForm = container.firstChild;
        
        expect(signForm).toHaveClass('flex tablet:flex-col mobile:flex-col desktop:w-[1122px] tablet:w-[628px] mobile:w-[390px] desktop:h-[366px] tablet:h-auto mt-[30px] desktop:ml-[30px] tablet:ml-[30px] mb-[38px] desktop:space-x-[30px] tablet:space-y-[10px] mobile:space-y-[10px]');
    });
});