import { MotionSection } from "./useReveal";

const quotes = [
  { name: "Bilisuma Megersa", text: "Surafel is a patient mentor who turns complex topics into clear steps. His guidance was crucial for my capstone project." },
  { name: "Lucas Brown", text: "Great communication and delivery. The dashboard he built scaled with our needs and looks fantastic." },
  { name: "Abel Temesgen", text: "A reliable team player across design, code, and teaching. Highly recommended." },
];

export default function Testimonials() {
  return (
    <MotionSection id="testimonials" className="section container">
      <h2 className="heading">Testimonials</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {quotes.map((q, i) => (
          <figure key={i} className="card">
            <blockquote className="italic">“{q.text}”</blockquote>
            <figcaption className="mt-3 text-sm subtle">— {q.name}</figcaption>
          </figure>
        ))}
      </div>
    </MotionSection>
  );
}
