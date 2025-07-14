import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

export function formatJalali(dateStr: string): string {
  return dayjs(dateStr).calendar("jalali").locale("fa").format("YYYY/MM/DD");
}
