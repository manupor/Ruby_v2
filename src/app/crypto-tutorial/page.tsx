import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cryptocurrency Tutorial | RubyWager',
  description:
    'Learn how to use cryptocurrencies for betting on the RubyWager platform',
}

export default function CryptoTutorialPage() {
  return (
    <>
      {/* Desktop hero section */}
      <div className="relative hidden h-[600px] w-full overflow-hidden lg:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/crypto-tutorial.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Content container positioned absolutely over the image */}
          <div className="absolute top-0 left-0 flex h-full w-full items-center">
            <div className="container mx-auto w-full px-4 sm:px-6 lg:px-16">
              <div className="mx-auto text-white sm:mx-0 md:text-left">
                <h1 className="mb-2 text-[18px] font-bold tracking-tight uppercase text-shadow-lg/30 md:text-[20px] lg:text-2xl">
                  CRYPTO BETTING MADE SIMPLE
                </h1>
                <p className="mb-2 text-[30px]/10 font-black tracking-tight md:text-[36px] lg:text-6xl">
                  Bet Faster. Win Bigger.
                </p>
                <h2 className="mb-6 text-[20px] font-bold uppercase text-shadow-lg/30 md:text-1xl">
                  Fast deposits, secure transactions, private betting.
                </h2>
                <button className="blink-strong rounded bg-red-600 px-6 py-3 text-lg font-bold text-white hover:bg-red-700">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hero section */}
      <div className="relative w-full lg:hidden">
        <div className="relative w-full">
          <img
            src="/crypto-tutorial-mobile.png"
            alt="Cryptocurrency tutorial banner"
            className="h-auto w-full"
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content positioned in center with adjusted styling */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-8 text-center">
            <h1 className="mb-1 text-[16px] font-medium tracking-wide text-white uppercase">
              CRYPTO BETTING MADE SIMPLE
            </h1>
            <p className="mb-1 text-[26px] leading-tight font-bold tracking-wide text-white">
              Bet Faster. Win Bigger.
            </p>
            <h2 className="mb-6 text-[16px] font-medium tracking-wide text-white uppercase">
              Fast. Secure. Private.
            </h2>
            <button className="blink-strong rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700">
              GET STARTED
            </button>
          </div>
        </div>
      </div>

      {/* Main content - keeping the original content */}
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-10 text-3xl font-bold">Cryptocurrency Tutorial</h1>
        <section className="mb-16">
          <p>
            Cryptocurrency betting has become an increasingly popular and secure
            way for players to engage in online sports betting. At Ruby Wager,
            we support various cryptocurrencies to offer our players fast,
            secure, and private transactions. Whether you're new to crypto or
            just need a refresher, this guide will walk you through everything
            you need to know about using crypto for your wagers.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">
            Why Use Crypto for Betting?
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Fast Deposits & Withdrawals:</strong> Cryptocurrency
                transactions are usually processed much quicker than traditional
                payment methods.
              </li>
              <li>
                <strong>Low Fees:</strong> Cryptos generally have lower
                transaction fees compared to credit/debit cards or bank
                transfers.
              </li>
              <li>
                <strong>Security:</strong> Transactions are secured using
                blockchain technology, ensuring your funds and personal
                information are protected.
              </li>
              <li>
                <strong>Privacy:</strong> Many cryptos offer enhanced privacy
                and anonymity for transactions.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">
            Step-by-Step Crypto Tutorial for North American Players
          </h3>
          <div className="mb-8 rounded-lg border border-[#ff5f5f5] p-6">
            <h4 className="mb-4 font-semibold">
              Step 1: Choose a Cryptocurrency
            </h4>
            <p className="mb-4">
              At Ruby Wager, we accept various cryptocurrencies, including
              Bitcoin (BTC), Ethereum (ETH), and Litecoin (LTC). The most
              commonly used cryptocurrency for online betting is Bitcoin (BTC),
              but the choice depends on your preferences.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Bitcoin (BTC):</strong> The most widely accepted
                cryptocurrency, great for larger transactions and widely
                recognized for its security and stability.
              </li>
              <li>
                <strong>Ethereum (ETH):</strong> Known for its faster
                transaction times and lower fees compared to Bitcoin.
              </li>
              <li>
                <strong>Litecoin (LTC):</strong> A faster alternative to
                Bitcoin, with low transaction fees, making it a solid choice for
                those looking to transfer smaller amounts.
              </li>
            </ul>
          </div>

          <div className="mb-8 rounded-lg border border-[#ff5f5f5] p-6">
            <h4 className="mb-4 font-semibold">
              Step 2: Set Up a Crypto Wallet
            </h4>
            <p className="mb-4">
              To start using cryptocurrency, you'll need to set up a crypto
              wallet to store and manage your coins. There are two main types of
              wallets:
            </p>
            <ol className="mb-4 list-decimal space-y-2 pl-6">
              <li>
                <strong>Hot Wallets:</strong> These are connected to the
                internet and are more accessible for frequent transactions.
                Examples include apps like Exodus, Trust Wallet, and MetaMask.
              </li>
              <li>
                <strong>Cold Wallets:</strong> These are offline storage
                options, often used for added security for long-term storage of
                your crypto. Examples include hardware wallets like Ledger and
                Trezor.
              </li>
            </ol>
            <p>
              For most players, a hot wallet is enough, but if you plan on
              storing large amounts of crypto for a longer period, a cold wallet
              is recommended.
            </p>
          </div>

          <div className="mb-8 rounded-lg border border-[#ff5f5f5] p-6">
            <h4 className="mb-4 font-semibold">Step 3: Buy Cryptocurrency</h4>
            <p className="mb-4">
              Once your wallet is set up, you'll need to purchase some crypto to
              deposit into Ruby Wager. There are several crypto exchanges where
              you can buy coins, including:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Coinbase:</strong> One of the most popular and
                beginner-friendly platforms for purchasing Bitcoin, Ethereum,
                and other major cryptocurrencies.
              </li>
              <li>
                <strong>Binance:</strong> Known for lower fees and a wide
                selection of cryptocurrencies.
              </li>
              <li>
                <strong>Kraken:</strong> Offers a secure platform for buying,
                selling, and trading crypto.
              </li>
              <li>
                <strong>Gemini:</strong> A U.S.-based exchange that is secure
                and easy to use for beginners.
              </li>
            </ul>

            <p className="mb-2 font-semibold">
              How to Buy Crypto on Coinbase (as an example):
            </p>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                <strong>Sign Up:</strong> Create an account on Coinbase.
              </li>
              <li>
                <strong>Verify Your Identity:</strong> Provide necessary
                identification to comply with regulations.
              </li>
              <li>
                <strong>Deposit Funds:</strong> Link your bank account or credit
                card to buy crypto with fiat currency.
              </li>
              <li>
                <strong>Purchase Cryptocurrency:</strong> Choose your desired
                crypto (e.g., Bitcoin) and buy the amount you want.
              </li>
              <li>
                <strong>Transfer to Wallet:</strong> After purchasing, transfer
                the crypto to your personal wallet for safe storage.
              </li>
            </ol>
          </div>

          <div className="mb-8 rounded-lg border border-[#ff5f5f5] p-6">
            <h4 className="mb-4 font-semibold">
              Step 4: Deposit Crypto to Ruby Wager
            </h4>
            <p className="mb-4">
              Once you have your cryptocurrency in your wallet, you're ready to
              deposit it into your Ruby Wager account. Here's how:
            </p>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                <strong>Log In to Your Account:</strong> Head to the deposit
                section of your Ruby Wager account.
              </li>
              <li>
                <strong>Select Your Cryptocurrency:</strong> Choose which crypto
                you'd like to deposit (Bitcoin, Ethereum, Litecoin).
              </li>
              <li>
                <strong>Copy the Wallet Address:</strong> You will be provided
                with a unique deposit address (a long string of letters and
                numbers).
              </li>
              <li>
                <strong>Send Crypto to the Address:</strong> Go to your wallet,
                select "Send," and paste the deposit address from Ruby Wager.
                Enter the amount you want to deposit.
              </li>
              <li>
                <strong>Confirm the Transaction:</strong> After confirming, your
                deposit will be processed on the blockchain. It may take a few
                minutes depending on network traffic.
              </li>
            </ol>
          </div>

          <div className="mb-8 rounded-lg border border-[#ff5f5f5] p-6">
            <h4 className="mb-4 font-semibold">Step 5: Start Betting!</h4>
            <p>
              After your deposit has been confirmed, the funds will appear in
              your Ruby Wager account, and you can begin placing bets on your
              favorite sports.
            </p>
          </div>

          <div className="mb-8 rounded-lg border border-[#ff5f5f5] p-6">
            <h4 className="mb-4 font-semibold">Step 6: Withdraw Crypto</h4>
            <p className="mb-4">
              When you're ready to withdraw your winnings, simply follow these
              steps:
            </p>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                <strong>Go to the Withdrawal Section:</strong> Navigate to the
                withdrawal area in your Ruby Wager account.
              </li>
              <li>
                <strong>Select Your Crypto:</strong> Choose which cryptocurrency
                you'd like to withdraw.
              </li>
              <li>
                <strong>Enter Your Wallet Address:</strong> Copy your wallet
                address and paste it into the withdrawal form.
              </li>
              <li>
                <strong>Confirm the Withdrawal:</strong> After confirming the
                withdrawal, your funds will be processed and sent to your
                wallet. Depending on the network, this can take a few minutes to
                a couple of hours.
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">
            Popular Crypto Apps to Get Started
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4">
              To simplify the buying and transferring process, here are a few
              popular apps you can use:
            </p>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                <strong>Coinbase:</strong> Great for beginners, offers easy
                purchasing and sending/receiving crypto. Available on iOS and
                Android.
              </li>
              <li>
                <strong>Binance:</strong> Known for low fees, Binance offers an
                easy-to-use mobile app and supports a wide range of cryptos.
              </li>
              <li>
                <strong>Trust Wallet:</strong> A user-friendly mobile wallet for
                holding and transferring various cryptocurrencies.
              </li>
              <li>
                <strong>Exodus Wallet:</strong> A hot wallet that integrates
                with exchanges and has an easy-to-use interface for storing and
                managing crypto.
              </li>
              <li>
                <strong>MetaMask:</strong> Best for Ethereum-based tokens and
                decentralized applications (dApps), great for tech-savvy users.
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-6 text-xl font-semibold">
            Safety Tips for Using Crypto
          </h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Double-check wallet addresses:</strong> Crypto
                transactions are irreversible. Always double-check the wallet
                address before sending funds.
              </li>
              <li>
                <strong>Use Two-Factor Authentication:</strong> Enable 2FA on
                your exchange and wallet for added security.
              </li>
              <li>
                <strong>Keep Your Private Keys Safe:</strong> Never share your
                private keys or seed phrases. This is the access to your funds,
                and anyone with them can control your wallet.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="mb-6 text-xl font-semibold">Conclusion</h3>
          <div className="rounded-lg border border-[#ff5f5f5] p-6">
            <p className="mb-4">
              Using cryptocurrency for betting at Ruby Wager provides you with a
              secure, fast, and private method of placing bets and receiving
              payouts. By following the steps above, you can start enjoying the
              benefits of crypto betting quickly and easily. If you have any
              questions, our customer support team is here to help!
            </p>
            <p className="font-semibold">
              Start betting with crypto today and experience the future of
              online sports betting!
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
