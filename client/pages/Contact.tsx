import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return alert("Please fill required fields");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSent(false), 3500);
    } catch (err) {
      alert("Unable to send message. Please try WhatsApp or email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold">Contact Us</h1>
      <p className="text-foreground/70">We'd love to hear about your project. Reach out and we'll respond quickly.</p>

      <div className="mt-8 grid gap-8 md:grid-cols-5">
        <form onSubmit={onSubmit} className="md:col-span-3 rounded-lg border glass p-6 glow-min card-neon">
          <div className="grid gap-4">
            <div>
              <label className="text-sm">Name*</label>
              <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full h-11 rounded-md border bg-background px-3 focus:border-primary focus:outline-none" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Email*</label>
                <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full h-11 rounded-md border bg-background px-3 focus:border-primary focus:outline-none" />
              </div>
              <div>
                <label className="text-sm">Phone</label>
                <input value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} className="mt-1 w-full h-11 rounded-md border bg-background px-3 focus:border-primary focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="text-sm">Message*</label>
              <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} rows={6} className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:border-primary focus:outline-none" />
            </div>
            <div className="flex items-center gap-3">
              <button type="submit" disabled={loading} className="rounded-md bg-primary px-5 py-2 text-sm text-primary-foreground disabled:opacity-60">{sent ? "Sent!" : (loading ? "Sending..." : "Send Message")}</button>
              <a href={`https://wa.me/917814051678?text=${encodeURIComponent(`Hi Hive & Crew, I'm ${form.name}. I need help with: ${form.message || ''}`)}`} target="_blank" rel="noreferrer" className="rounded-md border border-primary/40 px-5 py-2 text-sm hover:bg-primary/10">WhatsApp</a>
            </div>
          </div>
        </form>
        <aside className="md:col-span-2 rounded-lg border glass p-6 card-neon">
          <h3 className="font-semibold">Reach us</h3>
          <div className="mt-3 text-sm text-foreground/70 space-y-2">
            <div>Email: kartikdassarora@gmail.com</div>
            <div>Phone: +91 7814051678</div>
            <div>Hours: Mon–Sat, 10am–7pm IST</div>
          </div>
          <div className="mt-4">
            <a href="https://wa.me/917814051678" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-primary/40 px-4 py-2 text-sm hover:bg-primary/10">Chat on WhatsApp</a>
          </div>
          <div className="mt-6">
            <iframe title="map" className="w-full h-48 rounded-md border" src="https://maps.google.com/maps?q=Ludhiana%2C%20Punjab&t=&z=12&ie=UTF8&iwloc=&output=embed" />
          </div>
        </aside>
      </div>
    </div>
  );
}
