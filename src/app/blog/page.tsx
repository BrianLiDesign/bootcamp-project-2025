// src/app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";

export default function BlogIndex() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Blog</h1>

      <ul className="space-y-6">
        {blogs.map((b) => (
          <li key={b.id} className="border rounded-xl p-4">
            <Link href={`/blog/${b.slug}`} className="block">
              <div className="flex gap-4 items-start">
                {b.image && (
                  <Image
                    src={b.image}
                    alt={b.imageAlt ?? b.title}
                    width={96}
                    height={96}
                    className="rounded-md object-cover"
                  />
                )}
                <div>
                  <h2 className="text-xl font-semibold">{b.title}</h2>
                  <p className="text-sm opacity-70">{b.date}</p>
                  <p className="mt-2">{b.description}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
