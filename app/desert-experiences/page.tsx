import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Clock, Users, Globe } from "lucide-react"

export default function JebelKhashRoutePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jebel-khash-hero.jpg"
            alt="Jebel Khash Route in Wadi Rum"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">Jebel Khash Route</h1>
          <p className="mt-6 max-w-2xl text-center text-xl">
            EXPLORE THE SPECTACULAR LANDSCAPES OF THE JEBEL KHASH REGION
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 row-span-2">
              <Image
                src="/images/jebel-khash-main.jpg"
                alt="Jebel Khash Route"
                width={600}
                height={400}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/jebel-khash-1.jpg"
                alt="Jebel Khash Route"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/jebel-khash-2.jpg"
                alt="Jebel Khash Route"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/jebel-khash-3.jpg"
                alt="Jebel Khash Route"
                width={300}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/jebel-khash-4.jpg"
                alt="Jebel Khash Route"
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
                <div className="font-medium">Full day (7-8 hours)</div>
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
                <h3 className="mb-6 text-3xl font-bold">Jebel Khash Route</h3>

                <p className="mb-4 text-gray-700">
                  The Jebel Khash Route offers a unique desert experience that takes you to some of the most spectacular
                  and less-visited areas of Wadi Rum. This full-day jeep tour explores the southern region of the
                  protected area, featuring dramatic mountain landscapes, vast open plains, and hidden gems that many
                  visitors never get to see.
                </p>
                <p className="mb-4 text-gray-700">
                  Jebel Khash itself is a magnificent mountain formation with distinctive layered sandstone that creates
                  a stunning visual display of colors and textures. The route around this area takes you through narrow
                  canyons, past towering cliffs, and across sweeping sand dunes, providing endless opportunities for
                  photography and appreciation of the desert's raw beauty.
                </p>
                <p className="text-gray-700">
                  What makes this tour special is the sense of solitude and discovery. As you venture away from the more
                  frequented areas of Wadi Rum, you'll experience the profound silence and vastness of the desert in its
                  most pristine form. Your Bedouin guide will share insights about this region's geological features,
                  historical significance, and the traditional Bedouin knowledge of navigating and surviving in this
                  remote landscape.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Rates</h3>
                <div className="overflow-hidden rounded-lg border">
                  <div className="grid grid-cols-2 border-b bg-amber-50">
                    <div className="border-r p-4 font-medium">1 Person</div>
                    <div className="p-4 font-medium">75 JOD</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">2-3 Persons</div>
                    <div className="p-4">65 JOD per person</div>
                  </div>
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r p-4">4-6 Persons</div>
                    <div className="p-4">55 JOD per person</div>
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
                  Your Jebel Khash adventure begins in the morning at Wadi Rum Village, where you'll meet your
                  experienced Bedouin guide and board your 4x4 jeep. After a brief introduction and safety information,
                  you'll set off into the desert, heading south toward the Jebel Khash region.
                </p>

                <div className="mb-6 space-y-4">
                  <div>
                    <h5 className="font-semibold">Southern Desert Landscapes:</h5>
                    <p className="text-gray-700">
                      The journey begins with a drive through the central part of Wadi Rum before heading south into
                      less-visited territory. As you travel, you'll notice the landscape changing, with wider open
                      spaces and different rock formations than those in the northern areas.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Colored Sand Dunes:</h5>
                    <p className="text-gray-700">
                      Visit unique sand dunes with varying colors - from deep red to orange and even white in some
                      areas. These natural wonders are created by the different mineral content in the sand and offer
                      spectacular photo opportunities. You'll have time to climb the dunes and enjoy the panoramic
                      views.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Hidden Canyons:</h5>
                    <p className="text-gray-700">
                      Explore narrow canyons that cut through the mountains, offering shade and a chance to see ancient
                      inscriptions and unique geological formations. Your guide will point out interesting features and
                      explain how these canyons were formed over millions of years.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Lunch in a Secluded Spot:</h5>
                    <p className="text-gray-700">
                      Enjoy a traditional Bedouin lunch prepared in a beautiful, secluded location. Your guide will
                      prepare fresh food over an open fire, and you'll have time to relax and absorb the peaceful desert
                      atmosphere.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Jebel Khash:</h5>
                    <p className="text-gray-700">
                      The highlight of the tour is Jebel Khash itself, a magnificent mountain with distinctive layered
                      sandstone in various shades of red, orange, and yellow. You'll have time to explore the base of
                      the mountain and, if you wish, take a short hike to a viewpoint that offers spectacular vistas of
                      the surrounding desert.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Desert Springs:</h5>
                    <p className="text-gray-700">
                      Visit natural springs that have been vital water sources for Bedouins and desert wildlife for
                      centuries. Your guide will explain how these springs form in such an arid environment and their
                      importance to desert ecology.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Sunset Viewing:</h5>
                    <p className="text-gray-700">
                      As the day draws to a close, you'll head to a perfect spot to watch the sunset over the desert.
                      The changing light creates a magical atmosphere as the mountains and sand take on golden and then
                      deep red hues.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700">
                  After enjoying the sunset, your guide will return you to Wadi Rum Village, completing your full-day
                  desert adventure. Throughout the tour, there will be plenty of stops for photos, short walks, and to
                  simply absorb the majestic silence and beauty of this less-explored region of Wadi Rum.
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
              <BookingForm defaultTour="jebel-khash" />
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
                  1 Day / 7 hours
                </div>
                <Image src="/images/jebel-um-addami.jpg" alt="Jebel Um Addami Climbing" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">Jebel Um Addami Climbing</h3>
                <p className="mb-4 text-sm text-gray-600">Jordan's Highest Mountain</p>
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

