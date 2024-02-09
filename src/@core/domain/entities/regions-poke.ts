export type RegionsPokeProps = {
    name: string,
    url: string
}

export class RegionsPoke {
    constructor(public props: RegionsPokeProps){}

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