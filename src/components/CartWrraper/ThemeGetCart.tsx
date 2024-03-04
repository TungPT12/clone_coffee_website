import React, { useEffect, useState } from "react";

export default async function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<any[]>([]);
  useEffect(() => {
    const cartString = localStorage.getItem("cart");
    if (cartString) {
      const cartData = JSON?.parse(cartString);
      setCart(cartData);
    }
  }, []);

  if (!cart) {
    return null;
  }
  return null;
}
