import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { useContent as useFetchContent } from "../hooks/useContent";

export type FilterType = "all" | "youtube" | "twitter" | "favourites" | "recent" | "tag";

interface ContentContextType {
  content: ReturnType<typeof useFetchContent>["content"];
  refresh: () => void;
  favorites: Set<string>;
  recents: string[];
  activeTag: string | null;
  filter: FilterType;
  toggleFavorite: (id: string) => void;
  markVisited: (id: string) => void;
  isFavorite: (id: string) => boolean;
  setFilter: (filter: FilterType, tag?: string) => void;
  displayedContent: ReturnType<typeof useFetchContent>["content"];
  allTags: string[];
}

// single declaration with export — lets Card.tsx import it directly for null-safe usage
export const ContentContext = createContext<ContentContextType | null>(null);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const { content, refresh } = useFetchContent();

  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [recents, setRecents] = useState<string[]>([]);
  const [filter, setFilterState] = useState<FilterType>("all");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const markVisited = useCallback((id: string) => {
    setRecents(prev => [id, ...prev.filter(r => r !== id)].slice(0, 20));
  }, []);

  const isFavorite = useCallback((id: string) => favorites.has(id), [favorites]);

  const setFilter = useCallback((f: FilterType, tag?: string) => {
    setFilterState(f);
    setActiveTag(tag ?? null);
  }, []);

  const displayedContent = (() => {
    switch (filter) {
      case "youtube":    return content.filter(i => i.types === "youtube");
      case "twitter":    return content.filter(i => i.types === "twitter");
      case "favourites": return content.filter(i => favorites.has(i._id));
      case "recent":     return recents.map(id => content.find(i => i._id === id)).filter(Boolean) as typeof content;
      case "tag":        return activeTag ? content.filter(i => i.tag === activeTag) : content;
      default:           return content;
    }
  })();

  const allTags = [...new Set(content.map(i => i.tag).filter(Boolean) as string[])].sort();

  return (
    <ContentContext.Provider value={{
      content, refresh,
      favorites, recents, activeTag, filter,
      toggleFavorite, markVisited, isFavorite,
      setFilter, displayedContent, allTags,
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = () => {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContentContext must be used inside ContentProvider");
  return ctx;
};