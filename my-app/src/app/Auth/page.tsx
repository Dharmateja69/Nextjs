"use client";
// ...existing code...
import { useRouter } from "next/navigation";
import { ComponentType, useEffect } from "react";
// ...existing code...
export const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  return (props: P) => {
    const router = useRouter();
    const isAuthenticated =
      typeof window !== "undefined" && localStorage.getItem("token");

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/login");
      }
    }, []);

    if (!isAuthenticated) return null;
    return <WrappedComponent {...props} />;
  };
};
// ...existing code...
