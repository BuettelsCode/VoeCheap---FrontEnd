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
    const [destiny, setDestiny] = useState('');

    function reservarPack() {
        setPackSelect(p.destiny);
        setPackId(p.id);
        setIsModalOpen(true);
        setDestiny(p.destiny)
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
    const [selectedMonth, setSelectedMonth] = useState('');
    const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);

    const months = [
        'JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO',
        'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'
    ];

    function toggleMonthDropdown() {
        setIsMonthDropdownOpen(!isMonthDropdownOpen);
    }

    function selectMonth(month) {
        setSelectedMonth(month);
        setIsMonthDropdownOpen(true);
    }

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
                        {/* <CloseButton onClick={closeModal}>X</CloseButton> */}
                        <Form>
                            <h1>Olá, viajante!</h1>
                            <h2>Preencha os campos abaixo de acordo com suas preferêcias:</h2>
                            <SubTitles style={{ borderBottom: '2px solid white', display: 'inline-block', paddingBottom: '0px' }}>Seu nome:</SubTitles>
                            <label style={{ display: 'flex' }}>
                                <input style={{ borderRadius: '30px', border: 'none', width: '100%' }} type="text" name="name" />
                            </label>
                            <div>
                                <label>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <SubTitles>
                                            <span style={{ borderBottom: '2px solid white', display: 'inline-block', paddingBottom: '0px' }}>
                                                Passageiros:
                                            </span> <span style={{ marginLeft: '10px' }}>Adultos:</span></SubTitles>
                                        <Counter>
                                            <ButtonLeft style={{ textDecoration: 'none' }} type="button" onClick={() => setAdults(Math.max(0, adults - 1))}>-</ButtonLeft>
                                            <span>{adults}</span>
                                            <ButtonRight style={{ marginRight: '5px' }} type="button" onClick={() => setAdults(adults + 1)}>+</ButtonRight>
                                        </Counter>
                                        <SubTitles>Crianças:</SubTitles>
                                        <Counter>
                                            <ButtonLeft style={{ marginLeft: '5px' }} type="button" onClick={() => setChildren(Math.max(0, children - 1))}>-</ButtonLeft>
                                            <span>{children}</span>
                                            <ButtonRight style={{ marginRight: '5px' }} type="button" onClick={() => setChildren(children + 1)}>+</ButtonRight>
                                        </Counter>
                                    </div>
                                </label>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <label style={{ display: 'flex', flexDirection: 'column' }}>
                                    <SubTitlesCity>Cidade de origem:</SubTitlesCity>
                                    <City style={{
                                        border: 'none', borderRadius: '30px', marginTop: '5px',
                                        fontFamily: 'Montserrat', fontWeight: 'bold'
                                    }} type="text" name="origin" />
                                </label>
                                <label style={{ display: 'flex', flexDirection: 'column' }}>
                                    <SubTitlesCity>Cidade de destino:</SubTitlesCity>
                                    <City style={{
                                        border: 'none', borderRadius: '30px', marginTop: '5px',
                                        fontFamily: 'Montserrat', fontWeight: 'bold'
                                    }}
                                        type="text" name="destination"
                                        value={destiny}
                                        readOnly />
                                </label>
                            </div>
                            <div>
                                <SubTitles style={{ borderBottom: '2px solid white', display: 'inline-block', paddingBottom: '0px' }} > Mês da viagem: </SubTitles>
                                <label style={{ display: 'flex', position: 'relative', width: '85px' }}>
                                    <input
                                        type="text"
                                        name="travelMonth"
                                        value={selectedMonth}
                                        onClick={toggleMonthDropdown}
                                        readOnly
                                        placeholder=""
                                        style={{
                                            cursor: 'pointer', width: '85px', border: 'none',
                                            borderRadius: '30px', display: 'flex', paddingLeft: '5px',
                                            fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '10px',
                                            backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/271/271210.png)',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: '70px center',
                                            backgroundSize: '15px'
                                        }}

                                    />
                                    {isMonthDropdownOpen && (
                                        <MonthDropdown>
                                            {months.map((month, index) => (
                                                <MonthItem key={index} onClick={() => selectMonth(month)}>
                                                    {month}
                                                </MonthItem>
                                            ))}
                                        </MonthDropdown>
                                    )}
                                </label>
                            </div>
                            <div>
                                <label>
                                    <SubTitles style={{ borderBottom: '2px solid white', display: 'inline-block', paddingBottom: '0px' }}>Quantos dias pretende ficar?</SubTitles>
                                    <Counter>
                                        <ButtonLeft type="button" onClick={() => setDays(Math.max(0, days - 1))}>-</ButtonLeft>
                                        <span>{days}</span>
                                        <ButtonRight type="button" onClick={() => setDays(days + 1)}>+</ButtonRight>
                                    </Counter>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <SubTitles style={{ borderBottom: '2px solid white', display: 'inline-block', paddingBottom: '0px' }}>Bagagem despachada (23kg)?</SubTitles>
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
                                    <label style={{ marginTop: '5px' }}>
                                        <SubTitles style={{ borderBottom: '2px solid white', display: 'inline-block', paddingBottom: '0px' }}>Quantas:</SubTitles>
                                        <Counter>
                                            <ButtonLeft type="button" onClick={() => setLuggageCount(Math.max(0, luggageCount - 1))}>-</ButtonLeft>
                                            <span>{luggageCount}</span>
                                            <ButtonRight type="button" onClick={() => setLuggageCount(luggageCount + 1)}>+</ButtonRight>
                                        </Counter>
                                    </label>
                                )}
                            </div>
                            <SubTitles style={{ borderBottom: '2px solid white', display: 'inline-block', paddingBottom: '0px', marginTop: '5px' }}>Telefone de contato:</SubTitles>
                            <label style={{ display: 'flex', flexDirection: 'column' }}>
                                <input style={{ border: 'none', borderRadius: '30px', width: '150px', paddingLeft:'10px' }} type="tel" name="phone" />
                            </label>
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <button style={{
                                    border: 'none', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '13px',
                                    width: '61px', height: '30px', borderRadius: '30px', textAlign: 'center', padding: '5px'
                                }} type="submit">ENVIAR</button>
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
    z-index: 100;
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
    @media (min-width: 760px) {
    margin-top:-200px;
}
@media (min-width: 850px) and (min-height: 1200px) {
    top: -280px;
}
@media (min-width:900px) {
    width: 500px;
    height: 500px;
    top: 100px;
}
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
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10px;
        height: 20px;
    }
    span {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        color: black;
    }
