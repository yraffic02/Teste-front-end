import { RegionsPoke } from "../entities/regions-poke";

export interface RegionGateway {
    findAll(): Promise<RegionsPoke[]>
}