// src/app/blog/page.tsx

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News | RubyWager',
  description: 'Latest news, updates, and announcements from RubyWager',
}

const blogPosts = [
  {
    slug: 'french-open-2025',
    title: 'Clay Court Royalty: Can Iga Świątek and Carlos Alcaraz Defend Their French Open Crowns?',
    date: 'May 21, 2025',
    image: 'blogs/french-open.jpg',
    content: `
      <p>The 2025 French Open is shaping up to be one of the most anticipated tennis events in recent history, as the kings and queens of clay return to Roland Garros. Carlos Alcaraz, the Spanish prodigy, arrives as the defending champion after a spectacular 2024 performance that cemented his position as a future all-time great. His court coverage, drop shots, and mental fortitude have continued to improve, and he’s now the man to beat on clay. Meanwhile, Jannik Sinner, Daniil Medvedev, and Novak Djokovic remain looming threats, determined to disrupt his rise.</p>
      <p>On the women’s side, Iga Świątek is chasing her fourth consecutive French Open title — a feat that would elevate her status to legendary. Her dominance on clay is nearly unmatched in the modern era, with a game built around controlled aggression, tireless footwork, and pinpoint accuracy. However, she faces stiff competition from Aryna Sabalenka, Coco Gauff, and an emerging generation of fearless hitters. The women’s draw promises fireworks, and every match could be a potential upset in the making.</p>
      <p>For bettors, the 2025 edition of Roland Garros offers juicy lines and valuable futures. Alcaraz and Świątek may be favorites, but longer odds on dark horses like Casper Ruud or Ons Jabeur present strong value plays. Betting markets on set totals and live in-play opportunities will also be crucial, especially considering the unpredictable weather and potential five-set thrillers. As Paris turns red with clay, expect drama, surprises, and legacy-defining moments.</p>
    `,
  },
  {
    slug: 'blogs/french-open.jpg',
    image: 'blogs/IPL_2025.png',
    title: 'IPL 2025: The Road to the Final Amidst Turmoil and Triumph',
    date: 'May 21, 2025',
    content: `
      <p>The Indian Premier League 2025 has been anything but routine. What began with the usual fanfare quickly turned into a season marked by disruptions, as the tournament faced a temporary suspension due to regional tensions and extreme weather events. But even with the break, the IPL’s unpredictability and passion have remained intact. As we head toward the final stretch, the league is regaining momentum with critical fixtures deciding the final playoff spots.</p>
      <p>Royal Challengers Bangalore, Chennai Super Kings, and Gujarat Titans have all shown flashes of brilliance, but the most consistent team has been Kolkata Knight Riders, thanks to strong performances from their top order and crafty spin attack. On the individual side, players like Ruturaj Gaikwad, Jos Buttler, and Rashid Khan are in peak form. The league has also introduced exciting talent like Sai Sudharsan and Naman Dhir, who could be game-changers under playoff pressure.</p>
      <p>With the final slated for June 3 in Ahmedabad, bettors are presented with volatile but promising odds. The unpredictability of the T20 format makes betting on individual player performances, six-hitting contests, and first-innings totals a strategic approach. As the league rebuilds from its mid-season chaos, one thing is clear — the IPL continues to deliver world-class entertainment and thrilling opportunities for those with sharp eyes and fast fingers.</p>
    `,
  },
  {
    slug: 'summer-boxing-2025',
    image: 'blogs/boxing bouts.png',
    title: 'Summer Slugfests: The Must-Watch Boxing Bouts of June and July 2025',
    date: 'May 21, 2025',
    content: `
      <p>The summer of 2025 promises fireworks in the boxing world, with a lineup of marquee fights spread across June and July. Headlining the action is the much-anticipated clash between Shakur Stevenson and Emanuel Navarrete, a technical war that pits two of the best featherweights in the world against each other. Meanwhile, Jake Paul continues his controversial rise, set to face an experienced but aging Tony Bellew in a high-profile crossover bout that has social media buzzing and boxing purists debating.</p>
      <p>Across the pond, the UK scene is surging with energy. Anthony Joshua is eyeing redemption in a heavyweight showdown against Zhilei Zhang, whose power and southpaw stance make him a dangerous threat. Rising British star Ben Whittaker also returns, bringing flair and showmanship back to the light heavyweight division. These bouts are more than contests; they’re narratives of redemption, dominance, and legacy. Every round carries stakes, and every punch could shift the storyline.</p>
      <p>From a betting perspective, this summer is rich with angles. Expect close moneyline odds for technical bouts like Stevenson vs. Navarrete, while knockout specialists like Zhang offer tempting props on early finishes. Live betting will play a big role, especially in fights with tactical shifts between rounds. With arenas filling up and promoters pushing global cards, now’s the time for fight fans to tune in — and cash in.</p>
    `,
  },
  {
    slug: 'nba-finals-2025-preview',
    image: '/blogs/nba.png',
    title: 'NBA Finals 2025: A Clash of Titans on the Hardwood',
    date: 'May 21, 2025',
    content: `
      <p>The 2025 NBA Finals are on the horizon, promising a classic showdown between two franchises with everything to prove. Out of the Western Conference, the Denver Nuggets look poised to return to the mountaintop with reigning MVP Nikola Jokić leading the charge. On the other side, the Boston Celtics, hungry for their first title in over a decade, are storming through the East with Jayson Tatum and Jaylen Brown playing the best basketball of their careers. The clash between these two giants promises intense defense, clutch moments, and superstar heroics.</p>
      <p>Coaching strategies will be pivotal. Mike Malone’s spacing and playmaking schemes have maximized Jokić’s vision, while Joe Mazzulla’s Celtics are executing a more balanced, defense-first identity. Bench depth, transition points, and three-point efficiency will likely determine the swing games. And if recent matchups are any indication, we’re in for a tightly contested series — possibly going the full seven games.</p>
      <p>For bettors, Finals series odds, MVP props, and individual stat lines are all hot markets. Tatum and Jokić lead the MVP odds, but value can be found in supporting stars like Jamal Murray or Jrue Holiday for standout performances. Betting quarters, alternate spreads, and player combos will offer profitable angles as the series unfolds. This isn’t just basketball — it’s a battle for legacy, and every dribble counts.</p>
    `,
  },
]

export default function NewsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-20">
      <h1 className="mb-12 text-4xl font-extrabold text-center text-white">Latest Sports & Betting News</h1>
      <p className="mb-16 text-center text-lg text-gray-300 max-w-2xl mx-auto">
        Explore key stories in tennis, cricket, boxing, and basketball. From clay court battles to IPL thrillers and NBA legacy moments — stay updated with RubyWager.
      </p>

      <div className="space-y-20">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl bg-zinc-900 shadow-md overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[450px] object-cover md:h-[550px] lg:h-[600px]"
            />
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
              <p className="text-sm text-gray-400 mb-4">{post.date}</p>
              <div
                className="prose prose-invert prose-lg max-w-none text-gray-300"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
