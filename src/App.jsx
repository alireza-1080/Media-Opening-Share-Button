import "./App.css"
import React, { useEffect, useRef, useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { FaTelegramPlane } from "react-icons/fa";

function App() {

  const [isItActive, setIsItActive] = useState(false)
  const shareIconsRef = useRef(null)

  useEffect(() => {
    if (isItActive) {
      shareIconsRef.current.classList.remove("not-active")
    } else {
      shareIconsRef.current.classList.add("not-active")
    }
  }, [isItActive])

  return (
    <div className="body">
      <div className="app-container">
        <div className="share-button-container">
          <button onClick={() => setIsItActive(!isItActive)}>Share</button>
        </div>
        <div className="media-buttons-container not-active" ref={shareIconsRef}>
          <FaFacebook className="icon" />
          <FaXTwitter className="icon" />
          <ImWhatsapp className="icon" />
          <FaTelegramPlane className="icon" />
        </div>
      </div>
    </div>
  )
}

export default App
