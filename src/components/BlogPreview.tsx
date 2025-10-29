import Link from "next/link";
import Image from "next/image";
import type { Blog } from "@/data/blogs";
import styles from "./BlogPreview.module.css";

export default function BlogPreview({
  title,
  date,
  tags,
  description,
  image,
  imageAlt,
  slug,
}: Blog) {
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <article>
        {image && (
          <Image
            src={image}
            alt={imageAlt ?? title}
            width={800}
            height={450}
            className={styles.thumb}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.meta}>
          <time className={styles.date}>{date}</time>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
