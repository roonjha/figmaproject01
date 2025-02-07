"use client";

import React from "react";
import { useParams } from "next/navigation";
import AuthForm from "@/app/components/AuthForm";

const AuthPage = () => {
  const { authType } = useParams(); // Get dynamic route value (login or signup)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">
          {authType === "signup" ? "Create Account" : "Welcome Back"}
        </h1>
        <AuthForm authType={authType as "login" | "signup"} />
      </div>
    </div>
  );
};

export default AuthPage;
