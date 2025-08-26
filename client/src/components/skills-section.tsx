export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "Swift", level: 80 },
        { name: "Kotlin", level: 75 },
        { name: "C++", level: 80 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Flask/FastAPI", level: 80 },
        { name: "TensorFlow/PyTorch", level: 75 },
        { name: "LangChain", level: 70 },
        { name: "Unity", level: 75 }
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "SQL (MySQL/PostgreSQL)", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "AWS (EC2, S3)", level: 75 },
        { name: "GCP", level: 70 },
        { name: "Docker", level: 75 }
      ]
    },
    {
      title: "Dev Tools & Other Skills",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "RESTful APIs", level: 85 },
        { name: "WebSockets", level: 80 },
        { name: "Mobile Development", level: 85 },
        { name: "AI/OpenAI API", level: 80 },
        { name: "System Design", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Proficiency across multiple programming languages and technologies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-navy mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-navy-light h-2 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
