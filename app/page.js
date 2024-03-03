"use client"

// import Head from "next/head"
import Script from "next/script"
import { useState, useEffect } from "react"

export default function Home() {
  const [text, setText] = useState("")
  const [isResponsiveVoiceLoaded, setIsResponsiveVoiceLoaded] = useState(false)

  const handleSpeak = () => {
    console.log("ResponsiveVoice Loaded:", isResponsiveVoiceLoaded) // Additional logging
    console.log("ResponsiveVoice Available:", !!window.responsiveVoice) // Additional logging
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
        strategy="afterInteractive"
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
