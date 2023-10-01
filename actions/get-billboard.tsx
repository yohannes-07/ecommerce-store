import { Billboard } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL as string

const URL=`${baseUrl}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`, {cache:'no-store'});

  return res.json();
};

export default getBillboard;