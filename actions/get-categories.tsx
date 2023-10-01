import { Category } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL as string

const URL = `${baseUrl}/categories` ;

const getCategories =  async (): Promise<Category[]> => {
    const res = await fetch(URL, { cache: 'no-store' })

    return res.json()
}

export default getCategories
