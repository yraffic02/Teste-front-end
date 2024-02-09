import { Time } from "../entities/times";


export interface TimeGateway {
    findAll(): Promise<Time[]>
}