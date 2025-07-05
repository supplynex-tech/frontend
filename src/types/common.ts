export type Status = "شروع نشده" | "در حال بررسی" | "بررسی شده";

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}