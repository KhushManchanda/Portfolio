import { GraduationCap, Users, Presentation } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      icon: GraduationCap,
      date: "August 2025 – Present",
      title: "Instructional Assistant – CSE 110: Principles of Programming",
      company: "Arizona State University",
      responsibilities: [
        "Taught lab sessions for 4 sections (300+ students) in introductory Java programming",
        "Designed lessons on problem-solving strategies and coding fundamentals",
        "Improved average lab performance scores by 15% through individualized support"
      ],
      side: "right"
    },
    {
      icon: Users,
      date: "August 2024 – May 2025",
      title: "Software Developer – Mobile Augmented Reality Application",
      company: "Cal Poly State University & Arizona State University",
      responsibilities: [
        "Developed mobile AR application in Unity with interactive object rendering and gaze tracking",
        "Collaborated with faculty to design scalable and maintainable architecture",
        "Produced fully functional prototype demoed to faculty for research validation"
      ],
      side: "left"
    },
    {
      icon: Presentation,
      date: "May 2023 – August 2023",
      title: "Software Engineer Intern",
      company: "Vayumegha Systems, Noida, India",
      responsibilities: [
        "Built full-stack application (ReactJS, Node.js, MySQL) for manufacturing plant tracking",
        "Integrated WebSockets for real-time updates, reducing downtime by 15%",
        "Enhanced system reliability through optimized database schemas and API endpoints"
      ],
      side: "right"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Experience</h2>
          <p className="text-xl text-gray-600">My professional journey in education and technology</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-navy-light"></div>

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isLeft = exp.side === "left";
            
            return (
              <div key={index} className={`relative flex items-center mb-12 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-16 h-16 bg-navy rounded-full flex items-center justify-center relative z-10 ml-0 md:mx-auto">
                  <Icon className="text-white text-xl h-6 w-6" />
                </div>
                <div className={`ml-8 md:ml-0 md:w-1/2 ${isLeft ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <span className="text-sm text-navy-light font-medium">{exp.date}</span>
                    <h3 className="text-xl font-bold text-navy mt-1">{exp.title}</h3>
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                    {exp.responsibilities.length > 0 && (
                      <ul className="mt-4 text-gray-700 space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>• {resp}</li>
                        ))}
                      </ul>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
