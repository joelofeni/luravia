export interface IProduct {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
}
