import { AxiosInstance } from "axios";
import { RegionGateway } from "../../domain/gateways/region.gateway";
import { RegionsPoke } from "../../domain/entities/regions-poke";


export class RegionHttpGateway implements RegionGateway{
    constructor(private http: AxiosInstance){}

    async findAll(): Promise<any[]> {
        try {
            const response = await this.http.get('/region');
            return response.data.results
        } catch (error) {
            console.error("Erro ao buscar as regiões:", error);
            throw error;
        }
    }
}