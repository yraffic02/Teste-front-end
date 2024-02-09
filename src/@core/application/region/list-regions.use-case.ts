import { RegionsPoke } from "../../domain/entities/regions-poke";
import { RegionGateway } from "../../domain/gateways/region.gateway";

export class ListRegionUseCase {
    constructor(private dateGate: RegionGateway){}

    async execute(): Promise<RegionsPoke[]>{
        return this.dateGate.findAll();
    }
}