import styled from "styled-components"
import Pack from "./Pack"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export default function Packages() {

    const [packs, setPacks] = useState([]);

    useEffect(() => {
       const URL = "https://voecheapdeploy-api.onrender.com/packs";
       const promisse = axios.get(URL);

       promisse.then((res) => {
        setPacks(res.data);
       });
       promisse.catch((err) => {
        console.log(err);
       })
    }, []);

    console.log(packs);
    return (<>
        <Title>PRINCIPAIS PASSAGENS</Title>
        <Container id="packages">
            {packs.map((p) => (<Pack p={p} />))}
        </Container>
    </>)
}

const Container = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;
width: 1200px;
padding-bottom: 30px;
@media (max-width: 1200px) {
    width: 100%;
  }
`
const Title = styled.h1`
margin-top: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
color: #013881;
font-size: 30px;
@media (max-width: 768px) {
    text-align: center;
  }
`