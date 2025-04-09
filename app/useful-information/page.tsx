import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function UsefulInformationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16 text-center text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Useful Information</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            Essential information about Jordan and Wadi Rum to help you plan your visit
          </p>
        </div>
      </section>

      {/* About Jordan */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Jordan</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Jordan, officially the Hashemite Kingdom of Jordan, is an Arab country in Western Asia. It is situated
                  at the crossroads of Asia, Africa, and Europe, within the Levant region, on the East Bank of the
                  Jordan River.
                </p>
                <p>
                  Known for its ancient monuments, nature reserves, and seaside resorts, Jordan is home to countless
                  attractions including the world-famous archaeological site of Petra, the Dead Sea, and of course, the
                  stunning desert wilderness of Wadi Rum.
                </p>
                <p>
                  Jordan is a relatively small country with a population of around 10 million people. The official
                  language is Arabic, though English is widely spoken, especially in tourist areas. The currency is the
                  Jordanian Dinar (JOD).
                </p>
                <p>
                  The country enjoys a Mediterranean climate with hot, dry summers and cool winters. Jordan is known for
                  its hospitality, safety, and rich cultural heritage, making it a popular destination for travelers
                  from around the world.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/images/jordan-map.jpg"
                alt="Map of Jordan"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Wadi Rum */}
      <section className="py-16 bg-amber-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/wadi-rum-landscape.jpg"
                alt="Wadi Rum Landscape"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">About Wadi Rum</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Wadi Rum, also known as the Valley of the Moon, is a protected desert wilderness in southern Jordan.
                  It features dramatic sandstone mountains, natural arches, and narrow gorges, creating one of the most
                  spectacular desert landscapes in the world.
                </p>
                <p>
                  The area has been inhabited since prehistoric times and has a rich cultural history. It was home to
                  many human civilizations, including the Nabataeans who left their mark with rock inscriptions and
                  temple ruins. More recently, it gained fame as the base of operations for T.E. Lawrence (Lawrence of
                  Arabia) during the Arab Revolt of 1917-18.
                </p>
                <p>
                  In 2011, Wadi Rum was designated as a UNESCO World Heritage Site for both its natural and cultural
                  significance. The protected area covers 720 square kilometers of dramatic desert wilderness.
                </p>
                <p>
                  Today, Wadi Rum is a major tourist destination in Jordan, offering visitors the chance to experience
                  the stunning desert landscape through jeep tours, camel rides, hiking, rock climbing, and overnight
                  stays in Bedouin camps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JETT Bus Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">JETT Bus Transportation</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  JETT (Jordan Express Tourist Transportation) is Jordan's premier transportation company, operating
                  modern, comfortable buses throughout all major cities in Jordan. This reliable service is an excellent
                  option for travelers looking to move between destinations like Amman, Petra, Aqaba, and the Dead Sea.
                </p>
                <p>
                  JETT buses are equipped with air conditioning, comfortable seating, and often provide Wi-Fi service on
                  longer routes. The company maintains high safety standards and employs professional drivers familiar
                  with Jordan's roads and conditions.
                </p>
                <p>
                  For visitors planning to explore multiple destinations in Jordan, JETT offers regular scheduled
                  services between major tourist sites. The buses are clean, punctual, and provide a cost-effective
                  alternative to private transportation or rental cars.
                </p>
                <p>
                  From Amman, you can take a JETT bus to Aqaba, and then arrange transportation to Wadi Rum Village.
                  This is often the most economical way to reach Wadi Rum if you're traveling on a budget.
                </p>
                <div className="mt-6">
                  <a href="https://www.jett.com.jo/en/schedule" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-amber-500 hover:bg-amber-600">View JETT Bus Schedule</Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">JETT Bus Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span>
                    <strong>Book in advance:</strong> Especially during high season (March-May and September-November),
                    it's advisable to book your JETT bus tickets at least a day in advance.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span>
                    <strong>Arrive early:</strong> It's recommended to arrive at the bus station at least 30 minutes
                    before departure time.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span>
                    <strong>Luggage allowance:</strong> Each passenger is typically allowed one large suitcase and one
                    carry-on bag. Additional luggage may incur extra charges.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span>
                    <strong>Payment methods:</strong> JETT accepts cash (Jordanian Dinars) and major credit cards for
                    ticket purchases at their offices. Online booking requires a credit card.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span>
                    <strong>Main stations:</strong> JETT operates from dedicated stations in major cities. In Amman, the
                    main station is located in Abdali area.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Climate & Weather */}
      <section className="py-16 bg-amber-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Climate & Weather</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Spring (March-May)</h3>
              <p className="text-gray-700 mb-4">
                Spring offers pleasant temperatures between 20-30°C (68-86°F) during the day and 10-15°C (50-59°F) at
                night. This is one of the best times to visit, with clear skies and blooming desert plants.
              </p>
              <div className="text-sm text-gray-600">
                <p>Recommended clothing: Light layers, sun protection, light jacket for evenings</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Summer (June-August)</h3>
              <p className="text-gray-700 mb-4">
                Summers are hot with daytime temperatures often exceeding 40°C (104°F). Nights are comfortable at around
                20°C (68°F). Despite the heat, the dry climate makes it bearable, especially in the shade.
              </p>
              <div className="text-sm text-gray-600">
                <p>Recommended clothing: Light, breathable fabrics, sun protection, light layers for evenings</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Autumn (September-November)</h3>
              <p className="text-gray-700 mb-4">
                Like spring, autumn offers ideal temperatures between 20-30°C (68-86°F) during the day and cooler
                nights. The landscape takes on golden hues, creating beautiful photo opportunities.
              </p>
              <div className="text-sm text-gray-600">
                <p>Recommended clothing: Light layers, sun protection, warmer clothes for evenings</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Winter (December-February)</h3>
              <p className="text-gray-700 mb-4">
                Winter days are mild at 10-15°C (50-59°F), but nights can be very cold, sometimes dropping below
                freezing. Occasional rainfall may occur, and there's even a small chance of snow in January.
              </p>
              <div className="text-sm text-gray-600">
                <p>Recommended clothing: Warm layers, waterproof jacket, hat and gloves for nights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Etiquette */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Cultural Etiquette</h2>
          <div className="max-w3xl mx-auto space-y-6 text-gray-700">
            <p>
              When visiting Jordan and Wadi Rum, respecting local customs and traditions will enhance your experience
              and show appreciation for the local culture. Here are some important etiquette tips:
            </p>

            <div>
              <h3 className="text-xl font-bold mb-2">Dress Code</h3>
              <p>
                Jordan is a relatively liberal country by Middle Eastern standards, but modest dress is still
                appreciated, especially in rural areas. For women, shoulders and knees should be covered. For men,
                shorts are acceptable in tourist areas but long pants are preferred elsewhere.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Greetings</h3>
              <p>
                Jordanians are known for their hospitality. A handshake is the common greeting, though some may place
                their hand over their heart instead (especially when greeting someone of the opposite gender). Learning
                a few Arabic phrases like "Marhaba" (hello) and "Shukran" (thank you) is always appreciated.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Photography</h3>
              <p>
                Always ask permission before photographing local people, especially Bedouin women. Some may decline or
                request a small fee. Military installations and airports should not be photographed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Dining</h3>
              <p>
                If invited to a Bedouin meal, it's customary to eat with your right hand. Leaving a small amount of food
                on your plate indicates you are satisfied; finishing everything might suggest you're still hungry.
                Refusing tea or coffee can be considered impolite, as hospitality is a cornerstone of Bedouin culture.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Ramadan</h3>
              <p>
                If visiting during the holy month of Ramadan, be respectful by not eating, drinking, or smoking in
                public during daylight hours. Most restaurants and cafes will be closed until sunset, though some
                tourist establishments may remain open.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-amber-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Essential Travel Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Before You Go</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>Visa:</strong> Check visa requirements for your nationality. Many visitors can obtain a visa
                    on arrival at Jordanian airports or border crossings.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>Jordan Pass:</strong> Consider purchasing a Jordan Pass before arrival, which includes entry
                    to many attractions (including Petra) and waives the tourist visa fee if staying at least 3 nights.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>Travel Insurance:</strong> Comprehensive travel insurance is recommended, including coverage
                    for adventure activities if you plan to participate in rock climbing or trekking.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>Health:</strong> No special vaccinations are required for Jordan, but it's always good to
                    check with your doctor before traveling.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>Currency:</strong> The Jordanian Dinar (JOD) is the local currency. ATMs are available in
                    major cities but not in Wadi Rum, so bring enough cash.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">During Your Stay</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>Water:</strong> Drink bottled water only. Stay hydrated, especially during desert
                    activities.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>Sun Protection:</strong> The desert sun is intense. Bring sunscreen, a hat, sunglasses, and
                    light, long-sleeved clothing.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>Footwear:</strong> Comfortable, closed shoes are essential for walking in the desert.
                    Sandals are not suitable for most activities.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>Electronics:</strong> Bring a power bank as charging opportunities may be limited. A
                    headlamp or flashlight is useful for nighttime in the camp.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>Communication:</strong> Purchase a local SIM card for data and calls if needed. Coverage in
                    Wadi Rum is limited but available in most areas.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    <strong>Tipping:</strong> Tipping is customary in Jordan. For guides and drivers, 5-10% of the tour
                    cost is appropriate.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Getting to Wadi Rum */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Getting to Wadi Rum</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
            <p>
              Wadi Rum is located in southern Jordan, approximately 60 km east of Aqaba and 110 km south of Petra. Here
              are the main ways to reach Wadi Rum:
            </p>

            <div>
              <h3 className="text-xl font-bold mb-2">From Aqaba</h3>
              <p>
                Aqaba, with its international airport and border crossings with Israel and Egypt, is the closest major
                city to Wadi Rum.
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  By taxi: A private taxi from Aqaba to Wadi Rum takes about 1 hour and costs approximately 25-35 JOD.
                </li>
                <li>
                  By minibus: Public minibuses run from Aqaba to Wadi Rum Village, though schedules can be irregular.
                </li>
                <li>We can arrange transportation from Aqaba to Wadi Rum for an additional fee.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">From Petra</h3>
              <p>Many visitors combine a trip to Petra with Wadi Rum, as they are relatively close to each other.</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  By taxi: A private taxi from Petra (Wadi Musa) to Wadi Rum takes about 1.5-2 hours and costs
                  approximately 45-55 JOD.
                </li>
                <li>
                  By minibus: Public transportation between Petra and Wadi Rum is limited and may require changing buses
                  in Aqaba.
                </li>
                <li>We can arrange direct transportation from Petra to Wadi Rum for an additional fee.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">From Amman</h3>
              <p>Amman, Jordan's capital, is where most international visitors arrive.</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>By car: The drive from Amman to Wadi Rum takes about 4 hours via the Desert Highway.</li>
                <li>By bus: JETT buses run from Amman to Aqaba, from where you can take a taxi to Wadi Rum.</li>
                <li>We can arrange direct transportation from Amman to Wadi Rum for an additional fee.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Rental Car</h3>
              <p>
                Renting a car gives you flexibility and is a good option if you're planning to visit multiple
                destinations in Jordan. The roads to Wadi Rum are well-maintained, and signs are in both Arabic and
                English. Parking is available at the Wadi Rum Visitor Center.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="font-semibold mb-4">Need help arranging transportation to Wadi Rum?</p>
              <Link href="/contact-us">
                <Button className="bg-amber-500 hover:bg-amber-600">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Wadi Rum?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Now that you're equipped with essential information about Jordan and Wadi Rum, it's time to plan your desert
            adventure!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/desert-experiences">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3">Explore Our Tours</Button>
            </Link>
            <Link href="/book-now">
              <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3">Book Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
