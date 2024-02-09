import { Time } from "../../domain/entities/times";
import { TimeGateway } from "../../domain/gateways/time-gateway";


export class ListTimeUseCase {
    constructor(private dateGate: TimeGateway){}

    async execute(): Promise<Time[]>{
        return this.dateGate.findAll();
    }
}