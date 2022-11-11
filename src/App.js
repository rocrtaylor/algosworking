import { useState } from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Algos from "./Algos"

function App() {
  const algos = Algos
  const [show, setShow] = useState(false)
  const [seeCode, setSeeCode] = useState(0)

  const handleShow = (index) => {
    setShow(!show)
    setSeeCode(index)
  }

  return (
    <>
      <Header />

      <div>
        {algos.map((item, index) => {
          return (
            <div key={index} item={item} onClick={() => handleShow(index)}>
              <h1 className="column">{item.name}</h1>

              {show && seeCode === index ? (
                <div className="column">
                  <img src={item.icon} alt={"code"} />
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
      <Footer style={{ backgroundColor: "blue" }} />
    </>
  )
}

export default App
