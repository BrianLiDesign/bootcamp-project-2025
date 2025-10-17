/**
 **
 * @property {string} title - Post title
 * @property {string} date - Human readable date (e.g. "August 2025")
 * @property {string} description - Short summary
 * @property {string} image - Path to thumbnail image
 * @property {string} imageAlt - Alt text for the thumbnail
 * @property {string} slug - Url slug (used to build the post link)
 */

export type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Flip That Digit — How I built a small game",
    date: "August 2025",
    description:
      "A short post about the implementation details and lessons learned building Flip That Digit.",
    image: "/assets/images/icons/flip-that-digit.svg",
    imageAlt: "Flip That Digit thumbnail",
    slug: "flip-that-digit",
  },
  {
    title: "TechSavvyTeens — Teaching seniors technology",
    date: "September 2024",
    description:
      "I taught and aided many senior citizens how to safely and effectively use technology and the internet through the non-profit TechSavvyTeens.",
    image: "/assets/images/techsavvyteens-helping-people-2.jpg",
    imageAlt: "TechSavvyTeens thumbnail",
    slug: "techsavvyteens",
  },
  {
    title: "Chrome Extension: In progress",
    date: "October 2025",
    description: "In progress",
    image: "/assets/images/icons/html.svg",
    imageAlt: "In progress thumbnail",
    slug: "in-progress",
  },
];

function createBlogCard(blog: Blog): HTMLElement {
  const article = document.createElement("article");
  article.className = "blog-card";

  const link = document.createElement("a");
  link.href = `/${blog.slug}.html`;
  link.className = "blog-link";

  const img = document.createElement("img");
  img.src = blog.image;
  img.alt = blog.imageAlt;
  img.className = "blog-thumb";

  const meta = document.createElement("div");
  meta.className = "blog-meta";

  const title = document.createElement("h2");
  title.className = "blog-title";
  title.textContent = blog.title;

  const date = document.createElement("p");
  date.className = "blog-date";
  date.textContent = blog.date;

  const desc = document.createElement("p");
  desc.className = "blog-desc";
  desc.textContent = blog.description;

  meta.appendChild(title);
  meta.appendChild(date);
  meta.appendChild(desc);

  link.appendChild(img);
  link.appendChild(meta);
  article.appendChild(link);

  return article;
}

export function renderBlogs(containerId = "blog-container"): void {
  const container = document.getElementById(containerId);
  if (!container) return;

  // clear existing
  container.innerHTML = "";

  blogs.forEach((b) => {
    const node = createBlogCard(b);
    container.appendChild(node);
  });
}

// Auto-run when loaded in browser
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    renderBlogs();
  });
}

// export data for later use
export { blogs };
