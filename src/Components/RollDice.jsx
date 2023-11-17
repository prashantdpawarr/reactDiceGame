import React, { useState } from 'react'
import styled from 'styled-components'

export default function RollDice({ currentDice, roleDice }) {


  return (
    <DiceContainer>
      <div className='dice' onClick={roleDice}>
        <img src={`./images/dices/dice_${currentDice}.png`} alt="diceImg" />
      </div>
      <p>Click on the Dice to Roll</p>
    </DiceContainer>
  )
}


const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    font-size: 24px;
  }

  .dice{
    cursor: pointer;
  }
`;