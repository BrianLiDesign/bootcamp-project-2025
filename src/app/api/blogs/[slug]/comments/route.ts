import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

type IParams = { params: Promise<{ slug: string }> };

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params;
  try {
    const body = await req.json();
    const name = (body.name ?? "").trim();
    const message = (body.message ?? "").trim();
    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required." },
        { status: 400 }
      );
    }
    const blog = await Blog.findOne({ slug }).orFail();
    blog.comments = blog.comments || [];
    blog.comments.push({ name, message, createdAt: new Date() } as any);
    await blog.save();
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Unable to add comment." },
      { status: 400 }
    );
  }
}
