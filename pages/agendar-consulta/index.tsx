import { GetServerSideProps, NextPage } from "next";
import { QueryPageContainer, QueryPageSecondaryTitle, QueryPageTitle } from "./style";
import { SecondaryHeader } from "../../components/SecondaryHeader";
import { Breadcrumb, BreadcrumbType } from "../../components/Breadcrumb";

type QueryPageProps = {
    paths: BreadcrumbType[]
}

export const QueryPage: NextPage<QueryPageProps> = ({paths})=> {
    return(
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
    )
}

export default QueryPage;

export const getServerSideProps: GetServerSideProps = async (context) =>{
    const paths = [
        { url: '/', label: 'Home' },
        { url: '/agendar-consulta', label: 'Agendar Consulta' }
    ];

    return {
        props: {
            paths
        }
    }
}