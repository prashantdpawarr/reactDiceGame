import React from 'react'
import styled from 'styled-components'

export default function Rules() {
  return (
    <RulesContainer>
        <h2>How to Play Dice Game</h2>
        <div className="text">
            <p>Select any Number</p>
            <p>Click on dice image</p>
            <p>After Click on dice if selected number is equal to dice number you will get same point as Dice</p>
            <p>If you get wrong guess then 2 point will be deducted</p>
        </div>
    </RulesContainer>
  )
}

const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
`;
