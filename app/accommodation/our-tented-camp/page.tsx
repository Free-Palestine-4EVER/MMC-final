import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Check } from "lucide-react"
import { ImageLightbox } from "@/components/image-lightbox"

export default function TentedCampPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tented-camp-hero.jpg"
            alt="Mohammed Mutlak Camp"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex items-center justify-center py-24 md:py-32 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">MOHAMMED MUTLAK CAMP</h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-4 gap-2">
            <ImageLightbox
              src="/images/camp-gallery-1.jpg"
              alt="Camp Gallery"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <ImageLightbox
              src="/images/camp-gallery-2.jpg"
              alt="Camp Gallery"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <ImageLightbox
              src="/images/camp-gallery-3.jpg"
              alt="Camp Gallery"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <ImageLightbox
              src="/images/camp-gallery-4.jpg"
              alt="Camp Gallery"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Mohammed Mutlak Camp</h2>
            <p className="mb-8 text-lg text-gray-700">
              Our camp is located in WADI RUM, which is also known as the Moon Valley. Protected since the seventies, it
              is characterized by a series of spectacular rock formations, canyons, and dunes. The camp is located in
              the heart of the protected area, in a strategic position that allows you to enjoy the best views and the
              most beautiful sunsets. The camp is equipped with all the comforts to make your stay unforgettable.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="mb-6 text-center text-2xl font-bold">Camp Location</h3>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <p className="text-gray-700">
                  MOHAMMED MUTLAK CAMP stands out for its unique and advantageous location. Situated in the heart of the
                  protected area, it offers easy access to the most beautiful spots in Wadi Rum. The camp is nestled in
                  a valley surrounded by majestic mountains, providing a sense of isolation and tranquility while being
                  just a short drive from the village.
                </p>
                <p className="mt-4 text-gray-700">
                  The strategic location allows guests to enjoy breathtaking sunrises and sunsets directly from the
                  camp. With 360-degree panoramic views, you'll be able to capture the changing colors of the desert
                  throughout the day. The camp is about 15 minutes drive from the Visitor Center - the main entry to the
                  Village.
                </p>
              </div>
              <div>
                <ImageLightbox
                  src="/images/camp-location.jpg"
                  alt="Camp Location"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-center text-2xl font-bold">Common Areas</h3>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <ImageLightbox
                  src="/images/common-areas.jpg"
                  alt="Common Areas"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-700">
                  Our common areas are the heart of our camp. Designed to create a comfortable and authentic Bedouin
                  experience, these spaces allow guests to relax, socialize, and enjoy the stunning desert views. The
                  main reception area welcomes you with traditional Bedouin hospitality, offering tea and information
                  about your stay.
                </p>
                <p className="mt-4 text-gray-700">
                  The dining area serves delicious meals prepared with fresh ingredients, while the lounge area provides
                  a cozy space to unwind after a day of adventure. In the evening, gather around our campfire under the
                  stars for traditional music, storytelling, and stargazing.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-center text-2xl font-bold">Our Tents</h3>
            <p className="mb-8 text-center text-lg text-gray-700">TRADITIONAL TENTS MADE FOR MODERN TRAVELER NEEDS</p>
            <div className="text-center mb-8">
              <p className="text-xl font-semibold">
                Wood, Camel and Goat Wool, locally woven fabrics hold their own like that.
              </p>
              <p className="text-lg">We offer Double Twin & Triple Quadruple tents for every need.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ImageLightbox
                src="/images/tent-1.jpg"
                alt="Our Tents"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <ImageLightbox
                src="/images/tent-2.jpg"
                alt="Our Tents"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <ImageLightbox
                src="/images/tent-3.jpg"
                alt="Our Tents"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">Shared Bathroom</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">Comfortable Beds</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">Blankets</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">Electricity Plugs</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">Wi-Fi Connection</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">Mountain View</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">Towel Included</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">Soap Included</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">Lights</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-100 p-3">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-sm">Wi-Fi Connection</span>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Stargazing at Mohammed Mutlak Camp</h3>
              <p className="text-gray-700">
                Connected to nature, far away from urban pollution and light pollution, we offer our guests a unique
                opportunity to observe the night sky as it should be seen - in all its glory. The clear desert air and
                lack of light pollution make Wadi Rum one of the best places in the world for stargazing.
              </p>
              <p className="mt-4 text-gray-700">
                As the sun sets and darkness falls, thousands of stars become visible above the camp. It's an
                awe-inspiring sight that many of our urban visitors have never experienced before. Our guides are
                knowledgeable about the night sky and can point out constellations, planets, and even the Milky Way.
              </p>
              <Link href="/contact-us">
                <Button className="mt-6 bg-amber-500 hover:bg-amber-600">Book Now</Button>
              </Link>
            </div>
            <div>
              <ImageLightbox
                src="/images/stargazing.jpg"
                alt="Stargazing"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-center text-2xl font-bold">Bathrooms</h3>
            <p className="mb-8 text-center text-lg text-gray-700">HOT WATER FROM THE SUN</p>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <p className="text-gray-700">
                  Private Bathrooms are in two separate buildings, one for Women, one for Men. Women: Sinks, Showers,
                  Toilets. Hot Water (24h). Men: Sinks, Showers, Toilets. Hot Water (24h).
                </p>
                <p className="mt-4 text-gray-700">
                  Our bathrooms are clean, modern, and well-maintained. We provide hot water 24/7, powered by solar
                  energy. Towels, soap, and other essentials are provided for your comfort.
                </p>
              </div>
              <div>
                <ImageLightbox
                  src="/images/bathroom.jpg"
                  alt="Bathroom Facilities"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-center text-2xl font-bold">Food at MMC</h3>
            <p className="mb-8 text-center text-lg text-gray-700">Traditional Bedouin Food & Cooking Fire</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <ImageLightbox
                src="/images/food-1.jpg"
                alt="Traditional Food"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <ImageLightbox
                src="/images/food-2.jpg"
                alt="Traditional Food"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <ImageLightbox
                src="/images/food-3.jpg"
                alt="Traditional Food"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <p className="text-gray-700">
              We offer all our meals in a buffet style environment, ensuring plenty is available to meet people's needs.
              We also offer vegetarian options for those who prefer them. Our chefs prepare authentic Bedouin dishes
              using fresh, locally sourced ingredients. The traditional cooking methods, including underground fire pits
              (zarb), enhance the flavors and provide an authentic culinary experience.
            </p>
            <p className="mt-4 text-gray-700">
              Breakfast includes fresh bread, hummus, labneh (strained yogurt), eggs, cheese, olives, jam, honey, and
              fresh fruits, along with tea and coffee. Lunch and dinner feature a variety of dishes such as mansaf
              (Jordan's national dish), maqluba (upside-down rice and vegetables), grilled meats, fresh salads, and
              delicious desserts.
            </p>
            <p className="mt-4 text-gray-700">
              Dinner is a social event by the campfire, where guests can share stories of their day's adventures while
              enjoying a feast under the stars. Special dietary requirements can be accommodated with advance notice. We
              pride ourselves on our hospitality, and food is an essential part of the Bedouin welcome.
            </p>
            <div className="mt-8 text-center">
              <Link href="/contact-us">
                <Button className="bg-amber-500 hover:bg-amber-600">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mx-auto max-w-lg">
            <BookingForm defaultTour="tented-camp" />
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
