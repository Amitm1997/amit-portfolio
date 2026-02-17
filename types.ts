
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ProfileData {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  profilePicture: string;
  linkedinPicture: string; // The "synced" version
  syncLinkedIn: boolean;
  skills: Skill[];
  projects: Project[];
}
