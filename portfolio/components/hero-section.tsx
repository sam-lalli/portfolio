"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ["Web Developer", "Software Manager", "QA Specialist", "Full Stack Engineer"]
  const currentRole = useRef(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const ticker = setTimeout(() => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setDisplayText(
        isDeleting ? fullText.substring(0, displayText.length - 1) : fullText.substring(0, displayText.length + 1),
      )

      // Adjust typing speed
      if (isDeleting) {
        setTypingSpeed(75) // Faster when deleting
      } else {
        setTypingSpeed(150) // Normal speed when typing
      }

      // Handle text completion or deletion
      if (!isDeleting && displayText === fullText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false)
        currentRole.current = (currentRole.current + 1) % roles.length
        setLoopNum(loopNum + 1)
      }
    }, typingSpeed)

    return () => clearTimeout(ticker)
  }, [displayText, isDeleting, loopNum, typingSpeed])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="w-full min-h-[calc(100vh-4rem)] hero-background flex flex-col items-center justify-center text-center px-4 relative">
            <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-0 top-0 bottom-0 w-1/2 bg-purple-accent/30 transform -skew-x-12"></div>
      </div>
      <div className="z-10 max-w-3xl">
        <h1
          className={`text-4xl md:text-6xl font-bold mb-4 ${isVisible ? "drop-in" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          Hi, I&apos;m Sam<span className="text-purple-accent">.</span>
        </h1>

        <div
          className={`text-xl md:text-2xl mb-8 ${isVisible ? "drop-in" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          <p>
            I am a <span className="text-purple-accent font-medium">{displayText}</span>
            <span className="border-r-2 border-purple-accent animate-blink ml-1"></span> based in Salt Lake City, Utah
          </p>
        </div>

        <div className={`${isVisible ? "drop-in" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <Button onClick={scrollToAbout} className="bg-purple-accent hover:bg-purple-accent/90 text-white">
            Check Me Out <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}

