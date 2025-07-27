import { GraduationCap, Users, Presentation } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      icon: GraduationCap,
      date: "January 2025 – Present",
      title: "Graduate Services Assistant – Grader",
      company: "SCAI, Ira A. Fulton Schools of Engineering, ASU",
      responsibilities: [
        "Evaluated assignments for CSE 572: Data Mining (120+ students)",
        "Collaborated with Professor Yanjie Fu on grading rubrics",
        "Increased student grades by 15% through personalized guidance"
      ],
      side: "right"
    },
    {
      icon: Users,
      date: "August 2022 – May 2025",
      title: "Client Services Assistant Lead",
      company: "International Students and Scholars Center, ASU",
      responsibilities: [
        "Led team of 20 student workers supporting 10,000+ international students",
        "Primary contact for immigration-related inquiries",
        "Streamlined support processes across university departments"
      ],
      side: "left"
    },
    {
      icon: Presentation,
      date: "August 2022 – May 2024",
      title: "Undergraduate Teaching Assistant",
      company: "Ira A. Fulton Schools of Engineering, ASU",
      responsibilities: [],
      courses: [
        {
          name: "CSE 110: Principles of Programming with Java",
          description: "Assisted 70+ first-year students, led weekly study halls"
        },
        {
          name: "CSE 360: Introduction to Software Engineering",
          description: "Collaborated on curriculum for 700+ students"
        },
        {
          name: "CSE 335: Principles of Mobile App Development",
          description: "Taught Swift programming and mobile development"
        }
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
                    {exp.courses && (
                      <div className="mt-4 space-y-3">
                        {exp.courses.map((course, idx) => (
                          <div key={idx}>
                            <p className="font-medium text-navy">{course.name}</p>
                            <p className="text-gray-700 text-sm">{course.description}</p>
                          </div>
                        ))}
                      </div>
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