`;

const Form = styled.form`
color:white;
font-family: "Montserrat", sans-serif;
font-size: 10px;
h1{
    font-size:30px;
    font-weight: bold;
    margin-bottom:5px;
    @media(min-width:900px){
        font-size: 50px;
    }
}
h2{
    font-size: 10px;
    margin-bottom:10px;
    @media(min-width:900px){
     font-size:15px ;
    }

}
div{
    margin-top: 5px;
}
label{
    margin-top: 5px;
}
input{
    @media(min-width:900px){
        height: 25px;
    }
}
`;

const ButtonLeft = styled.button`
margin-left: 5px;
border: none;
border-right: 1px solid black;
width: 10px;
background-color: white;
`;

const ButtonRight = styled.button`
border: none;
border-left: 1px solid black;
width: 10px;
background-color: white;
`;

const MonthDropdown = styled.div`
    position: absolute;
    top: 15px;
    left: 0;
    background: white;
    border: 1px solid #ccc;
    width: 80px;
    color:black;
    z-index: 1000;
`;

const MonthItem = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
    cursor: pointer;
    &:hover {
        background-color: #f1f1f1;
    }
`;

const SubTitles = styled.h3`
 @media(min-width:900px){
     font-size:15px;
     white-space: nowrap;
    }
`;

const City = styled.input`
width: 134px;
border: none;
border-radius: 30px; 
margin-top: 5px;                                      
font-family: "Montserrat", sans-serif; 
font-weight: bold;
@media(min-width:900px){
    width: 200px;
}
`;

const SubTitlesCity = styled.h3`
 border-bottom: 2px solid white; 
 display: inline-block; 
 padding-bottom: 0px; 
 width:95px;
 @media(min-width:900px){
     font-size:15px;
     white-space: nowrap;
     width:140px;
    }
`;