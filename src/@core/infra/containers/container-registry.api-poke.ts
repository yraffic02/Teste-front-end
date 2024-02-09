import { Container } from "inversify";
import { apiPoke } from "../api-poke";
import { LocationHttpGateway } from "../gateways/location-http.gateway";
import { ListLocationUseCase } from "../../application/location/list-locations.use-case";
import { RegionHttpGateway } from "../gateways/region-http.gateway";
import { ListRegionUseCase } from "../../application/region/list-regions.use-case";
import { PokemonHttpGateway } from "../gateways/pokemon-http.gateway";
import { ListPokemonUseCase } from "../../application/pokemon/list-pokemons.use-case";

export const RegistryApiPoke = {
    AxiosAdapter: Symbol.for('AxiosAdapter'),

    LocationGateway: Symbol.for("LocationGateway"),
    ListLocationUseCase: Symbol.for("ListLocationUseCase"),

    RegionGateway: Symbol.for("RegionGateway"),
    ListRegionUseCase: Symbol.for("ListRegionUseCase"),

    PokemonGateway: Symbol.for("PokemonGateway"),
    ListPokemonUseCase: Symbol.for("ListPokemonUseCase")
}

export const containerApiPoke = new Container()

containerApiPoke.bind(RegistryApiPoke.AxiosAdapter).toConstantValue(apiPoke)

containerApiPoke.bind(RegistryApiPoke.LocationGateway).toDynamicValue((context)=>{
    return new LocationHttpGateway(context.container.get(RegistryApiPoke.AxiosAdapter))
})

containerApiPoke.bind(RegistryApiPoke.ListLocationUseCase).toDynamicValue((context)=>{
    return new ListLocationUseCase(context.container.get(RegistryApiPoke.LocationGateway))
})

containerApiPoke.bind(RegistryApiPoke.RegionGateway).toDynamicValue((context)=>{
    return new RegionHttpGateway(context.container.get(RegistryApiPoke.AxiosAdapter))
})

containerApiPoke.bind(RegistryApiPoke.ListRegionUseCase).toDynamicValue((context)=>{
    return new ListRegionUseCase(context.container.get(RegistryApiPoke.RegionGateway))
})

containerApiPoke.bind(RegistryApiPoke.PokemonGateway).toDynamicValue((context)=>{
    return new PokemonHttpGateway(context.container.get(RegistryApiPoke.AxiosAdapter))
})

containerApiPoke.bind(RegistryApiPoke.ListPokemonUseCase).toDynamicValue((context)=>{
    return new ListPokemonUseCase(context.container.get(RegistryApiPoke.PokemonGateway))
})