import { Product } from "@/types";
const baseUrl = process.env.NEXT_PUBLIC_API_URL as string

const URL=`${baseUrl}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`, { cache: 'no-store' });
  return res.json();
};

export default getProduct;