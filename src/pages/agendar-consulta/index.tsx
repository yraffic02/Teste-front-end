import { GetServerSideProps, NextPage } from "next";
import dynamic from 'next/dynamic';
import Head from "next/head";
import { ListDateUseCase } from "../../@core/application/date/list-date.use-case";
import { apiLocal } from "../../@core/infra/api-local";
import { apiPoke } from "../../@core/infra/api-poke";
import { Registry, container } from "../../@core/infra/container-registrey.api-local";
import { Breadcrumb, BreadcrumbType } from "../../components/Breadcrumb";
import { SecondaryHeader } from "../../components/SecondaryHeader";
import { QueryPageContainer, QueryPageSecondaryTitle, QueryPageTitle } from "./style";

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
    const useCase = container.get<ListDateUseCase>(Registry.ListDateUseCase)
    const datesData = await useCase.execute();
    
    const resTime = await apiLocal.post('/scheduling/time');
    const times = resTime.data;

    const resLocation = await apiPoke.get('/location')
    const locations = resLocation.data.results

    const resRegion = await apiPoke.get('/region')
    const regions = resRegion.data.results

    const resPokemon = await apiPoke.get('/pokemon')
    const pokemon = resPokemon.data.results

    return {
        props: {
            paths,
            dates: datesData.map(date => date.props), 
            times,
            locations,
            regions, 
            pokemon
        }
    }
}