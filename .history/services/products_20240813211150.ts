import { Product } from "@prisma/client"
import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"

export const search = async (query: string) => {
    return (await axiosInstance.get<Productp>(ApiRoutes.SEARCH_PRODUCTS, {
        params: {
            query
        }
    })).data
}