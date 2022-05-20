import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Title( {setSession, setMovie} ) {

    function zeraTudo() {
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
    }

    return (
        <TitleDiv>
            <Link to="/" style={{ textDecoration: 'none' }} onClick={zeraTudo}><TitleText>CINEFLEX</TitleText></Link>
        </TitleDiv>
    )
}

const TitleDiv = styled.div`
    height: 67px;
    width: 100%;
    background-color: #C3CFD9;

    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.3);

    position: fixed;
    top: 0;
`

const TitleText = styled.p`    
    font-size: 34px;
    color: #E8833A;
    font-family: 'Righteous', cursive;
`