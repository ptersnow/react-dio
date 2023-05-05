import { useNavigate  } from "react-router-dom";

import styled from 'styled-components';

import bannerImage from '../assets/banner.png'

import { Button } from '../components/Button';

import { Header } from '../components/Header';


export function Home() {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                            Implemente <br />
                        </TitleHighlight>
                    o seu futuro global agora!</Title>
                    <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.</TextContent>
                    <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
                </div>
                <div>
                    <img src={bannerImage} alt="Imagem principal do site." />
                </div>
            </Container>
        </>
    )
}

const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

const TitleHighlight = styled.span`
    color: #E4105D;;
`

const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    width: 420px;

    margin-bottom: 20px;

    color: #FFFFFF;
`