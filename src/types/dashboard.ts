import { Status } from "./common";

export interface TableRow {
  name: string;
  status: Status;
  previousForm: string | null;
  createdAt: string;
}

export interface DashboardContent {
  title: string;
  tableHeaders: string[];
  tableData: TableRow[];
}

export interface StatItem {
  count: number;
  label: string;
  color: string;
}