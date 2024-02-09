import { Date } from "../entities/dates";

export interface DateGateway {
    findAll(): Promise<Date[]>
}