import check from "../../Assets/check.png";
import asterisc from "../../Assets/asterics 1.png";
import { useContext } from "react";
import UserContext from "../../contexts/ContextApi";
import { Packet, Image, Destiny, Container, Button } from "../../GlobalStyle/PackCSS";

export default function NationalPacks({ p }) {

    const { setPackSelect, setPackId } = useContext(UserContext);

    function reservarPack() {
        setPackSelect(p.destiny);
        setPackId(p.id);
        let message;
        message = `Olá, gostaria de obter mais informações sobre essa passgem para ${p.destiny}`

        const encode = encodeURIComponent(message);
        window.open(`https://wa.me/5532984957373?text=${encode}`);
    }

    return (<>
        <Packet>
            <Image img={p.image}>
                <div>{p.price}</div>
            </Image>
            <Destiny><div>{p.destiny}</div></Destiny>
            <Container destiny={p.destiny}>
                {p.destiny === 'Lisboa' ? <div><img src={asterisc} alt="asterisco" /> <h1>{p.ticket}</h1></div> : <div><img src={check} alt="check" />  <h1>{p.ticket}</h1></div>}
                <div><img src={check} alt="check" /> <h1>{p.departureTax}</h1></div>
                <div><img src={check} alt="check" /> <h1>{p.baggage}</h1></div>
                <div><img src={check} alt="check" /> <h1>{p.support}</h1></div>
            </Container>
            <Button onClick={reservarPack}><div>QUERO UMA COTAÇÃO</div></Button>
        </Packet>
    </>)
};