import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FiArrowRight, FiCopy, FiSend, FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

// Optional EmailJS setup (emailjs.com) - add these in a .env file:
// VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // cards with an empty value/link (e.g. LinkedIn not added yet) are hidden
  const info = [
    { icon: <FiMail />, label: "EMAIL", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <FiPhone />, label: "PHONE", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: <FiGithub />, label: "GITHUB", value: `@${profile.githubUser}`, href: profile.github, external: true },
    { icon: <FiLinkedin />, label: "LINKEDIN", value: "Connect with me", href: profile.linkedin, external: true },
  ].filter((i) => i.value && i.href);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast.success("Email copied");
    } catch {
      toast.error("Couldn’t copy");
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    // fallback if EmailJS isn't configured yet: open the visitor's mail app
    if (!SERVICE || !TEMPLATE || !KEY) {
      const body = `${form.message}\n\n— ${form.name} (${form.email})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        SERVICE,
        TEMPLATE,
        { from_name: form.name, reply_to: form.email, subject: form.subject, message: form.message },
        { publicKey: KEY }
      );
      toast.success("Message sent!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="card contact">
          <span className="eyebrow">CONTACT</span>
          <h2>Let's build something meaningful.</h2>
          <p className="subtitle">Have an idea, product or engineering challenge? Let's talk.</p>

          <div className="btn-row center">
            <a href="#contact-form" className="btn btn-primary">Start a Conversation <FiArrowRight /></a>
            <a href={`mailto:${profile.email}`} className="btn btn-outline">Email Me</a>
            <button className="icon-btn square" onClick={copyEmail} aria-label="Copy email"><FiCopy /></button>
          </div>

          <div className="contact-info">
            {info.map((i) => (
              <a
                key={i.label}
                href={i.href}
                className="info-item"
                {...(i.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span className="row-icon">{i.icon}</span>
                <span className="info-text">
                  <span className="mono-small">{i.label}</span>
                  <strong>{i.value}</strong>
                </span>
              </a>
            ))}
          </div>

          <form id="contact-form" className="form" onSubmit={submit}>
            <div className="two">
              <label>Name<input required value={form.name} onChange={set("name")} placeholder="Your name" /></label>
              <label>Email<input required type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" /></label>
            </div>
            <label>Subject<input required value={form.subject} onChange={set("subject")} placeholder="What's this about?" /></label>
            <label>Message<textarea required rows="5" value={form.message} onChange={set("message")} placeholder="Tell me a bit about the project or opportunity." /></label>
            <button className="btn btn-primary self-center" disabled={sending}>
              <FiSend /> {sending ? "Sending…" : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}