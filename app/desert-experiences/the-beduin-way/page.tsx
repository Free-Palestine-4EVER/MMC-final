import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Clock, Users, Globe } from "lucide-react"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"

export default function BeduinWayPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/beduin-way-hero.jpg"
            alt="The Beduin Way Experience in Wadi Rum"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">The Beduin Way</h1>
          <p className="mt-6 max-w-2xl text-center text-xl">
            IMMERSE YOURSELF IN AUTHENTIC BEDOUIN CULTURE AND DESERT LIFE
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 row-span-2">
              <Image
                src="/images/beduin-way-main.jpg"
                alt="The Beduin Way"
                width={600}
                height={400}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/beduin-way-1.jpg"
                alt="The Beduin Way"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/beduin-way-2.jpg"
                alt="The Beduin Way"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/beduin-way-3.jpg"
                alt="The Beduin Way"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/beduin-way-4.jpg"
                alt="The Beduin Way"
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
                <div className="font-medium">2 Days / 1 Night</div>
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
                <div className="font-medium">From 1 to 8 guests</div>
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
                <h3 className="mb-6 text-3xl font-bold">The Beduin Way</h3>

                <p className="mb-4 text-gray-700">
                  "The Beduin Way" is our most immersive cultural experience, offering you a genuine glimpse into the
                  traditional lifestyle of the Bedouin people who have called Wadi Rum home for centuries. This two-day,
                  one-night adventure combines exploration of the desert's natural wonders with authentic cultural
                  experiences that have remained largely unchanged for generations.
                </p>
                <p className="mb-4 text-gray-700">
                  On your first day, you'll explore the desert by jeep, visiting key sites and hidden gems while
                  learning about Bedouin history, traditions, and desert survival skills from your guide. The second day
                  brings a different perspective as you journey by camel, the traditional Bedouin mode of transport,
                  experiencing the desert at a slower, more contemplative pace.
                </p>
                <p className="text-gray-700">
                  Throughout your experience, you'll participate in traditional activities such as bread-making, tea
                  preparation, and learning about medicinal desert plants. You'll spend the night in a traditional
                  Bedouin camp or under the stars (your choice), enjoying authentic cuisine, music, and storytelling
                  around the campfire. This is more than a tour—it's a cultural immersion that offers insights into a
                  way of life that has adapted to one of Earth's most challenging environments.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Rates</h3>
                <div className="overflow-hidden rounded-lg border">
                  <div className="grid grid-cols-2 border-b bg-amber-50">
                    <div className="border-r p-4 font-medium">1 Person</div>
                    <div className="p-4 font-medium">100 JOD</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">2-3 Persons</div>
                    <div className="p-4">85 JOD per person</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">4-6 Persons</div>
                    <div className="p-4">75 JOD per person</div>
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

                <div className="mb-6">
                  <h5 className="mb-2 font-semibold">Day 1: Jeep Exploration</h5>
                  <p className="mb-4 text-gray-700">
                    Your Bedouin experience begins in the morning at Wadi Rum Village, where you'll meet your guide and
                    begin your desert journey by 4x4 jeep. The day will be spent exploring the desert's most spectacular
                    landscapes and learning about Bedouin culture and history.
                  </p>
                  <p className="mb-4 text-gray-700">
                    You'll visit ancient petroglyphs, natural rock formations, and hidden canyons while your guide
                    shares stories and knowledge passed down through generations of desert dwellers. You'll learn about
                    traditional navigation techniques, how to identify edible and medicinal plants, and the Bedouin's
                    deep connection to the desert environment.
                  </p>
                  <p className="mb-4 text-gray-700">
                    For lunch, you'll stop at a scenic spot where your guide will prepare a traditional meal over an
                    open fire. You'll have the opportunity to participate in the preparation, learning techniques that
                    Bedouins have used for centuries.
                  </p>
                  <p className="text-gray-700">
                    As evening approaches, you'll arrive at our traditional Bedouin camp nestled among the mountains.
                    Here, you'll be welcomed with mint tea and have time to settle in before dinner. The evening meal is
                    a highlight, featuring zarb (meat and vegetables cooked underground), fresh bread, and other
                    traditional dishes. After dinner, gather around the campfire for music, stories, and stargazing,
                    experiencing the desert night as Bedouins have for generations.
                  </p>
                </div>

                <div>
                  <h5 className="mb-2 font-semibold">Day 2: Camel Journey</h5>
                  <p className="mb-4 text-gray-700">
                    Wake up to the peaceful desert sunrise and enjoy a traditional Bedouin breakfast. After breakfast,
                    you'll be introduced to your camel and given instructions on riding techniques. Camels have been the
                    Bedouin's primary mode of transportation for centuries, and this experience offers an authentic
                    glimpse into traditional desert travel.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Your camel trek will take you through different landscapes than those explored by jeep, offering new
                    perspectives and a more intimate connection with the desert. The slower pace allows for deeper
                    appreciation of the subtle details of the environment and the peaceful rhythm of desert life.
                  </p>
                  <p className="mb-4 text-gray-700">
                    During the journey, you'll stop at a Bedouin tent where you'll participate in bread-making and learn
                    about traditional weaving and other crafts. This hands-on experience provides insight into the daily
                    activities that have sustained Bedouin communities for generations.
                  </p>
                  <p className="text-gray-700">
                    After a final traditional lunch in the desert, you'll continue your camel journey back to Wadi Rum
                    Village, arriving in the late afternoon. Here, you'll bid farewell to your guide and camels, taking
                    with you not just memories of spectacular landscapes, but a deeper understanding of the Bedouin way
                    of life.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Included/Excluded</h3>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold">Included:</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-700">
                    <li>Experienced Bedouin guide throughout the experience</li>
                    <li>4x4 jeep transportation on Day 1</li>
                    <li>Camel riding on Day 2</li>
                    <li>All meals (lunch and dinner on Day 1, breakfast and lunch on Day 2)</li>
                    <li>Overnight accommodation in a traditional Bedouin camp</li>
                    <li>Traditional Bedouin tea and coffee</li>
                    <li>Cultural activities (bread-making, tea preparation, etc.)</li>
                    <li>Bottled water</li>
                    <li>All entrance fees to sites mentioned in the itinerary</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">Not Included:</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-700">
                    <li>Personal expenses and souvenirs</li>
                    <li>Gratuities for guides (optional but appreciated)</li>
                    <li>Travel insurance</li>
                    <li>Transportation to/from Wadi Rum (can be arranged for an additional fee)</li>
                    <li>Alcoholic beverages</li>
                    <li>Anything not mentioned in the "Included" list</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <BookingForm defaultTour="beduin-way" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Common questions about The Beduin Way experience and visiting Wadi Rum"
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
                <Image src="/images/bivouac-camping.jpg" alt="Bivouac Camping" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">Bivouac Camping</h3>
                <p className="mb-4 text-sm text-gray-600">Sleep Under the Stars</p>
                <p className="mb-6 text-sm text-gray-700">
                  Experience the magic of sleeping under the stars in the desert with our traditional bivouac camping
                  experience.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    From <span>50 JOD</span>
                  </div>
                  <Link href="/accommodation/bivouac">
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
