import styled from "styled-components"
import { useState } from "react";


export default function Seat({ isAvailable, name, setOrder, order, setSeatList, seatList, id }) {
    const [isSelected, setIsSelected] = useState(false);

    function idSetter() {
        if (isAvailable) {
            if (isSelected) {
                setOrder({ ...order, ids: [order.ids.filter(removeId => removeId !== id)] })
                setSeatList(seatList.filter(removeName => removeName !== name))
                setIsSelected(false)
            } else {
                setOrder({ ...order, ids: [...order.ids, id] })
                setSeatList([...seatList, name])
                setIsSelected(true)
            }
        }
        else alert("Assento não disponível!")
    }

    return (
        <Cadeira isAvailable={isAvailable} isSelected={isSelected} onClick={idSetter}>
            <p>{name}</p>
        </Cadeira>
    )
}

const Cadeira = styled.div`
    border-radius: 50%;
    width: 23px;
    height: 23px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${props => props.isAvailable ? props.isSelected ? "#45BDB0" : "#7B8B99" : "#F7C52B"};
    background-color: ${props => props.isAvailable ? props.isSelected ? "#8DD7CF" : "#C3CFD9" : "#FBE192"};

    margin-top: 18px;
    margin-right: 8px;

    &:hover{
        cursor: pointer;
    }

    p {
        font-size: 11px;
        color: black;
    }
`
