export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=0PjrepV1zWf9UqxIa3DWmhEo7lGumkaT&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json(resp);

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    return gifs;
};
