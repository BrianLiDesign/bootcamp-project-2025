import ProjectModel from "@/database/projectSchema";
import connectDB from "@/database/db";
import Image from "next/image";

async function getProjects() {
  await connectDB();
  try {
    const projects = await ProjectModel.find().orFail();
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return (
      <section
        style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem 1rem" }}
      >
        <h1>Projects</h1>
        <p style={{ color: "#666" }}>
          No projects found. Add some documents to your "projects" collection in
          MongoDB Atlas.
        </p>
      </section>
    );
  }

  return (
    <section style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1>Projects</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        {projects.map((p: any) => (
          <div
            key={p.slug}
            style={{
              border: "1px solid #eee",
              borderRadius: 8,
              overflow: "hidden",
              transition: "box-shadow 0.2s ease",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 180,
                background: "#fafafa",
              }}
            >
              <Image
                src={p.image}
                alt={p.image_alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
            <div style={{ padding: 16 }}>
              <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>
                {p.name}
              </h3>
              <p style={{ color: "#666", marginTop: 8 }}>{p.description}</p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0070f3",
                    textDecoration: "underline",
                    fontSize: "0.9rem",
                  }}
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
