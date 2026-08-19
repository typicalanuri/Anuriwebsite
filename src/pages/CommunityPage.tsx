import Button from '../components/ui/Button'
import CommunityPost from '../components/features/CommunityPost'
import CircleCard from '../components/features/CircleCard'

const circles = [
  { name: 'ATL Mat Pilates', memberCount: 214 },
  { name: 'Morning Movers', memberCount: 891 },
  { name: 'Mindful Eaters', memberCount: 456 },
]

const posts = [
  {
    initial: 'T',
    name: 'Tasha R.',
    meta: 'ATL Mat Pilates · 2h ago',
    text: 'Week three of the sunlight-before-screens practice and my sleep tracker finally agrees with how I feel. Anyone else notice it takes about two weeks to kick in?',
    replies: 8,
  },
  {
    initial: 'M',
    name: 'Maya K.',
    meta: 'Morning Movers · 5h ago',
    text: 'Did the no-phone walk in the rain today. Ten out of ten, would recommend getting slightly soggy for your mental health.',
    replies: 14,
  },
  {
    initial: 'D',
    name: 'Dara O.',
    meta: 'Mindful Eaters · 1d ago',
    text: 'Reminder that "evidence-based" also means it\'s okay when a practice doesn\'t work for you. The evidence is a starting point, not a verdict on your body.',
    replies: 22,
  },
]

export default function CommunityPage() {
  return (
    <div className="mx-auto w-full max-w-[920px] px-6 py-16 md:px-12 md:py-[88px]">
      <h1 className="mb-10 font-display text-[28px] font-medium leading-tight text-dark-brown md:text-[36px]">
        Community
      </h1>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_280px]">
        {/* Main feed */}
        <div>
          {/* Featured circle */}
          <div className="mb-8 overflow-hidden rounded-2xl bg-blush">
            <img
              src="/assets/hot_yoga.jpeg"
              alt="Hot yoga class"
              loading="lazy"
              className="h-44 w-full object-cover md:h-52"
            />
            <div className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
              <div>
                <p className="mb-1 font-body text-[10.5px] uppercase tracking-[0.2em] text-dusty-pink">
                  Featured circle
                </p>
                <h2 className="font-display text-[18px] font-medium text-dark-brown">
                  Glow Hot Yoga Crew
                </h2>
                <p className="font-body text-[11px] uppercase tracking-[0.14em] text-brown-muted">
                  128 members
                </p>
              </div>
              <Button size="sm">Open</Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <CommunityPost key={post.name} {...post} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside>
          <p className="mb-4 font-body text-[11px] uppercase tracking-[0.2em] text-dusty-pink">
            Your circles
          </p>
          <div className="mb-6 flex flex-col gap-2">
            {circles.map((circle) => (
              <CircleCard key={circle.name} {...circle} />
            ))}
          </div>
          <Button variant="outline" size="sm" className="w-full">
            Find a circle
          </Button>
        </aside>
      </div>
    </div>
  )
}
