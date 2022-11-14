import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function SuccessScreen({ movieName, sessionDay, sessionTime, order, seatList, setSession, setMovie, setOrder, setSeatList }) {
    function resetOrder() {
        setSession({
            id: "",
            imageUrl: "",
            movieName: "",
        })

        setMovie({
            id: "",
            day: "",
            time: ""
        })

        setOrder({
            ids: [],
            name: "",
            cpf: ""
        })

        setSeatList("")
    }

    return (
        <Container>
            <ScreenTitle>Pedido feito com sucesso!</ScreenTitle>

            <Informations>
                <InfoTitle>Filme e sessão</InfoTitle>

                <Infos>
                    <InfoText>{movieName}</InfoText>
                    <InfoText>{sessionDay} {sessionTime}</InfoText>
                </Infos>

                <InfoTitle>Ingressos</InfoTitle>
                <Infos>
                    {seatList.map((session) => {
                        return (<InfoText>Assento {session}</InfoText>)
                    }
                    )}
                </Infos>

                <InfoTitle>Comprador</InfoTitle>
                <Infos>
                    <InfoText>Nome: {order.name}</InfoText>
                    <InfoText>CPF: {order.cpf}</InfoText>
                </Infos>

            </Informations>

            <Link to="/"><Button onClick={zeraTudo}>Voltar pra Home</Button></Link>
        </Container>
    )
}

const Infos = styled.div`
    margin-top: 10px;
`

const InfoText = styled.p`
    color: #293845;
    font-size: 22px;
`

const Informations = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* margin-left: 30px; */

    width: 87%;
`

const InfoTitle = styled.p`
    color: #293845;
    font-size: 25px;
    font-weight: bold;
    margin-top: 40px;
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

const ScreenTitle = styled.p`
    margin-top: 122px;
    font-family: 'Recursive', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #247A6B;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    box-sizing: border-box;
`
