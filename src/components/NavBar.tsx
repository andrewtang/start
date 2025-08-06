"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 fixed top-0 left-0 z-50">
      <div className="text-2xl font-bold font-serif text-black">Double</div>
      <Link href="/auth/signup" className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition-all duration-200 font-sans">
        Sign Up
      </Link>
    </nav>
  );
} 