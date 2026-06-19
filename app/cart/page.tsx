"use client";

import { useSyncExternalStore } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingBag, Trash2, ArrowRight, ArrowLeft } from "lucide-react";

const getServerSnapshot = () => false;
const getSnapshot = () => true;
const subscribe = () => () => {};

export default function CartPage() {
  const router = useRouter();
  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!mounted) {
    return (
      <main className="cart-page">
        <div className="container">
          <div className="cart-header">
            <div className="cart-header-left">
              <button onClick={() => router.back()} className="cart-back-btn">
                <ArrowLeft size={18} />
                Back
              </button>
              <h1 className="cart-title">Your Cart</h1>
            </div>
            <span className="cart-items-count">0 items</span>
          </div>
          <div className="cart-empty">
            <div className="cart-empty-icon">
              <ShoppingBag size={48} />
            </div>
            <h2>Your cart feels lonely</h2>
            <p>
              Looks like nothing has been added yet. Time to give your wallet
              mild anxiety.
            </p>
            <Link href="/products" className="btn btn-primary">
              Explore Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="container">
        <div className="cart-header">
          <div className="cart-header-left">
            <button onClick={() => router.back()} className="cart-back-btn">
              <ArrowLeft size={18} />
              Back
            </button>
            <h1 className="cart-title">Your Cart</h1>
          </div>
          <span className="cart-items-count">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">
              <ShoppingBag size={48} />
            </div>
            <h2>Your cart feels lonely</h2>
            <p>
              Looks like nothing has been added yet. Time to give your wallet
              mild anxiety.
            </p>
            <Link href="/products" className="btn btn-primary">
              Explore Products
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-image-wrap">
                    <Image
                      src={item.image}
                      width={120}
                      height={120}
                      alt={item.title}
                      className="cart-image"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="cart-content">
                    <h3>{item.title}</h3>
                    <p className="cart-price">${item.price}</p>
                    <div className="cart-controls">
                      <button
                        className="cart-qty-btn"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        −
                      </button>
                      <span className="cart-quantity">{item.quantity}</span>
                      <button
                        className="cart-qty-btn"
                        onClick={() =>
                          addToCart({
                            id: item.id,
                            title: item.title,
                            price: item.price,
                            image: item.image,
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="cart-remove"
                    >
                      <Trash2 size={15} />
                      Remove All
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div>
                <span>Total: </span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <button className="btn btn-primary">Checkout</button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
