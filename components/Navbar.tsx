'use client';
import { Home, FolderGit2, Wrench, Mail } from 'lucide-react';

const links = [
  { name: 'Home', icon: <Home size={20} />, href: '#' },
  { name: 'Work', icon: <FolderGit2 size={20} />, href: '#projects' },
  { name: 'Skills', icon: <Wrench size={20} />, href: '#skills' },
  { name: 'Contact', icon: <Mail size={20} />, href: '#contact' },
];

export default function Navbar() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 bg-white/80 backdrop-blur-md border border-white/20 shadow-xl shadow-black/5 rounded-full px-2 py-2">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="p-3 text-gray-500 hover:text-black hover:bg-white rounded-full transition-all duration-300 relative group"
            title={link.name}
          >
            {link.icon}
            {/* Tooltip on hover */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {link.name}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}