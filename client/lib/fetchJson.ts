import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { requestResponse } from "store/authSlice";
interface IOptions extends AxiosRequestConfig {
    isToken?: string,
}

export default async function fetcher(
    request: string,
    method: "get" | "post" | "put" | "delete" | "patch" = "get",
    data: any,
    isToken?: string,
    headers?: AxiosRequestHeaders & { Authorization?: string }
) {
    const authorization = isToken ? { Authorization: `Bearer ${isToken}` } : {};
    const options: IOptions = {
        url:
            request.charAt(0) === "/"
                ? request
                : `${process.env.NEXT_PUBLIC_API_URL}/${request}`,
        method,
        data,
        headers: {
            ...authorization,
            ...headers,
        },
    };
    return new Promise((resolve, reject) => {
        axios(options)
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}