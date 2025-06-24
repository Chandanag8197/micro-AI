import React from "react";
import "./Features.css"; // Import the CSS file

const features = [
  {
    title: "Behavioral Analysis",
    description:
      "Leverage AI and deep analytics to gain insights into candidate behavior, enabling smarter hiring decisions, reducing bias, and improving team fit.",
    stats: [
      { label: "85%", value: "85%" },
      { label: "Interview accuracy", value: "30%" },
      { label: "Employee rates", value: "20%" },
    ],
  },
  {
    title: "Real-Time Feedback",
    description:
      "Get instant feedback and recommendations during interviews, helping interviewers and candidates improve performance and outcomes.",
  },
  {
    title: "Automated Assessments",
    description:
      "AI-driven assessments evaluate candidate skills and competencies, streamlining the screening process and saving valuable time.",
  },
];

export default function Features() {
  return (
    <main>
      {/* Navbar should be outside this component or above this <main> in your layout */}
      <div className="features-bg min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            Features for Smarter Hiring
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Our features are meticulously crafted to empower you with the tools you need for streamlined candidate selection, a fairer evaluation environment, and ultimately fully recognized teams.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                {feature.stats && (
                  <div className="flex flex-wrap gap-4">
                    {feature.stats.map((stat, i) => (
                      <div key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {stat.label}: {stat.value}
                      </div>
                    ))}
                  </div>
                )}
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}