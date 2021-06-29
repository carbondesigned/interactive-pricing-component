import React from "react"
import styled from "styled-components"

import MainSlider from "./MainSlider"
import ToggleInput from "./ToggleInput"

const Hero = () => {
  return (
    <StyledHero>
      <StyledCard>
        <CardTop>
          <h4>100k pageviews</h4>
          <h3>
            $16.00 <span>/ per month</span>
          </h3>
        </CardTop>
        <MainSlider />
        <CardBottom>
          <div className="options">
            <h2>Monthly Billing</h2>
            <ToggleInput />
            <h3>
              Yearly Billing <span>25% discount</span>
            </h3>
          </div>
          <div className="lower">
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <a href="#" className="cta">
              Start my Trial
            </a>
          </div>
        </CardBottom>
      </StyledCard>
    </StyledHero>
  )
}

const StyledHero = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(p) => p.theme.colorsNeutral.white};
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 50%;
    border-radius: 0 0 0 150px;
    background-color: ${(p) => p.theme.colorsNeutral.veryPaleBlue};
    position: absolute;
    top: 0;
    left: 0;
  }
`

const StyledCard = styled.div`
  min-width: 65%;
  min-height: 50%;
  background-color: ${(p) => p.theme.colorsNeutral.white};
  border-radius: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  z-index: 1;
  padding: 2em;
`

const CardTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;
`

const CardBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .options {
    display: flex;
  }

  .lower {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 0;
  }
`
export default Hero
