'use client'

import { Trophy } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Winner {
  rank: number
  name: string
  game: string
  amount: string
  time: string
}

// Pool of possible winners data
const winnerNames = [
  'Michael R.', 'Sarah K.', 'James T.', 'Emily P.', 'David M.',
  'Jessica L.', 'Robert C.', 'Amanda W.', 'Chris B.', 'Nicole S.',
  'Brandon F.', 'Michelle D.', 'Daniel H.', 'Lauren M.', 'Kevin J.',
  'Samantha G.', 'Tyler N.', 'Rachel V.', 'Jordan P.', 'Ashley T.'
]

const casinoGames = [
  'Mega Fortune', 'Book of Dead', 'Roulette Royal', 'Lightning Blackjack',
  'Starburst XXL', 'Gonzo\'s Quest', 'Immortal Romance', 'Thunderstruck II',
  'Divine Fortune', 'Dead or Alive 2', 'Bonanza Megaways', 'Sweet Bonanza',
  'Gates of Olympus', 'European Roulette', 'American Blackjack',
  'Baccarat Pro', 'Mega Moolah', 'Hall of Gods', 'Jack Hammer 2'
]

const timeOptions = [
  '1 hour ago', '2 hours ago', '3 hours ago', '5 hours ago',
  '8 hours ago', '10 hours ago', '12 hours ago', '15 hours ago',
  '18 hours ago', '1 day ago', '2 days ago'
]

// Function to generate random winners
const generateWinners = (): Winner[] => {
    const usedNames = new Set<string>()
    const winners: Winner[] = []

    // Generate amounts in descending order
    const amounts = [
      Math.floor(Math.random() * 50000) + 100000, // $100k-$150k
      Math.floor(Math.random() * 40000) + 60000,  // $60k-$100k
      Math.floor(Math.random() * 30000) + 40000,  // $40k-$70k
      Math.floor(Math.random() * 20000) + 30000,  // $30k-$50k
      Math.floor(Math.random() * 15000) + 25000,  // $25k-$40k
    ].sort((a, b) => b - a)

    for (let i = 0; i < 5; i++) {
      let name: string
      do {
        name = winnerNames[Math.floor(Math.random() * winnerNames.length)]
      } while (usedNames.has(name))
      usedNames.add(name)

      const game = casinoGames[Math.floor(Math.random() * casinoGames.length)]
      const time = timeOptions[Math.floor(Math.random() * timeOptions.length)]
      const amount = `$${amounts[i].toLocaleString()}`

      winners.push({
        rank: i + 1,
        name,
        game,
        amount,
        time,
      })
    }

    return winners
}

interface TopWinnersProps {
  onPlayNowClick?: () => void
}

const TopWinners = ({ onPlayNowClick }: TopWinnersProps) => {
  // State to hold current winners
  const [winners, setWinners] = useState<Winner[]>(generateWinners())

  // Refresh winners every 2 hours
  useEffect(() => {
    const interval = setInterval(() => {
      setWinners(generateWinners())
    }, 2 * 60 * 60 * 1000) // 2 hours in milliseconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:px-8 bg-black">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Trophy className="h-8 w-8 text-[#FF003D]" />
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              TOP 5 WINNERS
            </h2>
            <Trophy className="h-8 w-8 text-[#FF003D]" />
          </div>
          <p className="text-gray-300">
            Recent Big Wins at Ruby Wager Casino
          </p>
        </div>

        {/* Winners List */}
        <div className="space-y-4">
          {winners.map((winner) => (
            <div
              key={winner.rank}
              className="group relative overflow-hidden rounded-xl border border-[#FF003D]/30 bg-[#1A1A1A] p-4 transition-all duration-300 hover:border-[#FF003D] hover:shadow-lg hover:shadow-[#FF003D]/30 md:p-6"
            >
              <div className="flex items-center gap-4 md:gap-6">
                {/* Rank Badge */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black border-2 border-[#FF003D] font-bold text-white shadow-lg shadow-[#FF003D]/30 md:h-14 md:w-14">
                  <span className="text-xl md:text-2xl">#{winner.rank}</span>
                </div>

                {/* Winner Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white md:text-xl">
                    {winner.name}
                  </h3>
                  <p className="text-sm text-gray-400 md:text-base">
                    {winner.game}
                  </p>
                </div>

                {/* Amount and Time */}
                <div className="text-right">
                  <p className="text-xl font-bold text-[#FF003D] md:text-2xl">
                    {winner.amount}
                  </p>
                  <p className="text-xs text-gray-400 md:text-sm">
                    {winner.time}
                  </p>
                </div>
              </div>

              {/* Animated Background Glow */}
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF003D]/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <p className="mb-4 text-lg text-white font-semibold">
            Want to be our next big winner?
          </p>
          <button 
            onClick={onPlayNowClick}
            className="rounded-full bg-[#FF003D] px-10 py-3 font-bold uppercase text-white transition-all hover:bg-[#E00034] shadow-lg shadow-[#FF003D]/50 hover:shadow-[#FF003D]/70 hover:scale-105"
          >
            PLAY NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopWinners
