import Link from 'next/link'

const RulesFeatures = () => {
  return (
    <section className="bg-black px-4 py-16 text-white">
      {/* Main heading */}
      <div className="mx-auto mb-8 max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          BONUS TERMS & ROLLOVER REQUIREMENTS
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          At RubyWager, all bonuses come with a rollover requirement that must be met before any withdrawals can be
          processed. Here's everything you need to know about how our bonus system works and the terms that apply.
        </p>
      </div>

      {/* Five feature columns */}
      <div className="mx-auto mb-16 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
        {/* Column 1 */}
        <div className="text-center lg:col-span-2">
          <div className="mb-4 flex justify-center">
            <div dangerouslySetInnerHTML={{ 
              __html: `<svg xmlns="http://www.w3.org/2000/svg" fill="#C8102E" viewBox="0 0 24 24" width="48" height="48">
                <circle cx="12" cy="12" r="10" stroke="none"/>
                <circle cx="12" cy="12" r="6" fill="white"/>
                <circle cx="12" cy="12" r="2" fill="#C8102E"/>
              </svg>` 
            }} />
          </div>
          <h3 className="mb-3 text-xl font-bold">How Rollover is Calculated</h3>
          <p className="mb-3 text-gray-400">
            (Deposit + Freeplay) × Rollover Multiplier
          </p>
          <div className="rounded-lg border border-[#333] bg-[#1A1A1A] p-4">
            <p className="mb-2 font-semibold text-white">Example:</p>
            <ul className="text-left text-gray-400 space-y-1">
              <li>• Deposit: $1,000</li>
              <li>• Freeplay Bonus: $2,000 (200%)</li>
              <li>• Total: $3,000</li>
              <li>• Rollover: 15x</li>
              <li>• Requirement: $3,000 × 15 = $45,000 in qualifying wagers</li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div dangerouslySetInnerHTML={{ 
              __html: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#C8102E" stroke-width="2" viewBox="0 0 24 24" width="48" height="48">
                <path d="M4 6h16M4 12h10M4 18h8"/>
                <polyline points="14 12 16 14 20 10" stroke="#C8102E" stroke-width="2" fill="none"/>
              </svg>` 
            }} />
          </div>
          <h3 className="mb-3 text-xl font-bold">What Counts Toward Rollover</h3>
          <p className="text-gray-400">
            <ul className="text-left pl-4">
              <li>• Straight wagers only</li>
              <li>• Pre-game or halftime bets</li>
              <li>• Wagers must be on different events</li>
            </ul>
          </p>
        </div>

        {/* Column 3 */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div dangerouslySetInnerHTML={{ 
              __html: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#C8102E" stroke-width="2" viewBox="0 0 24 24" width="48" height="48">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>` 
            }} />
          </div>
          <h3 className="mb-3 text-xl font-bold">What Does NOT Count</h3>
          <p className="text-gray-400">
            <ul className="text-left pl-4">
              <li>• Live bets</li>
              <li>• Parlays (except eligible 2-team Freeplay parlays)</li>
              <li>• Teasers</li>
              <li>• Horse racing or casino wagers</li>
              <li>• Wagers on the same event</li>
              <li>• Bets made using Freeplay</li>
            </ul>
          </p>
        </div>

        {/* Column 4 */}
        <div className="text-center lg:col-span-2">
          <div className="mb-4 flex justify-center">
            <div dangerouslySetInnerHTML={{ 
              __html: `<svg xmlns="http://www.w3.org/2000/svg" fill="#C8102E" viewBox="0 0 24 24" width="48" height="48">
                <rect x="2" y="8" width="20" height="14" rx="2"/>
                <path d="M12 8V2M9 2c0 2 3 4 3 4s3-2 3-4" fill="none" stroke="white" stroke-width="2"/>
              </svg>` 
            }} />
          </div>
          <h3 className="mb-3 text-xl font-bold">Freeplay Rules</h3>
          <p className="text-gray-400">
            <ul className="text-left pl-4">
              <li>• Freeplays are only valid on straight wagers and 2-team parlays</li>
              <li>• Freeplay winnings are withdrawable once rollover is completed</li>
              <li>• Wagers placed with Freeplay do not contribute to rollover</li>
            </ul>
          </p>
          <div className="mt-4 rounded-lg border border-[#333] bg-[#1A1A1A] p-4">
            <p className="mb-2 font-semibold text-white">Important:</p>
            <p className="text-gray-400 text-left">
              When calculating rollover, only the lower amount of the wager is applied:
              <br />• $1,900 to win $1,000 → $1,000 counts
              <br />• $1,000 to win $1,900 → $1,000 counts
            </p>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="mb-4 text-center">
        <h3 className="mb-4 text-3xl font-bold">Ready to Start Betting?</h3>
        <p className="mb-8 text-lg text-gray-300">
          These terms are in place to ensure a fair, transparent, and rewarding experience for all RubyWager players.
          Review your bonus terms before betting and as always, your VIP host is here if you need anything.
        </p>
        <Link href="/join">
          <button className="rounded-full bg-[#FF003D] px-10 py-4 text-xl font-bold text-white transition-colors hover:bg-[#E00034]">
            JOIN NOW
          </button>
        </Link>
      </div>
    </section>
  )
}

export default RulesFeatures