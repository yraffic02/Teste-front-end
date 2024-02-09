export type DatesProps = {
    date: string
}

export class Date {

    constructor(public props: DatesProps){}

    get date(){
       return this.props.date;
    }

    toJSON(){
        return this.props.date    
    }
}
