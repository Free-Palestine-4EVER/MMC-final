import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/data/blog-posts"
import { generateBlogPostSchema } from "@/lib/schema"
import type { Metadata } from "next"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Wadi Rum Travel Guide`,
    description: post.metaDescription || post.excerpt,
    keywords: post.tags.join(", ") + ", Wadi Rum, Jordan travel, desert experience",
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      images: [{ url: post.coverImage || "/images/blog-hero.jpg" }],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  // Generate BlogPosting schema
  const blogPostSchema = generateBlogPostSchema({
    title: post.title,
    description: post.metaDescription || post.excerpt,
    image: post.coverImage || "/images/blog-hero.jpg",
    datePublished: post.date,
    author: post.author,
    url: `https://wadirum.com/blog/${post.slug}`,
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema.org structured data */}
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 py-24 md:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 flex items-center justify-center">
              <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded mr-3">
                {post.category}
              </span>
              <span className="text-gray-200">{post.date}</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl mb-6 text-center">
              {post.title}
            </h1>
            <div className="flex items-center justify-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={post.authorImage || "/placeholder.svg"}
                  alt={`Author: ${post.author}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-gray-300">{post.readTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="prose prose-lg max-w-none">
                {post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("# ")) {
                    return (
                      <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                        {paragraph.substring(2)}
                      </h1>
                    )
                  } else if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                        {paragraph.substring(3)}
                      </h2>
                    )
                  } else if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl font-bold mt-5 mb-2">
                        {paragraph.substring(4)}
                      </h3>
                    )
                  } else if (paragraph.startsWith("- ")) {
                    return (
                      <ul key={index} className="list-disc pl-6 my-4">
                        {paragraph.split("\n").map((item, i) => (
                          <li key={i} className="mb-2">
                            {item.substring(2)}
                          </li>
                        ))}
                      </ul>
                    )
                  } else {
                    return (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    )
                  }
                })}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-6 border-t">
                <h3 className="text-lg font-bold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-8">
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex items-start">
                        <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src={relatedPost.coverImage || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium text-sm line-clamp-2">
                            <Link href={`/blog/${relatedPost.slug}`} className="hover:text-blue-600">
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Explore Wadi Rum</h3>
                  <p className="text-gray-700 mb-4">
                    Ready to experience the magic of Wadi Rum in person? Book your desert adventure today.
                  </p>
                  <Link href="/contact-us" passHref>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/blog" passHref>
              <Button variant="outline" className="text-blue-600 border-blue-600">
                Back to All Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
