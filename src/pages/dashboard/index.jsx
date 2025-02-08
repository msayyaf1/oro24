import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DashboardContent from "@/components/dashboard/DashboardContent";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

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
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Navbar />
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
