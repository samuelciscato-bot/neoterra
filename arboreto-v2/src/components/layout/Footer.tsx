import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-12 text-sm text-warmgray">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 md:grid-cols-4">
        <div>
          <p className="text-charcoal">Arboreto Beach Houses</p>
          <p>Neoterra Development · Playa Ocotal</p>
        </div>
        <div>
          <p className="text-charcoal">Contact</p>
          <p>hello@arboreto.cr</p>
          <p>+506 0000 0000</p>
        </div>
        <div>
          <p className="text-charcoal">Explore</p>
          <p>
            <Link href="/villas" className="hover:text-charcoal">
              Villas
            </Link>
          </p>
          <p>
            <Link href="/investment" className="hover:text-charcoal">
              Investment
            </Link>
          </p>
          <p>
            <Link href="/quiz" className="hover:text-charcoal">
              Fit Quiz
            </Link>
          </p>
          <p>
            <Link href="/investor-brief" className="hover:text-charcoal">
              Investor Brief
            </Link>
          </p>
          <p>
            <Link href="/ocotal-guide" className="hover:text-charcoal">
              Ocotal Guide
            </Link>
          </p>
        </div>
        <div>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
