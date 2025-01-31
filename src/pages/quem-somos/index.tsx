import { GetStaticProps, NextPage } from "next";
import { Breadcrumb, BreadcrumbType } from "../../components/Breadcrumb";
import { SecondaryHeader } from "../../components/SecondaryHeader";
import styled from "styled-components";

const WhoWeAreContainer = styled.main`
    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const WhoWeAreTitle = styled.h1`
    font: ${(props)=> props.theme.fonts.fontH1};
`
const WhoWeAreSecondaryTitle = styled.p`
    font: ${(props)=> props.theme.fonts.body2Regular};
    color: ${(props)=> props.theme.colors.grayPrimary};
`

const WhoWeAreContainerText = styled.div`
    max-width: 25.5rem;
    height: 100%;
    
    text-align: start;


    padding-top: 2rem;
`

const WhoWeAreH2 = styled.h2`
    font: ${(props)=> props.theme.fonts.fontH4};
    color: ${(props)=> props.theme.colors.blackPrimary};
`

const WhoWeAreP = styled.p`
    font: ${(props)=> props.theme.fonts.body1Regular};
    color: ${(props)=> props.theme.colors.blackPrimary};
`

type WhoWeArePageProps = {
  paths: BreadcrumbType[]
}
  
export const WhoWeArePage: NextPage<WhoWeArePageProps> = ({ paths }) => {
    return (
      <WhoWeAreContainer>
        <SecondaryHeader>
          <Breadcrumb paths={paths}/>
          <WhoWeAreTitle>
            Quem Somos
          </WhoWeAreTitle>
          <WhoWeAreSecondaryTitle>
            A maior rede de tratamento pokémon.
          </WhoWeAreSecondaryTitle>
        </SecondaryHeader>
        <WhoWeAreContainerText>
            <WhoWeAreH2>
                O Centro Pokémon
            </WhoWeAreH2>
            <br/>
            <WhoWeAreP>
                Como funciona a cura de um pokémon?
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mi ut nunc 
                sodales mattis eget at sem. Praesent mattis interdum nulla, quis molestie justo lacinia a. 
                Curabitur rutrum ante a ligula aliquet pellentesque. Phasellus ut elit fermentum, lacinia 
                felis iaculis, aliquam augue. Vestibulum dignissim dignissim nisi sed tincidunt. 
                Fusce magna magna, porta sit amet accumsan at, ullamcorper id magna. Proin congue dolor eget iaculis porta. 
                Suspendisse sit amet scelerisque nisl. Nunc sagittis lacus at nulla auctor, ut euismod velit sollicitudin. 
                Phasellus eu quam a quam luctus mollis non eu lacus. Quisque fringilla enim vitae est rhoncus, nec feugiat ex t
                incidunt. Donec venenatis pharetra elit, eget fermentum ipsum. Aenean auctor, arcu a sagittis tempor, quam nisl u
                llamcorper ante, vitae dictum elit augue eget leo. Aliquam ante nisi, porttitor vitae congue at, consectetur nec 
                ligula. Vestibulum viverra elit et risus viverra imperdiet. Nullam egestas enim et lacus eleifend sollicitudin.
                Proin porttitor tincidunt fringilla. Sed et eros quis nibh mollis bibendum id eget dolor. Etiam hendrerit r
                isus non libero varius, et suscipit nibh tempor. Donec ut aliquam massa. Aenean nec libero leo. 
                Nullam dignissim augue a lacinia porttitor. Curabitur sed est sed metus gravida aliquet. Suspendisse potenti. 
                aPraesent condimentum pellentesque efficitur. Maecenas vel risus diam.
                <br/>
                <br/>
                Uma tradição de mais de 20 anos
                <br/>
                <br/>
                Etiam ac nisi sagittis, ullamcorper ex vel, dignissim urna. Mauris commodo diam ac 
                purus elementum, nec molestie arcu tincidunt. Donec quis sollicitudin sapien, 
                vitae tincidunt lorem. Sed vel est et orci pharetra interdum. Donec felis mauris, 
                faucibus in hendrerit sed, 
                malesuada vitae mi. Ut nec tellus ut lorem tincidunt iaculis. 
                Mauris vulputate in ante at ultrices. Phasellus non ligula nec dolor suscipit dapibus nec at enim.
                <br/>
                <br/>
                O melhor para seu pokémon
                <br/>
                <br/>
                Quisque porta cursus metus, id posuere mi commodo ac. 
                Proin auctor nisl eu mattis dignissim. Nullam efficitur, eros a sollicitudin dignissim,
                 nunc risus sollicitudin nunc, vitae lacinia erat mi sed dui. Mauris ante quam, malesuada eget ornare id, 
                 pellentesque nec felis. Nulla nec felis elementum, tristique ligula vel, aliquet erat. Nullam a magna tristique, 
                 semper nulla id, bibendum tellus. Etiam eleifend tortor in sollicitudin maximus. Proin dignissim feugiat urna, 
                 non imperdiet ligula ullamcorper ut. Nam velit quam, dignissim at lorem quis, facilisis vulputate sem. Quisque 
                 id sapien vehicula, hendrerit odio a, suscipit lectus. Phasellus aliquam erat non viverra egestas. Sed quis ipsum 
                 eu sem molestie accumsan sit amet non odio. 
                 In libero nisl, hendrerit at tortor eu, commodo posuere ipsum. Morbi bibendum vel nulla in ullamcorper. Sed ultricies,
                 est sed molestie varius, dolor ipsum ultricies enim, at dapibus nulla erat eu purus. Pellentesque non ultrices nulla.
                <br/>
                <br/>
                Alta Tecnologia
                <br/>
                <br/>
                Fusce vitae ex pharetra, gravida turpis in, pretium dui. Nulla fringilla odio sed dolor varius cursus vitae at lectus. 
                Aenean fermentum ligula sed tincidunt venenatis. Mauris quis ligula lacus. Integer viverra condimentum orci, quis consequat odio imperdiet ut. 
                Praesent maximus diam porttitor est sodales, id posuere lacus porta. Sed vel mauris vel mauris fringilla porttitor vitae eget neque. 
                Vivamus eget dictum dolor. 
                Nullam in ullamcorper purus, vel pulvinar ex. Cras posuere feugiat auctor. Mauris sodales dolor quis rhoncus hendrerit.
                <br/>
                <br/>
            </WhoWeAreP>
        </WhoWeAreContainerText>
      </WhoWeAreContainer>
    );
}
  
export default WhoWeArePage;

export const getStaticProps: GetStaticProps = async (context) => {
    const paths = [
      { url: '/', label: 'Home' },
      { url: '/sobre-nos', label: 'Sobre Nós' }
    ];
  
    return {
      props: {
        paths
      }
    };
}