import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Contact Me</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        Have a question or want to work together? Send me a message!
      </p>
      <ContactForm />
    </section>
  );
}
