export default function LeadershipSection() {
  const achievements = [
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Teaching Excellence",
      description: "Guided 700+ students across multiple computer science courses"
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Leadership Development", 
      description: "Led teams and organized events for 300+ participants"
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Community Building",
      description: "President of Techno Sreshtha IT Club fostering tech education"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Leadership & Extracurricular</h2>
          <p className="text-xl text-gray-600">Building communities and fostering learning experiences</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <img 
                src={achievement.image} 
                alt={achievement.title}
                className="rounded-xl shadow-lg w-full h-48 object-cover mb-4" 
              />
              <h3 className="text-xl font-bold text-navy mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-light p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg text-navy mb-3">President, Techno Sreshtha (IT Club)</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Designed technical workshops in Python and Adobe Photoshop</li>
                <li>• Coordinated events with 300+ participants</li>
                <li>• Developed interactive instructional materials</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-navy mb-3">Teaching Impact</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Improved student grades by 15% through personalized guidance</li>
                <li>• Led weekly study halls and lab sessions</li>
                <li>• Created engaging in-class activities for 700+ students</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
