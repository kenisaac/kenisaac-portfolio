import type { PropsWithChildren } from "react";
import { createContext, useContext, useMemo } from "react";

type AuthContextValue = {
  user: { name: string; role: "ADMIN" | "USER" } | null;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const value = useMemo<AuthContextValue>(() => ({ user: null }), []);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
