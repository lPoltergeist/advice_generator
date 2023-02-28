import React, { useEffect, useState } from 'react'
import { AdviceBox, AdviceContainer, DiceContainer } from './style'
import Axios from 'axios'

import Divider from '../images/pattern-divider-desktop.svg'
import MobileDivider from '../images/pattern-divider-mobile.svg'
import Dice from '../images/icon-dice.svg'



const Advice = () => {
    const [Advice, setAdvice] = useState("");

    const getAdvice = () => {
        Axios.get("https://api.adviceslip.com/advice").then(
            (response) => {
                setAdvice(response.data.slip);
                console.log(Advice);
            }
        )
    }

    return (
        <AdviceBox>
        <AdviceContainer>
        <h5>Advice #{Advice.id}</h5>
            <p>"{Advice.advice}"</p>
        </AdviceContainer>

            <img className="dividerDesktop" src={Divider} alt="divider" />
            <img className="dividerMobile" src={MobileDivider} alt="divider" />

            <DiceContainer onClick={getAdvice} >
                <div className="Dice" >
                <img src={Dice} alt="dice"/>
                </div>
            </DiceContainer>
        </AdviceBox>
    )
}

export default Advice