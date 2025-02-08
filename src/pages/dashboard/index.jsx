import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaBuilding } from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";
import DashboardContent from "@/components/DashboardContent";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    } else {
    }
  }, [router]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-black text-white p-4">
        <Image
          src="/assets/oro_logo.png"
          alt="Login"
          width={150}
          height={48}
          priority
        />
        <div>
          <ul className="flex flex-col">
            <li className="mb-2 inline-flex justify-start items-center cursor-pointer hover:text-gray-500 text-white">
              <FaTachometerAlt className="mr-1" /> Dashboard
            </li>
            <li className="mb-2 inline-flex justify-start items-center cursor-pointer hover:text-gray-500 text-white">
              <FaBuilding className="mr-1"/> Units
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white text-white p-4 shadow-black shadow-lg">
          <h1 className="text-xl font-bold">Navbar</h1>
        </header>

        {/* Dashboard Area */}
        <section className="flex h-full p-8 bg-gray-100 w-full">
          <DashboardContent />
        </section>
      </main>
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <ProtectedRoute>{page}</ProtectedRoute>;
};
