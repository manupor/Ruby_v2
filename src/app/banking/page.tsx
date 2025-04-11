import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Banking | RubyWager',
  description: 'Add a description here',
}

export default function BankingPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-20">
      <h1 className="mb-10 text-3xl font-bold">Banking</h1>
      <h2 className="text-brand mb-6 text-2xl font-bold">
        Cryptocurrency Tutorial
      </h2>
      <section className="mb-10">
        <h2 className="mb-6 text-2xl font-semibold">Crypto Tutorial</h2>
        <div className="rounded-lg border border-[#ff5f5f5] p-6">
          <p className="mb-4">
            Cryptocurrency betting has become an increasingly popular and secure
            way for players to engage in online sports betting. At Ruby Wager,
            we support various cryptocurrencies to offer our players fast,
            secure, and private transactions. Whether you’re new to crypto or
            just need a refresher, this guide will walk you through everything
            you need to know about using crypto for your wagers.
          </p>
        </div>
      </section>
    </main>
  )
}
