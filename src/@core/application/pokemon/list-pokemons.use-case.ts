import { PokemonPoke } from "../../domain/entities/pokemons-poke";
import { PokemonGateway } from "../../domain/gateways/pokemon.gateway";

export class ListPokemonUseCase {
    constructor(private dateGate: PokemonGateway){}

    async execute(): Promise<PokemonPoke[]>{
        return this.dateGate.findAll();
    }
}