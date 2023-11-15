import { Header, Loader } from "@molecules";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({
  children,
}): JSX.Element | null => {
  const token = localStorage.getItem("token");
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;
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

  return (
    <div>
      {/* header */}
      <Header />
      {/* children */}
      <div className="min-h-[calc(100vh-90px)] bg-gray-100 flex">
        {children}
      </div>
    </div>
  );
};
