import { Size } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL as string

const URL = `${baseUrl}/sizes` ;

const getSizes =  async (): Promise<Size[]> => {
    const res = await fetch(URL, { cache: 'no-store' })
    return res.json()
}

export default getSizes
