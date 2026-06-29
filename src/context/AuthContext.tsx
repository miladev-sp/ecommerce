"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  accessToken: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string;
  isAuthLoaded: boolean;
  signup: (user: User) => Promise<void>;
  clearError: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsAuthLoaded(true);
  }, []);
  async function login(username: string, password: string) {
    setIsLoading(true);
    setError("");
    try {
      const result = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30, // optional, defaults to 60
        }),
      });
      if (!result.ok) {
        setError("Failed to Login Please try again");
        throw Error("Failed to Login Please try again");
      }
      const data: User = await result.json();
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    } catch (error) {
      setError("Check your username or password!");
      throw Error("Failed to Login Please try again");
    } finally {
      setIsLoading(false);
    }
  }
  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }
  async function signup(user: User) {
    setIsLoading(true);
    setError("");
    try {
      const result = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (!result.ok) {
        setError("Failed to Login Please try again");
        throw Error("Failed to Login Please try again");
      }
      if (
        !user.email ||
        !user.firstName ||
        !user.lastName ||
        !user.username ||
        !user.password
      ) {
        setError("Please fill all the fields.");
        throw Error("Failed to Login Please try again");
      }
      const data: User = await result.json();
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    } catch (error) {
      setError("Please fill all the fields.");
      throw Error("Failed to Login Please try again");
    } finally {
      setIsLoading(false);
    }
  }
  function clearError() {
    setError("");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoading,
        error,
        isAuthLoaded,
        signup,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
