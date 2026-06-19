import { CartItem } from "./cart";

export interface IOrder {
  _id?: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: "pending" | "paid" | "cancelled";
  createdAt?: Date;
}
