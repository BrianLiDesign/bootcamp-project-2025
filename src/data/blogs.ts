export interface Blog {
  id: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  image?: string;
  imageAlt?: string;
  content: string;
  slug: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Flip That Digit — How I built a small game",
    date: "August 2025",
    tags: ["Hardware"],
    description:
      "A short post about the implementation details and lessons learned building Flip That Digit.",
    image: "/images/icons/flip-that-digit.svg",
    imageAlt: "Flip That Digit thumbnail",
    content: `
      <p>A simple game to flip the switch corresponding to the number displayed.</p>
    `,
    slug: "flip-that-digit",
  },
  {
    id: "2",
    title: "TechSavvyTeens — Teaching seniors technology",
    date: "September 2024",
    tags: ["Community", "Education", "Technology"],
    description:
      "I taught and aided many senior citizens how to safely and effectively use technology and the internet through the non-profit TechSavvyTeens.",
    image: "/images/techsavvyteens-helping-people-2.jpg",
    imageAlt: "TechSavvyTeens thumbnail",
    content: `
      <p>My experience working for TechSavvyTeens, a nonprofit organization that helps elderly people with technology, has been incredibly.</p>
      <h3>TechSavvyTeens Event</h3>
      <p>👋 That's me helping the elderly lady with her phone!</p>
      <p>Kupuna who are clueless about technology are welcome to bring their phones, laptops and other devices for assistance from Tech Savvy Teens, who will be at Windward Mall’s Center Court from 10 a.m. to 2 p.m. Saturday.</p>
      <p>The free event is open to all, not only older adults, who need tech support, personal guidance and practical advice to operate their devices.</p>
      <p>The event will also feature music, entertainment, giveaways and prizes, including a chance to win a free laptop. The event is sponsored by Koolau Pilina Fund, Acton Digital Academy, “Gimme a Break” Caring for Caregivers, Ohia Technology Group, Kupuna Power and Bell Charitable Foundation.</p>
      <p>Tech Savvy Teens is part of a program created by Acton Digital Academy, a nonprofit group based in Kaneohe. The organization is dedicated to preparing youth for the workforce with technology skills and bridging the generation gap between kupuna and middle and high school students. For more information, visit <a href="https://techsavvyteens.org" target="_blank" rel="noopener noreferrer">techsavvyteens.org</a>.</p>
      <p><em>Pat Gee, Star Advertiser</em></p>
    `,
    slug: "techsavvyteens",
  },
];
