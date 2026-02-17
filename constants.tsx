
import React from 'react';
import { ProfileData } from './types';

export const PROFILE: ProfileData = {
  name: "Amit Mishra",
  role: "DevOps Professional",
  bio: "AWS Certified Cloud & DevOps professional with an Executive Post Graduate Certification in Cloud Computing & DevOps, actively building hands-on experience through real-world labs and projects.",
  email: "a1m9i9t7@gmail.com",
  github: "https://github.com/Amitm1997",
  linkedin: "https://www.linkedin.com/in/amit-mishra-725a95290/",
  profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQHT-NrsWziBqA/profile-displayphoto-scale_400_400/B4DZwqCGEKGQAk-/0/1770231720094?e=1772668800&v=beta&t=b3MNxrfdz3C5v8GfdYMBjKexy5jHDR-MtHsUVIiPKaQ",
  // This would be the URL fetched from the LinkedIn API or a fixed public proxy URL
  linkedinPicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop", 
  syncLinkedIn: false,
  skills: [
    { name: 'DevOps', level: 95, category: 'Backend' },
    { name: 'Linux ', level: 90, category: 'Backend' },
    { name: 'Python', level: 98, category: 'Backend' },
    { name: 'Docker', level: 85, category: 'Backend' },
    { name: 'Terraform', level: 80, category: 'Backend' },
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
