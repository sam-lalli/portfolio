"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo?: string
  category: string
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")

  const projects: Project[] = [
    {
      id: "project1",
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform built with Next.js, featuring product listings, cart functionality, user authentication, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
      github: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.com",
      category: "fullstack",
    },
    {
      id: "project2",
      title: "Task Management App",
      description:
        "A productivity application for managing tasks and projects with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Redux", "Material UI"],
      github: "https://github.com/username/task-manager",
      demo: "https://task-manager-demo.com",
      category: "frontend",
    },
    {
      id: "project3",
      title: "API Gateway Service",
      description:
        "A microservice-based API gateway that handles authentication, rate limiting, and request routing for a distributed system architecture.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Node.js", "Express", "Docker", "Kubernetes", "Redis"],
      github: "https://github.com/username/api-gateway",
      category: "backend",
    },
    {
      id: "project4",
      title: "Real-time Chat Application",
      description:
        "A chat application with real-time messaging, user presence indicators, and file sharing capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Socket.io", "Node.js", "MongoDB"],
      github: "https://github.com/username/chat-app",
      demo: "https://chat-app-demo.com",
      category: "fullstack",
    },
    {
      id: "project5",
      title: "Weather Dashboard",
      description:
        "A weather dashboard that displays current conditions and forecasts for multiple locations, with interactive maps and data visualization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "D3.js", "OpenWeatherMap API", "Leaflet"],
      github: "https://github.com/username/weather-dashboard",
      demo: "https://weather-dashboard-demo.com",
      category: "frontend",
    },
    {
      id: "project6",
      title: "Content Management System",
      description: "A headless CMS with a customizable admin interface, content modeling, and API-first architecture.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Node.js", "GraphQL", "PostgreSQL", "React"],
      github: "https://github.com/username/cms",
      category: "backend",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="w-full py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="flex flex-col h-full overflow-hidden transition-all hover:shadow-md">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-purple-accent/10 text-purple-accent">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="gap-1">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                    {project.demo && (
                      <Button asChild size="sm" className="gap-1">
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" /> Demo
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

