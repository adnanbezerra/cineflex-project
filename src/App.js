import "./css/reset.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./shared/Title";
import InitialScreen from "./components/InitialScreen";

export default function App() {

    return (
        <BrowserRouter>
            <Title />

            <Routes>
                <Route path="/" element={<InitialScreen />} />
            </Routes>
        </BrowserRouter>
    );
}