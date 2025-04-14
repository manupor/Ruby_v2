import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help | RubyWager',
  description: 'Add a description here',
}

export default function HelpPage() {
  return (
    <>
      <div className="relative hidden h-[400px] w-full overflow-hidden lg:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/help.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-10 text-3xl font-bold">Help</h1>
        <section className="mb-16">
          <p>lipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
        </section>
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-semibold">...</h2>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4">...</p>
          </div>
        </section>
      </div>
    </>
  )
}
