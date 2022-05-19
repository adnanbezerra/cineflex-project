export default function SuccessScreen (props) {
    return (
        <div className="container">
            <p className="success">Pedido feito com sucesso!</p>

            <Link to="/">Voltar pra Home</Link>
        </div>
    )
}