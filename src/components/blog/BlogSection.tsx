'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

interface BlogPostProps {
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  slug: string
  likes: number
}

const blogPosts: BlogPostProps[] = [
  {
    category: 'BETTING TIPS',
    title: 'Maximizing Your NFL Parlays: Strategy Guide',
    excerpt:
      'Learn how to build better NFL parlays with this comprehensive guide to maximizing your profits while managing risk effectively.',
    date: 'May 2, 2025',
    readTime: '5 mins read',
    image: '/blogs/nfl-parlay.jpg',
    slug: 'maximizing-nfl-parlays',
    likes: 236,
  },
  {
    category: 'CASINO',
    title: 'Top 5 Crypto Casino Games to Play This Season',
    excerpt:
      'Discover the most exciting crypto casino games that offer the best odds and biggest payouts available on Ruby Wager.',
    date: 'April 28, 2025',
    readTime: '4 mins read',
    image: '/blogs/crypto-casino.jpg',
    slug: 'top-crypto-casino-games',
    likes: 452,
  },
  {
    category: 'RACING',
    title: 'Essential Guide to Horse Racing Betting',
    excerpt:
      'Master the fundamentals of horse racing bets with our comprehensive guide to odds, betting types, and track strategies.',
    date: 'April 25, 2025',
    readTime: '7 mins read',
    image: '/blogs/horse-racing.jpg',
    slug: 'horse-racing-betting-guide',
    likes: 305,
  },
]

const BlogSection = () => {
  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">
            Latest from the Blog
          </h2>
          <Link
            href="/blog"
            className="flex items-center gap-1 font-medium text-red-600 hover:text-red-500"
          >
            View all posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-lg border border-gray-800 bg-[#1A1A1A] transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Featured Image */}
              <Link href={`/blog/${post.slug}`} className="relative block">
                <div className="relative h-[200px] w-full overflow-hidden">
                  <img
                    src={
                    //   post.image ||
                      'https://placehold.co/640x360/151515/ff0000.png?text=Ruby+Wager+Blog'
                    }
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement
                      target.src =
                        'https://placehold.co/640x360/151515/ff0000.png?text=Ruby+Wager+Blog'
                    }}
                  />
                  <div className="absolute top-4 left-4 rounded bg-red-600 px-2 py-1 text-xs text-white">
                    {post.category}
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="mb-3 text-xl font-bold text-white transition-colors hover:text-red-500">
                    {post.title}
                  </h3>
                </Link>
                <p className="mb-4 line-clamp-2 text-sm text-gray-400">
                  {post.excerpt}
                </p>

                {/* Meta info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-600"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      {post.likes}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button (Mobile) */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/blog"
            className="rounded-md bg-red-600 px-6 py-3 font-medium text-white transition-colors hover:bg-red-700"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
