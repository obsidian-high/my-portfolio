'use client';
import { Mail, Copy } from 'lucide-react';

export default function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText("hassan@example.com");
    alert("Email copied!");
  };

  return (
    <section id="contact" className="py-32 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Lets work together.
        </h2>
        <p className="text-gray-500 text-lg mb-10">
          Currently available for freelance projects and open roles.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:itsmeaidenj@gmail.com" 
            className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all hover:scale-105 shadow-xl shadow-gray-900/20 flex items-center gap-2"
          >
            <Mail size={20} />
            itsmeaidenj@gmail.com
          </a>
          
          <button 
            onClick={copyEmail}
            className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center gap-2"
          >
            <Copy size={20} />
            Copy Email
          </button>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-200">
          <p className="text-gray-400 text-sm">
            © 2024 Hassan Arden. Engineered with Next.js 14.
          </p>
        </div>

      </div>
    </section>
  );
}