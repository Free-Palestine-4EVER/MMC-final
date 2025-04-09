import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Clock, Users, Globe } from "lucide-react"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"

export default function HotAirBalloonPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hot-air-balloon-hero.jpg"
            alt="Hot Air Balloon over Wadi Rum"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">Hot Air Balloon</h1>
          <p className="mt-6 max-w-2xl text-center text-xl">
            SOAR ABOVE THE MAGNIFICENT DESERT LANDSCAPE FOR AN UNFORGETTABLE AERIAL PERSPECTIVE
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 row-span-2">
              <Image
                src="/images/hot-air-balloon-main.jpg"
                alt="Hot Air Balloon"
                width={600}
                height={400}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/hot-air-balloon-1.jpg"
                alt="Hot Air Balloon"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/hot-air-balloon-2.jpg"
                alt="Hot Air Balloon"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/hot-air-balloon-3.jpg"
                alt="Hot Air Balloon"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/hot-air-balloon-4.jpg"
                alt="Hot Air Balloon"
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
                <div className="font-medium">1-2 hours (flight time: 40-60 minutes)</div>
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
                <div className="font-medium">From 1 to 8 guests per balloon</div>
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
                <h3 className="mb-6 text-3xl font-bold">Hot Air Balloon</h3>

                <p className="mb-4 text-gray-700">
                  Experience the breathtaking beauty of Wadi Rum from a completely different perspective with our Hot
                  Air Balloon adventure. As you gently rise above the desert floor, the vast landscape unfolds beneath
                  you, revealing the true scale and majesty of this UNESCO World Heritage site in a way that's
                  impossible to appreciate from the ground.
                </p>
                <p className="mb-4 text-gray-700">
                  Our hot air balloon flights typically take place at sunrise, when the desert air is calm and the light
                  is magical. As the sun crests the eastern mountains, it bathes the sandstone formations in a warm
                  golden glow, creating a photographer's paradise and an unforgettable visual experience. From your
                  elevated vantage point, you'll see the intricate patterns of canyons, the sweeping curves of sand
                  dunes, and the dramatic rock formations that make Wadi Rum so unique.
                </p>
                <p className="text-gray-700">
                  The balloon is piloted by experienced professionals with extensive knowledge of the local conditions,
                  ensuring both safety and the best possible flight path to showcase the desert's highlights. The basket
                  is spacious and comfortable, allowing you to relax and fully immerse yourself in the experience. The
                  sensation of floating silently above the desert, with only the occasional burst from the burner
                  breaking the tranquility, creates a peaceful and almost meditative atmosphere that contrasts
                  beautifully with the rugged landscape below.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Rates</h3>
                <div className="overflow-hidden rounded-lg border">
                  <div className="grid grid-cols-2 border-b bg-amber-50">
                    <div className="border-r p-4 font-medium">Per Person</div>
                    <div className="p-4 font-medium">200 JOD</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">2-6 Persons</div>
                    <div className="p-4">185 JOD per person</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">Children 5-12 Years</div>
                    <div className="p-4">100 JOD</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="border-r p-4">Kids under 5 Years</div>
                    <div className="p-4">Not recommended</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Detailed Program</h3>
                <h4 className="mb-2 text-xl font-semibold">Everything you need to know</h4>

                <p className="mb-4 text-gray-700">
                  Your hot air balloon adventure begins very early in the morning, typically about 1-2 hours before
                  sunrise. We'll pick you up from your accommodation in Wadi Rum Village or our camp and transport you
                  to the launch site in the desert.
                </p>

                <div className="mb-6 space-y-4">
                  <div>
                    <h5 className="font-semibold">Pre-flight Briefing:</h5>
                    <p className="text-gray-700">
                      Upon arrival at the launch site, you'll meet your pilot and crew who will give you a comprehensive
                      safety briefing. They'll explain what to expect during the flight, proper boarding and landing
                      procedures, and answer any questions you might have.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Balloon Inflation:</h5>
                    <p className="text-gray-700">
                      You'll witness the fascinating process of inflating the balloon. As dawn approaches, the crew will
                      begin setting up and inflating the massive balloon with cold air from powerful fans, before
                      heating the air with the burners to bring the balloon upright. This spectacle is a photogenic part
                      of the experience.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Boarding and Take-off:</h5>
                    <p className="text-gray-700">
                      Once the balloon is fully inflated and secured, you'll climb aboard the comfortable basket. As the
                      sun begins to rise, the pilot will increase the heat in the balloon, and you'll gently lift off
                      the ground, beginning your aerial adventure over Wadi Rum.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">The Flight:</h5>
                    <p className="text-gray-700">
                      During your 40-60 minute flight, you'll drift peacefully over the desert landscape, taking in
                      panoramic views of Wadi Rum's mountains, valleys, and dunes. The pilot will point out significant
                      landmarks and share interesting information about the geology and history of the area. The flight
                      path varies depending on wind conditions, ensuring each experience is unique.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Sunrise Experience:</h5>
                    <p className="text-gray-700">
                      One of the highlights of the flight is watching the sunrise over the desert. As the sun climbs
                      above the horizon, it illuminates the landscape with a warm golden light, creating a magical
                      atmosphere and spectacular photo opportunities.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Landing:</h5>
                    <p className="text-gray-700">
                      Your pilot will identify a suitable landing site based on wind conditions. The landing is
                      typically gentle, though you'll be briefed on the proper landing position to ensure safety. The
                      ground crew will follow the balloon in vehicles and will be waiting at the landing site to assist.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Post-Flight Celebration:</h5>
                    <p className="text-gray-700">
                      After landing, you'll participate in a traditional hot air balloon ceremony, often including a
                      light breakfast or refreshments and a flight certificate to commemorate your adventure. This is a
                      perfect time to share your experiences with fellow passengers and take final photos.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Return Transfer:</h5>
                    <p className="text-gray-700">
                      Following the celebration, you'll be transported back to your accommodation in Wadi Rum Village or
                      our camp, typically arriving by mid-morning, leaving you with the rest of the day free for other
                      activities.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700">
                  Please note that hot air balloon flights are weather-dependent for safety reasons. In case of
                  unsuitable weather conditions (strong winds, rain, or poor visibility), flights may be rescheduled or
                  refunded. We always prioritize safety above all else.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Included/Excluded</h3>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold">Included:</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-700">
                    <li>Round-trip transportation from your accommodation in Wadi Rum Village or our camp</li>
                    <li>Professional, licensed balloon pilot</li>
                    <li>Comprehensive safety briefing</li>
                    <li>40-60 minute hot air balloon flight</li>
                    <li>Light refreshments after the flight</li>
                    <li>Flight certificate</li>
                    <li>Basic insurance coverage</li>
                    <li>Meals Breakfast & Dinner (Lunch on request)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">Not Included:</h4>
                  <ul className="list-inside list-disc space-y-1 text-gray-700">
                    <li>Personal expenses and souvenirs</li>
                    <li>Gratuities for pilot and crew (optional but appreciated)</li>
                    <li>Professional photography services (available for an additional fee)</li>
                    <li>Transportation to/from Wadi Rum (can be arranged for an additional fee)</li>
                    <li>Comprehensive travel insurance</li>
                    <li>Anything not mentioned in the "Included" list</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <BookingForm defaultTour="hot-air-balloon" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Common questions about our Hot Air Balloon experience and visiting Wadi Rum"
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
