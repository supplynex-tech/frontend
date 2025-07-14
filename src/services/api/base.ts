import axios from 'axios';
import {storage} from '../localstorage';
import {authTypes} from '@/types/api';
import format from "../../utils"
import {Id, toast} from "react-toastify";

const baseHost = "https://api.supplynex.ir"

const api = axios.create({
    baseURL: `${baseHost}/api/v1/`,
})

api.interceptors.request.use(
    async (config) => {
        const token = storage.getItem('accessToken')
        if (token) config.headers.Authorization = `Bearer ${token}`
        return config
    }
);

api.interceptors.response.use(
    res => res,
    async (error) => {
        const originalRequest = error.config

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            const refresh = storage.getItem('refreshToken')
            if (!refresh) {
                storage.deleteItem('accessToken');
                storage.deleteItem('refreshToken');
                storage.deleteItem('phone_number');
                window.location.href = '/register';
            }

            try {
                const res = await axios.post<authTypes>(`${baseHost}/api/v1/accounting/refresh-token/`, {
                    refresh,
                })
                const {access: newAccess} = res.data
                storage.setItem('accessToken', newAccess || "")

                originalRequest.headers.Authorization = `Bearer ${newAccess}`
                return api(originalRequest)
            } catch {

            }
        }
        storage.deleteItem('accessToken');
        storage.deleteItem('refreshToken');
        storage.deleteItem('phone_number');
        window.location.href = '/register';
        return Promise.reject(error)
    }
)

export interface IPropsApiWithToast {
    url: string,
    method: string
    successActionText: string;
    failedActionText: string;
    badActionText: string;
    headers?: { [prop: string]: string };
}

export interface IPropsApiWithOutToast {
    url: string,
    method: string
}

interface ICallApiData {
    dynamicUrl?: string[];
    body?: object | [],
    params?: object,
}

export async function callApiWithToast(
    {
        url,
        method,
        successActionText,
        failedActionText,
        badActionText,
        headers = {}
    }: IPropsApiWithToast, {
        dynamicUrl,
        body,
        params
    }: ICallApiData
): Promise<any> {
    let toastID: Id
    const timeout = setTimeout(() => {
        toastID = toast.loading("لطفا صبر کنید...")
    }, 0)
    if (!dynamicUrl) {
        dynamicUrl = []
    }
    return await api({
        method: method,
        headers: headers,
        url: format(url, ...dynamicUrl),
        params: params,
        data: body
    }).then((response) => {
        toast.update(toastID, {
            render: successActionText,
            type: "success",
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: false
        });
        clearTimeout(timeout)
        return response.data;
    }).catch((e) => {
        if (e.status !== 400)
            toast.update(toastID, {
                render: failedActionText,
                type: "error",
                isLoading: false,
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: false
            });
        else {
            toast.update(toastID, {
                render: badActionText,
                type: "error",
                isLoading: false,
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: false
            });
        }
        clearTimeout(timeout)
        throw e
    })
}

export async function callApiWithOutToast(
    {
        url,
        method,
    }: IPropsApiWithOutToast, {
        dynamicUrl,
        body,
        params
    }: ICallApiData
): Promise<any> {
    if (!dynamicUrl) {
        dynamicUrl = []
    }
    return await api({
        method: method,
        url: format(url, ...dynamicUrl),
        params: params,
        data: body
    }).then((response) => {
        return response.data;
    }).catch((e) => {
        throw e
    })
}

export default api