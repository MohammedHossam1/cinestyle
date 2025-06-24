import { supabase } from "./subabase";

export const getProjects = async (
  page = 1,
  limit = 6,
  categoryId?: string,
  isReel?: boolean
) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from("projects")
    .select("*", { count: "exact" })
    .range(from, to)
    .order("priority", { ascending: true });

  if (categoryId) {
    query = query.eq("category_id", categoryId);
  }

  if (typeof isReel === "undefined") {
    query = query.eq("isReel", false);
  } else {
    query = query.eq("isReel", isReel);
  }

  const { data, error, count } = await query;

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
export const services = async () => {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching home projects:", error);
    return [];
  }

  return data;
};
export const categories = async () => {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching home projects:", error);
    return [];
  }

  return data;
};

