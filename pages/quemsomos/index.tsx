import { Breadcrumb } from "../../components/Breadcrumb";
import { SecondaryHeader } from "../../components/SecondaryHeader";
import { WhoWeAreContainer } from "./style";

export default function WhoWeArePage() {
    const paths = [
        { url: '/', label: 'Home' },
        { url: '/sobre-nos', label: 'Sobre Nós' }
      ];

    return(
        <WhoWeAreContainer>
            <SecondaryHeader>
                <Breadcrumb paths={paths}/>
            </SecondaryHeader>
        </WhoWeAreContainer>
    )
}