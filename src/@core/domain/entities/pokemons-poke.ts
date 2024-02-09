export type PokemonPokeProps = {
    name: string,
    url: string
}

export class PokemonPoke {
    constructor(public props: PokemonPokeProps){}

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