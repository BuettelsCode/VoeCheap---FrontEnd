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
    @media (max-width: 415px) {
 justify-content: space-around;
  }
  div{
    background-color:#013881;
    margin-top: 20px;
    padding: 5px;
    color: white;
  }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover; 
    }
`
