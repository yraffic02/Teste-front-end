import { AxiosInstance } from "axios";
import { LocationGateway } from "../../domain/gateways/location.gateway";
import { LocationsPoke } from "../../domain/entities/locations-poke";

export class LocationHttpGateway implements LocationGateway{
    constructor(private http: AxiosInstance){}

    async findAll(): Promise<LocationsPoke[]> {
        try {
            const response = await this.http.get<LocationsPoke[]>('/location');
            return response.data.results
        } catch (error) {
            console.error("Erro ao buscar datas:", error);
            throw error;
        }
    }
}