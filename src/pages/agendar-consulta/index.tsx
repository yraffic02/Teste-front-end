import { GetServerSideProps, NextPage } from "next";
import dynamic from 'next/dynamic';
import Head from "next/head";
import { ListDateUseCase } from "../../@core/application/date/list-date.use-case";
import { ListLocationUseCase } from "../../@core/application/location/list-locations.use-case";
import { ListPokemonUseCase } from "../../@core/application/pokemon/list-pokemons.use-case";
import { ListRegionUseCase } from "../../@core/application/region/list-regions.use-case";
import { ListTimeUseCase } from "../../@core/application/time/list-time.use-case";
import { Registry, container } from "../../@core/infra/containers/container-registry.api-local";
import { RegistryApiPoke, containerApiPoke } from "../../@core/infra/containers/container-registry.api-poke";
import { Breadcrumb, BreadcrumbType } from "../../components/Breadcrumb";
import { SecondaryHeader } from "../../components/SecondaryHeader";
import styled from "styled-components";

export type responsePoke = {
    name: string,
    url: string
}

type queryPageProps = {
    paths: BreadcrumbType[],
    dates: string[], 
    times: string[],
    locations: responsePoke[],
    regions: responsePoke[]
    pokemon: responsePoke[]
}

const QueryPageContainer = styled.main`
    min-height: calc(100vh - 104px - 61px);
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const QueryPageTitle = styled.h1`
    font: ${(props)=> props.theme.fonts.fontH1};
`
const QueryPageSecondaryTitle = styled.p`
    font: ${(props)=> props.theme.fonts.body2Regular};
    color: ${(props)=> props.theme.colors.grayPrimary};
`

const FormClient = dynamic(()=> import('../../components/FormQuery'), {ssr: false})

const QueryPage:NextPage<queryPageProps> = ({
    paths, 
    dates, 
    times,
    locations,
    regions, 
    pokemon
}) =>{
    return(
        <>
            <Head>
                <title>Agendar Consulta</title>
            </Head> 
            <QueryPageContainer>
                <SecondaryHeader>
                    <Breadcrumb paths={paths}/>
                    <QueryPageTitle>
                        Agendar Consulta
                    </QueryPageTitle>
                    <QueryPageSecondaryTitle>
                        Recupere seus pokémons em 5 segundos
                    </QueryPageSecondaryTitle>
                </SecondaryHeader>
                <FormClient 
                    dates={dates}
                    times={times}
                    locations={locations}
                    regions={regions}
                    pokemons={pokemon}
                />
            </QueryPageContainer>
        </>
    )
}

export default  QueryPage;

export const getServerSideProps: GetServerSideProps = async (context) =>{
    const paths: BreadcrumbType[] = [
        { url: '/', label: 'Home' },
        { url: '/agendar-consulta', label: 'Agendar Consulta' }
    ];
    const useCaseDate = container.get<ListDateUseCase>(Registry.ListDateUseCase)
    const useCaseTime = container.get<ListTimeUseCase>(Registry.ListTimeUseCase)
    const useCaseLocations = containerApiPoke.get<ListLocationUseCase>(RegistryApiPoke.ListLocationUseCase)
    const useCaseRegions = containerApiPoke.get<ListRegionUseCase>(RegistryApiPoke.ListRegionUseCase)
    const useCasePokemon = containerApiPoke.get<ListPokemonUseCase>(RegistryApiPoke.ListPokemonUseCase)

    const datesData = await useCaseDate.execute();
    const times = await useCaseTime.execute();
    const locations = await useCaseLocations.execute();
    const regions = await useCaseRegions.execute()
    const pokemon = await useCasePokemon.execute()

    return {
        props: {
            paths,
            dates: datesData.map(date => date.props), 
            times: times.map(time => time.props),
            locations,
            regions, 
            pokemon
        }
    }
}