import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | RubyWager',
  description: 'Official terms and conditions for using the RubyWager platform',
}

export default function TermsConditionsPage() {
  return (
    <>
      {/* Desktop hero section */}
      <div className="relative hidden h-[600px] w-full overflow-hidden lg:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/terms-conditions.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Content container positioned absolutely over the image */}
          {/* <div className="absolute top-0 left-0 flex h-full w-full items-center">
            <div className="container mx-auto w-full px-4 sm:px-6 lg:px-16">
              <div className="mx-auto text-white sm:mx-0 md:text-left">
                <h1 className="mb-2 text-[18px] font-bold tracking-tight uppercase text-shadow-lg md:text-[20px] lg:text-2xl">
                  OFFICIAL TERMS & CONDITIONS
                </h1>
                <p className="mb-2 text-[30px]/10 font-black tracking-tight md:text-[36px] lg:text-6xl text-shadow-lg">
                  Transparent. Detailed. Fair.
                </p>
                <h2 className="mb-6 text-[20px] font-bold uppercase text-shadow-lg md:text-1xl">
                  The legal agreement between you and Ruby Wager.
                </h2>
                <button className="blink-strong rounded bg-red-600 px-6 py-3 text-lg font-bold text-white hover:bg-red-700">
                  Agree & Continue
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Mobile hero section */}
      <div className="relative w-full lg:hidden">
        <div className="relative w-full">
          <img
            src="/terms-conditions-mobile.png"
            alt="Terms and Conditions banner"
            className="h-auto w-full"
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content positioned in center with adjusted styling */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-8 text-center">
            <h1 className="mb-1 text-[16px] font-medium tracking-wide text-white uppercase">
              TERMS & CONDITIONS
            </h1>
            <p className="mb-1 text-[26px] leading-tight font-bold tracking-wide text-white">
              Transparent. Detailed. Fair.
            </p>
            <h2 className="mb-6 text-[16px] font-medium tracking-wide text-white uppercase">
              Our legal agreement
            </h2>
            <button className="blink-strong rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700">
              AGREE & CONTINUE
            </button>
          </div>
        </div> */}
      </div>

      {/* Main content - keeping the original content */}
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-10 text-3xl font-bold">
          Ruby Wager Terms & Conditions
        </h1>

        <section className="mb-10">
          <h3 className="mb-4 text-xl font-semibold">
            1.⁠ ⁠Acceptance of Terms
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p>
              By creating an account and placing wagers on Ruby Wager, you
              confirm that you have read, understood, and agreed to these Terms
              & Conditions. If you do not agree with any part of these terms,
              you must not use our services.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-4 text-xl font-semibold">2.⁠ ⁠Eligibility</h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                You must be at least 18 years old (or the legal age in your
                jurisdiction) to register and place bets.
              </li>
              <li>
                It is your responsibility to ensure that online gambling is
                legal in your location. Ruby Wager does not provide legal advice
                or accept liability for users who violate local laws.
              </li>
              <li>
                Employees, affiliates, or anyone with insider knowledge of Ruby
                Wager's operations may not participate in betting.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-4 text-xl font-semibold">
            3.⁠ ⁠Account Registration & Security
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                You must provide accurate personal information upon
                registration. Accounts with false or misleading information may
                be suspended or terminated.
              </li>
              <li>
                Only one account per person, IP address, and household is
                allowed.
              </li>
              <li>
                You are responsible for maintaining the security of your
                account. Ruby Wager is not liable for unauthorized access due to
                negligence.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-4 text-xl font-semibold">
            4.⁠ ⁠Deposits, Withdrawals & Payment Processing
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ruby Wager accepts deposits via cryptocurrencies and other
                approved payment methods.
              </li>
              <li>
                Payouts are processed Monday through Friday, with same-day
                processing for requests made before 2 PM Eastern Time. Requests
                submitted after this time will be processed the next business
                day.
              </li>
              <li>
                Users must wager deposited funds at least once before requesting
                a withdrawal to comply with anti-money laundering policies.
              </li>
              <li>
                Any suspected fraudulent activity may result in account
                suspension and the forfeiture of winnings.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-4 text-xl font-semibold">5.⁠ ⁠Betting Rules</h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                All wagers are final once confirmed. We do not offer refunds or
                bet cancellations.
              </li>
              <li>
                Odds are subject to change and may be adjusted before bet
                confirmation.
              </li>
              <li>
                Ruby Wager reserves the right to void bets or adjust results in
                cases of errors, system malfunctions, or obvious line mistakes.
              </li>
              <li>
                Any suspected use of software bots, arbitrage, or syndicate
                betting will result in immediate account closure.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-4 text-xl font-semibold">
            6.⁠ ⁠Bonuses & Promotions
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Bonus funds are subject to rollover requirements before
                withdrawals can be made.
              </li>
              <li>
                Abuse of promotions, including multiple accounts or fraudulent
                activity, will result in forfeiture of bonuses and potential
                account suspension.
              </li>
              <li>
                Ruby Wager reserves the right to modify or discontinue any
                promotions at any time.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-4 text-xl font-semibold">
            7.⁠ ⁠Responsible Gaming
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Gambling should be fun and not a financial burden. Users who
                experience gambling problems are encouraged to seek help from
                responsible gaming organizations.
              </li>
              <li>
                Self-exclusion options are available upon request, with a
                minimum lockout period to prevent immediate reactivation.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-4 text-xl font-semibold">
            8.⁠ ⁠Limitation of Liability
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ruby Wager is not responsible for any financial losses incurred
                while using our platform. All bets are placed at the user's own
                risk.
              </li>
              <li>
                We are not liable for technical failures, system malfunctions,
                or force majeure events that may affect betting outcomes.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-4 text-xl font-semibold">
            9.⁠ ⁠Account Closure & Restrictions
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ruby Wager reserves the right to close accounts, void bets, or
                restrict access at its discretion if any fraudulent activity,
                rule violations, or suspicious behavior is detected.
              </li>
              <li>
                Users engaging in chargebacks, disputes, or payment fraud will
                be permanently banned.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-4 text-xl font-semibold">
            10.⁠ ⁠Amendments & Updates
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p>
              These Terms & Conditions may be updated periodically. Continued
              use of Ruby Wager after modifications signifies your acceptance of
              the changes.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-4 text-xl font-semibold">11.⁠ ⁠Customer Support</h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p>
              For any questions or disputes, please contact our support team at
              cs@rubywager.com and our livechat.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
