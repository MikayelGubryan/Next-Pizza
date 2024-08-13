export const search = async (query: string) => {
    const response = await fetch(`https://api.example.com/products?query=${query}`);
    const data = await response.json();
    return data;
}