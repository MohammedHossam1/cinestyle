import { useQuery } from '@tanstack/react-query';
import { categories, getHomeProjects, getOuterCategories, services } from '../lib/subaMethods';

// Query keys for consistent cache management
export const queryKeys = {
  projects: (page: number, limit: number, categoryId?: string, isReel?: boolean) => 
    ['projects', page, limit, categoryId, isReel] as const,
  homeProjects: ['homeProjects'] as const,
  services: ['services'] as const,
  categories: ['categories'] as const,
  infiniteProjects: (categoryId?: string, isReel?: boolean) => 
    ['infiniteProjects', categoryId, isReel] as const,
  getOuterCategoriesQuery: ['getOuterCategoriesQuery'] as const,
};




// Hook for fetching home projects
export const useHomeProjects = (options?: {
  enabled?: boolean;
  staleTime?: number;
  refetchOnWindowFocus?: boolean;
}) => {
  return useQuery({
    queryKey: queryKeys.homeProjects,
    queryFn: getHomeProjects,
    staleTime: options?.staleTime || 1000 * 60 * 10, // 10 minutes default (home projects change less frequently)
    enabled: options?.enabled ?? true,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
  });
};

// Hook for fetching services
export const useServices = (options?: {
  enabled?: boolean;
  staleTime?: number;
  refetchOnWindowFocus?: boolean;
}) => {
  return useQuery({
    queryKey: queryKeys.services,
    queryFn: services,
    staleTime: options?.staleTime || 1000 * 60 * 15, // 15 minutes default (services change rarely)
    enabled: options?.enabled ?? true,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
  });
};

// Hook for fetching categories
export const useCategories = (options?: {
  enabled?: boolean;
  staleTime?: number;
  refetchOnWindowFocus?: boolean;
}) => {
  return useQuery({
    queryKey: queryKeys.categories,
    queryFn: categories,
    staleTime: options?.staleTime || 1000 * 60 * 15, // 15 minutes default (categories change rarely)
    enabled: options?.enabled ?? true,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
  });
};
// Hook for fetching categories
export const useGetOuterCategories = (options?: {
  enabled?: boolean;
  staleTime?: number;
  refetchOnWindowFocus?: boolean;
}) => {
  return useQuery({
    queryKey: queryKeys.getOuterCategoriesQuery,
    queryFn: getOuterCategories,
    staleTime: options?.staleTime || 1000 * 60 * 15, // 15 minutes default (categories change rarely)
    enabled: options?.enabled ?? true,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
  });
};

