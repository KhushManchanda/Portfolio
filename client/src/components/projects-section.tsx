import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "BreatheFree - Smoking Cessation App",
      description: "Cross-platform mobile app (iOS, Android, Apple Watch) that tracks nicotine intake and provides AI-driven tapering plans with behavioral support tools including daily affirmations and social leaderboards.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Swift (iOS + watchOS)", "Kotlin (Android)", "Firebase", "OpenAI API"],
      github: "#",
      demo: "#"
    },
    {
      title: "WanderMind - AI Travel Planner",
      description: "AI-powered travel planner that generates personalized itineraries, optimized routes, and budget breakdowns. Features Google Maps integration and reduces planning time by ~40% through LLM-powered recommendations.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "Flask", "Google Maps API", "MongoDB", "OpenAI API"],
      github: "#",
      demo: "#"
    },
    {
      title: "SeedIT - Startup Success Predictor",
      description: "Machine learning-based startup success prediction model built during a 48-hour hackathon. Features an interactive JavaScript dashboard and showcased effective teamwork under pressure.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "JavaScript", "Machine Learning"],
      github: "#",
      demo: "#"
    },
    {
      title: "Manufacturing Plant Tracker",
      description: "Full-stack application built during internship at Vayumegha Systems for tracking production and streamlining communication. Features WebSocket integration for real-time updates and optimized database design.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["ReactJS", "Node.js", "MySQL", "WebSockets"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Showcasing my technical skills and problem-solving abilities</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-navy-light/10 text-navy-light px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="text-navy-light hover:text-navy transition-colors">
                    <Github className="inline mr-1 h-4 w-4" />
                    Code
                  </a>
                  <a href={project.demo} className="text-navy-light hover:text-navy transition-colors">
                    <ExternalLink className="inline mr-1 h-4 w-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
