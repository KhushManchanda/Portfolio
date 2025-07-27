export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate computer science student with extensive teaching experience and leadership background
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="University campus with modern buildings and students" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">Education & Background</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-navy-light pl-6">
                <h4 className="font-semibold text-lg">Master of Science in Computer Science</h4>
                <p className="text-gray-600">Arizona State University | GPA: 4.0 | Expected May 2026</p>
              </div>
              <div className="border-l-4 border-navy-light pl-6">
                <h4 className="font-semibold text-lg">Bachelor of Science in Computer Science</h4>
                <p className="text-gray-600">Arizona State University | GPA: 3.99 | Dean's List (All Semesters) | May 2025</p>
              </div>
            </div>
            <p className="mt-6 text-gray-700 leading-relaxed">
              I'm currently pursuing my Master's degree while working as a Graduate Services Assistant. 
              My academic journey has been marked by consistent excellence and a deep commitment to learning 
              and teaching others in the field of computer science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
