import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-accent/20">
              <Image src="/about.webp?height=320&width=320" alt="Sam's profile" fill className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-semibold">Software Engineer & Problem Solver</h3>

            <p className="text-muted-foreground">
              I&apos;m a passionate software engineer with over 8 years of experience building web applications and managing
              development teams. My journey in tech started with a curiosity about how things work, which led me to
              pursue a degree in Computer Science.
            </p>

            <p className="text-muted-foreground">
              Throughout my career, I&apos;ve worked with startups and established companies, helping them build scalable
              solutions and implement best practices. I enjoy tackling complex problems and turning ideas into reality
              through clean, efficient code.
            </p>

            <p className="text-muted-foreground">
              When I&apos;m not coding, you can find me hiking in the beautiful mountains around Salt Lake City,
              experimenting with new recipes, or contributing to open-source projects.
            </p>

            <div className="pt-4">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

