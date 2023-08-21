import React from "react";
import Graphic from "./Graphic";
import { render } from '@testing-library/react';

jest.mock('../GraphicData/GraphicData', () => {
    return () => <div>GraphicData</div>;
});
  
jest.mock('../GraphicText/GraphicText', () => {
    return () => <div>GraphicText</div>;
});

describe('<Form />', () => {
    
    // Test 1: Verificamos que se renderiza correctamente
    it('renders without crashing', () => {
        render(<Graphic />);
    });

    // Test 2: Verificamos que las clases correctas se renderizan
    it('has correct classes', () => {
        const { container } = render(<Graphic />);
        expect(container.firstChild).toHaveClass(
        'flex desktop:w-[1122px] tablet:w-[625px] h-[546px] mobile:h-[302px] desktop:ml-[30px] tablet:ml-[30px] mt-[30px] border border-[var(--grayscale-divider)] border-1 rounded-lg'
        );
    });

    // Test 3: Verificamos que los componentes hijo se renderizan correctamente
    it('renders GraphicData and GraphicText components', () => {
        const { getByText } = render(<Graphic />);
        expect(getByText('GraphicData')).toBeInTheDocument();
        expect(getByText('GraphicText')).toBeInTheDocument();
    });

});

