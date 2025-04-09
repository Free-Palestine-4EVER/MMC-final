import { FAQSection } from "@/components/faq-section"

export default function FAQPage() {
  const generalFaqs = [
    {
      question: "What is the best time to visit Wadi Rum?",
      answer:
        "The best times to visit Wadi Rum are during spring (March to May) and autumn (September to November) when temperatures are moderate. Summer (June to August) can be very hot during the day, though nights are pleasant. Winter (December to February) offers mild days but cold nights.",
    },
    {
      question: "How do I get to Wadi Rum?",
      answer:
        "Wadi Rum is located about 60 km east of Aqaba. You can reach Wadi Rum by taxi, rental car, or public transportation from Aqaba or other major cities in Jordan. We can also arrange transportation for you from Aqaba, Petra, or Amman for an additional fee.",
    },
    {
      question: "Do I need a visa to visit Jordan?",
      answer:
        "Most visitors to Jordan require a visa, which can be obtained upon arrival at international airports or at most border crossings. The Jordan Pass, which includes entry to many attractions including Petra, also includes a tourist visa if purchased before arrival in Jordan.",
    },
    {
      question: "Is Wadi Rum safe for tourists?",
      answer:
        "Yes, Wadi Rum is generally very safe for tourists. Jordan as a whole is known for its hospitality and safety for travelers. Our experienced guides are familiar with the terrain and weather conditions, and we prioritize safety in all our tours.",
    },
    {
      question: "What should I pack for a trip to Wadi Rum?",
      answer:
        "We recommend bringing sunscreen, a hat, sunglasses, comfortable walking shoes, a light jacket (even in summer, as desert nights can be cool), a camera, and a refillable water bottle. For overnight stays, bring personal toiletries and any necessary medications.",
    },
  ]

  const accommodationFaqs = [
    {
      question: "What types of accommodation do you offer?",
      answer:
        "We offer traditional Bedouin tented camps with modern amenities, as well as bivouac camping under the stars. Through our partners, we also offer luxury bubble tents with transparent ceilings for stargazing.",
    },
    {
      question: "Do the tents have electricity?",
      answer:
        "Yes, our tented camp has electricity powered by solar energy. You can charge your devices and enjoy lighting in the evening.",
    },
    {
      question: "Are bathroom facilities available?",
      answer:
        "Yes, our tented camp has shared bathroom facilities with hot showers and western-style toilets. The facilities are clean and well-maintained.",
    },
    {
      question: "Is Wi-Fi available at the camp?",
      answer:
        "Yes, we provide Wi-Fi in the common areas of our camp. However, due to the remote location, the connection may sometimes be slow or intermittent.",
    },
    {
      question: "What meals are provided?",
      answer:
        "We provide breakfast, lunch, and dinner for overnight guests. Our meals feature traditional Bedouin cuisine, with options for vegetarians and those with dietary restrictions (please inform us in advance).",
    },
  ]

  const tourFaqs = [
    {
      question: "How physically demanding are the tours?",
      answer:
        "Our tours vary in physical intensity. Jeep tours and camel rides are accessible to most people, while climbing and trekking experiences require a moderate level of fitness. We can customize tours based on your physical abilities and preferences.",
    },
    {
      question: "Can I customize a tour?",
      answer:
        "Yes, we can customize tours to suit your interests, time constraints, and physical abilities. Please contact us to discuss your specific requirements.",
    },
    {
      question: "What languages do your guides speak?",
      answer:
        "Our guides speak Arabic and English. Some guides may also speak other languages, but this is subject to availability.",
    },
    {
      question: "Are children allowed on tours?",
      answer:
        "Yes, most of our tours are suitable for children. Jeep tours and shorter camel rides are particularly family-friendly. Some activities like rock climbing have age restrictions for safety reasons.",
    },
    {
      question: "What happens if there is bad weather?",
      answer:
        "In case of severe weather conditions that might affect safety, we may reschedule or modify tours. However, Wadi Rum has a desert climate with very little rainfall, so weather disruptions are rare.",
    },
  ]

  const bookingFaqs = [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least a few days in advance, especially during peak season (March-May and September-November). For holiday periods and special requests, booking several weeks ahead is advisable.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash (Jordanian Dinars) upon arrival. For advance bookings, we can arrange bank transfers or online payments. Please contact us for details.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellations made more than 7 days before the scheduled date receive a full refund. Cancellations between 3-7 days receive a 50% refund. Cancellations less than 3 days before the scheduled date are non-refundable. However, we try to be flexible in case of emergencies.",
    },
    {
      question: "Can I book a tour on the same day?",
      answer:
        "Same-day bookings are possible subject to availability. Please contact us directly by phone or WhatsApp for last-minute bookings.",
    },
    {
      question: "Do you offer group discounts?",
      answer:
        "Yes, we offer discounts for groups of 4 or more people. Please contact us for specific pricing based on your group size and chosen activities.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16 text-center text-white">
        <div className="container">
          <h1 className="text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            Find answers to common questions about visiting Wadi Rum, our tours, accommodations, and more.
          </p>
        </div>
      </section>

      {/* General FAQs */}
      <FAQSection
        title="General Questions"
        description="Common questions about visiting Wadi Rum and Jordan"
        faqs={generalFaqs}
      />

      {/* Accommodation FAQs */}
      <FAQSection
        title="Accommodation"
        description="Questions about our camps and overnight stays"
        faqs={accommodationFaqs}
        className="bg-amber-50"
      />

      {/* Tour FAQs */}
      <FAQSection title="Tours & Activities" description="Information about our desert experiences" faqs={tourFaqs} />

      {/* Booking FAQs */}
      <FAQSection
        title="Booking & Payment"
        description="Questions about reservations, cancellations, and payments"
        faqs={bookingFaqs}
        className="bg-amber-50"
      />

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            If you couldn't find the answer to your question, please don't hesitate to contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:mohammed.mutlak.camp@gmail.com"
              className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/962777424937"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
