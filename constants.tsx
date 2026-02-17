
import React from 'react';
import { ProfileData } from './types';

export const PROFILE: ProfileData = {
  name: "Alex Rivera",
  role: "Senior Full Stack Engineer",
  bio: "Passionate developer crafting immersive digital experiences with modern technologies. Specialized in React, Node.js, and AI integration. I build products that combine high performance with stunning aesthetics.",
  email: "alex.rivera@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com/in/alexrivera",
  profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  // This would be the URL fetched from the LinkedIn API or a fixed public proxy URL
  linkedinPicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop", 
  syncLinkedIn: false,
  skills: [
    { name: 'React / Next.js', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 98, category: 'Frontend' },
    { name: 'Node.js / Express', level: 85, category: 'Backend' },
    { name: 'PostgreSQL', level: 80, category: 'Backend' },
    { name: 'Gemini API', level: 88, category: 'Backend' },
    { name: 'Docker / CI/CD', level: 75, category: 'Tools' },
    { name: 'UI/UX Design', level: 82, category: 'Soft Skills' },
  ],
  projects: [
    {
      id: '1',
      title: 'Neural Dashboard',
      description: 'An AI-powered analytics platform for monitoring machine learning model performance in real-time.',
      tags: ['React', 'D3.js', 'Python'],
      imageUrl: 'https://picsum.photos/seed/neural/600/400',
      link: '#',
    },
    {
      id: '2',
      title: 'Ethereal Commerce',
      description: 'A headless e-commerce solution with focus on speed and accessible design.',
      tags: ['Next.js', 'Stripe', 'GraphQL'],
      imageUrl: 'https://picsum.photos/seed/ethereal/600/400',
      link: '#',
    },
    {
      id: '3',
      title: 'ZenFlow Tasker',
      description: 'Minimalist task management app optimized for flow state and deep work.',
      tags: ['Electron', 'Rust', 'React'],
      imageUrl: 'https://picsum.photos/seed/zen/600/400',
      link: '#',
    },
  ],
};

export const NAVIGATION = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI Assistant', href: '#ai-assistant' },
  { name: 'Contact', href: '#contact' },
];
