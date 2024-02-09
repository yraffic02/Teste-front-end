import { GetServerSideProps, NextPage } from "next";
import { Breadcrumb, BreadcrumbType } from "../../../components/Breadcrumb";
import { CardError } from "../../../components/Cards/Error";
import { SecondaryHeader } from "../../../components/SecondaryHeader";
import { QueryPageSecondaryTitle, QueryPageTitle } from "../style";
import { ErrorPageContainer } from "./style";

type ErrorPageProps = {
    paths: BreadcrumbType[],
}

export const ErrorPage: NextPage<ErrorPageProps> = ({paths}) => {
    return(
        <ErrorPageContainer>
            <SecondaryHeader>
                    <Breadcrumb paths={paths}/>
                    <QueryPageTitle>
                        Agendar Consulta
                    </QueryPageTitle>
                    <QueryPageSecondaryTitle>
                        Recupere seus pokémons em 5 segundos
                    </QueryPageSecondaryTitle>
                </SecondaryHeader>
            <CardError />
        </ErrorPageContainer>
    )
}

export default ErrorPage;

export const getServerSideProps: GetServerSideProps = async (context) =>{
    const paths: BreadcrumbType[] = [
        { url: '/', label: 'Home' },
        { url: '/agendar-consulta', label: 'Agendar Consulta' }
    ];

    return {
        props: {
            paths,
        }
    }
}