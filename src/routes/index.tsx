import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Menu, X, ChevronDown, Copy, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Building & Renovation Services in London | Imprimart" },
      { name: "description", content: "Looking for builders in London? Imprimart offers considered home renovations, extensions and alterations, painting and decorating, and property repairs." },
      { property: "og:title", content: "Building & Renovation Services in London | Imprimart" },
      { property: "og:description", content: "Thoughtful building, home renovations and carefully finished interiors across London." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", title: "Home renovations", text: "From a single room refresh to a more considered refurbishment, make better use of the home you already love.", list: ["Full and partial refurbishments", "Room reconfiguration", "Finishing and making good"], image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85", alt: "Warm, light-filled living room with natural materials" },
  { n: "02", title: "Extensions & alterations", text: "Practical changes to help your home work better, planned around the space and the details.", list: ["Home extensions", "Internal alterations", "Work sequencing and coordination"], image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85", alt: "Thoughtfully designed home interior with natural light" },
  { n: "03", title: "Painting & decorating", text: "A good finish starts before the first coat, with proper preparation and care around the edges.", list: ["Interior painting", "Surface preparation", "Woodwork and trim"], image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85", alt: "Refined neutral interior with carefully finished details" },
  { n: "04", title: "Repairs & finishing", text: "The smaller jobs matter, too. Bring tired, damaged or unfinished areas back into good order.", list: ["Plaster and surface repairs", "Tiling and flooring", "General property repairs"], image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85", alt: "Carefully finished residential interior with natural textures" },
];

const faqs = [
  ["Which areas of London do you cover?", "We consider projects across London and nearby areas. Share your postcode and a little about the work so we can confirm whether the location is within our service area."],
  ["Can I get a quote before committing?", "The first step is to understand the work you have in mind. Depending on the project, a visit, measurements or photographs may be needed before a considered estimate can be provided. There is no obligation to proceed."],
  ["Do you take on small jobs as well as full renovations?", "We welcome enquiries about individual repairs, decorating and finishing work, as well as larger renovation projects. Tell us what needs doing and we will be honest about whether it is a good fit."],
  ["What should I include in my first enquiry?", "A few lines about the property and the work, your postcode, an idea of timing and any photographs you can share are a helpful start. It is fine if your plans are still taking shape."],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [values, setValues] = useState({ name: "", email: "", postcode: "", work: "Home renovation", details: "" });
  const [feedback, setFeedback] = useState("");
  const [copied, setCopied] = useState(false);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = ["IMPRIMART — PROJECT ENQUIRY", "", `Name: ${values.name}`, `Email: ${values.email}`, `Postcode: ${values.postcode || "Not provided"}`, `Type of work: ${values.work}`, "", "Project details:", values.details].join("\n");
    setFeedback(text);
    setCopied(false);
  }
  async function copyEnquiry() {
    try {
      await navigator.clipboard.writeText(feedback);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }
  const navClick = () => setMenuOpen(false);

  return <main className="im-site">
    <div className="im-topline"><span>Thoughtful building. Considered finishes.</span><span>London & nearby areas</span></div>
    <header className="im-header">
      <a className="im-brand" href="#top" aria-label="Imprimart home"><span className="im-mark">i.</span><span><strong>IMPRIMART</strong><small>BUILDING & RENOVATION</small></span></a>
      <button className="im-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? "im-nav is-open" : "im-nav"} aria-label="Main navigation"><a href="#services" onClick={navClick}>Services</a><a href="#approach" onClick={navClick}>Our approach</a><a href="#faqs" onClick={navClick}>FAQs</a><a className="im-nav-cta" href="#contact" onClick={navClick}>Discuss your project <ArrowUpRight size={15}/></a></nav>
    </header>

    <section className="im-hero" id="top">
      <div className="im-hero-copy"><p className="im-eyebrow"><span/> LONDON BUILDING & RENOVATION</p><h1>Good work.<br/><em>Done properly.</em></h1><p className="im-lead">Building and home improvement, approached with care. From thoughtful renovations to the final coat of paint, we believe the difference is in the details.</p><div className="im-actions"><a className="im-button dark" href="#contact">Tell us about your project <ArrowRight size={16}/></a><a className="im-text-link" href="#services">Explore our services <ArrowUpRight size={15}/></a></div><p className="im-note">For homes that need to work a little better.</p></div>
      <div className="im-hero-image"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90" alt="Warm, light-filled home interior with natural finishes" fetchPriority="high"/><div className="im-photo-caption"><span>01 / A more considered home</span><span>London, UK</span></div><div className="im-stamp"><span>Built around</span><strong>your home.</strong><i>✳</i></div></div>
    </section>

    <section className="im-values" aria-label="Our priorities"><div><span>01</span>Careful workmanship</div><div><span>02</span>Clear communication</div><div><span>03</span>Attention to the details</div></section>

    <section className="im-intro im-section"><p className="im-kicker">01 / A THOUGHTFUL WAY TO BUILD</p><div className="im-intro-grid"><h2>Every home is different.<br/><em>The work should be, too.</em></h2><div><p>Good building work is about more than getting a job finished. It is about understanding how you live, making sensible decisions along the way and taking care over the things you see every day.</p><p>Whether you are refreshing a room, repairing what has worn out or planning a bigger change, we start by listening and work from there.</p><a className="im-text-link" href="#approach">A little about how we work <ArrowRight size={15}/></a></div></div></section>

    <section className="im-services im-section" id="services"><div className="im-section-heading"><div><p className="im-kicker">02 / WHAT WE DO</p><h2>Good foundations.<br/><em>Beautiful finishes.</em></h2></div><p>Practical help for the big changes, the small fixes and everything in between.</p></div><div className="im-service-grid">{services.map(s => <article className="im-service" key={s.n}><a className="im-service-photo" href="#contact" aria-label={`Enquire about ${s.title}`}><img src={s.image} alt={s.alt} loading="lazy"/><span><ArrowUpRight size={20}/></span></a><div className="im-service-meta"><span>{s.n}</span><span>IMPRIMART / SERVICES</span></div><h3>{s.title}</h3><p>{s.text}</p><ul>{s.list.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

    <section className="im-approach" id="approach"><div className="im-approach-photo"><img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85" alt="Quiet, carefully finished living space with timber and soft neutral tones" loading="lazy"/><span>The value is in the detail.</span></div><div className="im-approach-copy"><p className="im-kicker light">03 / OUR APPROACH</p><h2>A better building experience starts with <em>good conversations.</em></h2><p className="im-approach-lead">Clear expectations make good work easier. We aim to keep the process straightforward, with time for questions and care taken at every stage.</p><div className="im-steps"><article><span>01</span><div><h3>Listen first</h3><p>We take time to understand what matters to you and what you would like to change.</p></div></article><article><span>02</span><div><h3>Plan with purpose</h3><p>We talk through the scope, practical considerations and next steps before work begins.</p></div></article><article><span>03</span><div><h3>Finish with care</h3><p>We pay attention to preparation, the small details and leaving the work area in good order.</p></div></article></div><a className="im-button light-button" href="#contact">Start a conversation <ArrowRight size={16}/></a></div></section>

    <section className="im-process im-section"><p className="im-kicker">04 / HOW IT STARTS</p><div className="im-section-heading"><h2>One good conversation<br/><em>can get things moving.</em></h2><p>You do not need every detail worked out. A clear starting point is enough.</p></div><div className="im-process-grid"><article><span>01</span><h3>Tell us what you need</h3><p>Share the idea, the problem or the list of jobs you have in mind.</p></article><article><span>02</span><h3>Talk through the details</h3><p>Discuss the property, likely scope and any questions that need answering.</p></article><article><span>03</span><h3>Agree the next steps</h3><p>If it feels like a good fit, work out what is needed to move forward.</p></article></div></section>

    <section className="im-faq im-section" id="faqs"><div className="im-faq-intro"><p className="im-kicker">05 / A FEW USEFUL ANSWERS</p><h2>Before we<br/><em>get started.</em></h2><p>Something else on your mind? Tell us about it and we will do our best to help.</p><a className="im-text-link" href="#contact">Ask us a question <ArrowRight size={15}/></a></div><div className="im-faq-list">{faqs.map(([q,a], i) => <article className="im-faq-item" key={q}><button aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}</span><ChevronDown className={openFaq === i ? "turned" : ""} size={18}/></button>{openFaq === i && <p>{a}</p>}</article>)}</div></section>

    <section className="im-contact" id="contact"><div className="im-contact-copy"><p className="im-kicker light">06 / YOUR PROJECT, YOUR WAY</p><h2>Tell us what<br/><em>you have in mind.</em></h2><p>Big plans, a short list of repairs or just the start of an idea — tell us a little about it. We will use the details to help work out the right next step.</p><div className="im-contact-note">↗ <span>Projects across London and nearby areas.<br/>Share your postcode so we can confirm the location.</span></div></div><div className="im-form-panel"><form onSubmit={submitEnquiry}><p className="im-form-kicker">PROJECT ENQUIRY</p><h3>Start with the basics.</h3><div className="im-form-row"><label>Your name<input required autoComplete="name" value={values.name} onChange={e => setValues({...values, name:e.target.value})} placeholder="Name"/></label><label>Email address<input required type="email" autoComplete="email" value={values.email} onChange={e => setValues({...values, email:e.target.value})} placeholder="you@example.com"/></label></div><div className="im-form-row"><label>London postcode <small>Optional</small><input autoComplete="postal-code" value={values.postcode} onChange={e => setValues({...values, postcode:e.target.value})} placeholder="e.g. N1"/></label><label>Type of work<select value={values.work} onChange={e => setValues({...values, work:e.target.value})}><option>Home renovation</option><option>Extension or alteration</option><option>Painting and decorating</option><option>Repairs and finishing</option><option>Not sure yet</option></select></label></div><label>Tell us about the project<textarea required rows={4} value={values.details} onChange={e => setValues({...values, details:e.target.value})} placeholder="What would you like to change, repair or improve?"/></label><button className="im-button olive-button" type="submit">Prepare my enquiry <ArrowRight size={16}/></button><p className="im-privacy">This form prepares your enquiry text on this page. It does not send or store your personal information.</p></form>{feedback && <div className="im-feedback" role="status"><p>Your enquiry is ready. Copy the text below and paste it into an email to send it to the business.</p><textarea readOnly rows={6} value={feedback} aria-label="Prepared enquiry text"/><button type="button" onClick={copyEnquiry}><Copy size={15}/>{copied ? "Copied" : "Copy enquiry"} {copied && <Check size={15}/>}</button></div>}</div></section>

    <footer className="im-footer"><a className="im-brand footer-brand" href="#top"><span className="im-mark">i.</span><span><strong>IMPRIMART</strong><small>BUILDING & RENOVATION</small></span></a><p>Good work. Done properly.</p><nav aria-label="Footer navigation"><a href="#services">Services</a><a href="#approach">Our approach</a><a href="#faqs">FAQs</a><a href="#contact">Contact</a></nav><small className="im-copyright">© {new Date().getFullYear()} · Lazaro consegui</small></footer>
  </main>;
}
