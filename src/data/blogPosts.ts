export interface BlogPost {
  id: string;
  date: string;
  image: string;
  translations: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "ces-2025-agents-as-service",
    date: "2025-01-01",
    image: "/images/blog/ces-2025.jpg",
    translations: ["en", "de"],
  },
];
