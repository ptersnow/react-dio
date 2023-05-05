import React from 'react'

import styled  from 'styled-components';

import { useNavigate } from 'react-router-dom';

import { UserCircle } from '@phosphor-icons/react';

import logo from '../assets/logo-dio.png';

import { Button } from './Button';

export function Header({ autenticado }) {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const handleClickSignUp = () => {
        navigate('/cadastro')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio"/>
                    {autenticado ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserCircle color='#fff' size={24} />
                    ) : (
                        <>
                            <MenuRight href="/">Home</MenuRight>
                            <Button title="Entrar" onClick={handleClickSignIn} />
                            <Button title="Cadastrar" onClick={handleClickSignUp} />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

const Container = styled.div`
   
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

const Row = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`;

const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display:flex
    justify-content: center;
    align-items: center
`

const BuscarInputContainer = styled.div`
    width: 275px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display:flex;
`

const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
`

const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
`

const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFFFFF;
`