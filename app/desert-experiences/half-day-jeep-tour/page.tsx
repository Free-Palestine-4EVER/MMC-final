import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Clock, Users, Globe } from "lucide-react"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"
import { ImageLightbox } from "@/components/image-lightbox"

export default function HalfDayJeepTourPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/half-day-jeep-hero.jpg"
            alt="Half Day Jeep Tour in Wadi Rum"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">Half Day Jeep Tour</h1>
          <p className="mt-6 max-w-2xl text-center text-xl">
            EXPERIENCE THE HIGHLIGHTS OF WADI RUM IN THIS 4-HOUR JEEP ADVENTURE
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 row-span-2">
              <ImageLightbox src="/images/half-day-jeep-main.jpg" alt="Half Day Jeep Tour" width={600} height={400} />
            </div>
            <div>
              <ImageLightbox src="/images/half-day-jeep-1.jpg" alt="Half Day Jeep Tour" width={300} height={200} />
            </div>
            <div>
              <ImageLightbox src="/images/half-day-jeep-2.jpg" alt="Half Day Jeep Tour" width={300} height={200} />
            </div>
            <div>
              <ImageLightbox src="/images/half-day-jeep-3.jpg" alt="Half Day Jeep Tour" width={300} height={200} />
            </div>
            <div>
              <ImageLightbox src="/images/half-day-jeep-4.jpg" alt="Half Day Jeep Tour" width={300} height={200} />
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
                <div className="font-medium">4 hours</div>
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
                <h3 className="mb-6 text-3xl font-bold">Half Day Jeep Tour</h3>

                <p className="mb-4 text-gray-700">
                  Perfect for travelers with limited time, our Half Day Jeep Tour offers a comprehensive introduction to
                  the wonders of Wadi Rum. In just 4 hours, you'll experience the desert's most iconic landscapes and
                  attractions, guided by our experienced Bedouin drivers who know every dune and canyon.
                </p>
                <p className="mb-4 text-gray-700">
                  This tour is designed to showcase the highlights of Wadi Rum, including dramatic rock formations,
                  ancient inscriptions, natural arches, and vast red sand dunes. You'll travel in a comfortable 4x4
                  jeep, specially adapted for desert conditions, allowing you to reach places inaccessible by regular
                  vehicles.
                </p>
                <p className="text-gray-700">
                  Throughout the journey, your guide will share insights about Bedouin culture, the desert ecosystem,
                  and the rich history of this UNESCO World Heritage site. There will be plenty of opportunities to stop
                  for photos, short walks, and to simply absorb the majestic silence and beauty of the desert landscape.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Rates</h3>
                <div className="overflow-hidden rounded-lg border">
                  <div className="grid grid-cols-2 border-b bg-amber-50">
                    <div className="border-r p-4 font-medium">1 Person</div>
                    <div className="p-4 font-medium">50 JOD</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">2-3 Persons</div>
                    <div className="p-4">45 JOD per person</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">4-6 Persons</div>
                    <div className="p-4">35 JOD per person</div>
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
                  Your half-day adventure begins at our meeting point in Wadi Rum Village, where you'll meet your
                  Bedouin guide and board your 4x4 jeep. After a brief introduction and safety information, you'll set
                  off into the desert to explore its wonders.
                </p>

                <div className="mb-6 space-y-4">
                  <div>
                    <h5 className="font-semibold">Lawrence Spring:</h5>
                    <p className="text-gray-700">
                      Named after T.E. Lawrence (Lawrence of Arabia), this natural spring nestled in the mountainside
                      offers panoramic views of the desert. Your guide will explain the historical significance of this
                      site and its connection to Lawrence's adventures in the region.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Khazali Canyon:</h5>
                    <p className="text-gray-700">
                      Explore this narrow fissure in the mountain, famous for its ancient Thamudic and Nabataean
                      inscriptions. These petroglyphs, dating back thousands of years, depict hunting scenes, animals,
                      and humans, offering a glimpse into the area's rich history.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Red Sand Dunes:</h5>
                    <p className="text-gray-700">
                      Experience the soft, red sand dunes that Wadi Rum is famous for. You'll have time to climb the
                      dunes, take photos, and enjoy the panoramic views from the top. The contrast between the red sand
                      and the blue sky creates a stunning visual experience.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Little Bridge:</h5>
                    <p className="text-gray-700">
                      Visit one of Wadi Rum's natural rock bridges. While smaller than the famous Burdah Bridge, this
                      natural formation is still impressive and offers excellent photo opportunities. Those feeling
                      adventurous can climb to the top of the bridge.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Bedouin Tea Break:</h5>
                    <p className="text-gray-700">
                      Enjoy a traditional Bedouin tea break in the shade of a beautiful rock formation. This is a
                      perfect opportunity to rest, chat with your guide about Bedouin culture, and absorb the peaceful
                      atmosphere of the desert.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700">
                  After visiting these highlights, your guide will return you to Wadi Rum Village, completing your
                  4-hour desert adventure. Throughout the tour, there will be plenty of stops for photos and short walks
                  to explore the surroundings up close.
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
                    <li>Anything not mentioned in the "Included" list</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <BookingForm defaultTour="half-day-jeep" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Common questions about our Half Day Jeep Tour and visiting Wadi Rum"
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
                  7 hours
                </div>
                <Image src="/images/full-day-jeep.jpg" alt="Full Day Jeep Tour" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">Full Day Jeep Tour</h3>
                <p className="mb-4 text-sm text-gray-600">Comprehensive Desert Exploration</p>
                <p className="mb-6 text-sm text-gray-700">
                  A comprehensive 7-hour jeep tour exploring the vast beauty of Wadi Rum, including hidden canyons and
                  ancient inscriptions.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    From <span>65 JOD</span>
                  </div>
                  <Link href="/desert-experiences/full-day-jeep-tour">
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
                <Image src="/images/camel-ride.jpg" alt="Camel Ride" fill className="object-cover" />
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
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
