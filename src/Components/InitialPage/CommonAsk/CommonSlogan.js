import styled from "styled-components"

export default function CommonSlogan() {
    return (
        <Container>
            <Title>PERGUNTAS FREQUENTES.</Title>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100px;
background-color: #D5D0CA;
display: flex;
align-items: center;
justify-content: center;
`

const Title = styled.div`
font-size: 30px;
font-weight: bold;
font-family: sans-serif;
color:#013881;
`