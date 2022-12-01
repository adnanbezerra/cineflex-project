import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingIcon from "../assets/images/Loading_icon.gif"

import styled from "styled-components"

export default function SessionScreen({ setSession }) {
    const { movieId } = useParams();
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)
            .then((answer) => {
                setSessions([...answer.data.days]);
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function getSession(session) {
        return (
            <Session>
                <TitleSession>{session.weekday} - {session.date}</TitleSession>
                <div className="sessionsList">
                    <Link to={`/seats/${session.showtimes[0].id}`}>
                        <Button onClick={() => setSession({ day: session.weekday, time: session.showtimes[0].name, id: session.showtimes[0].id })} >{session.showtimes[0].name}</Button>
                    </Link>

                    <Link to={`/seats/${session.showtimes[1].id}`}>
                        <Button onClick={() => setSession({ day: session.weekday, time: session.showtimes[1].name, id: session.showtimes[1].id })} >{session.showtimes[1].name}</Button>
                    </Link>

                </div>
            </Session>
        );
    }

    function getSessionsList() {
        return (
            sessions.length === 0 ?
                <img src={LoadingIcon} alt="" />
                :
                sessions.map((session) => {
                    return (
                        getSession(session)
                    )
                })
        )
    }

    return (
        <Container>
            <ScreenTitle>Selecione o horário</ScreenTitle>

            <Sessions>
                {getSessionsList()}
            </Sessions>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const TitleSession = styled.p`
    font-size: 20px;
    color: #293845;
    margin-top: 22px;
`

const Button = styled.button`
    background-color: #E8833A;
    width: 83px;
    height: 43px;
    border-radius: 3px;
    border: 0;
    margin-right: 8px;
    margin-top: 22px;

    &:hover {
        cursor: pointer;
    }
`

const Session = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`

const ScreenTitle = styled.p`
    margin-top: 122px;
    font-family: 'Recursive', sans-serif;
    font-size: 24px;
    color: #293845;
`

const Sessions = styled.div`
    margin-top: 33px;
    width: 100%;
    padding-left: 25px;

    margin-bottom: 130px;  

    box-sizing: border-box;
`
