import { GetStaticProps, NextPage } from "next";
import { Breadcrumb, IBreadcrumb } from "../../components/Breadcrumb";
import { SecondaryHeader } from "../../components/SecondaryHeader";
import { WhoWeAreContainer, WhoWeAreSecondaryTitle, WhoWeAreTitle } from "./style";  
  
export const WhoWeArePage: NextPage<IBreadcrumb> = ({ paths }: IBreadcrumb) => {
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