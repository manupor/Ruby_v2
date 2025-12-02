'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface ReviewProps {
  content: string
  name: string
  position: string
  image: string
  source?: string
  timeAgo?: string
}

const reviews: ReviewProps[] = [
  {
    content:
      "The site is great — super easy and safe to use. I've never had any issues withdrawing my money when I win. Definitely recommend it.",
    name: 'Luky06902',
    position: 'Reddit User',
    image: '/reviews/reddit-user.png',
    source: 'Reddit',
    timeAgo: '26d ago',
  },
  {
    content:
      'RubyWager is probably the best sports book I have ever played at honestly. The software is good. The customer service is beyond good. Ruby offers big bonuses and most importantly they pay out the same day as you request a payout. I asked for a pay out last Friday morning at 10:00 am. The customer service rep had me paid before 11:00 am the same day. I recommend these guys!',
    name: 'InsuranceOk3782',
    position: 'Reddit User',
    image: '/reviews/reddit-user-2.png',
    source: 'Reddit',
    timeAgo: '1d ago',
  },
  {
    content:
      'Ive been using them for the last 2 months and have had no issues with them. Withdraws are done in a timely manner and support team is very responsive across all different channels (email, phone, whatsapp, text)',
    name: 'New_Judgment3933',
    position: 'Reddit User',
    image: '/reviews/reddit-user-3.png',
    source: 'Reddit',
    timeAgo: '1mo ago',
  },
  {
    content:
      "This sports book is awesome. I have been with them for over 6 months. They do free, same day payouts with lots of different payment options such as BTC, USDT, PayPal, Venmo, Zelle. I have taken some bigger withdrawals and payouts have always been completed within 2 hours. Customer service responds quickly via text, email, or online chat. The software is easy to use. This is one of the best sports books I have ever dealt with. I've been referring all my friends to it because of how easy it's been.",
    name: 'SlevinKelevr',
    position: 'Reddit User',
    image: '/reviews/reddit-user-4.png',
    source: 'Reddit',
    timeAgo: 'Recently',
  },
]

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [visibleReviews, setVisibleReviews] = useState<ReviewProps[]>([])
  const [windowWidth, setWindowWidth] = useState(1024)
  const [isPaused, setIsPaused] = useState(false)

  // Number of cards to show based on screen size
  const getCardsToShow = () => {
    if (windowWidth >= 1280) return 3 // xl
    if (windowWidth >= 768) return 2 // md
    return 1 // mobile
  }

  // Update visible reviews when window size or index changes
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Initial width
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return

    const slideInterval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true)
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
          setIsAnimating(false)
        }, 300)
      }
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(slideInterval)
  }, [isPaused, isAnimating, reviews.length])

  // Update visible reviews when cardsToShow or currentIndex changes
  useEffect(() => {
    const cardsToShow = getCardsToShow()
    const newVisibleReviews = []

    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % reviews.length
      newVisibleReviews.push(reviews[index])
    }

    setVisibleReviews(newVisibleReviews)
  }, [currentIndex, windowWidth])

  const nextSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % reviews.length)
      setIsAnimating(false)
    }, 300)
  }

  const prevSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length)
      setIsAnimating(false)
    }, 300)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return

    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
    }, 300)
  }

  // Calculate excerpt length based on content length for balanced card heights
  const getExcerpt = (content: string) => {
    if (content.length > 250) {
      return content.substring(0, 247) + '...'
    }
    return content
  }

  return (
    <section
      className="relative overflow-hidden bg-[#121212] pt-24 pb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background overlay with subtle Ruby branding */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-900/10"></div>
        <div className="bg-gradient-radial absolute top-0 right-0 h-96 w-96 from-red-600/10 to-transparent"></div>
        <div className="bg-gradient-radial absolute bottom-0 left-0 h-96 w-96 from-red-600/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            What Bettors Are Saying
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Ruby Wager has helped players experience the thrill of
            sports betting with fast payouts and exceptional customer service.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/70 p-2 text-white transition-colors hover:bg-red-700 lg:-left-6"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/70 p-2 text-white transition-colors hover:bg-red-700 lg:-right-6"
            aria-label="Next review"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Cards Container */}
          <div
            className={`flex transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
          >
            {visibleReviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="w-full px-3 md:w-1/2 xl:w-1/3"
              >
                <div className="flex h-full flex-col rounded-lg border border-gray-800 bg-[#1A1A1A] p-6 shadow-xl transition-transform duration-300 hover:translate-y-[-5px]">
                  {/* Stars */}
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="mr-1 h-5 w-5 fill-red-600 text-red-600"
                      />
                    ))}
                  </div>

                  {/* Review Content */}
                  <div className="mb-6 flex-grow">
                    <p className="text-gray-300">
                      "{getExcerpt(review.content)}"
                    </p>
                  </div>

                  {/* Reviewer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-700">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            // Fallback for missing images
                            const target = e.target as HTMLImageElement
                            target.src = `https://placehold.co/48/333333/ff0000?text=${review.name.charAt(0)}`
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {review.name}
                        </h4>
                        <p className="text-sm text-red-500">
                          {review.position}
                        </p>
                      </div>
                    </div>
                    {review.source && (
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-500">
                          {review.source}
                        </span>
                        {review.timeAgo && (
                          <span className="text-xs text-gray-500">
                            {review.timeAgo}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="mt-8 flex justify-center space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-red-600' : 'w-2 bg-gray-600'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
