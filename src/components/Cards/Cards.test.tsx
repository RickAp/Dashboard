import React from 'react';
import { render, fireEvent, within, getAllByTestId } from '@testing-library/react';
import Cards from './Cards';

describe('Cards Component', () => {

    // Test 1: Verificamos que se renderizan todas las tarjetas
    it('should render all cards', () => {
        const {getAllByTestId } = render(<Cards />);
        expect(getAllByTestId(/^card-/)).toHaveLength(4);
    });

    // Test 2: Verificamos que las tarjetas muestran el título y la cuenta correctos
    it('should display correct title and count for each card', () => {
        const { getAllByTestId } = render(<Cards />);
        const titles = ['Unresolved', 'Overdue', 'Open', 'On hold'];
        const counts = ['60', '16', '43', '64'];

        const titleElements = getAllByTestId(/^title-/);
        const countElements = getAllByTestId(/^count-/);

        titleElements.forEach((element, index) => {
            expect(element).toHaveTextContent(titles[index]);
        });

        countElements.forEach((element, index) => {
            expect(element).toHaveTextContent(counts[index]);
        });
    });

    // Test 3: Verificamos la aplicación de clases en función de la selección
    it('should apply correct classes based on selection', () => {
        const { getAllByTestId } = render(<Cards />);
        const cards = getAllByTestId(/^card-/);
        
        fireEvent.click(cards[0]);

        expect(cards[0]).toHaveClass('border-[var(--main-blue)]');
        expect(cards[1]).not.toHaveClass('border-[var(--main-blue)]');
    });

    // Test 4: Verificamos que el color del párrafo cambia cuando se selecciona una tarjeta
    it('should change paragraph color when a card is selected', () => {
        const { getAllByTestId } = render(<Cards />);
        const cards = getAllByTestId(/^card-/);

        // Simulamos click en la primer tarjeta
        fireEvent.click(cards[0]);

        const firstCardParagraphs = within(cards[0]).getAllByRole('paragraph');
        expect(firstCardParagraphs[0]).toHaveClass('text-[var(--main-blue)]');
        expect(firstCardParagraphs[1]).toHaveClass('text-[var(--main-blue)]');
    });
});