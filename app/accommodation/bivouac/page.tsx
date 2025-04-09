import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Check } from "lucide-react"
import { ImageLightbox } from "@/components/image-lightbox"

export default function BivouacPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bivouac-hero.jpg"
            alt="Bivouac Camping"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">Bivouac Camping</h1>
          <p className="mt-6 max-w-2xl text-center text-xl">
            FOR WILD AND ROMANTIC SOULS, YOU CAN CHOOSE TO SLEEP UNDER THE DESERT STARS
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-4 gap-2">
            <ImageLightbox
              src="/images/bivouac-gallery-1.jpg"
              alt="Bivouac Gallery"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <ImageLightbox
              src="/images/bivouac-gallery-2.jpg"
              alt="Bivouac Gallery"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <ImageLightbox
              src="/images/bivouac-gallery-3.jpg"
              alt="Bivouac Gallery"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <ImageLightbox
              src="/images/bivouac-gallery-4.jpg"
              alt="Bivouac Gallery"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">A Magic Night Under the Stars</h2>
            <p className="mb-8 text-lg">
              Sleeping under the starry sky of the desert is a classic that is part of every traveler's imagination. And
              we love to indulge our guests by making our traditions and our Bedouin culture available to them. An
              expert guide will accompany you and set up a bivouac. It will provide what is necessary to guarantee you a
              comfortable rest and will remain near your sleep.
            </p>
            <p className="text-lg">
              Imagine falling asleep under a blanket of stars, with the Milky Way stretching across the sky above you.
              The silence of the desert, broken only by the gentle whisper of the wind, creates a peaceful atmosphere
              that connects you deeply with nature. This is the authentic Bedouin experience that has been a part of our
              culture for generations.
            </p>
          </div>

          <div className="mt-16">
            <div className="mx-auto max-w-4xl">
              <ImageLightbox
                src="/images/bivouac-main.jpg"
                alt="Bivouac Camping"
                width={800}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Bivouac Camping: HOW IT WORKS</h2>
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-gray-700">
              Our bivouac camping experience is designed to provide you with an authentic desert adventure while
              ensuring your comfort and safety. After a day of exploring the desert, your guide will select a scenic and
              sheltered location for your bivouac. They will set up a comfortable sleeping area with mattresses, clean
              bedding, and warm blankets to protect you from the cool desert night.
            </p>
            <p className="mb-6 text-gray-700">
              Your guide will prepare a traditional Bedouin dinner over an open fire, allowing you to experience the
              authentic flavors of the desert. As night falls, you'll gather around the campfire for tea, stories, and
              stargazing. Your guide will point out constellations and share Bedouin legends about the night sky.
            </p>
            <p className="mb-6 text-gray-700">
              When you're ready to sleep, you'll retire to your comfortable bedding under the vast canopy of stars. Your
              guide will remain nearby throughout the night, ensuring your safety and being available if you need
              anything. In the morning, you'll wake up to a beautiful desert sunrise, followed by a traditional Bedouin
              breakfast before continuing your adventure.
            </p>
            <p className="text-gray-700">
              The bivouac is a simple but comfortable arrangement, allowing you to connect with nature while still
              enjoying essential comforts. It's the perfect way to experience the desert as the Bedouin have for
              centuries.
            </p>
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Rates combined with overnight experiences</h2>
          <p className="mb-12 text-center text-lg text-gray-700">
            I usually offer a special experience rate to those who choose the bivouac. For you, we can arrange a day
            tour, with a night spent under the stars, and the next day another tour.
          </p>

          <div className="mb-16">
            <h3 className="mb-4 text-center text-xl font-bold">AT LEAST TWO PEOPLE</h3>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border bg-white shadow-md">
              <div className="grid grid-cols-2 border-b">
                <div className="border-r p-4 font-medium">Tour</div>
                <div className="p-4 font-medium">Price</div>
              </div>
              <div className="grid grid-cols-2 border-b">
                <div className="border-r p-4">Half day + Sunset</div>
                <div className="p-4">35 JOD</div>
              </div>
              <div className="grid grid-cols-2 border-b">
                <div className="border-r p-4">Full day + Sunset</div>
                <div className="p-4">55 JOD</div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
              When booking an experience, make sure you are ready to sleep under the stars. You will find a warm shelter
              in the unlikely event of bad weather, but the experience is meant to be enjoyed under the open sky.
            </p>
          </div>

          <h2 className="mb-8 text-center text-3xl font-bold">
            Rates for those who are booking an experience without an overnight stay
          </h2>
          <div className="mb-8">
            <h3 className="mb-4 text-center text-xl font-bold">AT LEAST TWO PEOPLE</h3>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border bg-white shadow-md">
              <div className="grid grid-cols-2 border-b">
                <div className="border-r p-4 font-medium">Tour</div>
                <div className="p-4 font-medium">Price</div>
              </div>
              <div className="grid grid-cols-2 border-b">
                <div className="border-r p-4">Half day + Sunset</div>
                <div className="p-4">25 JOD</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="border-r p-4">Full day + Sunset</div>
                <div className="p-4">45 JOD</div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
              When booking an experience, make sure you are ready to sleep under the stars. You will find a warm shelter
              in the unlikely event of bad weather, but the experience is meant to be enjoyed under the open sky.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Book your trip now!</h2>
          <div className="mx-auto max-w-lg">
            <BookingForm defaultTour="bivouac" />
          </div>
        </div>
      </section>

      {/* Expert Team */}
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
              className="inline-flex items-center rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on Whatsapp
            </a>
          </div>
        </div>
      </section>

      {/* Included/Excluded */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Included/Excluded</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span>A Mobile Guide for your tour</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span>Buffet Breakfast for morning stay</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span>Free Transfer from/to Wadi Village</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span>All Meals, Breakfast, Lunch & Dinner</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span>Sleeping mattress, blankets, and pillows</span>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                    <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span>High Elevator under the stars</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                    <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span>Full Types of Climbing, Climbing, Hiking</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                    <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span>Sleeping bags (you can rent them at the site)</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                    <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span>Personal expenses and souvenirs</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                    <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span>Anything not mentioned in the "Included" list</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* You Might Also Like */}
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">You might also like</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-48">
                <div className="absolute left-2 top-2 z-10 rounded bg-amber-500 px-2 py-1 text-xs font-medium text-white">
                  1 Day / 7 hours
                </div>
                <ImageLightbox
                  src="/images/beduin-way.jpg"
                  alt="The beduin way"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">The beduin way</h3>
                <p className="mb-4 text-sm text-gray-600">Camel ride & Overnight stay</p>
                <p className="mb-6 text-sm text-gray-700">
                  Experience the alluring beauty and breathtaking scenery of the desert through our immersive tour with
                  a experienced guide.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    From <span>100 JOD</span>
                  </div>
                  <Link href="/desert-experiences/the-beduin-way">
                    <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-48">
                <div className="absolute left-2 top-2 z-10 rounded bg-amber-500 px-2 py-1 text-xs font-medium text-white">
                  1 Day / 7 hours
                </div>
                <ImageLightbox
                  src="/images/jebel-um-addami.jpg"
                  alt="Jebel Um Addami"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">Jebel Um Addami</h3>
                <p className="mb-4 text-sm text-gray-600">Climbing Jordan's Highest Mountain</p>
                <p className="mb-6 text-sm text-gray-700">
                  Reach the summit of Jebel Um Addami, Jordan's highest peak, for amazing views on an unforgettable
                  guided adventure.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    From <span>65 JOD</span>
                  </div>
                  <Link href="/desert-experiences/um-addami-climbing">
                    <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-48">
                <div className="absolute left-2 top-2 z-10 rounded bg-amber-500 px-2 py-1 text-xs font-medium text-white">
                  2-3 hours ride
                </div>
                <ImageLightbox
                  src="/images/camel-ride.jpg"
                  alt="Camel Ride"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">Camel Ride</h3>
                <p className="mb-4 text-sm text-gray-600">Sunset or Sunrise Camel Ride</p>
                <p className="mb-6 text-sm text-gray-700">
                  Witness the desert's beauty at sunrise or sunset on a peaceful camel ride, guided by our experts for
                  an unforgettable experience.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    From <span>20 JOD</span>
                  </div>
                  <Link href="/desert-experiences/camel-rides">
                    <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
