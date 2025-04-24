'use client'

import Image from 'next/image'

export default function Banking() {
  const bankingLogos = [
    { src: '/banking/t.png', alt: 'T', width: 78, height: 68 },
    { src: '/banking/venmo.png', alt: 'Venmo', width: 128, height: 24 },
    { src: '/banking/cash-app.png', alt: 'Cash App', width: 164, height: 39 },
    { src: '/banking/zelle.png', alt: 'Zelle', width: 102, height: 42 },
    { src: '/banking/bitcoin.png', alt: 'Bitcoin', width: 163, height: 34 },
    { src: '/banking/litecoin.png', alt: 'Litecoin', width: 139, height: 39 },
    { src: '/banking/tether.png', alt: 'Tether', width: 153, height: 42 },
  ]

  return (
    <section>
      <style jsx global>{`
        .banking-carousel {
          mask-image: linear-gradient(
            90deg,
            transparent,
            #fff 10%,
            #fff 90%,
            transparent
          );
          overflow: hidden;
        }

        .banking-logo-scroll {
          display: flex;
          align-items: center;
          gap: 4rem;
          animation: banking-scroll 25s linear infinite;
          width: max-content;
        }

        /* Add additional copies for smoother transition */
        .banking-logo-scroll:after {
          content: '';
          display: block;
          width: 4rem; /* Same as gap */
        }

        .banking-logo-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes banking-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(
              calc(-50% - 2rem)
            ); /* Adjust for precise looping */
          }
        }

        @media (max-width: 768px) {
          .banking-logo-scroll {
            gap: 3rem;
            animation-duration: 20s;
          }

          .banking-logo-scroll:after {
            width: 3rem; /* Same as gap for mobile */
          }

          @keyframes banking-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(
                calc(-50% - 1.5rem)
              ); /* Adjust for mobile */
            }
          }
        }
      `}</style>

      <div className="bg-brand-dark text-[#F5F5F5]">
        <div className="banking-carousel container mx-auto px-4 py-6 lg:px-8">
          <div className="banking-logo-scroll py-2">
            {/* First set of logos */}
            {bankingLogos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-[80%] w-[80%] md:h-auto md:w-auto"
                />
              </div>
            ))}

            {/* Duplicate logos for infinite scrolling effect */}
            {bankingLogos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-[80%] w-[80%] md:h-auto md:w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
