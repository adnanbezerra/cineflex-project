import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function SeatsScreen() {

    const { sessionId } = useParams();
    const [seats, setSeats] = useState([]);

    const user = {
        id: [],
        name: "",
        cpf: ""
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)

        promise.then((answer) => setSeats([...answer.data.seats]))
    }, []);

    return (
        <Container>
            <ScreenTitle>Selecione o(s) assento(s)</ScreenTitle>

            <Seats>
                {seats.length === 0 ? <img src="./Loading_icon.gif" alt="" /> : seats.map((seat) => {
                    return (
                        <Seat corborder={"#7B8B99"}><p>{seat.name}</p></Seat>
                    )
                }
                )}
            </Seats>

            <Examples texto={false}>
                <Seat cor={"#1AAE9E"} corborder={"#8DD7CF"}></Seat><Seat cor={"#C3CFD9"} corborder={"#7B8B99"} ></Seat><Seat cor={"#F7C52B"} corborder={"#F7C52B"}></Seat>
            </Examples>
            <Examples texto={true}>
                <Example>Selecionado</Example>
                <Example>Disponível</Example>
                <Example>Disponível</Example>
            </Examples>

            <Form onSubmit={"nada"}>
                <FormText>Nome do comprador:</FormText>
                <InputForm type="text" placeholder="Digite seu nome..." />
                
                <FormText>CPF do comprador:</FormText>
                <InputForm type="number" placeholder="Digite seu CPF..." />

                <Link to="SuccessScreen" style={{ textDecoration: 'none' }}><Button>Reservar assento(s)</Button></Link>                
            </Form>

        </Container>
    )
}

const Button = styled.button`
    background-color: #E8833A;
    width: 225px;
    height: 42px;

    margin-top: 57px;
    border: 0;
    border-radius: 3px;
`

const Form = styled.form`
    margin-top: 34px;
`

const InputForm = styled.input`
    border: 1px solid #D5D5D5;
    width: 327px;
    height: 51px;
    border-radius: 3px;
`

const FormText = styled.p`
    font-size: 18px;
    color: #293845;
    margin-top: 7px;
`

const Example = styled.p`
    color: #4E5A65;
    font-size: 13px;
`

const Examples = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

    margin-left: ${props => props.texto ? 0 : '10px'};
`

const Seat = styled.div`
    border-radius: 50%;
    width: 26px;
    height: 26px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${props => props.corborder};
    background-color: ${props => props.cor};

    margin-top: 18px;
    margin-right: 7px;

    p {
        font-size: 11px;
        color: black;
    }
`

const Seats = styled.div`
    margin-top: 22px;
    display: flex;
    flex-wrap: wrap;

    padding-left: 15px;
    /* padding-right: 10px; */
`

const ScreenTitle = styled.p`
    margin-top: 122px;
    font-family: 'Recursive', sans-serif;
    font-size: 24px;
    color: #293845;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
