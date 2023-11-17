import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import Rules from './Rules'



export default function Gameplay() {

  const [score, setScore] = useState(0)
  const [error, setError] = useState("")
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    var ans = (Math.random() * (max - min) + min);
    // console.log(Math.round(ans));
    var finalAns = Math.round(ans)
    return finalAns;
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not Selected any number")
      return
    };
    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice((prev) => randomNumber);


    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    }
    else {
      setScore((prev) => prev - 2)
    }
    setSelectedNumber(undefined);
  }

  const resetScore = () => {
    setScore(0);
  }



  return (
    <MainContainer>
      <div className='topSection'>
        <TotalScore score={score}></TotalScore>
        <NumberSelector
          setError={setError}
          error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className='btns'>
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  )
}

const MainContainer = styled.div`
  padding: 70px 0px;
  .topSection{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 40px;
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

const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover{
    background-color: #000;
    border: 1px solid transparent;
    color: #fff;
    
  }
`;