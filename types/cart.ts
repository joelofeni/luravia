export interface CartItem {
  productId: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
