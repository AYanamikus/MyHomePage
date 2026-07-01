export type Project = {
  slug: string;
  title: string;
  role: string;
  tools: string[];
  shortSummary: string;
  tags: string[];
  thumbnailLabel: string;
  restrictedCaseStudyLink: string;
};

export const projects: Project[] = [
  {
    slug: 'ue5-action-rpg-combat-prototype',
    title: 'UE5 Action RPG Combat Prototype',
    role: 'Combat Designer / Technical Designer',
    tools: ['Unreal Engine 5', 'Blueprint', 'Behavior Tree', 'Enhanced Input', 'Spreadsheet'],
    shortSummary: 'A modular action-RPG combat prototype focused on readable melee flow, transformation timing, aerial follow-up, and enemy pressure control.',
    tags: ['Action RPG', 'Combat Loop', 'UE5', 'Prototype'],
    thumbnailLabel: 'Public thumbnail placeholder: UE5 combat arena graybox',
    restrictedCaseStudyLink: '/case-studies/ue5-action-rpg-combat-prototype'
  },
  {
    slug: 'stack-detonation-combat-system',
    title: 'Stack & Detonation Combat System',
    role: 'System Designer',
    tools: ['Spreadsheet', 'State Diagram', 'UE5 Blueprint'],
    shortSummary: 'A replaceable system-design sample for building, maintaining, and detonating combat stacks without relying on confidential production data.',
    tags: ['System Design', 'Balancing', 'Feedback'],
    thumbnailLabel: 'Public thumbnail placeholder: stack/detonation UI wireframe',
    restrictedCaseStudyLink: '/case-studies/ue5-action-rpg-combat-prototype#stack-and-detonation-system'
  },
  {
    slug: 'emode-transformation-aerial-combat',
    title: 'E-Mode Transformation and Aerial Combat',
    role: 'Combat Flow Designer',
    tools: ['UE5', 'Animation Montage', 'Input Buffer Notes'],
    shortSummary: 'A combat-flow concept that explores transformation windows, launch states, and aerial continuation while preserving player readability.',
    tags: ['Transformation', 'Aerial Combat', 'Player Feel'],
    thumbnailLabel: 'Public thumbnail placeholder: transformation flow chart',
    restrictedCaseStudyLink: '/case-studies/ue5-action-rpg-combat-prototype#e-mode-transformation'
  },
  {
    slug: 'enemy-boss-attack-slot-system',
    title: 'Enemy / Boss Attack Slot System',
    role: 'Technical Designer',
    tools: ['Behavior Tree', 'Blackboard', 'Encounter Sheet'],
    shortSummary: 'A planning model for limiting simultaneous enemy aggression and assigning boss attack opportunities based on distance, cooldown, and priority.',
    tags: ['AI', 'Boss Design', 'Encounter'],
    thumbnailLabel: 'Public thumbnail placeholder: enemy slot diagram',
    restrictedCaseStudyLink: '/case-studies/ue5-action-rpg-combat-prototype#enemy-and-boss-behavior'
  },
  {
    slug: 'ai-assisted-combat-design-workflow',
    title: 'AI-assisted Combat Design Workflow',
    role: 'Technical Design Workflow Owner',
    tools: ['Prompting', 'Design Docs', 'Validation Checklist'],
    shortSummary: 'A controlled workflow for using AI to draft alternatives, compare combat rules, and prepare interview-safe documentation for human review.',
    tags: ['AI Workflow', 'Documentation', 'Iteration'],
    thumbnailLabel: 'Public thumbnail placeholder: workflow board',
    restrictedCaseStudyLink: '/case-studies/ue5-action-rpg-combat-prototype#problems-and-iteration'
  },
  {
    slug: 'technical-design-internship-experience',
    title: 'Technical Design Internship Experience',
    role: 'Technical Design Intern',
    tools: ['Internal Tools Placeholder', 'Issue Tracker', 'Design Review'],
    shortSummary: 'A public-safe summary template for internship responsibilities, collaboration patterns, and technical design habits without disclosing company secrets.',
    tags: ['Internship', 'Collaboration', 'Tools'],
    thumbnailLabel: 'Public thumbnail placeholder: production workflow notes',
    restrictedCaseStudyLink: '/documents'
  }
];
