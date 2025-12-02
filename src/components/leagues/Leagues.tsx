'use client'

import Image from 'next/image'

export default function Leagues() {
  return (
    <section>
      <style>
        {`
          .carousel {
            mask-image: linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent);
          }
          
          .logo-carousel {
            margin: 40px 0;
            display: flex;
            align-items: center;
            gap: 2rem;
            animation: scroll 30s linear infinite;
            width: max-content;
          }
          
          @media (min-width: 768px) {
            .logo-carousel {
              gap: 4rem;
              margin: 80px 0;
            }
          }
          
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      <div className="carousel container mx-auto">
        <div className="overflow-hidden">
          <div className="logo-carousel">
            <div className="flex w-14 items-center justify-center md:w-auto">
              <Image
                src="/leagues/UEFA.png"
                alt="UEFA"
                width="114"
                height="111"
                className="h-auto max-h-12 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-10 items-center justify-center md:w-auto">
              <Image
                src="/leagues/NBA.png"
                alt="NBA"
                width="45"
                height="110"
                className="h-auto max-h-12 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-14 items-center justify-center md:w-auto">
              <Image
                src="/leagues/UFC.png"
                alt="UFC"
                width="170"
                height="58"
                className="h-auto max-h-8 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-10 items-center justify-center md:w-auto">
              <Image
                src="/leagues/NFL.png"
                alt="NFL"
                width="93"
                height="123"
                className="h-auto max-h-12 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-14 items-center justify-center md:w-auto">
              <Image
                src="/leagues/MLB.png"
                alt="MLB"
                width="136"
                height="76"
                className="h-auto max-h-8 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-10 items-center justify-center md:w-auto">
              <Image
                src="/leagues/MLS.png"
                alt="MLS"
                width="92"
                height="98"
                className="h-auto max-h-10 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-14 items-center justify-center md:w-auto">
              <Image
                src="/leagues/la-liga.png"
                alt="La Liga Española"
                width="216"
                height="62"
                className="h-auto max-h-8 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-10 items-center justify-center md:w-auto">
              <Image
                src="/leagues/premier-league.png"
                alt="Premier League"
                width="67"
                height="113"
                className="h-auto max-h-10 w-full md:max-h-none"
              />
            </div>

            {/* Duplicate images for infinite scrolling effect */}
            <div className="flex w-14 items-center justify-center md:w-auto">
              <Image
                src="/leagues/UEFA.png"
                alt="UEFA"
                width="114"
                height="111"
                className="h-auto max-h-12 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-10 items-center justify-center md:w-auto">
              <Image
                src="/leagues/NBA.png"
                alt="NBA"
                width="45"
                height="110"
                className="h-auto max-h-12 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-14 items-center justify-center md:w-auto">
              <Image
                src="/leagues/UFC.png"
                alt="UFC"
                width="170"
                height="58"
                className="h-auto max-h-8 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-10 items-center justify-center md:w-auto">
              <Image
                src="/leagues/NFL.png"
                alt="NFL"
                width="93"
                height="123"
                className="h-auto max-h-12 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-14 items-center justify-center md:w-auto">
              <Image
                src="/leagues/MLB.png"
                alt="MLB"
                width="136"
                height="76"
                className="h-auto max-h-8 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-10 items-center justify-center md:w-auto">
              <Image
                src="/leagues/MLS.png"
                alt="MLS"
                width="92"
                height="98"
                className="h-auto max-h-10 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-14 items-center justify-center md:w-auto">
              <Image
                src="/leagues/la-liga.png"
                alt="La Liga Española"
                width="216"
                height="62"
                className="h-auto max-h-8 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-10 items-center justify-center md:w-auto">
              <Image
                src="/leagues/premier-league.png"
                alt="Premier League"
                width="67"
                height="113"
                className="h-auto max-h-10 w-full md:max-h-none"
              />
            </div>

            {/* Third set for seamless infinite scrolling */}
            <div className="flex w-14 items-center justify-center md:w-auto">
              <Image
                src="/leagues/UEFA.png"
                alt="UEFA"
                width="114"
                height="111"
                className="h-auto max-h-12 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-10 items-center justify-center md:w-auto">
              <Image
                src="/leagues/NBA.png"
                alt="NBA"
                width="45"
                height="110"
                className="h-auto max-h-12 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-14 items-center justify-center md:w-auto">
              <Image
                src="/leagues/UFC.png"
                alt="UFC"
                width="170"
                height="58"
                className="h-auto max-h-8 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-10 items-center justify-center md:w-auto">
              <Image
                src="/leagues/NFL.png"
                alt="NFL"
                width="93"
                height="123"
                className="h-auto max-h-12 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-14 items-center justify-center md:w-auto">
              <Image
                src="/leagues/MLB.png"
                alt="MLB"
                width="136"
                height="76"
                className="h-auto max-h-8 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-10 items-center justify-center md:w-auto">
              <Image
                src="/leagues/MLS.png"
                alt="MLS"
                width="92"
                height="98"
                className="h-auto max-h-10 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-14 items-center justify-center md:w-auto">
              <Image
                src="/leagues/la-liga.png"
                alt="La Liga Española"
                width="216"
                height="62"
                className="h-auto max-h-8 w-full md:max-h-none"
              />
            </div>
            <div className="flex w-10 items-center justify-center md:w-auto">
              <Image
                src="/leagues/premier-league.png"
                alt="Premier League"
                width="67"
                height="113"
                className="h-auto max-h-10 w-full md:max-h-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
