import axios from "axios";
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

export default function InitialScreen() {

    useEffect( () => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
    }, []);

    return (
        <div className="container">
            <p className="title">Selecione o filme</p>

            <Link to="/MovieScreen"></Link>
        </div>
    )
}