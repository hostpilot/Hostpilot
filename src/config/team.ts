export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  avatarAlt: string;
}

export const teamConfig: TeamMember[] = [
  {
    name: 'HostPilot Engineering & Design Lead',
    role: 'Founder & Principal Engineer',
    bio: 'Specializing in high-performance web systems, precision typography, and intuitive digital concierge architecture. Passionate about building software that saves business owners real hours every day.',
    linkedin: 'https://linkedin.com/company/hostpilot',
    avatarAlt: 'HostPilot founder and lead engineer',
  },
];
