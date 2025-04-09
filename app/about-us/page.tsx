import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://www.wadirumheritage.org/images/traditional-camp.jpg"
          alt="Bedouin guides around campfire"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Meet our team of experienced Bedouin guides who will make your Wadi Rum experience unforgettable
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          <p className="text-lg">
            Wadi Rum Heritage was founded by local Bedouins who have lived in this magnificent desert landscape for
            generations. Our team grew up exploring the vast canyons, climbing the sandstone mountains, and learning the
            ancient ways of desert life from our elders.
          </p>
          <p className="text-lg">
            What began as a small family operation has grown into a respected tour company, but we've never lost our
            connection to our roots. We remain committed to sharing the authentic culture, traditions, and natural
            beauty of Wadi Rum with visitors from around the world.
          </p>
          <p className="text-lg">
            Our deep knowledge of the desert, passed down through generations, allows us to offer unique experiences
            that go beyond typical tourism. When you travel with Wadi Rum Heritage, you're not just a tourist - you're
            our honored guest, experiencing our homeland through the eyes of those who know and love it best.
          </p>
        </div>
      </section>

      {/* Meet Our Guides Section */}
      <section className="py-16 px-4 md:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Guides</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our experienced Bedouin guides are passionate about sharing their heritage and knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Guide 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image src="https://www.wadirumheritage.org/images/guides/salem.jpg" alt="Salem" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Salem</h3>
                <p className="mb-4">
                  Salem is the proud owner of the camp and a passionate advocate for Bedouin traditions. He has
                  dedicated his life to sharing the magic of Wadi Rum with visitors from around the world.
                </p>
                <div className="text-sm text-amber-700 font-medium">
                  <p>Specialties: Hospitality, cultural heritage, camp management</p>
                </div>
              </div>
            </div>

            {/* Guide 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image src="https://www.wadirumheritage.org/images/guides/omar.jpg" alt="Omar" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Omar</h3>
                <p className="mb-4">
                  Omar is a seasoned desert guide with a deep passion for the history and beauty of Wadi Rum. He has
                  spent his life exploring the vast wilderness and is known for his engaging storytelling.
                </p>
                <div className="text-sm text-amber-700 font-medium">
                  <p>Specialties: Cultural tours, desert navigation, Bedouin traditions</p>
                </div>
              </div>
            </div>

            {/* Guide 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image src="https://www.wadirumheritage.org/images/guides/alibaba.jpg" alt="Ali-Alibaba" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ali-Alibaba</h3>
                <p className="mb-4">
                  Ali-Alibaba is a charismatic guide with years of experience leading adventure seekers through the
                  wonders of Wadi Rum. His knowledge and friendly demeanor make every tour unique.
                </p>
                <div className="text-sm text-amber-700 font-medium">
                  <p>Specialties: Wildlife tracking, desert survival, photography</p>
                </div>
              </div>
            </div>

            {/* Guide 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image src="https://www.wadirumheritage.org/images/guides/abdullah.jpg" alt="Abdullah" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Abdullah (Ali's Son)</h3>
                <p className="mb-4">
                  Following in his father's footsteps, Abdullah inherited a love for the desert and a wealth of
                  traditional knowledge. He enjoys sharing the rich history of Wadi Rum.
                </p>
                <div className="text-sm text-amber-700 font-medium">
                  <p>Specialties: Family tours, cultural heritage, camel riding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg max-w-3xl mx-auto">What drives us and shapes the experiences we create</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-amber-500 mb-4">
                <Heart className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Authentic Experiences</h3>
              <p>
                We are committed to providing genuine Bedouin experiences that reflect our culture, traditions, and way
                of life. We believe in sharing the real Wadi Rum, not a commercialized version.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-amber-500 mb-4">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Support</h3>
              <p>
                We employ local Bedouins and support the local community. By choosing Wadi Rum Heritage, you're directly
                contributing to the sustainable development of our region.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-amber-500 mb-4">
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Environmental Respect</h3>
              <p>
                We practice responsible tourism that respects and preserves the delicate desert ecosystem. We follow
                leave-no-trace principles and educate our guests about desert conservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-amber-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Wadi Rum with Us</h2>
          <p className="text-xl mb-8">
            Join us for an authentic desert adventure guided by local Bedouins who are passionate about sharing their
            heritage
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact-us">
              <Button className="bg-white text-amber-500 hover:bg-gray-100 px-8 py-3 text-lg w-full sm:w-auto h-auto">
                Book Now
              </Button>
            </Link>
            <Button
              asChild
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg w-full sm:w-auto h-auto"
            >
              <a
                href="https://wa.me/962777424937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
