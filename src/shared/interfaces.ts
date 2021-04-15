export interface IRepo {
  full_name: string;
  description: string;
  url: string;
}

export interface IData {
  total_count: number;
  items: Array<IRepo>;
}
