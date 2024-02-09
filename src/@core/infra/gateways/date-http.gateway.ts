import { AxiosInstance } from "axios";
import { DateGateway } from "../../domain/gateways/date.gateway";
import { Date } from "../../domain/entities/dates";

export class DateHttpGateway implements DateGateway{
    constructor(private http: AxiosInstance){}

    async findAll(): Promise<Date[]> {
        try {
            const response = await this.http.get<Date[]>('/scheduling/date');
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar datas:", error);
            throw error;
        }
    }
}