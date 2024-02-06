import { Breadcrumb } from "../../components/Breadcrumb";
import { SecondaryHeader } from "../../components/SecondaryHeader";
import { WhoWeAreContainer, WhoWeAreSecondaryTitle, WhoWeAreTitle } from "./style";

export default function WhoWeArePage() {
    const paths = [
        { url: '/', label: 'Home' },
        { url: '/sobre-nos', label: 'Sobre Nós' }
      ];

    return(
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
    )
}