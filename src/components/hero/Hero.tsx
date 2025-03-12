import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className="bg-primary">
      <div className="lg:-x-8 container mx-auto px-4 py-20 text-white">
        <div className="mb-4">
          <h1 className="text-5xl font-bold tracking-tight uppercase">
            A very cool promotion
          </h1>
          <p className="text-9xl font-black tracking-tight">250%</p>
          <h2 className="text-3xl font-bold uppercase">Massive mega super</h2>
        </div>
        <Button variant="brand" size="massive">
          Join Now
        </Button>
      </div>
    </div>
  )
}
