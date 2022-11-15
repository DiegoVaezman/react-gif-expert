import { GifGrid } from '../../components/GifGrid';
import { fireEvent, render, screen } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Testing <GifGrid />', () => {
    const category = 'One Punch';

    test('should show initial loading ', async () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('should show images when useFetchGifs images are loaded', async () => {
        const gifs = [
            {
                id: 'abc',
                title: 'aaa',
                url: 'bbb',
            },
            {
                id: 'def',
                title: 'ggg',
                url: 'hhh',
            },
        ];
        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: false,
        });
        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});
