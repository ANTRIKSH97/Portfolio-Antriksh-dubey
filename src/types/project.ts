
export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  liveDemo?: string;
  impact?: string;
}

export type CategoryType = "All" | "Web App" | "AI" | "Backend" | "Frontend";

export const categories = ["All", "Web App", "AI", "Backend", "Frontend"] as const;
