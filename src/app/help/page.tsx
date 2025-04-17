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
        <h1 className="mb-10 text-3xl font-bold">Need Help?</h1>
        <section className="mb-10">
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4">
              If you believe you have a gambling problem, we encourage you to
              seek professional assistance. The following organizations offer
              confidential support and resources:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Gamblers Anonymous (GA) –{' '}
                <a
                  className="text-brand-dark underline-offset-4 hover:underline"
                  href="http://www.gamblersanonymous.org"
                  target="_blank"
                >
                  www.gamblersanonymous.org
                </a>
              </li>
              <li>
                National Council on Problem Gambling (NCPG) –{' '}
                <a
                  className="text-brand-dark underline-offset-4 hover:underline"
                  href="http://www.ncpgambling.org"
                  target="_blank"
                >
                  www.ncpgambling.org
                </a>
              </li>
              <li>
                BeGambleAware –{' '}
                <a
                  className="text-brand-dark underline-offset-4 hover:underline"
                  href="http://www.begambleaware.org"
                  target="_blank"
                >
                  www.begambleaware.org
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
