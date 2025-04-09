import { BookingForm } from "@/components/booking-form"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16 text-center text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              We're here to help you plan your perfect desert adventure. Feel free to reach out to us with any questions
              or to book your experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center p-8 rounded-lg shadow-md bg-white">
                <div className="bg-amber-100 p-4 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-700 mb-2">Call us directly:</p>
                <a href="tel:+962777424937" className="text-amber-600 hover:text-amber-700 font-medium break-words">
                  +962 777 424 937
                </a>
              </div>

              <div className="flex flex-col items-center p-8 rounded-lg shadow-md bg-white">
                <div className="bg-amber-100 p-4 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-700 mb-2">Send us an email:</p>
                <a
                  href="mailto:mohammed.mutlak.camp@gmail.com"
                  className="text-amber-600 hover:text-amber-700 font-medium break-words"
                >
                  mohammed.mutlak.camp@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center p-8 rounded-lg shadow-md bg-white">
                <div className="bg-amber-100 p-4 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-700 mb-2">Find us at:</p>
                <p className="text-center">Wadi Rum Protected Area, Jordan</p>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="https://wa.me/962777424937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-green-500 px-8 py-3 text-white hover:bg-green-600 transition-colors"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Book Your Trip Now</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ready to experience the magic of Wadi Rum? Use our booking form to reserve your desert adventure today.
            </p>
          </div>
          <div className="mx-auto max-w-lg">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold">Our Support Team</h2>
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
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 h-auto">
              <a
                href="https://wa.me/962777424937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
