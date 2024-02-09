import { LocationsPoke } from "../../domain/entities/locations-poke";
import { LocationGateway } from "../../domain/gateways/location.gateway";

export class ListLocationUseCase {
    constructor(private dateGate: LocationGateway){}

    async execute(): Promise<LocationsPoke[]>{
        return this.dateGate.findAll();
    }
}