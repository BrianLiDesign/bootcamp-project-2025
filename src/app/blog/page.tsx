import BlogModel from "@/database/blogSchema";
import connectDB from "@/database/db";
import BlogPreview from "@/components/BlogPreview";

async function getBlogs() {
  await connectDB();
  try {
    const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function BlogListPage() {
  const blogs = await getBlogs();
  if (!blogs || blogs.length === 0) {
    return (
      <section
        style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem 1rem" }}
      >
        <h1>Blog</h1>
        <p style={{ color: "#666" }}>
          No blogs found. Add some documents to your "blogs" collection in
          MongoDB Atlas.
        </p>
      </section>
    );
  }

  return (
    <section style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1>Blog</h1>
      <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
        {blogs.map((b: any) => (
          <BlogPreview
            key={b.slug}
            slug={b.slug}
            title={b.title}
            description={b.description}
            date={b.date}
            image={b.image}
            image_alt={b.image_alt}
          />
        ))}
      </div>
    </section>
  );
}
