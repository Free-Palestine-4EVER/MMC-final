import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Check } from "lucide-react"
import { ImageLightbox } from "@/components/image-lightbox"

export default function BubbleCampPartnerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bubble-camp-hero.jpg"
            alt="Bubble Camp Experience"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">Bubble Camp Partner</h1>
          <p className="mt-6 max-w-2xl text-center text-xl">
            EXPERIENCE LUXURY UNDER THE STARS IN OUR TRANSPARENT BUBBLE ACCOMMODATIONS
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold">Bubble Camp Experience</h2>
          <h3 className="mb-8 text-4xl font-bold">Sleep Under the Stars in Comfort</h3>
          <p className="mx-auto max-w-3xl text-lg">
            In partnership with our premium bubble accommodation providers, we offer a unique opportunity to experience
            the magic of Wadi Rum's night sky from the comfort of a transparent bubble dome. Choose between our luxury
            or standard options for an unforgettable desert night.
          </p>
        </div>
      </section>

      {/* Bubble Options */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Luxury Bubble */}
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-6 overflow-hidden rounded-lg">
                <ImageLightbox
                  src="/images/luxury-bubble.jpg"
                  alt="Luxury Bubble Camp"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <ImageLightbox
                    src="/images/luxury-bubble-1.jpg"
                    alt="Luxury Bubble"
                    width={200}
                    height={150}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                  <ImageLightbox
                    src="/images/luxury-bubble-2.jpg"
                    alt="Luxury Bubble"
                    width={200}
                    height={150}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                  <ImageLightbox
                    src="/images/luxury-bubble-3.jpg"
                    alt="Luxury Bubble"
                    width={200}
                    height={150}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Luxury Bubble Experience</h3>
              <p className="mb-6 text-gray-700">
                Our premium bubble accommodations offer the ultimate desert glamping experience. Each luxury bubble
                features a comfortable king-size bed with premium linens, private bathroom facilities, air conditioning,
                and a private terrace for stargazing. The transparent ceiling provides unobstructed views of the night
                sky, while the opaque walls ensure privacy.
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>King-size bed with luxury linens</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Private en-suite bathroom</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Climate control (heating/cooling)</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Private terrace with seating area</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Gourmet dinner and breakfast included</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Welcome drink and amenities</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-lg font-bold text-amber-600">Price: 120 JOD per Person</div>
                <div className="text-sm text-gray-600">(Based on double occupancy)</div>
              </div>
              <Link href="/contact-us">
                <Button className="w-full bg-amber-500 hover:bg-amber-600">Book Luxury Bubble</Button>
              </Link>
            </div>

            {/* Standard Bubble */}
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-6 overflow-hidden rounded-lg">
                <ImageLightbox
                  src="/images/standard-bubble.jpg"
                  alt="Standard Bubble Camp"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <ImageLightbox
                    src="/images/standard-bubble-1.jpg"
                    alt="Standard Bubble"
                    width={200}
                    height={150}
                    className="rounded-lg"
                  />
                  <ImageLightbox
                    src="/images/standard-bubble-2.jpg"
                    alt="Standard Bubble"
                    width={200}
                    height={150}
                    className="rounded-lg"
                  />
                  <ImageLightbox
                    src="/images/standard-bubble-3.jpg"
                    alt="Standard Bubble"
                    width={200}
                    height={150}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Normal Bubble Experience</h3>
              <p className="mb-6 text-gray-700">
                Our standard bubble accommodations offer a comfortable and unique way to experience the desert night
                sky. Each bubble features a comfortable queen-size bed, shared bathroom facilities in a nearby building,
                and a small seating area. The transparent ceiling provides stunning views of the stars, while the
                partially opaque walls ensure privacy.
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Queen-size bed with comfortable linens</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Access to shared bathroom facilities</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Fan for air circulation</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Small seating area</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Traditional dinner and breakfast included</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Welcome tea</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-lg font-bold text-amber-600">Price: 120 JOD per person</div>
                <div className="text-sm text-gray-600">(Based on double occupancy)</div>
              </div>
              <Link href="/contact-us">
                <Button className="w-full bg-amber-500 hover:bg-amber-600">Book Standard Bubble</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Details */}
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">The Bubble Camp Experience</h2>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Stargazing Paradise</h3>
              <p className="mb-4 text-gray-700">
                Wadi Rum is renowned for its clear night skies, free from light pollution, making it one of the best
                places in the world for stargazing. Our bubble accommodations are strategically placed to offer the best
                views of the night sky, allowing you to fall asleep under a blanket of stars.
              </p>
              <p className="text-gray-700">
                During certain times of the year, you may witness meteor showers, clearly see the Milky Way, and
                identify constellations with unprecedented clarity. Our staff can provide information about the night
                sky and even arrange for a telescope to enhance your stargazing experience.
              </p>
            </div>
            <div>
              <ImageLightbox
                src="/images/stargazing-bubble.jpg"
                alt="Stargazing from Bubble"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <ImageLightbox
                src="/images/bubble-dining.jpg"
                alt="Dining Experience"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="mb-4 text-2xl font-bold">Culinary Delights</h3>
              <p className="mb-4 text-gray-700">
                Your bubble camp experience includes authentic Bedouin cuisine prepared with fresh, local ingredients.
                Dinner is served under the stars, offering a magical dining experience in the heart of the desert.
              </p>
              <p className="text-gray-700">
                Wake up to a delicious breakfast with a view of the desert landscape bathed in morning light. Special
                dietary requirements can be accommodated with advance notice, ensuring everyone can enjoy the culinary
                aspect of their desert stay.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Desert Activities</h3>
              <p className="mb-4 text-gray-700">
                Enhance your bubble camp stay with a range of desert activities. We can arrange jeep tours, camel rides,
                hiking expeditions, and sandboarding experiences to make your Wadi Rum adventure complete.
              </p>
              <p className="text-gray-700">
                Sunset and sunrise are particularly magical times in the desert. Our bubble camps are positioned to
                offer spectacular views of these daily phenomena, creating perfect photo opportunities and memorable
                moments.
              </p>
            </div>
            <div>
              <ImageLightbox
                src="/images/bubble-activities.jpg"
                alt="Desert Activities"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Book Your Bubble Experience</h2>
          <div className="mx-auto max-w-lg">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>

          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">Are the bubbles air-conditioned?</h3>
              <p className="text-gray-700">
                Luxury bubbles are equipped with climate control systems that provide both heating and cooling. Standard
                bubbles have fans for air circulation but do not have full air conditioning. The desert temperature
                drops significantly at night, making for comfortable sleeping conditions in most seasons.
              </p>
            </div>

            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">How private are the bubbles?</h3>
              <p className="text-gray-700">
                Both luxury and standard bubbles offer privacy. The ceiling is transparent for stargazing, while the
                walls are opaque or partially opaque. The bubbles are spaced apart to ensure privacy, and each has its
                own designated area. Luxury bubbles include private bathrooms, while standard bubbles share facilities.
              </p>
            </div>

            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">Is electricity available in the bubbles?</h3>
              <p className="text-gray-700">
                Yes, all bubbles have electricity for lighting and to charge your devices. Luxury bubbles have
                additional electrical outlets for convenience. Power is provided through a combination of solar energy
                and generators.
              </p>
            </div>

            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">What is the best time to experience the bubble camp?</h3>
              <p className="text-gray-700">
                The bubble camp is available year-round, but spring (March to May) and autumn (September to November)
                offer the most comfortable temperatures. Summer nights (June to August) can be pleasantly cool despite
                hot days. Winter (December to February) provides exceptionally clear skies but can be cold at night,
                though our bubbles are equipped with heating.
              </p>
            </div>

            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">Can children stay in the bubble accommodations?</h3>
              <p className="text-gray-700">
                Yes, children are welcome. Luxury bubbles can accommodate up to two adults and one child, while standard
                bubbles can accommodate two adults. For families, we recommend booking adjacent bubbles or discussing
                options with our booking team to find the best arrangement for your family's needs.
              </p>
            </div>
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
    </div>
  )
}
