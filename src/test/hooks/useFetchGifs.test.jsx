import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Testing useFetchGifs', () => {
    test('should return initial state', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBe(0);
        expect(isLoading).toBe(true);
    });

    test('should return gifs array and inLoading false', async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));

        await waitFor(() =>
            expect(result.current.gifs.length).toBeGreaterThan(0)
        );

        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBe(false);
    });
});
