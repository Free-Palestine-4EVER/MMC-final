"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface TourOption {
  id: string
  name: string
  prices: {
    minPeople: number
    maxPeople: number
    price: number
  }[]
  childrenNote?: string
}

// Define accommodation types and their prices
const accommodationOptions = [
  { id: "tented-camp", name: "Sleeping at the Tented Camp", price: 25, description: "With breakfast and dinner" },
  { id: "under-stars", name: "Sleeping Under the Stars", price: 40, description: "With dinner and breakfast" },
  { id: "luxury-bubble", name: "Luxury Bubble Camp", price: 120, description: "Per person" },
  { id: "normal-bubble", name: "Normal Bubble Camp", price: 80, description: "Per person" },
]

// Define tour options and their price tiers
const tourOptions: TourOption[] = [
  {
    id: "half-day-jeep",
    name: "Half Day Jeep Tour",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 50 },
      { minPeople: 2, maxPeople: 3, price: 45 },
      { minPeople: 4, maxPeople: 6, price: 35 },
    ],
  },
  {
    id: "full-day-jeep",
    name: "Full Day Jeep Tour",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 60 },
      { minPeople: 2, maxPeople: 3, price: 55 },
      { minPeople: 4, maxPeople: 6, price: 45 },
    ],
  },
  {
    id: "beduin-way",
    name: "The Beduin Way",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 150 },
      { minPeople: 2, maxPeople: 5, price: 100 },
      { minPeople: 6, maxPeople: 100, price: 85 },
    ],
  },
  {
    id: "jebel-khash",
    name: "Jebel Khash Route",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 140 },
      { minPeople: 2, maxPeople: 3, price: 90 },
      { minPeople: 4, maxPeople: 6, price: 75 },
    ],
    childrenNote: "Children 5-12 Years: Half Price. Kids from 0-5 Years: FREE",
  },
  {
    id: "hot-air-balloon",
    name: "Hot Air Balloon",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 200 },
      { minPeople: 2, maxPeople: 6, price: 185 },
    ],
  },
  {
    id: "burdah-arch",
    name: "Burdah Arch Scrambling",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 120 },
      { minPeople: 2, maxPeople: 5, price: 80 },
      { minPeople: 6, maxPeople: 100, price: 65 },
    ],
  },
  {
    id: "all-in-one",
    name: "All in One Day",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 110 },
      { minPeople: 2, maxPeople: 5, price: 80 },
      { minPeople: 6, maxPeople: 100, price: 65 },
    ],
  },
  {
    id: "um-addami",
    name: "Jebel Um Addami Climbing",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 85 },
      { minPeople: 2, maxPeople: 3, price: 75 },
      { minPeople: 4, maxPeople: 6, price: 65 },
    ],
  },
  {
    id: "camel-rides",
    name: "Camel Rides",
    prices: [
      { minPeople: 1, maxPeople: 100, price: 20 }, // Fixed price per person
    ],
  },
  {
    id: "sandboarding",
    name: "Sandboarding",
    prices: [
      { minPeople: 1, maxPeople: 100, price: 20 }, // Fixed price per person
    ],
  },
  {
    id: "trekking",
    name: "Trekking in the Wild",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 190 },
      { minPeople: 2, maxPeople: 5, price: 150 },
      { minPeople: 6, maxPeople: 100, price: 130 },
    ],
  },
]

