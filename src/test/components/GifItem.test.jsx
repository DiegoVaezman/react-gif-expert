import { render, screen } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';

describe('Pruebas en <GifItem />', () => {
    const title = 'test title';
    const url = 'testurl';

    test('should render props title and url ', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();

        const { src, alt } = screen.getByRole('img');
        expect(src).toContain(url);
        expect(alt).toBe(title);
    });

    test('should match to snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
});
