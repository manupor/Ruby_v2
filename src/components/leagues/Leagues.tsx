'use client'

import Image from 'next/image'

export default function Leagues() {
  return (
    <section>
      <style>
        {`
          .carousel {
          mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);
            // position: relative;
            // display: flex;
            // overflow: hidden;
          }
          .logo-carousel {
            margin: 80px 0;
            display: flex;
            align-items: center;
            gap: 6rem;
            animation: scroll 30s linear infinite;
            width: max-content;
          }
          .logo-carousel:hover {
            animation-play-state: paused;}
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      <div className="carousel container mx-auto">
        <div className="overflow-hidden">
          <div className="logo-carousel">
            <Image
              src="/leagues/UEFA.png"
              alt="UEFA"
              width="114"
              height="111"
            />
            <Image src="/leagues/NBA.png" alt="NBA" width="45" height="110" />
            <Image src="/leagues/UFC.png" alt="UFC" width="170" height="58" />
            <Image src="/leagues/NFL.png" alt="NFL" width="93" height="123" />
            <Image src="/leagues/MLB.png" alt="MLB" width="136" height="76" />
            <Image src="/leagues/MLS.png" alt="MLS" width="92" height="98" />
            <Image
              src="/leagues/la-liga.png"
              alt="La Liga Española"
              width="216"
              height="62"
            />
            <Image
              src="/leagues/premier-league.png"
              alt="Premier League"
              width="67"
              height="113"
            />

            {/* Duplicate images for infinite scrolling effect */}
            <Image
              src="/leagues/UEFA.png"
              alt="UEFA"
              width="114"
              height="111"
            />
            <Image src="/leagues/NBA.png" alt="NBA" width="45" height="110" />
            <Image src="/leagues/UFC.png" alt="UFC" width="170" height="58" />
            <Image src="/leagues/NFL.png" alt="NFL" width="93" height="123" />
            <Image src="/leagues/MLB.png" alt="MLB" width="136" height="76" />
            <Image src="/leagues/MLS.png" alt="MLS" width="92" height="98" />
            <Image
              src="/leagues/la-liga.png"
              alt="La Liga Española"
              width="216"
              height="62"
            />
            <Image
              src="/leagues/premier-league.png"
              alt="Premier League"
              width="67"
              height="113"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
