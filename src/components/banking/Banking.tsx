// import Link from 'next/link'
import Image from 'next/image'

export default function Banking() {
  return (
    <section>
      <div className="bg-brand-dark text-[#F5F5F5]">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-10">
            <li>
              <Image src="/banking/t.png" alt="T" width="78" height="68" />
            </li>
            <li>
              <Image
                src="/banking/venmo.png"
                alt="Venmo"
                width="128"
                height="24"
              />
            </li>
            <li>
              <Image
                src="/banking/cash-app.png"
                alt="Cash App"
                width="164"
                height="39"
              />
            </li>
            <li>
              <Image
                src="/banking/zelle.png"
                alt="Zelle"
                width="102"
                height="42"
              />
            </li>
            <li>
              <Image
                src="/banking/bitcoin.png"
                alt="Bitcoin"
                width="163"
                height="34"
              />
            </li>
            <li>
              <Image
                src="/banking/litecoin.png"
                alt="Litecoin"
                width="139"
                height="39"
              />
            </li>
            <li>
              <Image
                src="/banking/tether.png"
                alt="Tether"
                width="153"
                height="42"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
