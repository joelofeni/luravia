"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IProduct } from "@/types/product";

interface ProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="hover:shadow-md transition">
      <Link href={`/products/${product.slug}`}>
        <div className="relative w-full h-64">
          <Image
            src={product.images?.[0] || "/placeholder.png"}
            alt={product.title}
            fill
            className="object-cover rounded-t-md"
          />
        </div>
      </Link>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{product.title}</h3>
        <p className="text-muted-foreground line-clamp-2 text-sm">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-xl">
            ₦{product.price.toLocaleString()}
          </span>

          {product.stock < 10 && <Badge variant="destructive">Low stock</Badge>}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
