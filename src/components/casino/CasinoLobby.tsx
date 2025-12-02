'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useAuth } from '@/context/AuthContext'
import { 
  Dices, 
  Spade, 
  Trophy, 
  Zap, 
  Star,
  Play,
  Users,
  TrendingUp,
  Flame
} from 'lucide-react'

interface Game {
  id: string
  name: string
  image: string
  provider: string
  category: string
  isLive?: boolean
  isHot?: boolean
  isNew?: boolean
}

const categories = [
  { id: 'all', name: 'All Games', icon: Dices },
  { id: 'live', name: 'Live Casino', icon: Users },
  { id: 'slots', name: 'Slots', icon: Trophy },
  { id: 'table', name: 'Table Games', icon: Spade },
  { id: 'popular', name: 'Popular', icon: Flame },
  { id: 'new', name: 'New Games', icon: Star },
]

// Juegos con imágenes reales
const games: Game[] = [
  // Live Casino
  { id: '1', name: 'Casino Roulette', image: '/wazdan/casino-roulette.jpg', provider: 'Wazdan', category: 'live', isLive: true, isHot: true },
  { id: '2', name: 'Gold Roulette', image: '/wazdan/gold-roulette.jpg', provider: 'Wazdan', category: 'live', isLive: true, isHot: true },
  { id: '3', name: 'Blackjack', image: '/wazdan/blackjack.jpg', provider: 'Wazdan', category: 'live', isLive: true },
  { id: '4', name: 'American Poker Gold', image: '/wazdan/american-poker-gold.jpg', provider: 'Wazdan', category: 'live', isLive: true, isNew: true },
  { id: '5', name: 'Caribbean Beach Poker', image: '/wazdan/caribbean-beach-poker.jpg', provider: 'Wazdan', category: 'live', isLive: true, isHot: true },
  { id: '6', name: 'Sic Bo Dragons', image: '/wazdan/sic-bo-dragons.jpg', provider: 'Wazdan', category: 'live', isLive: true },
  
  // Slots - Popular
  { id: '7', name: 'Book of Magic', image: '/wazdan/book-of-magic.jpg', provider: 'Wazdan', category: 'slots', isHot: true },
  { id: '8', name: 'Great Book of Magic Deluxe', image: '/wazdan/great-book-of-magic-deluxe.jpg', provider: 'Wazdan', category: 'slots', isHot: true },
  { id: '9', name: 'Power of Gods: Hades', image: '/wazdan/power-of-gods-hades.jpg', provider: 'Wazdan', category: 'slots', isHot: true },
  { id: '10', name: 'Power of Gods: Medusa', image: '/wazdan/power-of-gods-medusa.jpg', provider: 'Wazdan', category: 'slots', isHot: true },
  { id: '11', name: 'Magic Stars 9', image: '/wazdan/magic-stars-9.jpg', provider: 'Wazdan', category: 'slots', isNew: true },
  { id: '12', name: 'Hot 777 Deluxe', image: '/wazdan/hot-777-deluxe.jpg', provider: 'Wazdan', category: 'slots', isHot: true },
  
  // Slots - Más juegos
  { id: '13', name: '9 Lions', image: '/wazdan/9-lions.jpg', provider: 'Wazdan', category: 'slots' },
  { id: '14', name: '9 Coins Grand Gold', image: '/wazdan/9-coins-grand-gold-edition-nl.jpg', provider: 'Wazdan', category: 'slots', isNew: true },
  { id: '15', name: 'Larry the Leprechaun', image: '/wazdan/larry-the-leprechaun.jpg', provider: 'Wazdan', category: 'slots' },
  { id: '16', name: 'Magic Fruits 81', image: '/wazdan/magic-fruits-81.jpg', provider: 'Wazdan', category: 'slots' },
  { id: '17', name: 'Burning Stars', image: '/wazdan/burning-stars.jpg', provider: 'Wazdan', category: 'slots' },
  { id: '18', name: 'Lucky Queen', image: '/wazdan/lucky-queen.jpg', provider: 'Wazdan', category: 'slots', isNew: true },
  { id: '19', name: 'Sizzling 777', image: '/wazdan/sizzling-777.jpg', provider: 'Wazdan', category: 'slots' },
  { id: '20', name: 'Magic Hot 4', image: '/wazdan/magic-hot-4.jpg', provider: 'Wazdan', category: 'slots' },
  { id: '21', name: 'Wild Jack 81', image: '/wazdan/wild-jack-81.jpg', provider: 'Wazdan', category: 'slots' },
  { id: '22', name: 'Fruit Mania', image: '/wazdan/fruit-mania.jpg', provider: 'Wazdan', category: 'slots' },
  { id: '23', name: 'Valhalla', image: '/wazdan/valhalla.jpg', provider: 'Wazdan', category: 'slots', isNew: true },
  { id: '44', name: 'Infinity Hero', image: '/wazdan/infinity-hero-part-1.jpg', provider: 'Wazdan', category: 'slots', isNew: true },
  { id: '45', name: 'Relic Hunters', image: '/wazdan/relic-hunters-and-the-book-of-faith.jpg', provider: 'Wazdan', category: 'slots', isNew: true },
  { id: '46', name: 'Magic Bombs', image: '/wazdan/magic-bombs.jpg', provider: 'Wazdan', category: 'slots', isNew: true },
  { id: '47', name: 'Neon City', image: '/wazdan/neon-city.jpeg', provider: 'Wazdan', category: 'slots', isNew: true },
  { id: '48', name: 'Space Spins', image: '/wazdan/space-spins.jpg', provider: 'Wazdan', category: 'slots', isNew: true },
  { id: '49', name: 'Prosperity Pearls', image: '/wazdan/prosperity-pearls.jpg', provider: 'Wazdan', category: 'slots', isNew: true },
  { id: '50', name: 'Highschool Manga', image: '/wazdan/highschool-manga.jpg', provider: 'Wazdan', category: 'slots', isNew: true },
  { id: '51', name: 'Gem Splitter', image: '/wazdan/gem-splitter.jpg', provider: 'Wazdan', category: 'slots', isNew: true },
  { id: '24', name: 'Mayan Ritual', image: '/wazdan/mayan-ritual.jpg', provider: 'Wazdan', category: 'slots' },
  { id: '25', name: 'Miami Beach', image: '/wazdan/miami-beach.jpg', provider: 'Wazdan', category: 'slots' },
  { id: '26', name: 'Space Gem', image: '/wazdan/space-gem.jpg', provider: 'Wazdan', category: 'slots' },
  { id: '27', name: 'Unicorn Reels', image: '/wazdan/unicorn-reels.jpg', provider: 'Wazdan', category: 'slots' },
  { id: '28', name: 'Draculas Castle', image: '/wazdan/draculas-castle.jpg', provider: 'Wazdan', category: 'slots' },
  { id: '29', name: 'Golden Sphinx', image: '/wazdan/golden-sphinx.jpg', provider: 'Wazdan', category: 'slots' },
  { id: '30', name: 'Midnight in Tokyo', image: '/wazdan/midnight-in-tokio.jpg', provider: 'Wazdan', category: 'slots' },
  
  // Table Games
  { id: '31', name: 'American Poker V', image: '/wazdan/american-poker-v.jpg', provider: 'Wazdan', category: 'table' },
  { id: '32', name: 'Joker Poker', image: '/wazdan/joker-poker.jpg', provider: 'Wazdan', category: 'table' },
  { id: '33', name: 'Magic Poker', image: '/wazdan/magic-poker.jpg', provider: 'Wazdan', category: 'table' },
  { id: '34', name: 'Turbo Poker', image: '/wazdan/turbo-poker.jpg', provider: 'Wazdan', category: 'table' },
  { id: '35', name: 'Three Cards', image: '/wazdan/three-cards.jpg', provider: 'Wazdan', category: 'table' },
  
  // Más juegos populares
  { id: '36', name: 'Aviator', image: '/aviator.jpg', provider: 'Spribe', category: 'slots', isHot: true },
  { id: '37', name: 'Mines', image: '/mines.jpg', provider: 'Spribe', category: 'slots', isHot: true },
  { id: '38', name: 'Plinko', image: '/plinko.jpg', provider: 'Spribe', category: 'slots', isHot: true },
  { id: '39', name: 'Hi-Lo', image: '/hi-lo.jpg', provider: 'Spribe', category: 'slots' },
  { id: '40', name: 'Dice', image: '/dice.jpg', provider: 'Spribe', category: 'slots' },
]

