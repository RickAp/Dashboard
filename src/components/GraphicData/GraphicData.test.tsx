import React from 'react';
import { render } from '@testing-library/react';
import GraphicData from './GraphicData';

describe('<GraphicData />', () => {
    // Test 1: Verificamos que se renderiza correctamente
  it('renders without crashing', () => {
    render(<GraphicData />);
  });

  // Test 2: Verificamos que las clases correctas se renderizan
  it('has correct classes', () => {
    const { container } = render(<GraphicData />);
    expect(container.firstChild).toHaveClass(
        'flex flex-col desktop:w-[780px] tablet:w-[375px] mobile:w-[390px] ml-[32px] mt-[32px]'
    );
  });
  
  // Test 3: Verificamos que los texto de los parrafos sean los correctos
  it('renders correct text', () => {
    const { getByText } = render(<GraphicData />);
    expect(getByText("Today’s trends")).toBeInTheDocument();
    expect(getByText("as of 25 May 2019, 09:41 PM")).toBeInTheDocument();
    expect(getByText("Today")).toBeInTheDocument();
    expect(getByText("Yesterday")).toBeInTheDocument();
  });
});


