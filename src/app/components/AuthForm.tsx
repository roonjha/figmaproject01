"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthForm = ({ authType }: { authType: "login" | "signup" }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    // Check if the user is already logged in
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      router.push("/"); // Redirect to home page if already logged in
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("isAuthenticated", "true"); // Store login status
    router.push("/"); // Redirect to home page
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        value={formData.password}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      />
      <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg">
        {authType === "signup" ? "Sign Up" : "Login"}
      </button>
    </form>
  );
};

export default AuthForm;
