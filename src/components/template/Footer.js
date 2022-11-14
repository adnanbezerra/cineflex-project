import styled from "styled-components"

export default function Footer({ imageUrl, movieName, sessionDay, sessionTime }) {
    return (
        <FooterDiv>
            <Image>
                <img src={imageUrl} alt="" />
            </Image>
            <Texts>
                <MovieInfo> {movieName} </MovieInfo>
                {sessionDay ? <MovieInfo> {sessionDay} - {sessionTime} </MovieInfo> : <></>}
            </Texts>
        </FooterDiv>
    )
}

const Texts = styled.div`
    display: flex;
    flex-direction: column;
`

const FooterDiv = styled.div`
    background-color: #9EADBA;
    border: 1px solid #9EADBA;

    height: 117px;
    width: 100%;

    position: fixed;
    bottom: 0;

    align-items: center;
    display: flex;
`

const MovieInfo = styled.p`
    color: #293845;
    font-size: 22px;
    margin-left: 14px;
`

const Image = styled.div`
    background-color: white;
    width: 64px;
    height: 89px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    margin-left: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 48px;
        height: 72px;
    }

`
