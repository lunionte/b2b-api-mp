export class CountriesService {
    async getCountry(countryName: string) {
        const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(
            countryName
        )}?fields=name,capital,population,currencies`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Erro ao buscar país");
        }

        const data = await response.json();
        return data;
    }
}
