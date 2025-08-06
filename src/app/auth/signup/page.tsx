"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      alert("Account created! Redirecting to dashboard...");
      window.location.href = "/dashboard";
    } else {
      alert(data.error || "Sign up failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-100 bg-white flex flex-col items-center">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2 mb-8">
          <span className="inline-block w-8 h-8 bg-green-500 rounded-full" />
          <span className="text-2xl font-serif font-bold text-black">Double</span>
        </div>
        {/* Headline */}
        <h1 className="text-3xl font-serif font-bold text-black mb-6">Create your account</h1>
        {/* Form */}
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="First name"
                autoComplete="given-name"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="Last name"
                autoComplete="family-name"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@email.com"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="new-password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow transition-all duration-200 text-lg"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <div className="mt-6 text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/auth/signin" className="text-green-600 font-semibold hover:underline">Sign In</Link>
        </div>
      </div>
    </div>
  );
} 