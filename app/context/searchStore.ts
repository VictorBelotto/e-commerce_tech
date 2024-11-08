import { create } from 'zustand'

interface SearchQuery{
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useSearchStore = create<SearchQuery>((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query })
}))
