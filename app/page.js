"use client"

// import Head from "next/head";
import Script from "next/script"
import { useState, useEffect } from "react"

export default function Home() {
  const [text, setText] = useState("")
  const [isResponsiveVoiceLoaded, setIsResponsiveVoiceLoaded] = useState(false)

  useEffect(() => {
    // Check if ResponsiveVoice is already available in the global scope
    if (window.responsiveVoice) {
      setIsResponsiveVoiceLoaded(true)
    }
  }, [])

  const handleSpeak = () => {
    console.log("ResponsiveVoice Loaded:", isResponsiveVoiceLoaded)
    console.log("ResponsiveVoice Available:", window.responsiveVoice)
    if (window.responsiveVoice && isResponsiveVoiceLoaded) {
      window.responsiveVoice.speak(text, "Arabic Male")
      console.log("Text spoken.")
    } else {
      console.log("ResponsiveVoice not loaded yet.")
    }
  }

  return (
    <div>
      <Script
        src="https://code.responsivevoice.org/responsivevoice.js?key=MsWPQFPp"
        // strategy="afterInteractive"
        strategy="beforeInteractive"
        onLoad={() => setIsResponsiveVoiceLoaded(true)}
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
        cols="50"
        placeholder="Enter text in Arabic"
      />
      <button onClick={handleSpeak}>Speak</button>
    </div>
  )
}
