import { Color } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL as string

const URL = `${baseUrl}/colors` ;

const getColors =  async (): Promise<Color[]> => {
    const res = await fetch(URL, { cache: 'no-store' })
    return res.json()
}

export default getColors
