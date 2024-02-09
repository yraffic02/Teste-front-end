import { AxiosInstance } from "axios";
import { LocationGateway } from "../../domain/gateways/location.gateway";
import { LocationsPoke } from "../../domain/entities/locations-poke";

export class LocationHttpGateway implements LocationGateway{
    constructor(private http: AxiosInstance){}

    async findAll(): Promise<any[]> {
        try {
            const response = await this.http.get('/location');
            return response.data.results
        } catch (error) {
            console.error("Erro ao buscar datas:", error);
            throw error;
        }
    }
}