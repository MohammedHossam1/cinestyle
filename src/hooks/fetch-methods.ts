import { useQuery, useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { getProjects, getHomeProjects, services, categories } from '../lib/subaMethods';

// Query keys for consistent cache management
export const queryKeys = {
  projects: (page: number, limit: number, categoryId?: string, isReel?: boolean) => 
    ['projects', page, limit, categoryId, isReel] as const,
  homeProjects: ['homeProjects'] as const,
  services: ['services'] as const,
  categories: ['categories'] as const,
  infiniteProjects: (categoryId?: string, isReel?: boolean) => 
    ['infiniteProjects', categoryId, isReel] as const,
};

// Hook for fetching paginated projects
export const useProjects = (
  page: number = 1,
  limit: number = 6,
  categoryId?: string,
  isReel?: boolean,
  options?: {
    enabled?: boolean;
    staleTime?: number;
    refetchOnWindowFocus?: boolean;
  }
) => {
  return useQuery({
    queryKey: queryKeys.projects(page, limit, categoryId, isReel),
    queryFn: () => getProjects(page, limit, categoryId, isReel),
    staleTime: options?.staleTime || 1000 * 60 * 5, // 5 minutes default
    enabled: options?.enabled ?? true,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
  });
};

// Hook for infinite scroll projects
export const useInfiniteProjects = (
  limit: number = 6,
  categoryId?: string,
  isReel?: boolean,
  options?: {
    enabled?: boolean;
    staleTime?: number;
    refetchOnWindowFocus?: boolean;
  }
) => {
  return useInfiniteQuery({
    queryKey: queryKeys.infiniteProjects(categoryId, isReel),
    queryFn: ({ pageParam = 1 }) => getProjects(pageParam, limit, categoryId, isReel),
    getNextPageParam: (lastPage, allPages) => {
      // If we have less data than the limit, we've reached the end
      if (lastPage.data.length < limit) {
        return undefined;
      }
      return allPages.length + 1;
    },
    initialPageParam: 1,
    staleTime: options?.staleTime || 1000 * 60 * 5, // 5 minutes default
    enabled: options?.enabled ?? true,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
  });
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

// Utility hook for prefetching projects (useful for navigation)
export const usePrefetchProjects = () => {
  const queryClient = useQueryClient();
  
  const prefetchProjects = (
    page: number,
    limit: number,
    categoryId?: string,
    isReel?: boolean
  ) => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.projects(page, limit, categoryId, isReel),
      queryFn: () => getProjects(page, limit, categoryId, isReel),
      staleTime: 1000 * 60 * 5,
    });
  };

  return { prefetchProjects };
};
