"use client";

import React, { createContext, useContext } from "react";

const UserContext = createContext(null);

export default function AuthProvider({
  children,
  cart,
}: {
  children: React.ReactNode;
  cart?: any[];
}) {
  return <UserContext.Provider value={cart}>{children}</UserContext.Provider>;
}
