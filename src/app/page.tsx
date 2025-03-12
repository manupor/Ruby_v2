import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const promotions = [
  {
    title: 'Promotion Rugby',
    description: 'Promotion Description',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo corporis fugit laborum facere quo culpa. Nemo quam, quidem architecto in minima illum, adipisci perferendis.',
  },
  {
    title: 'Promotion Football',
    description: 'Promotion Description',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo corporis fugit laborum facere quo culpa.',
  },
  {
    title: 'Promotion Casino',
    description: 'Promotion Description',
    content:
      'Nemo corporis fugit laborum facere quo culpa. Nemo quam, quidem architecto in minima illum, adipisci perferendis, quos atque minus quas non optio.',
  },
]

const options = [
  {
    title: 'Betting Option Rugby',
    description: 'Betting Option Description',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo corporis fugit laborum facere quo culpa. Nemo quam, quidem architecto in minima illum, adipisci perferendis, quos atque minus quas non optio. Nemo quam, quidem architecto.',
  },
  {
    title: 'Betting Option Football',
    description: 'Betting Option Description',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo corporis fugit laborum facere quo culpa. Nemo quam, quidem architecto in minima illum, adipisci perferendis, quos atque minus quas non optio. Nemo quam, quidem architecto in minima illum, adipisci perferendis, quos atque minus quas non optio ',
  },
  {
    title: 'Betting Option Casino',
    description: 'Betting Option Description',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo corporis fugit laborum, illum, adipisci perferendis, quos atque minus quas non optio ',
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 pb-8 lg:px-8">
      <div className="panel my-20">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-brand-dark text-3xl font-bold">Promotions</h1>
          <Link
            href="/promotions"
            className="text-xs underline hover:no-underline"
          >
            <span>See all promotions</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          {promotions.map((card) => (
            <Card key={card.title} className="flex flex-1 flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p>{card.content}</p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="brandDark">
                  Bet now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="panel my-20">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-brand-dark text-3xl font-bold">
            Sports betting options
          </h1>
          <Link
            href="/promotions"
            className="text-xs underline hover:no-underline"
          >
            <span>See all promotions</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          {options.map((card) => (
            <Card key={card.title} className="flex flex-1 flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p>{card.content}</p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="brand">
                  Bet now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
