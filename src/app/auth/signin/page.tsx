"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-100 bg-white flex flex-col items-center">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2 mb-8">
          <span className="inline-block w-8 h-8 bg-green-500 rounded-full" />
          <span className="text-2xl font-serif font-bold text-black">Double</span>
        </div>
        {/* Headline */}
        <h1 className="text-3xl font-serif font-bold text-black mb-6">Sign in to your account</h1>
        {/* Form */}
        <form className="w-full flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@email.com"
              autoComplete="email"
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
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow transition-all duration-200 text-lg"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/auth/signup" className="text-green-600 font-semibold hover:underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
