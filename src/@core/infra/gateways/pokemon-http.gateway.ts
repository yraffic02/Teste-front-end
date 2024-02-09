import { AxiosInstance } from "axios";
import { LocationsPoke } from "../../domain/entities/locations-poke";
import { PokemonGateway } from "../../domain/gateways/pokemon.gateway";
import { PokemonPoke } from "../../domain/entities/pokemons-poke";

export class PokemonHttpGateway implements PokemonGateway{
    constructor(private http: AxiosInstance){}

    async findAll(): Promise<LocationsPoke[]> {
        try {
            const response = await this.http.get<PokemonPoke[]>('/pokemon');
            return response.data.results
        } catch (error) {
            console.error("Erro ao buscar datas:", error);
            throw error;
        }
    }
}