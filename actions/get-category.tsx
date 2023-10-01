import { Category } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL as string

const URL=`${baseUrl}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`, {cache:'no-store'});
  return res.json();
};

export default getCategory;