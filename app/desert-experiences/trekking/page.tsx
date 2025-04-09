import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Clock, Users, Globe } from "lucide-react"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"

export default function TrekkingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trekking-hero.jpg"
            alt="Trekking in Wadi Rum"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">Trekking in the Wild</h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 row-span-2">
              <Image
                src="/images/trekking-main.jpg"
                alt="Trekking"
                width={600}
                height={400}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/trekking-1.jpg"
                alt="Trekking"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/trekking-2.jpg"
                alt="Trekking"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/trekking-3.jpg"
                alt="Trekking"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/trekking-4.jpg"
                alt="Trekking"
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
                <div className="font-medium">3 hours to 8 hours</div>
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
                <h3 className="mb-6 text-3xl font-bold">Trekking in the Wild</h3>

                <p className="mb-4 text-gray-700">
                  Live Wadi Rum to the fullest! Feel a deep sense of freedom and tranquility as you walk through the
                  vast desert landscape, discovering hidden gems that are inaccessible by vehicle. Our trekking
                  experiences offer a more intimate connection with the desert, allowing you to appreciate its subtle
                  details and profound silence.
                </p>
                <p className="mb-4 text-gray-700">
                  Led by experienced Bedouin guides who know the terrain intimately, our treks are tailored to your
                  fitness level and interests. Whether you're looking for a challenging full-day hike or a more
                  leisurely exploration, we have options for all abilities.
                </p>
                <p className="text-gray-700">
                  Trekking through Wadi Rum offers unique perspectives of the desert's dramatic rock formations, ancient
                  inscriptions, and natural arches. You'll have opportunities to climb sand dunes, explore narrow
                  canyons, and discover hidden water sources that have sustained life in this harsh environment for
                  millennia.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Rates</h3>
                <div className="overflow-hidden rounded-lg border">
                  <div className="grid grid-cols-2 border-b bg-amber-50">
                    <div className="border-r p-4 font-medium">1 Person</div>
                    <div className="p-4 font-medium">190 JOD</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">2-5 Persons</div>
                    <div className="p-4">150 JOD per person</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">6+ Persons</div>
                    <div className="p-4">130 JOD per person</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">Children 5-12 Years</div>
                    <div className="p-4">Half Price</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="border-r p-4">Kids from 0-5 Years</div>
                    <div className="p-4">FREE (not recommended)</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Detailed Program</h3>
                <h4 className="mb-2 text-xl font-semibold">Everything you need to know</h4>

                <div className="mb-6">
                  <h5 className="mb-2 font-semibold">Day 1:</h5>
                  <p className="mb-4 text-gray-700">
                    Your trekking adventure will start early in the morning to make the most of the cooler hours. After
                    meeting your guide and receiving a safety briefing, you'll set off into the heart of Wadi Rum's
                    desert landscape. Your guide will point out interesting geological features, wildlife, and plant
                    life along the way.
                  </p>
                  <p className="mb-4 text-gray-700">
                    The morning trek will take you through varied terrain, including sandy valleys, rocky outcrops, and
                    possibly some gentle climbing sections. You'll stop at scenic viewpoints and areas of historical or
                    cultural significance, such as ancient rock inscriptions or traditional Bedouin sites.
                  </p>
                  <p className="text-gray-700">
                    Around midday, you'll stop for a rest and a picnic lunch in a shaded area. This is a perfect time to
                    relax, take photos, and enjoy the peaceful desert atmosphere. After lunch and a rest period, you'll
                    continue your trek, exploring different areas of the desert.
                  </p>
                </div>

                <div>
                  <h5 className="mb-2 font-semibold">Day 2 (for multi-day treks):</h5>
                  <p className="mb-4 text-gray-700">
                    After breakfast at the camp, you'll set off on a different route to explore more of Wadi Rum's
                    diverse landscapes. This day might include more challenging terrain, such as a canyon walk or a
                    climb to a natural rock bridge, depending on your preferences and abilities.
                  </p>
                  <p className="mb-4 text-gray-700">
                    You'll continue to learn about the desert ecosystem, Bedouin culture, and the history of the region
                    from your knowledgeable guide. The trek will include regular breaks for rest, photography, and
                    water.
                  </p>
                  <p className="text-gray-700">
                    As the day progresses, you'll make your way back to the starting point or to a pickup location where
                    transportation will be waiting. Before saying goodbye, you'll have time to reflect on your desert
                    adventure and ask any final questions of your guide.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Included/Excluded</h3>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold">Included:</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-700">
                    <li>A Mobile Guide for your tour</li>
                    <li>Buffet Breakfast for morning stay</li>
                    <li>Free Transfer from/to Wadi Village</li>
                    <li>Accommodation in our tented camp</li>
                    <li>All Meals, Breakfast, Lunch & Dinner</li>
                    <li>Bottled water and refreshments during the trek</li>
                    <li>Traditional Bedouin lunch (for full-day treks)</li>
                    <li>Meals Breakfast & Dinner (Lunch on request)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">Not Included:</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-700">
                    <li>High Elevator under the stars</li>
                    <li>Full Types of Climbing, Climbing, Hiking</li>
                    <li>Personal expenses and souvenirs</li>
                    <li>Specialized climbing or hiking equipment (can be rented if needed)</li>
                    <li>Travel insurance</li>
                    <li>Anything not mentioned in the "Included" list</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <BookingForm defaultTour="trekking" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Common questions about our Trekking Tours and visiting Wadi Rum"
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
                  1 Day / 7 hours
                </div>
                <Image src="/images/beduin-way.jpg" alt="The beduin way" fill className="object-cover" />
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
                <Image src="/images/jebel-um-addami.jpg" alt="Jebel Um Addami" fill className="object-cover" />
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
