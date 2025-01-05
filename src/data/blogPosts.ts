import ces2025 from "/public/images/blog/ces-2025.jpg";

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
    image: ces2025.src,
    translations: ["en", "de", "es", "ru", "ja", "zh"],
  },
];
