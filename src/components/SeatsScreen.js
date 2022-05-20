import { Link } from 'react-router-dom'

export default function SeatsScreen (props) {
    return (
        <div className="container">
            <p className="title">Selecione o(s) assento(s)</p>

            <Link to="SuccessScreen">Reservar assento(s)</Link>
        </div>
    )
}