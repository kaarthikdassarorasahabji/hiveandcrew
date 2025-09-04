import { useParams, Link } from "react-router-dom";

const posts: Record<string, { title: string; body: string; date: string }> = {
  "hive-and-crew": {
    title: "Hive & Crew — The Story, the System, the Standard",
    date: "2025-02-01",
    body: `Hive & Crew began with a simple conviction: beautiful products and powerful code deserve to live under the same roof. Design Hive represents our craft in apparel and art—tactile, expressive, human. Code Crew represents our engineering discipline—reliable, scalable, and quietly elegant. Together, they create a studio that treats a T‑shirt drop and an ecommerce rollout with the same seriousness, the same taste, and the same obsession for detail.

We don’t chase trends; we operate from principles. A principle outlives a tool. Tools change—frameworks, APIs, social platforms. Principles anchor. Simplicity over noise. Performance over gimmicks. Clarity over cleverness. We apply these equally to a cotton weave, to a checkout flow, and to the culture inside our team.

Vision: make premium accessible without diluting it. For apparel, that means fabrics you want to wear every day and prints you’re proud to own ten years from now. For software, it means shipping sites that the founders of tomorrow would trust on day one—and still love at scale.

What we build must pass three gates: it should be useful, usable, and desirable. Useful is function—it solves the right problem. Usable is form—clear, obvious, forgiving. Desirable is emotion—the quiet ‘wow’ that keeps attention without shouting. Most teams stop at the first gate. Some make it to the second. We live in the third.

The System
-----------
We designed Hive & Crew as a system, not a pile of projects. That system starts with a shared design language.

Typography is our tone of voice. Inter, Poppins, and Manrope form a typographic palette that can whisper or roar. We use weight and scale to carry hierarchy; color is restrained—charcoal base, teal primary, amber accent—so your eyes rest while the content works.

Motion is our fourth dimension. We use GSAP and Framer Motion like a cinematographer uses light—never gratuitous, always in service of meaning. Our intro sequence (the ‘store opening’ shutters, the subtle zoom) sets an expectation: this is a place that cares.

Engineering is our craft secret. We prefer small, composable pieces, a clear data flow, and strict type safety. React with Vite gives us speed and clarity. On the backend, Express remains human‑readable and battle‑tested. We model content and commerce as first‑class citizens so that a shirt can launch with the same gravity as a feature.

Performance is a love letter to users. We budget like architects: first paint, first interaction, and scroll stutters. Lazy load what the eye can’t see. Preload what the hand will need. We test under average devices, because excellence should be inclusive.

The Culture
-----------
Our culture can be summarized in three phrases: design with intention, code with discipline, deliver with pride. Intention means every pixel and line exists for a reason. Discipline means we respect constraints—deadlines, budgets, device limitations—because constraints breed creativity. Pride means we stand behind what we ship; if it breaks, we fix it; if it confuses, we clarify; if it delights, we keep going.

We are twelve specialists who act as one team. Artists sit with engineers. Marketers review pull requests. Founders join crits. There is no ‘handoff’; there is a handshake. The strongest idea wins, and everyone helps it win.

E‑commerce Philosophy
---------------------
Ecommerce deserves more than templates. It deserves stories that sell by telling the truth well. We architect product pages around a few timeless laws: show the product in context, show it up close, and show it in use. Then reduce friction: clean size selection, clear availability, and checkout that feels effortless.

Payments are infrastructure, not a feature battle. Razorpay and Stripe both earn their place by being reliable. We integrate with care and measure with humility. We don’t ask for what we don’t need; we store what we must protect; we secure what we store.

Analytics are not the product. They are the mirror. We look, learn, adjust—and then we step away to build again. Vanity metrics don’t ship value. Conversion is a result, not a goal.

The Apparel Ethos
-----------------
Design Hive is the canvas where art meets utility. We prefer cuts that flatter real bodies and prints that wear like a signature, not a billboard. Our garments are designed to age beautifully; the goal is not the first wear photo, but the hundredth wear memory.

We source responsibly. Sustainability is not marketing; it is process. Fewer, better drops; honest pricing; transparent supply. When we experiment, we do so with purpose—innovating inks, materials, and finishing that feel as good as they look.

Service Tiers That Respect Reality
----------------------------------
Our service tiers were designed for real stages:
• Starter: a focused one‑pager that tells a tight story.
• Landing Page: conversion‑first, animation‑aware, fast.
• E‑commerce: catalog, cart, payments, performance.
• Premium: bespoke UX, integrations, experiments.
• Automation: systems that save hours and reduce errors.
• Maintenance: the humility to keep things running.

Behind the Scenes
-----------------
Our process is a dialogue. We design in the open, prototype early, and demo often. We prefer small, frequent releases over grand reveals. Contracts are clear; communication is clearer. We say no to anything that will compromise the experience.

Every build starts with a brief. Not a document that gathers dust, but a living artifact: audience, outcomes, constraints, must‑haves, nice‑to‑haves. We align on tradeoffs before writing a line of code. Then we measure twice and cut once.

On Animation
------------
Animation is language. The wrong word at the wrong time confuses. The right word at the right time persuades. Our GSAP sequences use easing curves that feel human, durations that breathe, and choreography that guides. We animate entrance, context, and feedback—not everything, not nothing.

On Accessibility
----------------
Accessibility is table stakes. Color contrast, focus states, keyboard paths, semantic HTML. We test with screen readers, we respect motion preferences, and we treat inclusive design as the path to universal elegance.

On Security
-----------
Security is everyone’s job. We minimize data collection, we encrypt at rest and in transit, and we keep secrets out of code. We assume breach and plan response. Users should never pay for our mistakes.

Where We’re Headed
------------------
Hive & Crew will remain proudly dual. The artist will continue to inform the engineer, and the engineer will continue to empower the artist. We’ll expand the shop with limited editions and collaborations that mean something. We’ll expand services with platforms and playbooks that compound: design systems, conversion frameworks, automation libraries.

Our promise is simple: if we build it, it will be beautiful, fast, and honest. If we sell it, it will be worth more than it costs. If we say we’ll do it, we will.

Thank you for being here—whether you came for the canvas or the code. We’re building Hive & Crew for people like you: ambitious, meticulous, and allergic to average. Welcome to the crew.`
  },
  launch: { title: "Hive & Crew Launch", body: "We launched a dual‑brand platform combining Design Hive and Code Crew.", date: "2025-01-10" },
  "gsap-intro": { title: "Crafting the GSAP Intro", body: "The opening shutter + zoom sequence is built with GSAP timelines for buttery motion.", date: "2025-01-18" },
  "ecommerce-stack": { title: "Our E‑commerce Stack", body: "React + Vite, Tailwind, Express backend, and Stripe/Razorpay planned.", date: "2025-01-24" },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? posts[slug] : undefined;
  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <p>Post not found.</p>
        <Link to="/blog" className="text-primary">← Back to blog</Link>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/blog" className="text-primary text-sm">← Back</Link>
      <h1 className="mt-2 text-3xl md:text-4xl font-extrabold">{post.title}</h1>
      <div className="text-xs text-foreground/60">{new Date(post.date).toLocaleDateString()}</div>
      <div className="prose prose-invert mt-6 max-w-none">
        <p>{post.body}</p>
      </div>
    </div>
  );
}
