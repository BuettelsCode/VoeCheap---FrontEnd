import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;
width: 100%;
padding-bottom: 30px;
`
export const Title = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 100%;
@media(min-width: 900px){
  align-items: start;
}
h1{
  margin-top: 50px;
font-family: "Montserrat", sans-serif;
color: #535353;
font-size: 25px;
strong{
  font-weight: bold;
}
@media(min-width:900px){
  margin-left: 15px;
  font-size: 40px;
}
}
`
export const SubTitle = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 5px;
width: 380px;
@media(min-width:900px){
  width: 100%;
  justify-content: flex-start;
}
h2{
background-color: #f3dd83;
border-radius: 5px;
color: #535353;
font-family: "Montserrat", sans-serif;
font-size: 9px;
font-weight: bold;
padding-top: 3px;
padding-bottom: 3px;
padding-left: 2px;
padding-right: 2px;
margin-right: 15px;
@media(min-width:900px){
  margin-left: 15px;
  font-size: 15px;
}
}
`;