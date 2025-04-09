import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wadi Rum Accommodation | Bedouin Camps & Desert Camping",
  description:
    "Stay in authentic Bedouin tented camps or experience bivouac camping under the stars in Wadi Rum. Book your desert accommodation with Mohammed Mutlak Camp for an unforgettable experience.",
  keywords:
    "Wadi Rum accommodation, desert camping Jordan, Bedouin camp Wadi Rum, bivouac camping, luxury desert camp, Wadi Rum tented camp, stargazing Jordan, desert glamping",
}

export default function AccommodationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/accommodation-hero.jpg"
            alt="Bedouin tented camp accommodation in Wadi Rum desert with mountains in background"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex items-center justify-center py-24 md:py-32 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">ACCOMMODATION</h1>
        </div>
      </section>

      {/* Intro Section */}
      <AnimateOnScroll>
        <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-2xl font-bold">Accommodation</h2>
            <h3 className="mb-8 text-4xl font-bold">We offer two solutions</h3>
            <p className="mx-auto max-w-3xl text-lg">
              We offer two different solutions to spend the night in the desert: our organized Tented Camp or a Wilder
              Experience (bivouac camping).
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Accommodation Options */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Tented Camp */}
            <AnimateOnScroll animation="slide-from-left">
              <div className="rounded-lg bg-white p-6 shadow-lg card-hover">
                <div className="mb-6 overflow-hidden rounded-lg img-hover-zoom">
                  <Image
                    src="/images/tented-camp.jpg"
                    alt="Mohammed Mutlak Camp"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="mt-2 grid grid-cols-4 gap-2">
                    <Image
                      src="/images/tented-camp-1.jpg"
                      alt="Tented Camp"
                      width={150}
                      height={100}
                      className="rounded-lg"
                    />
                    <Image
                      src="/images/tented-camp-2.jpg"
                      alt="Tented Camp"
                      width={150}
                      height={100}
                      className="rounded-lg"
                    />
                    <Image
                      src="/images/tented-camp-3.jpg"
                      alt="Tented Camp"
                      width={150}
                      height={100}
                      className="rounded-lg"
                    />
                    <Image
                      src="/images/tented-camp-4.jpg"
                      alt="Tented Camp"
                      width={150}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold">Mohammed Mutlak Camp</h3>
                <p className="mb-6 text-gray-700">
                  MMC boasts several firsts: it is the first authorized Camp of the Wadi Rum Protected Area. It is the
                  one best positioned, and enjoys unforgettable 360-degree panoramas. Ideal for enjoying sunrises and
                  sunsets at any time of day or night. Hundreds of rave reviews underscore this level of excellence
                  throughout. Great care, cleanliness, peace, and safety in the middle of the desert and be able to
                  enjoy some comfort!
                </p>
                <Link href="/accommodation/our-tented-camp">
                  <Button className="bg-amber-500 hover:bg-amber-600 btn-hover-effect">Learn More</Button>
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Bivouac Camping */}
            <AnimateOnScroll animation="slide-from-right" delay={200}>
              <div className="rounded-lg bg-white p-6 shadow-lg card-hover">
                <div className="mb-6 overflow-hidden rounded-lg img-hover-zoom">
                  <Image
                    src="/images/bivouac-camping.jpg"
                    alt="Bivouac camping under the stars"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="mt-2 grid grid-cols-4 gap-2">
                    <Image
                      src="/images/bivouac-1.jpg"
                      alt="Bivouac Camping"
                      width={150}
                      height={100}
                      className="rounded-lg"
                    />
                    <Image
                      src="/images/bivouac-2.jpg"
                      alt="Bivouac Camping"
                      width={150}
                      height={100}
                      className="rounded-lg"
                    />
                    <Image
                      src="/images/bivouac-3.jpg"
                      alt="Bivouac Camping"
                      width={150}
                      height={100}
                      className="rounded-lg"
                    />
                    <Image
                      src="/images/bivouac-4.jpg"
                      alt="Bivouac Camping"
                      width={150}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold">Bivouac camping under the stars</h3>
                <p className="mb-6 text-gray-700">
                  Sleeping under the starry sky of the desert is a classic that is part of every traveler's imagination.
                  And we love to indulge our guests by making our traditions and our Bedouin culture available to them.
                  An expert guide will accompany you and set up a bivouac. It will provide what is necessary to
                  guarantee you a comfortable rest and will remain near your sleep.
                </p>
                <Link href="/accommodation/bivouac">
                  <Button className="bg-amber-500 hover:bg-amber-600 btn-hover-effect">Learn More</Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Partners */}
      <AnimateOnScroll>
        <section className="border-t py-12">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <Image
                src="/images/tripadvisor.png"
                alt="TripAdvisor"
                width={120}
                height={40}
                className="h-auto w-auto"
              />
              <Image src="/images/expedia.png" alt="Expedia" width={120} height={40} className="h-auto w-auto" />
              <Image src="/images/booking.png" alt="Booking.com" width={120} height={40} className="h-auto w-auto" />
              <Image src="/images/trip.png" alt="Trip.com" width={120} height={40} className="h-auto w-auto" />
              <Image src="/images/airbnb.png" alt="Airbnb" width={120} height={40} className="h-auto w-auto" />
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Expert Team */}
      <AnimateOnScroll>
        <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-2xl font-bold">Our Expert Team</h2>
            <h3 className="mb-8 text-4xl font-bold">We're here to help, 24/7.</h3>
            <p className="mb-12 text-lg">Connect with our expert travel consultants to plan your next trip.</p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/images/team-1.jpg"
                  alt="Team Member"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/images/team-2.jpg"
                  alt="Team Member"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/images/team-3.jpg"
                  alt="Team Member"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/images/team-4.jpg"
                  alt="Team Member"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/images/team-5.jpg"
                  alt="Team Member"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/962777424937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 btn-hover-effect"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361
-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
                Chat on Whatsapp
              </a>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  )
}
