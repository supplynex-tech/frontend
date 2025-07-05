import { StatItem } from "./dashboard";

export interface UserPhone {
  title: string;
  number: string;
}

export interface UserProfileData {
  text: string;
  phone: UserPhone;
  stats: StatItem[];
}