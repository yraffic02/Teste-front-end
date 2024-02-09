import { Date } from "../../domain/entities/dates";
import { DateGateway } from "../../domain/gateways/date.gateway";

export class ListDateUseCase {
    constructor(private dateGate: DateGateway){}

    async execute(): Promise<Date[]>{
        return this.dateGate.findAll();
    }
}