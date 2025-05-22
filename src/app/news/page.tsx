'use client'

// src/app/blog/page.tsx

import { Metadata } from 'next'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { blogPosts } from '@/lib/blogPosts'

export const metadata: Metadata = {
  title: 'News | RubyWager',
  description: 'Latest news, updates, and announcements from RubyWager',
}

export default function NewsPage() {
  const [openSlug, setOpenSlug] = useState<string | null>(null)

  const toggleAccordion = (slug: string) => {
    setOpenSlug(openSlug === slug ? null : slug)
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-20">
      <h1 className="mb-12 text-4xl font-extrabold text-center text-white">Latest Sports & Betting News</h1>
      <p className="mb-16 text-center text-lg text-gray-300 max-w-2xl mx-auto">
        Explore key stories in tennis, cricket, boxing, and basketball. From clay court battles to IPL thrillers and NBA legacy moments — stay updated with RubyWager.
      </p>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <div key={post.slug} className="rounded-2xl bg-zinc-900 shadow-md overflow-hidden">
            <button
              onClick={() => toggleAccordion(post.slug)}
              className="flex items-center justify-between w-full px-6 py-4 text-left bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">{post.title}</h2>
              <ChevronDown
                className={`h-6 w-6 text-white transform transition-transform duration-300 ${openSlug === post.slug ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${openSlug === post.slug ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[450px] object-cover md:h-[550px] lg:h-[600px]"
              />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-4">{post.date}</p>
                <div
                  className="prose prose-invert prose-lg max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
