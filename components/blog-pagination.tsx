"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  basePath?: string
}

export function BlogPagination({ currentPage, totalPages, basePath = "/blog" }: BlogPaginationProps) {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than max to show
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // Always include first page
      pageNumbers.push(1)

      // Calculate start and end of page range
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if at the beginning
      if (currentPage <= 2) {
        end = Math.min(totalPages - 1, 4)
      }

      // Adjust if at the end
      if (currentPage >= totalPages - 1) {
        start = Math.max(2, totalPages - 3)
      }

      // Add ellipsis if needed at the beginning
      if (start > 2) {
        pageNumbers.push("...")
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i)
      }

      // Add ellipsis if needed at the end
      if (end < totalPages - 1) {
        pageNumbers.push("...")
      }

      // Always include last page
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex justify-center items-center space-x-2">
      <Link href={`${basePath}?page=${Math.max(1, currentPage - 1)}`} passHref>
        <Button variant="outline" size="icon" disabled={currentPage === 1} aria-label="Previous page">
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </Link>

      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="px-2">
            ...
          </span>
        ) : (
          <Link key={`page-${page}`} href={`${basePath}?page=${page}`} passHref>
            <Button
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              className={currentPage === page ? "bg-blue-500 hover:bg-blue-600" : ""}
            >
              {page}
            </Button>
          </Link>
        ),
      )}

      <Link href={`${basePath}?page=${Math.min(totalPages, currentPage + 1)}`} passHref>
        <Button variant="outline" size="icon" disabled={currentPage === totalPages} aria-label="Next page">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}
