import Link from "next/link";
import Image from "next/image";
import styles from "./BlogPreview.module.css";

export type BlogPreviewProps = {
  slug: string;
  title: string;
  description: string;
  date: string | Date;
  image: string;
  image_alt: string;
  tags?: string[];
};

export default function BlogPreview(props: BlogPreviewProps) {
  const { slug, title, description, date, image, image_alt, tags } = props;
  const d = typeof date === "string" ? new Date(date) : date;
  const formatted = isNaN(d.getTime()) ? "" : d.toLocaleDateString();
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <div className={styles.thumb}>
        <Image
          src={image}
          alt={image_alt}
          width={640}
          height={360}
          sizes="(max-width: 768px) 100vw, 640px"
        />
      </div>
      <div className={styles.meta}>
        <h3 className={styles.title}>{title}</h3>
        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className={styles.desc}>{description}</p>
        {formatted && <span className={styles.date}>{formatted}</span>}
      </div>
    </Link>
  );
}
