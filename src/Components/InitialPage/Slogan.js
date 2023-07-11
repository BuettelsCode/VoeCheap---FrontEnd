import styled from "styled-components"


export default function Slogan() {
    return (<>
        <Image>
            <Translucent>
            </Translucent>
            <FrontAjust><h1>A compra da passagem aérea é o primeiro passo</h1> <h1>para construir momentos inesquecíveis em</h1> <h1>lugares extraordinários por todo o mundo!</h1></FrontAjust>
        </Image>
    </>)
}

const Image = styled.div`
width: 100%;
height: 613px;
display: flex;
justify-content: center;
align-items: center;
background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbMrCuhfVvz6c_Hq6MXhQ1a9suDPssY0rrkCXOMYc79B3Ab_9");
background-size:cover;
background-position: center center;
position: relative;
h1{
    color: white;
    font-size: 45px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
}
`
const FrontAjust = styled.div`
position: absolute;
`
const Translucent = styled.div`
width: 100%;
height:100%;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
opacity: 0.3;
`