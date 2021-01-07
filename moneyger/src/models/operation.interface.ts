export interface IOperation {
  id: number;
  title?: string;
  type: string;
  date: string;
  amount: number;
  isIncome: boolean;
}