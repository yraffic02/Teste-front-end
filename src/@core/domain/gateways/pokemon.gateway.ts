import { PokemonPoke } from "../entities/pokemons-poke";

export interface PokemonGateway {
    findAll(): Promise<PokemonPoke[]>
}