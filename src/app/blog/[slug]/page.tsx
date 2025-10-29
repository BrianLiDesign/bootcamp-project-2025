import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (async () => {
    const { slug } = await params;
    const post = blogs.find((b) => b.slug === slug);
    if (!post) return {};
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        images: post.image
          ? [{ url: post.image, alt: post.imageAlt ?? post.title }]
          : [],
      },
    };
  })();
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  return (
    <article className="prose prose-neutral max-w-3xl mx-auto px-4 py-10">
      <h1>{post.title}</h1>
      <p className="opacity-70">{post.date}</p>

      {post.image && (
        <Image
          src={post.image}
          alt={post.imageAlt ?? post.title}
          width={1200}
          height={630}
          className="rounded-xl my-6"
          priority
        />
      )}

      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      {post.tags?.length ? (
        <ul className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <li key={t} className="text-xs bg-gray-100 rounded px-2 py-1">
              #{t}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
