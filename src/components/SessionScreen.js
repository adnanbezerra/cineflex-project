import styled from "styled-components"

export default function SessionScreen (props) {
    return (
        <Container>
            <ScreenTitle>Selecione o horário</ScreenTitle>

            <Link to="/SessionScreen"></Link>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


const ScreenTitle = styled.p`
    margin-top: 122px;
    font-family: 'Recursive', sans-serif;
    font-size: 24px;
`