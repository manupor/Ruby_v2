// import Link from 'next/link'
import Image from 'next/image'

export default function Leagues() {
  return (
    <section>
      <div className="text-[#F5F5F5]">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-10">
            <li>
              <Image
                src="/leagues/UEFA.png"
                alt="UEFA"
                width="114"
                height="111"
              />
            </li>
            <li>
              <Image src="/leagues/NBA.png" alt="NBA" width="45" height="110" />
            </li>
            <li>
              <Image src="/leagues/UFC.png" alt="UFC" width="170" height="58" />
            </li>
            <li>
              <Image src="/leagues/NFL.png" alt="NFL" width="93" height="123" />
            </li>
            <li>
              <Image src="/leagues/MLB.png" alt="MLB" width="136" height="76" />
            </li>
            <li>
              <Image src="/leagues/MLS.png" alt="MLS" width="92" height="98" />
            </li>
            <li>
              <Image
                src="/leagues/la-liga.png"
                alt="La Liga Española"
                width="216"
                height="62"
              />
            </li>
            <li>
              <Image
                src="/leagues/premier-league.png"
                alt="Premier League"
                width="67"
                height="113"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
