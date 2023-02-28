import styled from "styled-components";

export const AdviceContainer = styled.div`
min-height: 8rem;`

export const AdviceBox = styled.div`
   position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);

    min-height: 15rem;
    width: 30rem;

    background-color: hsl(217, 19%, 24%);

    border-radius: 10px;    
    text-align: center;

    @media (max-width: 500px) {
        width: 20rem;

        .dividerDesktop {
            display: none;
        }

    }

    @media (min-width: 501px) {

        .dividerMobile{
            display: none;
         }

    }

    h5 {
        color: hsl(150, 100%, 66%);
        margin-top: 1rem;
        font-size: 1rem;
    }

        p {
         margin: 1rem 1.2rem;
    }

`


export const DiceContainer = styled.div`

        background-color: hsl(150, 100%, 66%);
        height: 4rem;
        width: 4rem;
        margin: auto;
        border-radius: 50%;
        
        position: relative;
        top: 2.5rem;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        transition: ease-in-out 0.3s;
        
        
        :hover{
           box-shadow: 0px 0px 40px 5px rgba(82, 255, 168, 1.0);
      }

      .Dice {
       position: relative;
       top: 0.7rem;
       
          img {
                transition: transform .7s ease-in-out;
            }
            
            :hover {
                transform: rotate(360deg);
                }
       }
    `

