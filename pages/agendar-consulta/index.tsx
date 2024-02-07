import { NextPage } from "next";
import Head from "next/head";
import { Breadcrumb } from "../../components/Breadcrumb";
import { SecondaryHeader } from "../../components/SecondaryHeader";
import { QueryPageContainer, QueryPageSecondaryTitle, QueryPageTitle } from "./style";

export const QueryPage: NextPage = ()=> {
    const paths = [
        { url: '/', label: 'Home' },
        { url: '/agendar-consulta', label: 'Agendar Consulta' }
    ];

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
        </QueryPageContainer>
        </>
    )
}

export default QueryPage;