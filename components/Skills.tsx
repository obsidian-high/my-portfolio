'use client';
import { Database, Layout, Brain, BarChart3 } from 'lucide-react';

const skills = [
  { icon: <Database />, title: "Data Engineering", desc: "SQL, Python, Pandas, ETL Pipelines" },
  { icon: <BarChart3 />, title: "Visualization", desc: "PowerBI, Tableau, D3.js, Storytelling" },
  { icon: <Layout />, title: "Web Dev", desc: "Next.js, React, Tailwind CSS, TypeScript" },
  { icon: <Brain />, title: "Machine Learning", desc: "Scikit-Learn, TensorFlow, Predictive Models" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900">My Arsenal</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-900 mb-4">
              {skill.icon}
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">{skill.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}