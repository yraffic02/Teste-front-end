import { LocationsPoke } from "../entities/locations-poke";


export interface LocationGateway {
    findAll(): Promise<LocationsPoke[]>
}