import { supabase } from "./subabase";

export const getProjects = async (page = 1, limit = 6) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, error, count } = await supabase
    .from("projects")
    .select("*", { count: "exact" }) 
    .range(from, to)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return { data: [], count: 0 };
  }

  return { data, count };
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

