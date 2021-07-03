import React, { useState } from "react"
import styled from "styled-components"

import thumb from "../assets/design/images/icon-slider.svg"

const MainSlider = () => {
  const [value, setValue] = useState(50)

  return (
    <>
      <label htmlFor="slider" hidden>
        Interactive Range Slider
      </label>
      <StyledSlider
        value={value}
        name="slider"
        aria-label="slider"
        onChange={(e) => setValue(e.target.value)}
        type="range"
        min="0"
        max="100"
      ></StyledSlider>
    </>
  )
}

const StyledSlider = styled.input`
  margin: 4em 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  width: 100%;
  height: 12px;
  border-radius: 20em;
  background: ${(props) =>
    `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${props.value}%, hsl(224, 65%, 95%) ${props.value}%, hsl(224, 65%, 95%) 100%);`};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 48px;
    height: 48px;
    background: hsl(174, 86%, 45%);
    border-radius: 50%;
    box-shadow: 0px 15px 35px 0.5px hsl(174, 86%, 45%);
    cursor: pointer;
    display: block;
    position: relative;
    background-image: url(${thumb});
    background-repeat: no-repeat;
    background-size: 65%;
    background-position: center;
    transition: 200ms;

    &:hover,
    &:focus {
      background: #009c8d;
      background-image: url(${thumb});
      background-repeat: no-repeat;
      background-size: 65%;
      background-position: center;
    }
  }

  ::-moz-range-thumb {
    -webkit-appearance: none;
    width: 48px;
    height: 48px;
    background: hsl(174, 86%, 45%);
    border-radius: 50%;
    box-shadow: 0px 15px 35px 0.5px hsl(174, 86%, 45%);
    cursor: pointer;
    display: block;
    position: relative;
    background-image: url(${thumb});
    background-repeat: no-repeat;
    background-size: 65%;
    background-position: center;
    transition: 200ms;

    &:hover,
    &:focus {
      background: #009c8d;
      background-image: url(${thumb});
      background-repeat: no-repeat;
      background-size: 65%;
      background-position: center;
    }
  }
`

export default MainSlider
