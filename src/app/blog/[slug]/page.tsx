import { notFound } from "next/navigation";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";
import CommentForm from "@/components/CommentForm";

type Props = { params: { slug: string } };

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = params;
  await connectDB();

  const blog = await BlogModel.findOne({ slug }).lean();
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
          {(blog.comments ?? []).map((c: any, idx: number) => (
            <div
              key={idx}
              style={{ border: "1px solid #eee", padding: 12, borderRadius: 8 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 4,
                }}
              >
                <strong>{c.name}</strong>
                <span style={{ color: "#999", fontSize: 12 }}>
                  {c.createdAt ? new Date(c.createdAt).toLocaleString() : ""}
                </span>
              </div>
              <div style={{ whiteSpace: "pre-wrap" }}>{c.message}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16 }}>
          <CommentForm slug={slug} />
        </div>
      </section>
    </article>
  );
}
