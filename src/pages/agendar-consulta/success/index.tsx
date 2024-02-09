import { GetServerSideProps, NextPage } from "next";
import { Breadcrumb, BreadcrumbType } from "../../../components/Breadcrumb";
import { CardSuccess } from "../../../components/Cards/Success";
import { SecondaryHeader } from "../../../components/SecondaryHeader";
import { QueryPageSecondaryTitle, QueryPageTitle } from "../style";
import { SuccessPageContainer } from "./style";

type SuccessPageProps = {
    paths: BreadcrumbType[],
}

export const SuccessPage: NextPage<SuccessPageProps> = ({paths}) => {
    return(
        <SuccessPageContainer>
            <SecondaryHeader>
                    <Breadcrumb paths={paths}/>
                    <QueryPageTitle>
                        Agendar Consulta
                    </QueryPageTitle>
                    <QueryPageSecondaryTitle>
                        Recupere seus pokémons em 5 segundos
                    </QueryPageSecondaryTitle>
                </SecondaryHeader>
            <CardSuccess />
        </SuccessPageContainer>
    )
}

export default SuccessPage;

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