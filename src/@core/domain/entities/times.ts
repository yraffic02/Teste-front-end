export type TimesProps = {
    time: string
}

export class Time{

    constructor(public props: TimesProps){}

    get time(){
       return this.props.time;
    }

    toJSON(){
        return this.props.time    
    }
}
