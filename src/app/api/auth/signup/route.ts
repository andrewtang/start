import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password } = await req.json();

    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if user already exists
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword: hashed,
        firstName,
        lastName,
      },
    });

    return NextResponse.json({ user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName } });
  } catch (err: any) {
    console.error("Sign up error:", err);
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
} 