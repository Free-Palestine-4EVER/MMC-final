import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Clock, Users, Globe } from "lucide-react"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"

export default function AllInOneDayPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/all-in-one-hero.jpg"
            alt="All in One Day Experience in Wadi Rum"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">All in One Day</h1>
          <p className="mt-6 max-w-2xl text-center text-xl">
            EXPERIENCE MULTIPLE ACTIVITIES IN A SINGLE DAY FOR A COMPREHENSIVE DESERT ADVENTURE
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 row-span-2">
              <Image
                src="/images/all-in-one-main.jpg"
                alt="All in One Day"
                width={600}
                height={400}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/all-in-one-1.jpg"
                alt="All in One Day"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/all-in-one-2.jpg"
                alt="All in One Day"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/all-in-one-3.jpg"
                alt="All in One Day"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/all-in-one-4.jpg"
                alt="All in One Day"
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
                <div className="font-medium">Full day (8-9 hours)</div>
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
                <h3 className="mb-6 text-3xl font-bold">All in One Day</h3>

                <p className="mb-4 text-gray-700">
                  Our "All in One Day" experience is perfect for travelers with limited time who want to sample the best
                  of what Wadi Rum has to offer. This comprehensive full-day adventure combines multiple activities to
                  give you a well-rounded taste of desert life and exploration, all packed into a single unforgettable
                  day.
                </p>
                <p className="mb-4 text-gray-700">
                  You'll begin with a jeep tour to explore the desert's most spectacular landscapes and landmarks,
                  followed by a traditional camel ride to experience the desert as Bedouins have for centuries. The day
                  also includes a short guided hike to a scenic viewpoint, providing yet another perspective on the
                  magnificent desert terrain. Throughout the day, your experienced Bedouin guide will share insights
                  about the natural environment, local history, and traditional Bedouin culture.
                </p>
                <p className="text-gray-700">
                  This varied itinerary allows you to experience the desert in different ways, each offering unique
                  advantages and perspectives. The combination of motorized transport, animal riding, and walking
                  creates a balanced adventure that engages all your senses and provides a comprehensive introduction to
                  the wonders of Wadi Rum. It's an ideal choice for first-time visitors or those who want to maximize
                  their desert experience in a limited timeframe.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Rates</h3>
                <div className="overflow-hidden rounded-lg border">
                  <div className="grid grid-cols-2 border-b bg-amber-50">
                    <div className="border-r p-4 font-medium">1 Person</div>
                    <div className="p-4 font-medium">90 JOD</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">2-3 Persons</div>
                    <div className="p-4">80 JOD per person</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">4-6 Persons</div>
                    <div className="p-4">70 JOD per person</div>
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
                  Your "All in One Day" adventure begins in the morning at Wadi Rum Village, where you'll meet your
                  experienced Bedouin guide. After a brief introduction and overview of the day's activities, you'll set
                  off to experience the desert in multiple ways.
                </p>

                <div className="mb-6 space-y-4">
                  <div>
                    <h5 className="font-semibold">Morning Jeep Tour (3-4 hours):</h5>
                    <p className="text-gray-700">
                      The day begins with a jeep tour to explore some of Wadi Rum's most impressive sites. You'll visit
                      iconic locations such as Lawrence Spring, the Khazali Canyon with its ancient inscriptions, and
                      the stunning red sand dunes. The jeep allows you to cover significant ground and reach remote
                      areas that would be inaccessible by other means. Your guide will provide commentary on the
                      geological features, historical significance, and natural environment of each location.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Traditional Lunch (1 hour):</h5>
                    <p className="text-gray-700">
                      Around midday, you'll stop at a scenic spot where your guide will prepare a traditional Bedouin
                      lunch. Typically, this includes freshly made bread, hummus, salads, grilled vegetables, and
                      sometimes meat, all cooked over an open fire. This meal provides not only nourishment for the
                      afternoon's activities but also an authentic taste of Bedouin cuisine and hospitality. You'll have
                      time to relax in the shade, enjoy your meal, and chat with your guide about Bedouin life.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Camel Ride (1-1.5 hours):</h5>
                    <p className="text-gray-700">
                      After lunch, you'll experience the desert as Bedouins have for centuries – on camelback. Your
                      guide will introduce you to your camel and provide instructions on mounting and riding techniques.
                      The camel ride offers a different perspective of the desert at a slower, more contemplative pace.
                      The gentle swaying motion and elevated viewpoint create a unique experience that connects you with
                      traditional desert travel. Your route will take you through beautiful landscapes, with
                      opportunities to take photos and enjoy the tranquility of the desert.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Short Guided Hike (1 hour):</h5>
                    <p className="text-gray-700">
                      Following the camel ride, you'll embark on a short guided hike to a scenic viewpoint. This might
                      be a small rock bridge, a canyon with interesting features, or a vantage point offering panoramic
                      views. Walking through the desert allows for a more intimate connection with the environment, as
                      you feel the sand beneath your feet and notice smaller details that might be missed from a vehicle
                      or camel. Your guide will point out desert plants, animal tracks, and geological features along
                      the way.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Sunset Viewing (30-45 minutes):</h5>
                    <p className="text-gray-700">
                      As the day draws to a close, you'll head to a perfect spot to watch the sunset over the desert.
                      The changing light creates a magical atmosphere as the mountains and sand take on golden and then
                      deep red hues. This peaceful conclusion to the day's activities provides a chance for reflection
                      and appreciation of the desert's beauty. Your guide may prepare traditional Bedouin tea as you
                      watch the sunset, adding to the authentic experience.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Return to Wadi Rum Village:</h5>
                    <p className="text-gray-700">
                      After sunset, you'll return to Wadi Rum Village by jeep, typically arriving between 5:00 and 6:00
                      PM, depending on the season and sunset time. You'll have experienced the desert in three different
                      ways – by jeep, by camel, and on foot – giving you a comprehensive understanding and appreciation
                      of Wadi Rum's natural and cultural wonders.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700">
                  Throughout the day, your guide will ensure your comfort and safety while sharing their knowledge of
                  Bedouin traditions, desert survival skills, and the natural and historical significance of the areas
                  you visit. The varied pace and activities of the "All in One Day" experience create a balanced
                  adventure that showcases the best of Wadi Rum in a single day.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Included/Excluded</h3>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold">Included:</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-700">
                    <li>Transportation in a 4x4 jeep with Bedouin driver/guide</li>
                    <li>English-speaking guide</li>
                    <li>Camel ride (1-1.5 hours)</li>
                    <li>Guided hike</li>
                    <li>Traditional Bedouin lunch</li>
                    <li>Bottled water</li>
                    <li>Traditional Bedouin tea</li>
                    <li>All entrance fees to Wadi Rum Protected Area</li>
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
                    <li>Specialized equipment</li>
                    <li>Anything not mentioned in the "Included" list</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <BookingForm defaultTour="all-in-one-day" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Common questions about our All in One Day experience and visiting Wadi Rum"
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
                  Overnight
                </div>
                <Image src="/images/tented-camp.jpg" alt="Our Tented Camp" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">Our Tented Camp</h3>
                <p className="mb-4 text-sm text-gray-600">Comfortable Desert Accommodation</p>
                <p className="mb-6 text-sm text-gray-700">
                  Stay in our comfortable tented camp with modern amenities, traditional Bedouin hospitality, and
                  stunning desert views.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    From <span>50 JOD</span>
                  </div>
                  <Link href="/accommodation/our-tented-camp">
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
