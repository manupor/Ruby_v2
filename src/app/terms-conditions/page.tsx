import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | RubyWager',
  description: 'Official terms and conditions for using the RubyWager platform',
}

export default function TermsConditionsPage() {
  return (
    <>
      <div className="relative h-[400px] w-full overflow-hidden">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/rules.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
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
