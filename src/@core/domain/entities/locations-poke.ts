
export type LocationsPokeProps = {
    name: string,
    url: string
}

export class LocationsPoke {
    constructor(public props: LocationsPokeProps){}

    get name(){
        return this.props.name
    }

    get url(){
        return this.props.url
    }

    toJSON(){
        return {
            name: this.props.name,
            url: this.props.url
        }
    }
}