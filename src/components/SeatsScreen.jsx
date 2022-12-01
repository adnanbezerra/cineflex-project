import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Seat from './Seat';

export default function SeatsScreen({ setOrder, order, setSeatList, seatList, setMovie, movie }) {
    let navigate = useNavigate()
    const { sessionId } = useParams();
    const [seats, setSeats] = useState([]);
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)
            .then((answer) => {
                setSeats([...answer.data.seats])
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function submitForm(event) {
        event.preventDefault();

        if (equals(order.ids, [])) {
            alert("Você precisa escolher uma cadeira!");
            return;
        }

        const submit = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", order);

        submit.then((e) => {
            navigate(`/success`);
            setMovie({ ...movie, id: "" });
        }
        ).catch((e) => {
            alert("Deu ruim! Tente de novo")
            console.error(e)
        })
    }

    function getSeat(seat) {
        return (
            <Seat
                name={seat.name}
                isAvailable={seat.isAvailable}
                setOrder={setOrder}
                setSeatList={setSeatList}
                order={order}
                seatList={seatList}
                id={seat.id}
            />
        );
    }

    return (
        <Container>
            <ScreenTitle>Selecione o(s) assento(s)</ScreenTitle>

            <Seats>
                {seats.length === 0 ?
                    <img src="./Loading_icon.gif" alt="" />
                    :
                    seats.map((seat) => {
                        return getSeat(seat);
                    })
                }

            </Seats>

            <Examples texto={false}>
                <Seat></Seat><Seat isAvailable={true} ></Seat><Seat></Seat>
            </Examples>

            <Examples texto={true}>
                <Example>Selecionado</Example>
                <Example>Disponível</Example>
                <Example>Indisponível</Example>
            </Examples>

            <Form onSubmit={submitForm}>
                <FormText>Nome do comprador:</FormText>
                <InputForm
                    type="text"
                    placeholder="Digite seu nome..."
                    value={order.name}
                    onChange={(e) => setOrder({ ...order, name: e.target.value })}
                    required
                />

                <FormText>CPF do comprador:</FormText>
                <InputForm
                    type="number"
                    placeholder="Digite seu CPF..."
                    value={order.cpf}
                    onChange={(e) => setOrder({ ...order, cpf: e.target.value })}
                    required
                />

                <ButtonCage>
                    <Button>Reservar assento(s)</Button>
                </ButtonCage>
            </Form>

        </Container>
    )
}

const ButtonCage = styled.div`
    width: 97%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    background-color: #E8833A;
    width: 225px;
    height: 42px;

    margin-top: 40px;
    border: 0;
    border-radius: 3px;

    font-size: 18px;
    color: white;

    &:hover {
        cursor: pointer;
    }
`

const Form = styled.form`
    margin-top: 31px;

    margin-bottom: 150px;

    display: flex;
    flex-direction: column;
`

const InputForm = styled.input`
    border: 1px solid #D5D5D5;
    width: 327px;
    height: 51px;
    border-radius: 3px;
    padding-left: 10px;
    margin-top: 3px;

    &[type=number] {
        -moz-appearance: textfield;
    }

    &::placeholder {
        color: #AFAFAF;
        font-size: 18px;
        font-style: italic;
    }
`

const FormText = styled.p`
    font-size: 18px;
    color: #293845;
    margin-top: 10px;
`

const Example = styled.p`
    color: #4E5A65;
    font-size: 13px;
`

const Examples = styled.div`
    display: flex;
    width: 97%;
    justify-content: space-around;

    padding-left: ${props => props.texto ? 0 : '10px'};
`

const Seats = styled.div`
    margin-top: 22px;
    display: flex;
    flex-wrap: wrap;

    padding-left: 20px;
    padding-right: 10px;
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

    box-sizing: border-box;
`
