import { ThemeProvider } from "styled-components"

const theme = {
  colorsPrime: {
    softCyan: "hsl(174, 77%, 80%)",
    strongCyan: "hsl(174, 86%, 45%)",
    lightGrayishRed: "hsl(14, 92%, 95%)",
    lightRed: "hsl(15, 100%, 70%)",
    paleBlue: "hsl(226, 100%, 87%)",
  },

  colorsNeutral: {
    white: "hsl(0, 0%, 100%)",
    veryPaleBlue: "hsl(230, 100%, 99%)",
    lightGrayBlue: "hsl(224, 65%, 95%)",
    lightGrayBlue2: "hsl(223, 50%, 87%)",
    grayBlue: "hsl(225, 20%, 60%)",
    desatBlue: "hsl(227, 35%, 25%)",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}> {children} </ThemeProvider>
)

export default Theme
