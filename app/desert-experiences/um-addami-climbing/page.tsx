import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Clock, Users, Globe } from "lucide-react"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"

export default function UmAddamiClimbingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/um-addami-hero.jpg"
            alt="Jebel Um Addami Climbing in Wadi Rum"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">Jebel Um Addami Climbing</h1>
          <p className="mt-6 max-w-2xl text-center text-xl">
            REACH THE SUMMIT OF JORDAN'S HIGHEST MOUNTAIN FOR BREATHTAKING VIEWS
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 row-span-2">
              <Image
                src="/images/um-addami-main.jpg"
                alt="Jebel Um Addami Climbing"
                width={600}
                height={400}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/um-addami-1.jpg"
                alt="Jebel Um Addami Climbing"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/um-addami-2.jpg"
                alt="Jebel Um Addami Climbing"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/um-addami-3.jpg"
                alt="Jebel Um Addami Climbing"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/um-addami-4.jpg"
                alt="Jebel Um Addami Climbing"
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
                <div className="font-medium">1 Day / 7 hours</div>
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
                <h3 className="mb-6 text-3xl font-bold">Jebel Um Addami Climbing</h3>

                <p className="mb-4 text-gray-700">
                  Jebel Um Addami is the highest mountain in Jordan, standing at an impressive 1,854 meters (6,083 feet)
                  above sea level. Located in the far south of Wadi Rum, near the Saudi Arabian border, this majestic
                  peak offers an exciting climbing adventure and rewards successful climbers with breathtaking panoramic
                  views that stretch across two countries.
                </p>
                <p className="mb-4 text-gray-700">
                  This full-day experience combines a scenic jeep journey through the southern desert with a moderately
                  challenging hike to the summit. The climb itself is not technically difficult – it's primarily a
                  hiking route with some scrambling sections – making it accessible to anyone with reasonable fitness
                  and a sense of adventure. Our experienced Bedouin guides know the mountain intimately and will lead
                  you along the safest and most scenic route to the top.
                </p>
                <p className="text-gray-700">
                  Standing on the summit of Um Addami is a truly special experience. On clear days, the views extend far
                  into Saudi Arabia to the south and across the vast expanse of Wadi Rum to the north. The sense of
                  achievement, combined with the remote location and spectacular vistas, creates an unforgettable
                  highlight of any visit to Jordan. This adventure is perfect for those seeking a physical challenge,
                  unique perspectives, and the bragging rights of having climbed Jordan's highest peak.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Rates</h3>
                <div className="overflow-hidden rounded-lg border">
                  <div className="grid grid-cols-2 border-b bg-amber-50">
                    <div className="border-r p-4 font-medium">1 Person</div>
                    <div className="p-4 font-medium">85 JOD</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">2-3 Persons</div>
                    <div className="p-4">75 JOD per person</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">4-6 Persons</div>
                    <div className="p-4">65 JOD per person</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">Children 12-16 Years</div>
                    <div className="p-4">Same as adults (with parental supervision)</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="border-r p-4">Children under 12</div>
                    <div className="p-4">Not recommended</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Detailed Program</h3>
                <h4 className="mb-2 text-xl font-semibold">Everything you need to know</h4>

                <p className="mb-4 text-gray-700">
                  Your Jebel Um Addami adventure begins early in the morning at Wadi Rum Village, where you'll meet your
                  experienced Bedouin guide and board your 4x4 jeep. After a brief introduction and safety information,
                  you'll set off into the desert, heading south toward the Saudi Arabian border where Um Addami is
                  located.
                </p>

                <div className="mb-6 space-y-4">
                  <div>
                    <h5 className="font-semibold">Jeep Journey to Um Addami (1.5-2 hours):</h5>
                    <p className="text-gray-700">
                      The drive to the base of Um Addami is an adventure in itself, taking you through some of the most
                      remote and beautiful areas of the Wadi Rum Protected Area. You'll travel across vast open plains,
                      pass through narrow canyons, and see unique desert landscapes that few visitors experience. The
                      journey takes approximately 1.5-2 hours, depending on conditions, and your guide will point out
                      interesting features along the way.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Safety Briefing and Preparation:</h5>
                    <p className="text-gray-700">
                      Upon arrival at the base of Um Addami, your guide will provide a comprehensive safety briefing and
                      explain the climbing route. You'll have time to prepare your gear, have some water, and ask any
                      questions before beginning the ascent. The guide will assess the group's fitness and experience
                      level to tailor the pace accordingly.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">The Climb (2-3 hours):</h5>
                    <p className="text-gray-700">
                      The climb to the summit is primarily a hiking route with some scrambling sections. It follows a
                      natural path up the mountain, with some rocky terrain but no technical climbing required. Your
                      guide will lead the way, pointing out the best route and offering assistance when needed. The
                      ascent typically takes 2-3 hours, depending on the group's pace and fitness level.
                    </p>
                    <p className="mt-2 text-gray-700">
                      As you climb higher, the views become increasingly spectacular, with the vast desert landscape
                      unfolding beneath you. There are several good spots to rest along the way, allowing you to catch
                      your breath and take photos. The final approach to the summit involves some easy scrambling over
                      large boulders.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">At the Summit:</h5>
                    <p className="text-gray-700">
                      Reaching the summit of Um Addami is a rewarding experience. At 1,854 meters above sea level,
                      you'll be standing on the highest point in Jordan, with panoramic views that extend far into Saudi
                      Arabia to the south and across the vast expanse of Wadi Rum to the north. On clear days, you can
                      see for hundreds of kilometers in all directions. Your guide will point out landmarks and share
                      stories about the area.
                    </p>
                    <p className="mt-2 text-gray-700">
                      You'll have time to rest, take photos, and simply absorb the magnificent scenery. Many climbers
                      choose to sign the summit log book, which is kept in a small metal box at the top. This is also a
                      perfect spot for a celebratory snack or drink.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Descent (1.5-2 hours):</h5>
                    <p className="text-gray-700">
                      After enjoying the summit, you'll begin the descent, which follows the same route as the ascent.
                      Going down can sometimes be quicker than going up, but your guide will ensure a safe pace,
                      particularly on the steeper sections. The descent typically takes 1.5-2 hours.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Lunch Break:</h5>
                    <p className="text-gray-700">
                      Upon returning to the base of Um Addami, you'll enjoy a well-deserved lunch in the shade. Your
                      guide will prepare a traditional Bedouin meal, typically including fresh bread, hummus, salads,
                      and tea. This is a perfect time to relax, reflect on your achievement, and ask your guide any
                      questions about Bedouin life or the surrounding area.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Return Journey:</h5>
                    <p className="text-gray-700">
                      After lunch, you'll board the jeep for the return journey to Wadi Rum Village. The route back may
                      include stops at other interesting sites in the desert, depending on time and your preferences.
                      You'll arrive back at the village in the late afternoon, typically between 4:00 and 5:00 PM.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700">
                  Throughout the day, your guide will ensure your safety and comfort, sharing their deep knowledge of
                  the desert and Bedouin culture. The Um Addami climbing experience is a challenging but immensely
                  rewarding adventure that combines physical achievement with cultural insights and natural beauty.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Included/Excluded</h3>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold">Included:</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-700">
                    <li>Transportation in a 4x4 jeep with Bedouin driver/guide</li>
                    <li>Experienced climbing guide</li>
                    <li>Traditional Bedouin lunch</li>
                    <li>Bottled water (2 liters per person)</li>
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
                    <li>Specialized climbing equipment (not typically needed but can be arranged if requested)</li>
                    <li>Additional snacks or energy bars (recommended to bring your own)</li>
                    <li>Anything not mentioned in the "Included" list</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <BookingForm defaultTour="um-addami" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Common questions about our Jebel Um Addami Climbing and visiting Wadi Rum"
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
                  Full day
                </div>
                <Image src="/images/burdah-arch.jpg" alt="Burdah Arch Scrambling" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">Burdah Arch Scrambling</h3>
                <p className="mb-4 text-sm text-gray-600">Rock Bridge Adventure</p>
                <p className="mb-6 text-sm text-gray-700">
                  Challenge yourself with a guided climb to the iconic Burdah Rock Bridge, one of Wadi Rum's most
                  impressive natural formations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    From <span>80 JOD</span>
                  </div>
                  <Link href="/desert-experiences/jebel-burdah-climbing">
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
                <Image src="/images/trekking.jpg" alt="Trekking in the Wild" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">Trekking in the Wild</h3>
                <p className="mb-4 text-sm text-gray-600">Guided Desert Hiking</p>
                <p className="mb-6 text-sm text-gray-700">
                  Explore Wadi Rum on foot with our guided trekking adventures, offering a more intimate connection with
                  the desert landscape.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-amber-600">
                    From <span>45 JOD</span>
                  </div>
                  <Link href="/desert-experiences/trekking">
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
