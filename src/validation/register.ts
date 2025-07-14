import { z } from "zod";


export const RegisterSchema = z.object({
    phoneNumber: z
        .string()
        .regex(/^0?9\d{9}$/, { message: "شماره همراه نامعتبر است" }),
    otp: z.string().min(6, "کد تایید باید ۶ رقم باشد").max(6, "کد تایید باید ۶ رقم باشد").optional(),
});


export type Register = z.infer<typeof RegisterSchema>;
