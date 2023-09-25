import styled from "styled-components"
import check from "../../Assets/check.png"
import asterisc from "../../Assets/asterics 1.png"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/ContextApi";

export default function Pack({ p }) {

    const { setPackSelect, setPackId } = useContext(UserContext);
    const navigate = useNavigate();

    function reservarPack() {
        setPackSelect(p.destiny);
        setPackId(p.id);
        navigate("/information");
    }

    return (<>
        <Packet>
            <Image img={p.image}>
                <div>{p.price}</div>
            </Image>
            <Destiny><div>{p.destiny}</div></Destiny>
            <Container destiny={p.destiny}>
                {p.destiny === 'Lisboa' ? <DivLisboa><img src={asterisc} alt="asterisco" /> {p.ticket}</DivLisboa> : <div><img src={check} alt="check" /> {p.ticket}</div>}
                <div><img src={check} alt="check" /> {p.departureTax}</div>
                <div><img src={check} alt="check" /> {p.baggage}</div>
                <div><img src={check} alt="check" /> {p.support}</div>
            </Container>
            <Button onClick={reservarPack}><div>FALE COM CONSULTOR</div></Button>
        </Packet>
    </>)
}

const Packet = styled.div`
height: 400px;
width: 350px;
margin-top: 50px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`

const Image = styled.div`
background-image: url(${props => props.img});
background-size:cover;
background-position: center center;
height: 200px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
div{
    border-top-left-radius: 10px;
    padding-top: 5px;
    padding-left: 5px;
    font-weight: bold;
font-family: 'Roboto', sans-serif;
background: #013881;
width: 150px;
height: 25px;
color: white;
}

`
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
padding-left: 20px;
div{
margin-top: 10px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
color: #4F4F4F;

}
`
const DivLisboa = styled.div`
margin-left: -4px;
`
const Destiny = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    font-weight: bold;
font-family: 'Roboto', sans-serif;
color: #013881;
`
const Button = styled.div`
margin-top: 10px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
div{
    height: 40px;
    border-radius: 8px;
    width: 270px;
    border: 2px solid #013881;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
font-family: 'Roboto', sans-serif;
color: #013881;
cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
     background-color: rgba(1, 56, 129, 0.5);
}
}
`