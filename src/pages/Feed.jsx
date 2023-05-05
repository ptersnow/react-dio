import { useState } from 'react'

import styled from 'styled-components';

import { Card } from '../components/Card';
import { UserInfo } from '../components/UserInfo';

import { Header } from '../components/Header';

export function Feed() {

    const [posts, setPosts] = useState([
        {
            id: 1,
            name: 'Pedro Henrique',
            image: 'https://github.com/ptersnow.png',
            created_at: '2021-08-01',
            title: 'Título do post',
            resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus, nunc massa.',
            hashtags: ['javascript', 'nodejs', 'reactjs'],
            counter_like: 10
        }
    ])

    const [users, setUsers] = useState([
        {
            id: 1,
            nome: 'Pedro Henrique',
            image: 'https://github.com/ptersnow.png',
            percentual: 25
        }
    ])

    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    {
                        posts.map((post) => (
                            <Card key={post.id} data={post} />
                        ))    
                    }
                </Column>
                <Column flex={1}>
                <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                    {users.map((user) => (
                        <UserInfo key={user.id} nome={user.nome} image={user.image} percentual={user.percentual} />
                    ))}
                </Column>
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
`

const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 24px;
`

const TitleHighlight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF70;
    margin-bottom: 24px;

`

const Column = styled.div`
    flex:${({flex}) => flex};
    padding-right: 24px;

`
