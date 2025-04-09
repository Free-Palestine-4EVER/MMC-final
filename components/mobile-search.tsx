"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, Search } from "lucide-react"
import Link from "next/link"

// Define the structure for search results
interface SearchResult {
  title: string
  url: string
  type: string
}

// Sample search data - in a real app, this would come from an API or database
const searchData: SearchResult[] = [
  { title: "Half Day Jeep Tour", url: "/desert-experiences/half-day-jeep-tour", type: "Experience" },
  { title: "Full Day Jeep Tour", url: "/desert-experiences/full-day-jeep-tour", type: "Experience" },
  { title: "The Beduin Way", url: "/desert-experiences/the-beduin-way", type: "Experience" },
  { title: "Camel Rides", url: "/desert-experiences/camel-rides", type: "Experience" },
  { title: "Hot Air Balloon", url: "/desert-experiences/hot-air-balloon", type: "Experience" },
  { title: "Our Tented Camp", url: "/accommodation/our-tented-camp", type: "Accommodation" },
  { title: "Bivouac Camping", url: "/accommodation/bivouac", type: "Accommodation" },
  { title: "Bubble Camp", url: "/bubble-camp-partner", type: "Accommodation" },
  { title: "About Us", url: "/about-us", type: "Information" },
  { title: "Contact Us", url: "/contact-us", type: "Information" },
  { title: "FAQ", url: "/faq", type: "Information" },
  { title: "Useful Information", url: "/useful-information", type: "Information" },
]

interface MobileSearchProps {
  onClose: () => void
}

export function MobileSearch({ onClose }: MobileSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus the input when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Handle search input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.trim() === "") {
      setResults([])
      return
    }

    // Filter results based on the query
    const filteredResults = searchData.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
    setResults(filteredResults)
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white md:hidden">
      <div className="p-4 border-b">
        <div className="flex items-center">
          <div className="flex-1 flex items-center bg-gray-100 rounded-md px-3 py-2">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search experiences, accommodation..."
              className="flex-1 bg-transparent outline-none"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <button onClick={onClose} className="ml-3 p-2 text-amber-500">
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {searchQuery.trim() === "" ? (
          <div className="text-center text-gray-500 mt-8">
            <p>Search for experiences, accommodation, or information</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <p>No results found for "{searchQuery}"</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Group results by type */}
            {["Experience", "Accommodation", "Information"].map((type) => {
              const typeResults = results.filter((result) => result.type === type)
              if (typeResults.length === 0) return null

              return (
                <div key={type}>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">{type}</h3>
                  <ul className="space-y-3">
                    {typeResults.map((result) => (
                      <li key={result.url}>
                        <Link href={result.url} className="block p-3 rounded-md hover:bg-gray-50" onClick={onClose}>
                          <span className="font-medium">{result.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
