export function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength) return text;
    let truncated = text.slice(0, maxLength);
    truncated = truncated.slice(0, truncated.lastIndexOf(" "));
    return truncated + "...";
  }
  
  import { projectData } from "@/app/components/constant";
  import { experiences } from "@/app/components/constant";
  
  export type SearchResult = {
    type: 'project' | 'experience' | 'navigate';
    title: string;
    subtitle: string;
    url?: string;
    image?: string;
  };
  
  export function searchQuery(query: string): SearchResult[] {
    const q = query.toLowerCase().trim();
    if (!q) return [];
  
    // Navigation keywords
    const navKeywords = [
      { keywords: ["experience", "experiences"], url: "/experience" },
      // { keywords: ["about", "about me"], url: "/aboutMe" },
      { keywords: ["project", "projects"], url: "/projects" },
    ];
    for (const nav of navKeywords) {
      if (nav.keywords.some(k => q === k || q.includes(k))) {
        return [{ type: 'navigate' as const, url: nav.url, title: '', subtitle: '' }];
      }
    }
  
    // If query is a generic navigation word, redirect to /all
    const genericNav = ["all", "home", "main"];
    if (genericNav.some(k => q === k || q.includes(k))) {
      return [{ type: 'navigate' as const, url: '/all', title: '', subtitle: '' }];
    }
  
    const projectMatches = projectData
      .filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some(t => t.toLowerCase().includes(q))
      )
      .map(p => ({
        type: 'project' as const,
        title: p.title,
        subtitle: p.description,
        url: p.url,
        image: p.picture,
      }));
  
    const experienceMatches = experiences
      .filter(e =>
        e.company.toLowerCase().includes(q) ||
        e.role.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q)
      )
      .map(e => ({
        type: 'experience' as const,
        title: e.company,
        subtitle: e.role + ' • ' + e.date,
      }));
  
    // If no matches, default to /all
    if (projectMatches.length === 0 && experienceMatches.length === 0) {
      return [{ type: 'navigate' as const, url: '/all', title: '', subtitle: '' }];
    }
  
    return [...projectMatches, ...experienceMatches];
  }
  