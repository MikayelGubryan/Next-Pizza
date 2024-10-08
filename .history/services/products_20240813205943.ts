import { Product } from "@prisma/client"
import { axiosInstance } from "./instance"

export const search = async (query: string) => {
    return (await axiosInstance.get<Product>(Api, {
        params: {
            query
        }
    })).data
}