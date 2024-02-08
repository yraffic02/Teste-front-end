import { GetStaticProps, NextPage } from "next";
import { HomeContainer, HomeTitle } from "./style";

export const Home: NextPage = () => {
  return (
    <HomeContainer>
      <HomeTitle>
        Cuidamos bem do seu pokémon, para ele cuidar bem de você
      </HomeTitle>
    </HomeContainer>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {}
  };
}