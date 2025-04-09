import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Clock, Users, Globe } from "lucide-react"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"

export default function FullDayJeepTourPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/full-day-jeep-hero.jpg"
            alt="Full Day Jeep Tour in Wadi Rum"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">Full Day Jeep Tour</h1>
          <p className="mt-6 max-w-2xl text-center text-xl">
            EXPLORE THE VAST BEAUTY OF WADI RUM IN THIS COMPREHENSIVE 7-HOUR ADVENTURE
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 row-span-2">
              <Image
                src="/images/full-day-jeep-main.jpg"
                alt="Full Day Jeep Tour"
                width={600}
                height={400}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/full-day-jeep-1.jpg"
                alt="Full Day Jeep Tour"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/full-day-jeep-2.jpg"
                alt="Full Day Jeep Tour"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/full-day-jeep-3.jpg"
                alt="Full Day Jeep Tour"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/full-day-jeep-4.jpg"
                alt="Full Day Jeep Tour"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tour Info */}
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-8">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <Clock className="mr-2 h-6 w-6 text-amber-600" />
              <div>
                <div className="text-sm text-gray-600">DURATION</div>
                <div className="font-medium">7 hours</div>
              </div>
            </div>

            <div className="flex items-center">
              <Globe className="mr-2 h-6 w-6 text-amber-600" />
              <div>
                <div className="text-sm text-gray-600">LANGUAGE</div>
                <div className="font-medium">Arabic & English</div>
              </div>
            </div>

            <div className="flex items-center">
              <Users className="mr-2 h-6 w-6 text-amber-600" />
              <div>
                <div className="text-sm text-gray-600">GUESTS</div>
                <div className="font-medium">From 1 to 6 guests</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="mb-8">
                <h2 className="mb-2 text-2xl font-bold text-amber-600">Desert Experience</h2>
                <h3 className="mb-6 text-3xl font-bold">Full Day Jeep Tour</h3>

                <p className="mb-4 text-gray-700">
                  Our Full Day Jeep Tour offers the most comprehensive exploration of Wadi Rum's magnificent desert
                  landscape. Over the course of 7 hours, you'll journey deep into the heart of the desert, discovering
                  hidden gems and iconic landmarks that showcase the true beauty and diversity of this UNESCO World
                  Heritage site.
                </p>
                <p className="mb-4 text-gray-700">
                  Traveling in a comfortable 4x4 jeep with an experienced Bedouin driver-guide, you'll venture far
                  beyond the usual tourist routes to experience the tranquility and majesty of Wadi Rum's most
                  spectacular scenery. From towering rock formations and natural bridges to ancient inscriptions and
                  vast sand dunes, this tour encompasses all the highlights of the desert.
                </p>
                <p className="text-gray-700">
                  The full day format allows for a more relaxed pace, with ample time to explore each site, take
                  photographs, enjoy short walks, and even climb some of the smaller rock formations. Your guide will
                  share rich insights into Bedouin culture, desert survival techniques, and the geological and
                  historical significance of the areas you visit. A traditional Bedouin lunch is included, providing an
                  authentic taste of local cuisine in a picturesque desert setting.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Rates</h3>
                <div className="overflow-hidden rounded-lg border">
                  <div className="grid grid-cols-2 border-b bg-amber-50">
                    <div className="border-r p-4 font-medium">1 Person</div>
                    <div className="p-4 font-medium">60 JOD</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">2-3 Persons</div>
                    <div className="p-4">55 JOD per person</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">4-6 Persons</div>
                    <div className="p-4">45 JOD per person</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">Children 5-12 Years</div>
                    <div className="p-4">Half Price</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="border-r p-4">Kids from 0-5 Years</div>
                    <div className="p-4">FREE</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Detailed Program</h3>
                <h4 className="mb-2 text-xl font-semibold">Everything you need to know</h4>

                <p className="mb-4 text-gray-700">
                  Your full-day adventure begins at our meeting point in Wadi Rum Village, where you'll meet your
                  Bedouin guide and board your 4x4 jeep. After a brief introduction and safety information, you'll set
                  off into the desert for a day of exploration and discovery.
                </p>

                <div className="mb-6 space-y-4">
                  <div>
                    <h5 className="font-semibold">Lawrence Spring:</h5>
                    <p className="text-gray-700">
                      Your first stop is this natural spring nestled in the mountainside, named after T.E. Lawrence
                      (Lawrence of Arabia). Enjoy panoramic views of the desert and learn about Lawrence's connection to
                      this region during the Arab Revolt.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Khazali Canyon:</h5>
                    <p className="text-gray-700">
                      Explore this narrow fissure in the mountain, famous for its ancient Thamudic and Nabataean
                      inscriptions dating back thousands of years. Your guide will help interpret these historical
                      petroglyphs that depict hunting scenes, animals, and humans.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Red Sand Dunes:</h5>
                    <p className="text-gray-700">
                      Experience the magnificent red sand dunes that are characteristic of Wadi Rum. You'll have time to
                      climb the dunes and enjoy the panoramic views from the top. The contrast between the red sand and
                      the blue sky creates a stunning visual experience.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Um Fruth Rock Bridge:</h5>
                    <p className="text-gray-700">
                      Visit this impressive natural rock bridge, which you can climb with the assistance of your guide
                      for spectacular views and photo opportunities. The bridge stands about 15 meters high and offers a
                      thrilling but accessible climbing experience.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Lunch in the Desert:</h5>
                    <p className="text-gray-700">
                      Enjoy a traditional Bedouin lunch prepared in the desert. Typically, this includes freshly made
                      bread, hummus, salads, grilled meat or vegetarian options, and fresh fruit, all served in a scenic
                      and shaded location.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Mushroom Rock:</h5>
                    <p className="text-gray-700">
                      Marvel at this unique rock formation that resembles a giant mushroom, created by centuries of
                      erosion. It's one of the most distinctive and photogenic landmarks in Wadi Rum.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Burdah Rock Bridge (Viewing Point):</h5>
                    <p className="text-gray-700">
                      While the full climb to Burdah Bridge is a separate tour, you'll visit a viewpoint to see this
                      majestic natural arch, one of the highest in Wadi Rum. Your guide will explain the geological
                      processes that formed this impressive structure.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Abu Khashaba Canyon:</h5>
                    <p className="text-gray-700">
                      Take a short walk through this beautiful canyon with its multicolored sandstone walls. The canyon
                      offers a different perspective of the desert landscape and a chance to stretch your legs.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Sunset Viewing:</h5>
                    <p className="text-gray-700">
                      Conclude your day at a prime location for watching the sunset over the desert. As the sun dips
                      below the horizon, the sandstone mountains glow with vibrant red and orange hues, creating a
                      magical end to your desert adventure.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700">
                  After enjoying the sunset, your guide will return you to Wadi Rum Village, completing your 7-hour
                  desert adventure. Throughout the tour, there will be plenty of stops for photos, short walks, and to
                  simply absorb the majestic silence and beauty of the desert landscape.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Included/Excluded</h3>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold">Included:</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-700">
                    <li>Transportation in a 4x4 jeep with Bedouin driver/guide</li>
                    <li>English-speaking guide</li>
                    <li>Bottled water</li>
                    <li>Traditional Bedouin lunch</li>
                    <li>Traditional Bedouin tea</li>
                    <li>All entrance fees to sites mentioned in the itinerary</li>
                    <li>Pick-up and drop-off at Wadi Rum Visitor Center</li>
                    <li>Accommodation in our tented camp</li>
                    <li>Meals Breakfast & Dinner (Lunch on request)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">Not Included:</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-700">
                    <li>Personal expenses and souvenirs</li>
                    <li>Gratuities for guides (optional but appreciated)</li>
                    <li>Travel insurance</li>
                    <li>Transportation to/from Wadi Rum (can be arranged for an additional fee)</li>
                    <li>Specialized climbing or hiking equipment</li>
                    <li>Anything not mentioned in the "Included" list</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <BookingForm defaultTour="full-day-jeep" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Common questions about our Full Day Jeep Tour and visiting Wadi Rum"
        faqs={desertExperienceFaqs}
        className="bg-amber-50"
      />

      {/* You Might Also Like */}
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">You might also like</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-48">
                <div className="absolute left-2 top-2 z-10 rounded bg-amber-500 px-2 py-1 text-xs font-medium text-white">
                  4 hours
                </div>
                <Image src="/images/half-day-jeep.jpg" alt="Half Day Jeep Tour" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">Half Day Jeep Tour</h3>
                <p className="mb-4 text-sm text-gray-600">Desert Highlights Tour</p>
                <p className="mb-6 text-sm text-gray-700">
                  Experience the highlights of Wadi Rum in this 4-hour jeep tour, visiting key sites and enjoying the
                  desert landscape.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    From <span>35 JOD</span>
                  </div>
                  <Link href="/desert-experiences/half-day-jeep-tour">
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
                  Full day
                </div>
                <Image src="/images/jebel-khash.jpg" alt="Jebel Khash Route" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">Jebel Khash Route</h3>
                <p className="mb-4 text-sm text-gray-600">Unique Desert Landscapes</p>
                <p className="mb-6 text-sm text-gray-700">
                  Explore the spectacular Jebel Khash route, featuring unique rock formations and breathtaking vistas.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    From <span>75 JOD</span>
                  </div>
                  <Link href="/desert-experiences/jebel-khash-route">
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
                  Full day
                </div>
                <Image src="/images/all-in-one.jpg" alt="All in One Day" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">All in One Day</h3>
                <p className="mb-4 text-sm text-gray-600">Multiple Activities in One Day</p>
                <p className="mb-6 text-sm text-gray-700">
                  Experience multiple activities in a single day, including jeep tour, camel ride, and short hike for a
                  comprehensive desert experience.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    From <span>90 JOD</span>
                  </div>
                  <Link href="/desert-experiences/all-in-one-day">
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
