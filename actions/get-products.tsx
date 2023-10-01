import qs from 'query-string';

import { Product } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL as string

const URL = `${baseUrl}/products`;

interface Query {
    categoryId?:string,
    colorId?:string,
    sizeId?:string,
    isFeatured?:boolean
}


const getProducts =  async (query:Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url:URL,
        query:{
            colorId:query.colorId,
            categoryId:query.categoryId,
            sizeId:query.sizeId,
            isFeatured:query.isFeatured
        }
    })
    const res = await fetch(url, { cache: 'no-store' })

    return res.json()
}

export default getProducts;