// Helper function to get tour price based on number of people
const getTourPrice = (tour, numPeople) => {
  const priceTier = tour.prices.find((tier) => numPeople >= tier.minPeople && numPeople <= tier.maxPeople)
  return priceTier ? priceTier.price : tour.prices[0].price
}

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: null,
    numPeople: 1,
    accommodation: "",
    message: "",
  })

  const [selectedTours, setSelectedTours] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  // Calculate total price whenever relevant fields change
  useEffect(() => {
    let total = 0

    // Check if any selected tour qualifies for free tented camp accommodation
    const qualifiesForFreeTentedCamp = selectedTours.some((tourId) => {
      return tourId !== "sandboarding" && tourId !== "camel-rides" && tourId !== "hot-air-balloon"
    })

    // Add accommodation price (free tented camp if qualifying tour is selected)
    if (formData.accommodation) {
      const selectedAccommodation = accommodationOptions.find((option) => option.id === formData.accommodation)
      if (selectedAccommodation) {
        // If tented camp is selected and user has a qualifying tour, it's free
        if (qualifiesForFreeTentedCamp && formData.accommodation === "tented-camp") {
          total += 0 // Free accommodation
        } else {
          total += selectedAccommodation.price * formData.numPeople
        }
      }
    }

    // Add tour prices
    selectedTours.forEach((tourId) => {
      const tour = tourOptions.find((option) => option.id === tourId)
      if (tour) {
        total += getTourPrice(tour, formData.numPeople) * formData.numPeople
      }
    })

    setTotalPrice(total)
  }, [formData.accommodation, formData.numPeople, selectedTours])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDateSelect = (date) => {
    setFormData((prev) => ({
      ...prev,
      date,
    }))
  }

  const handleRemoveTour = (tourId) => {
    setSelectedTours((prev) => prev.filter((id) => id !== tourId))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", { ...formData, tours: selectedTours, totalPrice })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="p-6 bg-green-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-green-700 mb-4">Booking Request Sent!</h3>
        <p className="mb-4">
          Thank you for your booking request. We will contact you shortly to confirm your reservation.
        </p>
        <Button
          onClick={() => {
            setFormData({
              name: "",
              email: "",
              phone: "",
              date: null,
              numPeople: 1,
              accommodation: "",
              message: "",
            })
            setSelectedTours([])
            setTotalPrice(0)
            setSubmitted(false)
          }}
        >
          Make Another Booking
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Your email address"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Your phone number"
            />
          </div>
          <div className="space-y-2">
            <Label>Arrival Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !formData.date && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.date ? format(formData.date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={formData.date} onSelect={handleDateSelect} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="numPeople">Number of People</Label>
          <Select
            value={formData.numPeople.toString()}
            onValueChange={(value) => handleSelectChange("numPeople", Number.parseInt(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select number of people" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "Person" : "People"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4 border-t pt-4">
        <h3 className="text-xl font-semibold">Accommodation</h3>
        <div className="space-y-2">
          <Label htmlFor="accommodation">Select Accommodation</Label>
          <Select value={formData.accommodation} onValueChange={(value) => handleSelectChange("accommodation", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select accommodation type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No accommodation needed</SelectItem>
              {accommodationOptions.map((option) => {
                // Check if any selected tour qualifies for free tented camp
                const qualifiesForFreeTentedCamp = selectedTours.some((tourId) => {
                  return tourId !== "sandboarding" && tourId !== "camel-rides" && tourId !== "hot-air-balloon"
                })

                // Show "FREE" for tented camp if qualifying tour is selected
                const priceDisplay =
                  qualifiesForFreeTentedCamp && option.id === "tented-camp" ? "FREE" : `${option.price} JOD per person`

                return (
                  <SelectItem key={option.id} value={option.id}>
                    {option.name} - {priceDisplay} ({option.description})
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4 border-t pt-4">
        <h3 className="text-xl font-semibold">Desert Experiences</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tourSelect">Select Tours</Label>
            <Select
              onValueChange={(tourId) => {
                if (!selectedTours.includes(tourId)) {
                  setSelectedTours((prev) => [...prev, tourId])
                }
              }}
            >
              <SelectTrigger id="tourSelect" className="w-full">
                <SelectValue placeholder="Select a tour to add" />
              </SelectTrigger>
              <SelectContent>
                {tourOptions.map((tour) => {
                  const price = getTourPrice(tour, formData.numPeople)
                  return (
                    <SelectItem key={tour.id} value={tour.id}>
                      {tour.name} - {price} JOD per person
                      {tour.childrenNote && <div className="text-xs text-gray-500 mt-1">{tour.childrenNote}</div>}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>

          {selectedTours.length > 0 && (
            <div className="space-y-2 mt-4">
              <Label>Selected Tours</Label>
              <div className="space-y-2">
                {selectedTours.map((tourId) => {
                  const tour = tourOptions.find((t) => t.id === tourId)
                  const price = getTourPrice(tour, formData.numPeople)
                  return (
                    <div key={tourId} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                      <div className="flex-1">
                        <span className="font-medium">{tour.name}</span>
                        <span className="ml-2 text-gray-600">
                          {price} JOD per person × {formData.numPeople} = {price * formData.numPeople} JOD
                        </span>
                        {tour.childrenNote && <div className="text-xs text-gray-500 mt-1">{tour.childrenNote}</div>}
                      </div>
                      <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveTour(tourId)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4 border-t pt-4">
        <h3 className="text-xl font-semibold">Additional Information</h3>
        <div className="space-y-2">
          <Label htmlFor="message">Special Requests or Questions</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Any special requests or questions?"
            rows={4}
          />
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="bg-amber-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>

          {formData.accommodation && (
            <div className="flex justify-between mb-2">
              <span>{accommodationOptions.find((a) => a.id === formData.accommodation)?.name}:</span>
              <span className="font-medium">
                {(() => {
                  const accommodation = accommodationOptions.find((a) => a.id === formData.accommodation)
                  if (!accommodation) return ""

                  // Check if any selected tour qualifies for free tented camp
                  const qualifiesForFreeTentedCamp = selectedTours.some((tourId) => {
                    return tourId !== "sandboarding" && tourId !== "camel-rides" && tourId !== "hot-air-balloon"
                  })

                  if (qualifiesForFreeTentedCamp && formData.accommodation === "tented-camp") {
                    return "FREE (Included with tour)"
                  } else {
                    return `${accommodation.price} JOD × ${formData.numPeople} = ${accommodation.price * formData.numPeople} JOD`
                  }
                })()}
              </span>
            </div>
          )}

          {selectedTours.map((tourId) => {
            const tour = tourOptions.find((t) => t.id === tourId)
            const price = getTourPrice(tour, formData.numPeople)
            return (
              <div key={tourId} className="flex justify-between mb-2">
                <span>{tour.name}:</span>
                <span className="font-medium">
                  {price} JOD × {formData.numPeople} = {price * formData.numPeople} JOD
                </span>
              </div>
            )
          })}

          <div className="flex justify-between pt-2 border-t mt-2">
            <span className="text-lg font-bold">Total:</span>
            <span className="text-lg font-bold">{totalPrice} JOD</span>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
        Submit Booking Request
      </Button>
    </form>
  )
}
