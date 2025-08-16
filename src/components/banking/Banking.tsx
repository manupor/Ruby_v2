import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Banking & Payments | RubyWager',
  description: 'Learn about deposit and withdrawal options, payment methods, and transaction policies at Ruby Wager',
};

export default function BankingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
