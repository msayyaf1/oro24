import React, { useEffect } from "react";
import Image from "next/image";

import { useAuth } from "@/hooks/useAuth";
import LoginForm from "@/components/login/LoginForm";

export default function Home() {
  const { login } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
    }
  }, []);

  return (
    <div className="bg-cover bg-center bg-fixed bg-opacity-35 bg-[url('/assets/login-bg.jpg')]">
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white/95 mx-4 p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4">
          <div className="text-3xl font-bold mb-8 inline-flex justify-center w-full">
            <Image
              src="/assets/oro_logo.png"
              alt="Login"
              width={150}
              height={48}
              priority
            />
          </div>
          <LoginForm login={login} />
        </div>
      </div>
    </div>
  );
}
