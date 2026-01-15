'use client';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react'; 
import Image from 'next/image'; 

const projects = [
  // --- CLIENT WEBSITES (With Images) ---
  {
    title: "Nisaa-afs",
    desc: "A high-impact NGO platform dedicated to social empowerment and community outreach.",
    tags: ["Next.js", "CMS", "SEO"],
    image: "/projects/nisaa.png", 
    color: "from-rose-500 to-pink-600",
    link: "https://nisaa-afs.vercel.app/",
    github: "" 
  },
  {
    title: "My Little Bear Daycare",
    desc: "Warm, user-friendly website helping parents explore programs and schedule visits easily.",
    tags: ["React", "Framer Motion", "Forms"],
    image: "/projects/bear.png",
    color: "from-amber-400 to-orange-300",
    link: "https://my-little-bear-daycare.vercel.app/",
    github: "" 
  },
  {
    title: "Garden Playhouse",
    desc: "Modern digital presence for a childcare center, focusing on trust and accessibility.",
    tags: ["Next.js", "Tailwind", "Responsive"],
    image: "/projects/garden.png",
    color: "from-emerald-400 to-teal-500",
    link: "https://garden-playhouse-day-care-and-presc.vercel.app/",
    github: "" 
  },

  // --- DATA & CODE PROJECTS (Gradient / No Image) ---
  {
    title: "Predictive Churn Model",
    desc: "Machine Learning model predicting customer exit with 85% accuracy using Python.",
    tags: ["Python", "Scikit-Learn", "Pandas"],
    // No image -> Uses Purple Gradient
    color: "from-purple-600 to-pink-500",
    link: "#",
    github: "" // Add link if public
  },
  {
    title: "Sales Dashboard Pro",
    desc: "Interactive PowerBI dashboard analyzing global retail sales trends.",
    tags: ["PowerBI", "SQL", "Excel"],
    // No image -> Uses Blue Gradient
    color: "from-blue-600 to-cyan-500", 
    link: "#",
    github: "https://github.com/yourusername" 
  },

  // --- PORTFOLIO (With Image) ---
  {
    title: "Portfolio Website",
    desc: "Modern, high-performance web portfolio built with Next.js.",
    tags: ["Next.js", "Tailwind", "React"],
    image: "/projects/portfolio.png",
    color: "from-orange-500 to-amber-500",
    link: "#",
    github: "https://github.com/yourusername/portfolio" 
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-10"
      >
        <h2 className="text-3xl font-bold text-white">Selected Work</h2>
        <span className="text-gray-400 text-sm hidden md:inline-block">2023 — Present</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white/5 backdrop-blur-md rounded-3xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col h-full"
          >
            
            {/* SMART IMAGE CONTAINER */}
            <div className={`h-48 w-full rounded-2xl mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 ${project.image ? 'bg-gray-900' : `bg-gradient-to-br ${project.color}`}`}>
              
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              ) : (
                <>
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                 <div className="absolute inset-0 flex items-center justify-center text-white/80 font-bold text-2xl rotate-[-10deg]">
                   Preview
                 </div>
                </>
              )}
            </div>

            <div className="px-2 flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-2 mt-auto flex gap-3">
              {project.github ? (
                <a href={project.github} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors">
                  <Github size={16} /> Code
                </a>
              ) : null}

              <a href={project.link} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
                 Demo <ArrowUpRight size={16} />
              </a>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}