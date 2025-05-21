'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Blog | RubyWager',
  description: 'Explore tips, updates, and the latest trends in sports and casino betting from RubyWager.',
}

const blogPosts = [
  {
    title: 'Top 5 Strategies to Maximize Your Casino Winnings',
    excerpt: 'Learn how to make the most of your casino experience with these practical strategies that every player should know.',
    image: '/blog-casino-winnings.jpg',
    slug: '/blog/maximize-casino-winnings',
    date: 'May 21, 2025',
  },
  {
    title: 'Beginner’s Guide to Sports Betting',
    excerpt: 'New to sports betting? This guide covers the fundamentals so you can bet smarter and enjoy the game.',
    image: '/blog-sports-guide.jpg',
    slug: '/blog/sports-betting-guide',
    date: 'May 18, 2025',
  },
  {
    title: 'What’s New on RubyWager: May Highlights',
    excerpt: 'Check out the new features, bonuses, and campaigns launching this month at RubyWager.',
    image: '/blog-may-highlights.jpg',
    slug: '/blog/may-updates',
    date: 'May 15, 2025',
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-20">
      <h1 className="mb-12 text-4xl font-extrabold text-center text-white">RubyWager Blog</h1>
      <p className="mb-16 text-center text-lg text-gray-300 max-w-2xl mx-auto">
        Stay ahead of the game with insights, updates, and tips from the RubyWager team. Dive into our latest articles and get the edge you need.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={post.slug}
            className="group rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition duration-300 shadow-md hover:shadow-lg overflow-hidden"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="mb-2 text-xl font-bold text-white group-hover:text-gold">{post.title}</h2>
              <p className="mb-4 text-gray-400 text-sm">{post.date}</p>
              <p className="text-gray-300 text-base leading-relaxed">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
