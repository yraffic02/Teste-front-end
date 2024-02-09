export type TimesProps = {
    time: string
}

export class Time{

    constructor(public props: TimesProps){}

    get date(){
       return this.props.time;
    }

    toJSON(){
        return this.props.time    
    }
}
