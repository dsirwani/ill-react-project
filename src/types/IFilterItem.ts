export interface IFilterItem {
  id: number;
  operator: string;
  action: string;
  name: string;
  value: (string | number);
  label?: string;
}