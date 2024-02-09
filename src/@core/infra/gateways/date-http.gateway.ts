import { AxiosInstance } from "axios";
import { DateGateway } from "../../domain/gateways/date.gateway";
import { Date } from "../../domain/entities/dates";

export class DateHttpGateway implements DateGateway{
    constructor(private http: AxiosInstance){}

    findAll(): Promise<Date[]> {
        return this.http.get<Date[]>('/scheduling/date')
            .then((res) =>
                res.data.map((data) =>
                    new Date(data)
                )
            )
            .catch((error) => {
              
                console.error("Erro ao buscar datas:", error);
                throw error; 
            })
    }
}