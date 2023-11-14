import React, { useState } from "react";
// import { useRouter } from 'next/router'

export const MainLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <>{children}</>;
};
