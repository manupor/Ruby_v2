import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Promotions & Bonuses | RubyWager',
  description: 'Add a description here',
}

export default function PromotionsPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-20">
      <h1 className="mb-10 text-3xl font-bold">Promotions & Bonuses</h1>

      <section className="mb-16">
        <p>
          At Ruby Wager, we believe that bonuses are a fantastic way to maximize
          your bankroll and increase your chances of winning. We offer several
          exciting bonuses designed to give you more value for your deposits.
          Whether you’re a new player or a returning customer, there’s something
          for everyone to take advantage of!
        </p>
      </section>
    </main>
  )
}
