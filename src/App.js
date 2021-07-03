import { useState } from "react"
import Hero from "./components/Hero"

import Theme from "./Theme"

function App() {
  return (
    <div className="App">
      <Theme>
        <Hero />
      </Theme>
    </div>
  )
}

export default App
