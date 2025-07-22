import { FormResult, overviewTypes, PaginatedFormResponse } from "@/types/api"
import { callApiWithOutToast } from "./base"

export const getDashboardOverview = async (): Promise<overviewTypes> => {
    try {
        return await callApiWithOutToast({
            url: "form-generator/answer/overview/",
            method: "GET",
        }, {})
    } catch (err) {
        throw err
    }
}

export const getUserFormList = async (pageNumber: number, search: string | undefined, status: string | undefined): Promise<PaginatedFormResponse> => {
    try {
        return await callApiWithOutToast({
            url: "form-generator/user-forms/",
            method: "GET",
        }, {
            params: {
                page: pageNumber,
                search: search,
                status: status
            }
        })
    } catch (err) {
        throw err
    }
}

export const getForm = async (formId: string): Promise<FormResult> => {
    try {
        return await callApiWithOutToast({
            url: `form-generator/user-forms/${formId}`,
            method: "GET",
        }, {})
    } catch (err) {
        throw err
    }
}