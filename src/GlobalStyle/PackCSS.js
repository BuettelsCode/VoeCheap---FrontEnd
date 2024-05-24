import styled from "styled-components";

export const Packet = styled.div`
height: 320px;
width: 270px;
margin-top: 40px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
@media(min-width:900px){
    height: 280px;
width: 250px;
}
`
export const Image = styled.div`
background-image: url(${props => props.img});
background-size:cover;
background-position: center center;
height: 150px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
div{
    border-top-left-radius: 10px;
    padding-top: 5px;
    padding-left: 5px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
background: #013881;
width: 170px;
height: 25px;
color: white;
@media(min-width:900px){
    font-size: 13px; 
    height: 20px;
    width: 135px;
}
}
@media(min-width:900px){
    height: 120px;
}
`
export const Container = styled.div`
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
font-size: 12px;
display: flex;
img{
    padding-right: 10px;
    width: 10px;
}
@media(min-width:900px){
 font-size:10.5px;
}
}
`
export const Destiny = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    font-weight: bold;
font-family: 'Roboto', sans-serif;
color: #013881;
@media(min-width: 900px){
    font-size: 15px;
}
`
export const Button = styled.div`
margin-top: 10px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
div{
    height: 30px;
    border-radius: 8px;
    width: 200px;
    border: 2px solid #013881;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
font-family: 'Roboto', sans-serif;
color: #535353;
cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
     background-color: rgba(1, 56, 129, 0.5);
}
}
`