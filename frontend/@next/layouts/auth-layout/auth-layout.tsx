import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Loader } from "@molecules";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router?.isReady) return;
    if (router?.asPath.startsWith("/app") && !token) {
      void router?.push("/");
    } else if (!router?.asPath.startsWith("/app") && token) {
      void router?.push("/app/tasks");
    } else {
      setLoading(false);
    }
  }, [router.isReady]);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};
