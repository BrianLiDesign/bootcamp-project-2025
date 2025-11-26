"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function CommentForm({ slug }: { slug: string }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/blogs/${encodeURIComponent(slug)}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, message }),
        }
      );
      if (!res.ok) throw new Error(await res.text());
      setName("");
      setMessage("");
      router.refresh();
    } catch (err: any) {
      setError(err?.message ?? "Failed to post comment");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 8 }}>
      <input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ padding: 8, border: "1px solid #ddd", borderRadius: 6 }}
      />
      <textarea
        placeholder="Add a comment"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={4}
        style={{ padding: 8, border: "1px solid #ddd", borderRadius: 6 }}
      />
      <button
        disabled={submitting}
        style={{
          padding: "8px 12px",
          borderRadius: 6,
          border: "1px solid #0070f3",
          color: "#0070f3",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        {submitting ? "Posting…" : "Post Comment"}
      </button>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
    </form>
  );
}
