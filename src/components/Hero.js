import React from "react"
import styled from "styled-components"
import Button from "./Button"

import MainSlider from "./MainSlider"
import ToggleInput from "./ToggleInput"

// Images
import check from "../assets/design/images/icon-check.svg"
import circles from "../assets/design/images/pattern-circles.svg"

const Hero = () => {
  return (
    <StyledHero>
      <StyledHeader pattern={circles} className="header">
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign up for our 30-day trial.</p>
        <p>No credit card required.</p>
        <img src={circles} alt="pattern" className="bg" />
      </StyledHeader>
      <StyledCard>
        <CardTopMobile>
          <h4 className="card-title">100k pageviews</h4>
          <MainSlider />
          <h3 className="plan">
            $16.00 <span>/ month</span>
          </h3>
        </CardTopMobile>
        <CardTopFull>
          <div className="top">
            <h4 className="card-title">100k pageviews</h4>
            <h3 className="plan">
              $16.00 <span>/ month</span>
            </h3>
          </div>
          <div className="bottom">
            <div className="slider">
              <MainSlider />
            </div>
          </div>
        </CardTopFull>
        <CardBottom>
          <div className="options">
            <h3>Monthly Billing</h3>
            <ToggleInput />
            <h3>
              Yearly Billing <span className="discount">-25%</span>
            </h3>
          </div>
          <div className="lower">
            <ul className="guaranties">
              <StyledListEle bullet={check}>Unlimited websites</StyledListEle>
              <StyledListEle bullet={check}>100% data ownership</StyledListEle>
              <StyledListEle bullet={check}>Email reports</StyledListEle>
            </ul>
            <Button>Start my trial</Button>
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
  /* justify-content: center; */
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

const StyledHeader = styled.section`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5em 0;

  .bg {
    position: absolute;
    z-index: -1;
  }

  h1 {
    color: ${(p) => p.theme.colorsPrime.desatBlue};
    font-size: clamp(2em, 3vw, 3em);
    font-weight: 800;
  }

  p {
    color: ${(p) => p.theme.colorsNeutral.grayBlue};
    font-size: 1.125em;
  }
`

const StyledCard = styled.div`
  max-width: 75%;
  max-height: 65%;
  background-color: ${(p) => p.theme.colorsNeutral.white};
  border-radius: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  z-index: 1;
  color: ${(p) => p.theme.colorsNeutral.grayBlue};

  @media screen and (min-width: 768px) {
    max-width: 95%;
    max-height: 50%;
  }
`

const CardTopMobile = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2em;

  @media screen and (min-width: 768px) {
    display: none;
  }

  .card-title {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .plan {
    color: ${(p) => p.theme.colorsNeutral.desatBlue};
    font-size: 2em;
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-weight: 800;

    span {
      color: ${(p) => p.theme.colorsNeutral.grayBlue};
      font-size: 0.5em;
    }
  }
`

const CardTopFull = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em;

    .card-title {
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .plan {
      color: ${(p) => p.theme.colorsNeutral.desatBlue};
      font-size: 2em;
      display: flex;
      align-items: center;
      gap: 0.5em;
      font-weight: 800;

      span {
        color: ${(p) => p.theme.colorsNeutral.grayBlue};
        font-size: 0.5em;
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .slider {
      width: 75%;
    }
  }
`

const CardBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .options {
    display: flex;
    color: ${(p) => p.theme.colorsNeutral.grayBlue};
    font-size: 0.6em;
    font-weight: 600;
    gap: 1em;
    align-items: center;
    padding: 2em 5em;
    justify-content: flex-end;
    white-space: nowrap;
    font-size: clamp(0.2em, 2vw, 0.95em);

    .discount {
      background: ${(p) => p.theme.colorsPrime.lightGrayishRed};
      color: ${(p) => p.theme.colorsPrime.lightRed};
      padding: 0.5em 1.125em;
      margin: 0 0.5em;
      border-radius: 1em;
      font-size: 0.85em;
    }
  }

  .lower {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 2em 0;
    position: relative;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      padding: 2em 5em;
      width: 100%;
      gap: 10em;

      .guaranties {
        text-align: left;
        align-items: flex-start;
        justify-content: flex-start;

        li {
          width: 100%;
          text-align: left;
        }
      }
    }

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: #e4e4e4;
      position: absolute;
      top: 0;
      left: 0;
    }

    .guaranties {
      padding: 1em 0;
      margin-bottom: 2em;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1em;
      text-align: center;
      font-weight: 600;
    }
  }
`

const StyledListEle = styled.li`
  padding: 0 1em;
  list-style: none;
  position: relative;

  &::before {
    content: "";
    /* display: inline-block; */
    background-image: url(${(p) => p.bullet});
    background-repeat: no-repeat;
    position: absolute;
    left: -0.5em;
    top: 50%;
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
  }
`
export default Hero
