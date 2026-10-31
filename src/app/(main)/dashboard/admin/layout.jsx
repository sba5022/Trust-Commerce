
"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { DashboardSidebar } from "@/components/DashboardSidebar";

const AdminDashboardLayout = ({ children }) => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const [mongoUser, setMongoUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const user = session?.user;

  useEffect(() => {
    if (isPending) return;

    if (!user?.email) {
      router.replace("/login");
      return;
    }

    const getMongoUser = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/users/${encodeURIComponent(user.email)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const data = await response.json();

        setMongoUser(data.user);

        // Normal user should not access admin dashboard
        if (data.user?.role !== "admin") {
          router.replace("/dashboard");
        }
      } catch (error) {
        console.error("GET MONGO USER ERROR:", error);
        router.replace("/dashboard");
      } finally {
        setLoadingUser(false);
      }
    };

    getMongoUser();
  }, [user?.email, isPending, router]);

  if (isPending || loadingUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!session || !mongoUser) {
    return null;
  }

  if (mongoUser.role !== "admin") {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-background">
      
      <DashboardSidebar/>

      <main className="flex-1 p-6 md:p-10">
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Admin Dashboard 👑
          </h1>

          <p className="text-default-500 mt-2">
            Manage users, lessons, reports and platform activity.
          </p>
        </div>

        {children}

      </main>
    </div>
  );
};

export default AdminDashboardLayout;

