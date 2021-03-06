import "./css/reset.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Title from "./shared/Title";
import InitialScreen from "./components/InitialScreen";
import SessionScreen from "./components/SessionScreen";
import SeatsScreen from "./components/SeatsScreen";
import SuccessScreen from "./components/SuccessScreen";
import Footer from "./shared/Footer";

export default function App() {

    const [movie, setMovie] = useState({
        id: "",
        imageUrl: "",
        movieName: "",
    });
    
    const [session, setSession] = useState({
        id: "",
        day: "",
        time: ""
    });

    const [order, setOrder] = useState({
        ids: [],
        name: "",
        cpf: ""
    })

    const [seatList, setSeatList] = useState([])

    return (
        <BrowserRouter>
            <Title setSession={setSession} setMovie={setMovie} setOrder={setOrder} setSeatList={setSeatList} />

            <Routes>
                <Route path="/" element={<InitialScreen setMovie={setMovie} />} />
                <Route path="/sessoes/:movieId" element={<SessionScreen setSession={setSession} />} />
                <Route path="/assentos/:sessionId" element={<SeatsScreen setOrder={setOrder} order={order} setMovie={setMovie} movie={movie} seatList={seatList} setSeatList={setSeatList} />} />
                <Route path="/sucesso" element={<SuccessScreen movieName={movie.movieName} sessionDay={session.day} sessionTime={session.time} order={order} seatList={seatList} setSession={setSession} setMovie={setMovie} setOrder={setOrder} />} />
            </Routes>

            {movie.id ? <Footer imageUrl={movie.imageUrl} movieName={movie.movieName} sessionDay={session.day} sessionTime={session.time} /> : <></>}
        </BrowserRouter>
    );
}