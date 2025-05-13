import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News | RubyWager',
  description: 'Latest news, updates, and announcements from RubyWager',
}

export default function NewsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-20">
      {/* Under construction section */}
      <section className="mb-16">
        <div className="rounded-lg border border-[#ff5f5f5] bg-black/5 p-8 text-center">
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-20 w-20 text-[#ff5f5f]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h2 className="mb-4 text-2xl font-bold">Under Construction</h2>
          <p className="mb-6 text-lg">
            Our newsroom is currently being built to bring you the latest
            updates, features, and insider information from Ruby Wager.
          </p>
          <p className="mb-8 text-lg">
            Stay tuned for exciting news, announcements, and exclusive content
            coming soon!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/"
              className="blink-strong rounded bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
