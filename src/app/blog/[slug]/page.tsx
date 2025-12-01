import { notFound } from "next/navigation";
import connectDB from "@/database/db";
import BlogModel, { Blog } from "@/database/blogSchema";
import CommentForm from "@/components/CommentForm";
import Comment from "@/components/Comment";

type Props = { params: Promise<{ slug: string }> };

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  await connectDB();

  const blog = (await BlogModel.findOne({ slug }).lean()) as Blog | null;
  if (!blog) return notFound();

  const date = blog.date ? new Date(blog.date) : null;
  const formatted =
    date && !isNaN(date.getTime()) ? date.toLocaleDateString() : "";

  return (
    <article style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ marginBottom: 0 }}>{blog.title}</h1>
      {formatted && <p style={{ color: "#666", marginTop: 4 }}>{formatted}</p>}
      <div style={{ marginTop: 16, whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
        {blog.content}
      </div>

      <section style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 18 }}>Comments</h2>
        <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
          {(blog.comments ?? []).length === 0 && (
            <p style={{ color: "#666" }}>Be the first to comment.</p>
          )}
          {(blog.comments ?? []).map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
        <div style={{ marginTop: 16 }}>
          <CommentForm slug={slug} />
        </div>
      </section>
    </article>
  );
}
