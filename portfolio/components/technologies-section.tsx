"use client"

import { useEffect, useRef, useState } from "react"
import { Globe, Server, Smartphone, TestTube, Rocket } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"],
    icon: <Globe size={24} />, 
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
    icon: <Server size={24} />, 
  },
  {
    category: "DevOps",
    technologies: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
    icon: <Rocket size={24} />, 
  },
  {
    category: "Mobile",
    technologies: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
    icon: <Smartphone size={24} />, 
  },
  {
    category: "Testing",
    technologies: ["Jest", "Cypress", "Selenium", "JUnit", "Postman"],
    icon: <TestTube size={24} />, 
  },
]

export default function SkillsTimeline() {
  return (
    <section className="py-20 w-full bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">My Skills</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20 animate-grow" />

          {skills.map((skill, index) => (
            <SkillItem key={skill.category} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillItem({
  skill,
  index,
}: {
  skill: (typeof skills)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full transition-opacity duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-accent/30 rounded-full text-2xl">
          {skill.icon}
        </div>
      </div>
      <div className="w-5/12">
        <div className="p-4 bg-background rounded-lg shadow-md border border-primary/10">
          <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {skill.technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs font-medium bg-purple-accent/10 text-purple-accent rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
