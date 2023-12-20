import styled from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios";
import LastNews from "./Blog/LastNews";
import { FaSpinner } from 'react-icons/fa';

export default function Notices() {
  const [lastPosts, setLastPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL = "https://api-voecheap.onrender.com/posts";

    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setLastPosts(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const lastFourPosts = lastPosts.slice(-4);

  return (
    <>
      <Container id="team">
        <Title>Últimas Notícias |<span>#voenotícias</span></Title>
        {loading ? (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <FaSpinner size={40} color="#007bff" />
            <p>Loading...</p>
          </div>
        ) : (
          <LastNotices>
            {lastFourPosts.map((p, index) => <LastNews p={p} key={index} />)}
          </LastNotices>
        )}
        <Separation></Separation>
      </Container>
    </>
  );
}

const Container = styled.div`
height: 525px;
width: 100%;
background-color: #D5D0CA;
  @media (max-width: 1079px) {
height: 440px;
  }
  @media (max-width: 659px) {
height: 390px;
  }
`
const Separation = styled.div`
width: 100%;
height: 50px;
background-color: black;
margin-top: 20px;
@media (max-width: 828px) {
height: 10px;
margin-top: 40px;
  }
  @media (max-width: 710px) {
margin-top: 60px;
  }
  @media (max-width: 550px) {
    margin-top: 105px;
  }
  @media (max-width: 426px) {
    margin-top: 145px;
  }
`
const LastNotices = styled.div`
display:flex;
align-items: center;
justify-content: space-evenly;
margin-top: 20px;
flex-wrap: wrap;
`

const Title = styled.h1`
display: flex;
margin-top: 40px;
margin-left: 80px;
font-size: 50px;
color: #013881;
span{
    margin-left: 10px;
}
@media (max-width: 710px) {
  font-size: 30px;
  }
  @media (max-width: 550px) {
font-size: 15px;
  }
`
