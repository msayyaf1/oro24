import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
    setIsLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    console.log("authenticted");
    router.push("/dashboard");
  };

  return { isAuthenticated, isLoading, login };
};
