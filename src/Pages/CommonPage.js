import styled from "styled-components";
import Header from "../Components/InitialPage/Header";
import CommonSlogan from "../Components/InitialPage/CommonAsk/CommonSlogan";
import parcelamento from "../Assets/parcelamentoVoecheap.png";

export default function CommonPage() {
    return (
        <>
            <Container>
                {/* <WhatsApp><img src={wpp} alt="wpp" /></WhatsApp> */}
                <Header />
                <CommonSlogan />
                <Asks>
                    <h2>1) Como é o processo de emissão das passagens?</h2>
                    <p>Após a aprovação da cotação enviada e a autorização do cliente para a realização da emissão:</p>
                    <ol>
                        <li>1)1Nosso agente recolhe a documentação necessária de todos os passageiros;</li>
                        <li>2)Emitimos e pagamos as passagens na conta da empresa através das milhas aéreas;</li>
                        <li>3)Pelo e-mail do cliente, enviamos o bilhete gerado pela companhia aérea acompanhado de um código de reserva, no qual o cliente poderá visualizar a vigência da passagem no site da própria companhia aérea, além do comprovante de pagamento;</li>
                        <li>4)Enviamos um vídeo tutorial, passo a passo, demonstrando como o cliente poderá checar sua passagem no site da companhia aérea;</li>
                        <li>5)Após a checagem, o cliente possui 10 (DEZ) horas para realizar o pagamento referente às passagens.</li>
                    </ol>

                    <h2>2) Quais são as formas de pagamento? É possível parcelar?</h2>
                    <div class="payment-info">
                        <h3>Para pagamentos à vista:</h3>
                        <p>- PIX (CHAVE CNPJ), transferência bancária (TED) ou boleto.</p>

                        <h3>- Para pagamentos no cartão de crédito, trabalhamos com uma forma de parcelamento ideal para nossos clientes:</h3>
                        <p>PARCELADO: de 2x até 12x com juros, no cartão de crédito, através da plataforma cobre fácil.</p>
                    </div>
                </Asks>
                <img src={parcelamento} alt="parcelamento"/>
            </Container>
        </>
    )
};


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
img{
    margin-left: -1000px;
    margin-bottom: 20px;
}
`
const Asks = styled.div`
 font-family: Arial, sans-serif;
line-height: 1.6;
margin-top: 20px;
margin-left: 10px;
color:#013881;
h2 {
    font-size: 30px;
    color: #333;
    margin-top: 10px;
    color:#013881;
    font-weight: bold;
}

p {
margin-bottom: 15px;
}

ul {
 list-style-type: decimal;
margin-left: 20px;
}

ol{
    margin-top: 10px;
}
        .payment-info {
            margin-top: 10px;
            color:#013881;
        }

        .payment-info h3 {
            color:#013881;
            margin-bottom: 10px;
        }

        .payment-info p {
            margin-bottom: 15px;
        }
`