export default function CasinoLobby() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const { openRegister } = useAuth()

  const filteredGames = games.filter(game => {
    const matchesCategory = selectedCategory === 'all' || 
                           selectedCategory === 'popular' && (game.isHot || game.isNew) ||
                           selectedCategory === 'new' && game.isNew ||
                           game.category === selectedCategory
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="mb-2 text-3xl font-bold text-white sm:mb-4 sm:text-4xl md:text-5xl">
            Casino Lobby
          </h1>
          <p className="text-sm text-gray-400 sm:text-base">
            Choose from thousands of games from the world's best providers
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8">
          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md rounded-lg border border-gray-700 bg-[#1A1A1A] px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#FF003D] focus:outline-none focus:ring-1 focus:ring-[#FF003D] sm:px-4 sm:py-3 sm:text-base"
          />
        </div>

        {/* Categories */}
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 pb-4 sm:gap-3">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition-all sm:gap-2 sm:px-6 sm:py-3 sm:text-base ${
                    selectedCategory === category.id
                      ? 'bg-[#FF003D] text-white shadow-lg shadow-red-500/50'
                      : 'bg-[#1A1A1A] text-gray-400 hover:bg-[#2A2A2A] hover:text-white'
                  }`}
                >
                  <Icon size={18} className="sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Live Casino Section */}
        {(selectedCategory === 'all' || selectedCategory === 'live') && (
          <div className="mb-8 sm:mb-12">
            <div className="mb-4 flex items-center gap-2 sm:mb-6 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500 sm:h-3 sm:w-3"></div>
                <h2 className="text-xl font-bold text-white sm:text-2xl">Live Casino</h2>
              </div>
              <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] font-semibold text-red-500 sm:px-3 sm:py-1 sm:text-xs">
                LIVE NOW
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {filteredGames
                .filter(game => game.isLive)
                .map((game) => (
                  <GameCard key={game.id} game={game} onPlay={openRegister} />
                ))}
            </div>
          </div>
        )}

        {/* Other Games */}
        <div>
          <h2 className="mb-4 text-xl font-bold text-white sm:mb-6 sm:text-2xl">
            {selectedCategory === 'all' ? 'All Games' : 
             selectedCategory === 'slots' ? 'Slot Games' :
             selectedCategory === 'table' ? 'Table Games' :
             selectedCategory === 'popular' ? 'Popular Games' :
             selectedCategory === 'new' ? 'New Games' : 'Games'}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {filteredGames
              .filter(game => selectedCategory === 'live' ? false : true)
              .map((game) => (
                <GameCard key={game.id} game={game} onPlay={openRegister} />
              ))}
          </div>
        </div>

        {/* No Results */}
        {filteredGames.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xl text-gray-400">No games found</p>
          </div>
        )}
      </div>
    </div>
  )
}

function GameCard({ game, onPlay }: { game: Game; onPlay: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onPlay()
  }

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-[#1A1A1A] transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePlayClick}
    >
      {/* Game Image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-800">
        <Image
          src={game.image}
          alt={game.name}
          fill
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = `https://placehold.co/300x400/1a1a1a/ff003d?text=${encodeURIComponent(game.name)}`
          }}
        />
        
        {/* Badges */}
        <div className="absolute left-1.5 top-1.5 flex flex-col gap-1 sm:left-2 sm:top-2">
          {game.isLive && (
            <span className="flex items-center gap-0.5 rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white sm:gap-1 sm:px-2 sm:py-1 sm:text-xs">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-white sm:h-2 sm:w-2"></div>
              LIVE
            </span>
          )}
          {game.isHot && (
            <span className="flex items-center gap-0.5 rounded-full bg-orange-500 px-1.5 py-0.5 text-[10px] font-bold text-white sm:gap-1 sm:px-2 sm:py-1 sm:text-xs">
              <Flame size={10} className="sm:h-3 sm:w-3" />
              HOT
            </span>
          )}
          {game.isNew && (
            <span className="flex items-center gap-0.5 rounded-full bg-green-500 px-1.5 py-0.5 text-[10px] font-bold text-white sm:gap-1 sm:px-2 sm:py-1 sm:text-xs">
              <Star size={10} className="sm:h-3 sm:w-3" />
              NEW
            </span>
          )}
        </div>

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 transition-opacity">
            <button 
              onClick={handlePlayClick}
              className="flex items-center gap-1.5 rounded-full bg-[#FF003D] px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-110 sm:gap-2 sm:px-6 sm:py-3 sm:text-base"
            >
              <Play size={16} fill="white" className="sm:h-5 sm:w-5" />
              PLAY NOW
            </button>
          </div>
        )}
      </div>

      {/* Game Info */}
      <div className="p-2 sm:p-3">
        <h3 className="mb-0.5 truncate text-xs font-semibold text-white sm:mb-1 sm:text-sm">
          {game.name}
        </h3>
        <p className="truncate text-[10px] text-gray-400 sm:text-xs">{game.provider}</p>
      </div>
    </div>
  )
}
