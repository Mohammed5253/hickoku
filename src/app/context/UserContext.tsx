"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Define user type
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

// Define context type
interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  guestUser: (guestUser: { email: string }) => void;
  isAuthenticated: boolean;
}

// Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage (optional)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const guestUser = (guestUser: { email: string }) => {
    setUser({
      id: "guest-id",
      name: "Guest User",
      email: guestUser.email,
    });
  };

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider
      value={{ user, login, logout, guestUser, isAuthenticated: !!user }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Hook to use user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
};
