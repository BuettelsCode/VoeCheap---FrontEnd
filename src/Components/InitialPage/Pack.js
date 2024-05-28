import check from "../../Assets/check.png";
import asterisc from "../../Assets/asterics 1.png";
import { useContext } from "react";
import UserContext from "../../contexts/ContextApi";
import { Packet, Image, Destiny, Container, Button } from "../../GlobalStyle/PackCSS";
import styled from "styled-components";
import { useState } from "react";

export default function Pack({ p }) {
    const { setPackSelect, setPackId } = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function reservarPack() {
        setPackSelect(p.destiny);
        setPackId(p.id);
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    function handleBackgroundClick(e) {
        if (e.target.id === 'modal-background') {
            closeModal();
        }
    }

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [days, setDays] = useState(0);
    const [luggage, setLuggage] = useState(false);
    const [luggageCount, setLuggageCount] = useState(0);

    return (
        <>
            <Packet>
                <Image img={p.image}>
                    <div>{p.price}</div>
                </Image>
                <Destiny><div>{p.destiny}</div></Destiny>
                <Container destiny={p.destiny}>
                    {p.destiny === 'Lisboa' ? <div><img src={asterisc} alt="asterisco" /> <h1>{p.ticket}</h1></div> : <div><img src={check} alt="check" /> <h1>{p.ticket}</h1></div>}
                    <div><img src={check} alt="check" /> <h1>{p.departureTax}</h1></div>
                    <div><img src={check} alt="check" /> <h1>{p.baggage}</h1></div>
                    <div><img src={check} alt="check" /> <h1>{p.support}</h1></div>
                </Container>
                <Button onClick={reservarPack}><div>QUERO UMA COTAÇÃO</div></Button>
            </Packet>
            {isModalOpen && (
                <ModalBackground id="modal-background" onClick={handleBackgroundClick}>
                    <Modal>
                        <CloseButton onClick={closeModal}>X</CloseButton>
                        <Form>
                            <h1>Olá, viajante!</h1>
                            <h2>Preencha os campos abaixo de acordo com suas preferêcias:</h2>
                            Seu nome:
                            <label style={{ display: 'flex' }}>
                                <input type="text" name="name" />
                            </label>
                            <div>
                                <label>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        Passageiros:    Adultos:
                                        <Counter>
                                            <button style={{ marginLeft: '5px' }} type="button" onClick={() => setAdults(Math.max(0, adults - 1))}>-</button>
                                            <span>{adults}</span>
                                            <button style={{ marginRight: '5px' }} type="button" onClick={() => setAdults(adults + 1)}>+</button>
                                        </Counter>
                                        Crianças:
                                        <Counter>
                                            <button style={{ marginLeft: '5px' }} type="button" onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                                            <span>{children}</span>
                                            <button style={{ marginRight: '5px' }} type="button" onClick={() => setChildren(children + 1)}>+</button>
                                        </Counter>
                                    </div>
                                </label>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <label>
                                    Cidade de origem:
                                    <input type="text" name="origin" />
                                </label>
                                <label>
                                    Cidade de destino:
                                    <input type="text" name="destination" />
                                </label>
                            </div>
                            <div>
                                Mês da viagem:
                                <label style={{ display: 'flex' }}>
                                    <input type="month" name="travelMonth" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Quantos dias pretende ficar:
                                    <Counter>
                                        <button type="button" onClick={() => setDays(Math.max(0, days - 1))}>-</button>
                                        <span>{days}</span>
                                        <button type="button" onClick={() => setDays(days + 1)}>+</button>
                                    </Counter>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Bagagem despachada (23kg):
                                    <div>
                                        <input
                                            type="radio"
                                            name="luggage"
                                            value="yes"
                                            checked={luggage}
                                            onChange={() => setLuggage(true)}
                                        /> Sim
                                        <input
                                            type="radio"
                                            name="luggage"
                                            value="no"
                                            checked={!luggage}
                                            onChange={() => setLuggage(false)}
                                        /> Não
                                    </div>
                                </label>
                                {luggage && (
                                    <label>
                                        Quantas:
                                        <Counter>
                                            <button type="button" onClick={() => setLuggageCount(Math.max(0, luggageCount - 1))}>-</button>
                                            <span>{luggageCount}</span>
                                            <button type="button" onClick={() => setLuggageCount(luggageCount + 1)}>+</button>
                                        </Counter>
                                    </label>
                                )}
                            </div>
                            Telefone de contato:
                            <label style={{ display: 'flex' }}>
                                <input type="tel" name="phone" />
                            </label>
                            <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <button type="submit">Enviar</button>
                            </div>
                        </Form>
                    </Modal>
                </ModalBackground>
            )}
        </>
    );
};

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    background: #3464ad;
    padding: 20px;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 50px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`;

const Counter = styled.div`
    display: flex;
    align-items: center;
    button {
        width: 20px;
        height: 20px;
    }
    span {
        min-width: 20px;
        text-align: center;
    }
`;

const Form = styled.form`
color:white;
h1{
    font-size:50px;
}
h2{
    font-size: 12px;
    margin-bottom:10px;
}
div{
    margin-top: 10px;
}
`;