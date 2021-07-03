import React from "react"
import styled from "styled-components"

const ToggleInput = () => {
  return (
    <StyledToggle>
      <label class="switch">
        <input label="toggle-input" type="checkbox" />
        <span class="slider round"></span>
      </label>
    </StyledToggle>
  )
}

const StyledToggle = styled.div`
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 28px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 6px;
    bottom: 6px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${(p) => p.theme.colorsPrime.strongCyan};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${(p) => p.theme.colorsPrime.strongCyan};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(28px);
    -ms-transform: translateX(28px);
    transform: translateX(28px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 10em;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`

export default ToggleInput
