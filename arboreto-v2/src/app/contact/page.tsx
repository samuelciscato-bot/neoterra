export default function ContactPage() {
  return (
    <div className="bg-sand">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">Contact</p>
        <h1 className="mt-4 text-display text-4xl md:text-5xl">Let's talk.</h1>
        <p className="mt-4 max-w-2xl text-warmgray">
          Whether you are ready to buy or exploring, our team will respond within 24 hours with the
          right next step.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-[32px] border border-black/5 bg-white p-8 shadow-premium">
            <div className="grid gap-4">
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-warmgray">Full name</label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-offwhite px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-warmgray">Email</label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-offwhite px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-warmgray">
                  Country of residence
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-offwhite px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-warmgray">
                  Timeline
                </label>
                <select className="mt-2 w-full rounded-2xl border border-black/10 bg-offwhite px-4 py-3 text-sm">
                  <option>Ready now</option>
                  <option>Within 6 months</option>
                  <option>Within 12 months</option>
                  <option>Exploring</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-warmgray">Message</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-offwhite px-4 py-3 text-sm"
                />
              </div>
              <button type="submit" className="btn-primary text-xs">
                Send inquiry
              </button>
            </div>
          </form>
          <div className="rounded-[32px] border border-black/5 bg-white p-8 shadow-premium">
            <p className="text-xs uppercase tracking-[0.3em] text-warmgray">Alternative channels</p>
            <h2 className="mt-4 text-display text-2xl">Prefer a direct call?</h2>
            <p className="mt-3 text-sm text-warmgray">
              Book a private consultation or reach our team directly.
            </p>
            <div className="mt-6 space-y-4 text-sm text-warmgray">
              <p>hello@arboreto.cr</p>
              <p>WhatsApp: +506 0000 0000</p>
              <p>Response time: within 24 hours</p>
            </div>
            <button type="button" className="btn-secondary mt-6 w-full text-xs">
              Schedule a call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
