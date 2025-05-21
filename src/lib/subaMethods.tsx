import { supabase } from "./subabase";

export const getProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return data;
};

export const getHomeProjects = async () => {
  const { data, error } = await supabase
    .from("homeProjects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching home projects:", error);
    return [];
  }

  return data;
};

