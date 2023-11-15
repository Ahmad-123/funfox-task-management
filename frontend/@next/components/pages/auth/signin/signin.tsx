import React from "react";
import { SigninForm } from "@organisms";
import { AuthLayout } from "@layouts";

export const Signin = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="sm:w-[500px] flex flex-wrap items-center bg-white p-4 sm:p-8 rounded-lg shadow-2xl">
        {/* Header */}
        <div className="w-full pb-4 text-center font-bold text-2xl">
          <h1>Sign In</h1>
        </div>
        <SigninForm />
      </div>
    </div>
  );
};

Signin.getLayout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>;
