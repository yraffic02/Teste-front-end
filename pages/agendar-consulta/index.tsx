import Head from "next/head";
import { Breadcrumb, BreadcrumbType } from "../../components/Breadcrumb";
import { SecondaryHeader } from "../../components/SecondaryHeader";
import { QueryPageContainer, QueryPageSecondaryTitle, QueryPageTitle } from "./style";
import dynamic from 'next/dynamic'
import {GetServerSideProps, NextPage } from "next";
import { apiLocal } from "../../lib/api-local";

type queryPageProps = {
    paths: BreadcrumbType[],
    dates: string[], 
    times: string[]
}

const FormClient = dynamic(()=> import('../agendar-consulta/components/FormQuery'), {ssr: false})

const QueryPage:NextPage<queryPageProps> = ({paths, dates, times}) =>{
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
    
    const resDate = await apiLocal.get('/scheduling/date');
    const dates = resDate.data

    const resTime = await apiLocal.post('/scheduling/time');
    const times = resTime.data;

    console.log(times)
    return {
        props: {
            paths,
            dates, 
            times
        }
    }
}