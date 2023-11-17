import React from 'react'
import styled from 'styled-components'


const Startgame = ({ toggle }) => {
  return (
    <Container >
      <div>
        <img src="/images/dices.png" alt="diceImage" />
      </div>
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default Startgame

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100vh;
  .content{
    h1 {
      font-size: 96px; 
      white-space: nowrap;
  }
}
`;

const Button = styled.button`
  padding: 10px 18px;
  background: #000;
  border-radius: 5px;
  color: #fff;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;


  &:hover{
    background-color: #fff;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;