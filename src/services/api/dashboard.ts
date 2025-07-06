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

export const getUserFormList = async (pageNumber: number): Promise<PaginatedFormResponse> => {
    try {
        return await callApiWithOutToast({
            url: "form-generator/user-forms/",
            method: "GET",
        }, {params: {page: pageNumber}})
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