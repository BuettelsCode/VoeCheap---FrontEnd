import styled from "styled-components"
import imgPaulo from "../../Assets/photo_Paulo.png"
import imgIago from "../../Assets/photo_Iago.png"
import imgYuri from "../../Assets/photo_Yuri.png"

export default function Team(){
    return(
        <>
        <Container id="team">
            <SubContainer>
            <Title>CONHEÇA NOSSA EQUIPE QUE ESTÁ SEMPRE PRONTA PARA ENCONTRAR AS MELHORES OFERTAS PARA REALIZAR O SEU SONHO DE CONHECER O MUNDO!</Title>
            <PhotosTop><Photo1><img src={imgPaulo} alt="paulo"/><h1>PAULO</h1></Photo1> <Photo2><img src={imgIago} alt="iago"/> <h1>IAGO</h1></Photo2></PhotosTop> 
            <PhotoBottom><Photo3><img src={imgYuri} alt="yuri"/><h1>YURI</h1></Photo3></PhotoBottom>
            </SubContainer>
        </Container>
        </>
    )
}

const Container = styled.div`
height: 800px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(180deg, #013881 0%, rgba(1, 56, 129, 0) 100%);
margin-bottom: 120px;
`
const SubContainer = styled.div`
margin-top:150px ;
width: 60%;
height:100%;
background-color: white;
border-top-left-radius: 30px;
border-top-right-radius: 30px;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 60px;

`

const Title = styled.h1`
margin-top: 50px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
color: #013881;
font-size: 30px;
text-align: center;
`

const PhotosTop = styled.div`
margin-top: 40px;
width: 100%;
display: flex;
justify-content: space-around;
img{
width: 300px;
}
`
const Photo1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h1{
margin-top: 10px;
font-family: 'Roboto', sans-serif;
color: #013881;
font-size: 20px;
font-weight: bold;
}

`
const Photo2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h1{
margin-top: 10px;
font-family: 'Roboto', sans-serif;
color: #013881;
font-size: 20px;
font-weight: bold;
}
`
const PhotoBottom = styled.div`
width: 100%;
display: flex;
justify-content: center;

img{
    width: 300px;
}
`
const Photo3 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h1{
margin-top: 10px;
font-family: 'Roboto', sans-serif;
color: #013881;
font-size: 20px;
font-weight: bold;
}
`