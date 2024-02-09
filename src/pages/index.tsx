import { GetStaticProps, NextPage } from "next";
import styled from "styled-components";

const HomeContainer = styled.main`
    height: calc(100vh - 104px - 61px);
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.4);

    background-image: url('/images/pokemon-hero.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
`

const HomeTitle = styled.h1`
    width: 31.8125rem;

    font: ${(props)=> props.theme.fonts.fontH1};
    text-align: center;

    color: ${(props)=> props.theme.colors.white};

    cursor: pointer;
`

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