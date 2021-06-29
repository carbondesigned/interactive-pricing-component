import React from "react"
import styled from "styled-components"

const MainSlider = () => {
  return (
    <StyledSlider>
      <input type="range"></input>
    </StyledSlider>
  )
}

const StyledSlider = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2em 0;
`

export default MainSlider
