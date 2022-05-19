import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";

export default function InitialScreen() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promise.then((answer) => {
            setMovies(answer.data)
        })
    }, []);

    return (
        <Container>
            <ScreenTitle>Selecione o filme</ScreenTitle>

            <Movies>
                {movies.map((movie) => <Link to={`/SessionScreen/:${movie.id}`}><Movie> <img src={movie.posterURL} alt="" /> </Movie></Link>)}
            </Movies>
        </Container>
    )
}

const ScreenTitle = styled.p`
    margin-top: 122px;
    font-family: 'Recursive', sans-serif;
    font-size: 24px;
`

const Movies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 45px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Movie = styled.div`
    width: 145px;
    height: 209px;
    display: flex;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
    margin-top: 10px;

    img {
        width: 129px;
        height: 193px;
    }
`