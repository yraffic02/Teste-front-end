import { Container } from "inversify";
import { apiLocal } from "./api-local";
import { DateHttpGateway } from "./gateways/date-http.gateway";
import { ListDateUseCase } from "../application/date/list-date.use-case";

export const Registry = {
    AxiosAdapter: Symbol.for("AxiosAdapter"),
    DateGateway: Symbol.for("DateGateway"),
    ListDateUseCase: Symbol.for("ListDateUseCase")
}

export const container = new Container;

container.bind(Registry.AxiosAdapter).toConstantValue(apiLocal)

container.bind(Registry.DateGateway).toDynamicValue((context)=>{
    return new DateHttpGateway(context.container.get(Registry.AxiosAdapter))
})

container.bind(Registry.ListDateUseCase).toDynamicValue((context)=>{
    return new ListDateUseCase(context.container.get(Registry.DateGateway))
})