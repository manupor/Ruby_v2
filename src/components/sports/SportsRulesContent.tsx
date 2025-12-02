'use client'

import { useAuth } from '@/context/AuthContext'

const SportsRulesContent = () => {
  const { openRegister } = useAuth()

  const handleJoinNowClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openRegister()
  }

  // Main Sports Wagering Rules
  const sportsWageringRules = [
    {
      title: '1. Wager Finality',
      description: [
        'All wagers are final once submitted and confirmed through the official Ruby Wager online platform.',
        'Double-check your plays before submitting. No edits, cancellations, or voids will be accepted after confirmation.',
        'Ruby Wager is not responsible for mistakes due to user error, typos, or misinterpretation of lines.',
      ],
    },
    {
      title: '2. Online Wagers Only',
      description: [
        'Only wagers placed and confirmed through the official Ruby Wager platform will be honored.',
        'Screenshots, text messages, verbal agreements, or social media DMs are not valid forms of wagering.',
        'Ensure your wager is logged and confirmed within the platform before the event begins.',
      ],
    },
    {
      title: '3. Wager Limits',
      description: [
        'Ruby Wager reserves the right to set or modify minimum and maximum wager limits on any market.',
        'Larger wagers may be reviewed and are subject to adjusted lines or odds.',
      ],
    },
    {
      title: '4. Grading & Payouts',
      description: [
        'Wagers are graded based on the official result from the relevant league or governing body.',
        'Payouts are issued promptly after confirmation of final results.',
        'Ruby Wager does not recognize overturned results or post-event scoring/stat corrections.',
      ],
    },
    {
      title: '5. Game Cancellations & Postponements',
      description: [
        'Games must be played on the original scheduled date.',
        'If postponed, the game must be completed within 24 hours at the original venue or a neutral site for action to stand.',
        'If not played within that timeframe, wagers will be voided and refunded, unless otherwise stated.',
      ],
    },
  ]

  // General House Rules
  const generalHouseRules = [
    {
      title: '1. Time Zone',
      description: ['All times displayed are in Eastern Time (ET).'],
    },
    {
      title: '2. Official Game Status for Action',
      description: [
        'Games must begin and be played as scheduled.',
        "Significant changes to location or timing may void wagers at Ruby Wager's discretion.",
      ],
    },
    {
      title: '3. Minimum Time for Action',
      description: [
        'NFL / College Football: 55 minutes.',
        'NBA: 43 minutes.',
        'NCAA Basketball: 35 minutes.',
        'MLB: 5 innings (4.5 if the home team is ahead).',
        'NHL: 55 minutes.',
        'Soccer: Full 90 minutes (plus stoppage time).',
        'Bets already decided (e.g., 1st half, player props) are graded regardless of game completion.',
      ],
    },
    {
      title: '4. Overtime Rules',
      description: [
        'Full game spreads/totals include overtime, unless specified.',
        '2nd Half and 4th Quarter bets also include overtime.',
        'Soccer bets exclude overtime unless stated (e.g., "To Qualify" or "Extra Time" markets).',
      ],
    },
    {
      title: '5. MLB Listed Pitchers',
      description: [
        'Action: Bet stands regardless of pitchers.',
        'Listed Pitchers: Both must start or the wager is void and refunded.',
      ],
    },
    {
      title: '6. Player Props',
      description: [
        'Player must participate for bets to be valid.',
        'Non-participation = void bet.',
        'Stats used for grading must come from the official source.',
      ],
    },
    {
      title: '7. Parlays',
      description: [
        'Voided legs are removed; the parlay continues with adjusted odds.',
        'If all legs are void, the parlay is refunded.',
      ],
    },
    {
      title: '8. Pushes',
      description: [
        'A push results in a refund.',
        'For straight bets: full refund.',
        'For parlays: leg is removed, odds are recalculated.',
      ],
    },
    {
      title: '9. Live Betting',
      description: [
        'Live odds are dynamic and subject to change.',
        'Bets are valid only after confirmation.',
        'If a key event (e.g., goal, turnover, injury) occurs before bet confirmation, Ruby Wager may reject or adjust the bet.',
      ],
    },
    {
      title: '10. Line Errors',
      description: [
        'Ruby Wager reserves the right to cancel wagers due to obvious errors, including:',
        'Incorrect team favored',
        'Significantly wrong spreads, totals, or odds',
        'Bets placed after an outcome is already determined',
      ],
    },
  ]

  return (
    <section className="bg-black px-4 py-8 text-white">
      {/* Main heading */}
      <div className="mx-auto mb-8 text-center max-w-5xl">
        <h2 className="mb-4 text-4xl font-bold uppercase">
          SPORTS WAGERING RULES
        </h2>
        <p className="text-base leading-relaxed text-gray-300">
          Ruby Wager follows industry standards based on Las Vegas rules and the
          practices of top-tier online sportsbooks like BetUS and BetOnline. By
          placing a wager, you agree to the following terms and conditions:
        </p>
      </div>

      {/* Main Sports Wagering Rules */}
      <div className="mx-auto mb-16 max-w-5xl">
        {sportsWageringRules.map((rule, index) => (
          <div key={index} className="mb-8">
            <h3 className="mb-3 text-lg font-bold text-[#FF003D]">
              {rule.title}
            </h3>
            <ul className="space-y-2 text-gray-400">
              {rule.description.map((item, itemIndex) => (
                <li key={itemIndex} className="flex">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* General House Rules Header */}
      <div className="mx-auto mb-8 text-center">
        <h2 className="mb-4 text-4xl font-bold uppercase">
          GENERAL HOUSE RULES
        </h2>
        <p className="text-base text-gray-300">
          These apply across all sports and wager types unless otherwise noted.
        </p>
      </div>

      {/* General House Rules */}
      <div className="mx-auto mb-16 max-w-5xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {generalHouseRules.map((rule, index) => (
            <div key={index} className="rounded bg-[#1A1A1A] p-4">
              <h3 className="mb-3 text-lg font-bold">{rule.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {rule.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Agreement Text */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <p className="text-gray-300">
          By placing a wager, you acknowledge that you have read and agreed to
          all rules above. Ruby Wager reserves the right to update these rules
          at any time to ensure fairness and compliance with industry standards.
        </p>
      </div>

      {/* Call to action */}
      <div className="mb-4 text-center">
        <h3 className="mb-4 text-3xl font-bold">Ready to Place Your Bets?</h3>
        <p className="mb-8 text-lg text-gray-300">
          Join Ruby Wager today and experience premium sports betting action.
        </p>
        <a
          href="#"
          onClick={handleJoinNowClick}
          className="inline-block rounded-full bg-[#FF003D] px-10 py-3 text-xl font-bold text-white transition-colors hover:bg-[#E00034]"
        >
          JOIN NOW
        </a>
      </div>
    </section>
  )
}

export default SportsRulesContent
