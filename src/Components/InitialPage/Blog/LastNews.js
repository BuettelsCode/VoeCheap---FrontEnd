import styled from "styled-components"


export default function LastNews({ p }) {

    return (
        <>
            <News><img src={p.image} alt="passaporte" /> <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: "white" }}><div>LER MAIS</div></a></News>
        </>
    )
};

const News = styled.div`
    width: 270px;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1075px) {
        width: 200px;
    height: 300px;
  }
  @media (max-width: 828px) {
        width: 160px;
    height: 280px;
  }
  @media (max-width: 659px) {
        width: 120px;
    height: 230px;
  }
    @media (max-width: 550px) {
width: 100px;
height: 200px;
@media (max-width: 419px) {
width: 80px;
height: 160px;
  }
  }
  div{
    background-color:#013881;
    margin-top: 20px;
    padding: 5px;
    color: white;
    @media (max-width: 550px) {
font-size: 10px;
margin-bottom: -100px;
  }
  }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover; 
    }
`
