import { AxiosInstance } from "axios";
import { Time } from "../../domain/entities/times";
import { TimeGateway } from "../../domain/gateways/time-gateway";

export class TimeHttpGateway implements TimeGateway{
    constructor(private http: AxiosInstance){}

    async findAll(): Promise<Time[]> {
        try {
            const response = await this.http.post<Time[]>('/scheduling/time');
            return response.data.map((time)=> new Time(time));
        } catch (error) {
            console.error("Erro ao buscar Horas:", error);
            throw error;
        }
    }
}