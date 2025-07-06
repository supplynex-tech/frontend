import { toGregorian } from "jalaali-js";

function format(template: string, ...values: (string | number)[]): string {
    if (values) {
        return template.replace(/{}/g, () => {
            const value = values.shift();
            if (value === undefined) {
                throw new Error("Not enough values provided to format the string.");
            }
            return String(value);
        });
    }
    return template
}


export function convertJalaliToDate(jalaliDate: string): string {
    const [jy, jm, jd] = jalaliDate.split("/").map(Number);
    const { gy, gm, gd } = toGregorian(jy, jm, jd);
    const date = new Date(gy, gm - 1, gd);

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");

    return `${yyyy}-${mm}-${dd}`; // ✅ Date only (YYYY-MM-DD)
}


export default format