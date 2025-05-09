import { Skill, SkillCategory } from "../types";

export const categories: SkillCategory[] = ["all", "frontend", "tools"];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Angular", level: 70, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Redux", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Tools
  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "GraphQL", level: 75, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "CI / CD", level: 80, category: "tools" },
  { name: "Jest / Enzyme", level: 75, category: "tools" }
];
