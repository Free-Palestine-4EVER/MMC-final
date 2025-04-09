import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-6">
            <h3 className="text-4xl font-bold">Travel beyond your imagination, with Mohammed Mutlak Camp</h3>
            <div className="border-t border-white/30 pt-6">
              {/* Make the logo white using CSS filter */}
              <Image
                src="/images/new-logo.png"
                alt="Mohammed Mutlak Camp"
                width={300}
                height={100}
                className="h-auto brightness-0 invert"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/accommodation" className="hover:text-amber-400 transition-colors">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link href="/desert-experiences" className="hover:text-amber-400 transition-colors">
                  Desert Experiences
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Top destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/desert-experiences/full-day-jeep-tour" className="hover:text-amber-400 transition-colors">
                  Full day jeep
                </Link>
              </li>
              <li>
                <Link href="/desert-experiences/half-day-jeep-tour" className="hover:text-amber-400 transition-colors">
                  Half day jeep
                </Link>
              </li>
              <li>
                <Link
                  href="/desert-experiences/jebel-burdah-climbing"
                  className="hover:text-amber-400 transition-colors"
                >
                  Jebel Burdah Climbing
                </Link>
              </li>
              <li>
                <Link href="/desert-experiences/um-addami-climbing" className="hover:text-amber-400 transition-colors">
                  Jebel Um Addami
                </Link>
              </li>
              <li>
                <Link href="/desert-experiences/all-in-one-day" className="hover:text-amber-400 transition-colors">
                  All in one Day
                </Link>
              </li>
              <li>
                <Link href="/desert-experiences/the-beduin-way" className="hover:text-amber-400 transition-colors">
                  The Beduin Way
                </Link>
              </li>
              <li>
                <Link href="/desert-experiences/jebel-khash-route" className="hover:text-amber-400 transition-colors">
                  Jebel Khash Route
                </Link>
              </li>
              <li>
                <Link href="/desert-experiences/trekking" className="hover:text-amber-400 transition-colors">
                  Trekking in the Wild
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:mohammed.mutlak.camp@gmail.com" className="hover:text-amber-400 transition-colors">
                  mohammed.mutlak.camp@gmail.com
                </Link>
              </li>
              <li>
                <a href="tel:+962777424837" className="hover:text-amber-400 transition-colors">
                  +962777424837
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4 border-t border-slate-800 pt-8">
          <a
            href="https://web.facebook.com/mohammedmmutlakcamp/?_rdc=1&_rdr#"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-800 p-2 hover:bg-amber-500 transition-colors"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/mohammed_mutlak_camp/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-800 p-2 hover:bg-amber-500 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
