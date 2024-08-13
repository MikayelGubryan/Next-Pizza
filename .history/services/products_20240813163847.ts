import { axiosInstance } from "./instance"

export const search = async (query: string) => {
    const {data} = await axiosInstance.get
}