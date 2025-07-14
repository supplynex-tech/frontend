import { authTypes } from "@/types/api"
import { Register } from "@/validation/register";
import { callApiWithToast } from "./base";

export const sendOTP = async (data: Register): Promise<void> => {
    const normalizedPhone = data.phoneNumber.replace(/^0/, "");

    try {
        await callApiWithToast({
            url: "accounting/send-otp/",
            method: "POST",
            successActionText: "کد احراز هویت با موفقیت ارسال شد",
            failedActionText: "خطا در برقراری ارتباط با سرور",
            badActionText: "شماره موبایل اشتباه می باشد"
        }, {
            body: {
                phone_number: normalizedPhone,
            }
        })
    } catch (err) {
        throw err
    }
}

export const verifyPhoneNumber = async (data: Register): Promise<authTypes> => {
    const normalizedPhone = data.phoneNumber.replace(/^0/, "");

    try {
        let result = await callApiWithToast({
            url: "accounting/verify-phone-number/",
            method: "POST",
            successActionText: "احراز هویت شما با موفقیت انجام شد",
            failedActionText: "خطا در برقراری ارتباط با سرور",
            badActionText: "کد وارد شده اشتباه می باشد"
        }, {
            body: {
                phone_number: normalizedPhone,
                otp: data.otp
            }
        })
        return {
            access: result.access,
            refresh: result.refresh,
            phoneNumber: result.phone_number,
        }
    } catch (err) {
        throw err
    }
}


