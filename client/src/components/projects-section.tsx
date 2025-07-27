import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "SeedIT - Startup Success Predictor",
      description: "Developed a machine learning model to predict startup success during a 48-hour hackathon. Created an interactive JavaScript dashboard for data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "JavaScript", "Machine Learning"],
      github: "#",
      demo: "#"
    },
    {
      title: "iOS Learning Platform",
      description: "Mobile application developed during TA work for CSE 335. Features interactive learning modules and progress tracking for computer science concepts.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Swift", "iOS", "Education"],
      github: "#",
      demo: "#"
    },
    {
      title: "Data Mining Analytics Tool",
      description: "Advanced analytics platform developed as part of CSE 572 coursework. Implements various data mining algorithms with interactive visualization capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "TensorFlow", "Data Science"],
      github: "#",
      demo: "#"
    },
    {
      title: "Student Management System",
      description: "Full-stack web application for managing student information and course enrollment. Built with modern frameworks and RESTful API architecture.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MySQL"],
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
