import { getSession } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Users, 
  Heart, 
  Package, 
  Megaphone, 
  ArrowRightLeft, 
  DollarSign, 
  Wrench, 
  UserCheck, 
  TrendingUp,
  CheckCircle,
  Target,
  Lightbulb,
  BarChart3
} from 'lucide-react'

export default async function HomePage() {
  const session = await getSession()
  const user = session?.user

  const bmcSections = [
    {
      title: 'Key Partners',
      description: 'Strategic alliances and supplier relationships',
      icon: <UserCheck className="h-5 w-5" />,
      color: 'border-blue-500'
    },
    {
      title: 'Key Activities',
      description: 'Core activities that create value',
      icon: <Wrench className="h-5 w-5" />,
      color: 'border-green-500'
    },
    {
      title: 'Key Resources',
      description: 'Essential assets for your business',
      icon: <Package className="h-5 w-5" />,
      color: 'border-purple-500'
    },
    {
      title: 'Value Propositions',
      description: 'Unique value you deliver to customers',
      icon: <Heart className="h-5 w-5" />,
      color: 'border-red-500'
    },
    {
      title: 'Customer Relationships',
      description: 'How you interact with customers',
      icon: <Users className="h-5 w-5" />,
      color: 'border-orange-500'
    },
    {
      title: 'Channels',
      description: 'How you reach and deliver to customers',
      icon: <ArrowRightLeft className="h-5 w-5" />,
      color: 'border-cyan-500'
    },
    {
      title: 'Customer Segments',
      description: 'Different groups of customers you serve',
      icon: <Target className="h-5 w-5" />,
      color: 'border-pink-500'
    },
    {
      title: 'Cost Structure',
      description: 'All costs involved in operating your business',
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'border-yellow-500'
    },
    {
      title: 'Revenue Streams',
      description: 'How your business generates income',
      icon: <DollarSign className="h-5 w-5" />,
      color: 'border-emerald-500'
    }
  ]

  const benefits = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Strategic Clarity',
      description: 'Visualize your entire business model on one page'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Better Planning',
      description: 'Make informed decisions with structured thinking'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Easy Collaboration',
      description: 'Share and iterate on your business model with your team'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Badge variant="outline" className="border-blue-500/50 bg-blue-500/10 text-blue-300 px-4 py-2 text-sm font-medium">
                Professional Business Planning Tool
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                JUSTPLAN
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-400 font-medium">
                Professional Business Model Canvas Tool
              </p>
              <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                Transform your business ideas into structured, actionable plans with our intuitive Business Model Canvas platform. 
                Visualize, plan, and execute your business strategy with confidence.
              </p>
            </div>

          {user ? (
            <div className="space-y-6">
              <p className="text-xl text-zinc-200">Welcome back, {user.name}!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/canvas">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Open Your Canvas
                  </Button>
                </Link>
                <a href="/api/auth/logout">
                  <Button variant="outline" size="lg" className="border-zinc-600 bg-zinc-800 text-white hover:bg-zinc-700 px-8 py-3">
                    Logout
                  </Button>
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/api/auth/login">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Get Started
                  </Button>
                </a>
                <a href="/api/auth/login?screen_hint=signup">
                  <Button variant="outline" size="lg" className="border-zinc-600 bg-zinc-800 text-white hover:bg-zinc-700 px-8 py-3">
                    Sign Up Free
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <Separator className="bg-zinc-800" />

      {/* What is Business Model Canvas Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">What is a Business Model Canvas?</h2>
            <p className="text-lg text-zinc-300">
              A Business Model Canvas is a strategic management tool that provides a visual framework for developing, describing, and analyzing business models.
            </p>
          </div>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-zinc-200 text-lg leading-relaxed">
                  Originally developed by Alexander Osterwalder, the Business Model Canvas breaks down your business into 9 essential building blocks, 
                  helping you understand how your company creates, delivers, and captures value.
                </p>
                <p className="text-zinc-300">
                  Whether you're launching a startup, pivoting an existing business, or exploring new opportunities, 
                  the Business Model Canvas provides clarity and structure to your strategic thinking.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="bg-zinc-800" />

      {/* 9 BMC Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">The 9 Building Blocks</h2>
            <p className="text-lg text-zinc-300">
              Each section of the Business Model Canvas focuses on a key aspect of your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bmcSections.map((section, index) => (
              <Card key={index} className={`bg-zinc-900 border-2 ${section.color} hover:bg-zinc-800 transition-colors`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    {section.icon}
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-300">
                    {section.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Separator className="bg-zinc-800" />

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Why Use JUSTPLAN?</h2>
            <p className="text-lg text-zinc-300">
              Our platform makes business model planning simple, collaborative, and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 bg-zinc-800 rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-zinc-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-center">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-zinc-200">Interactive canvas interface</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-zinc-200">Real-time editing and updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-zinc-200">Professional templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-zinc-200">Secure cloud storage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-zinc-800" />

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Plan Your Success?</h2>
            <p className="text-lg text-zinc-300">
              Join thousands of entrepreneurs and business professionals who use JUSTPLAN to bring clarity to their business models.
            </p>
          </div>

          {!user && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/api/auth/login?screen_hint=signup">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Start Building Your Canvas
                </Button>
              </a>
              <a href="/api/auth/login">
                <Button variant="outline" size="lg" className="border-zinc-600 bg-zinc-800 text-white hover:bg-zinc-700 px-8 py-3">
                  Sign In
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-zinc-400">
            <p>&copy; 2024 JUSTPLAN. Professional Business Model Canvas tool powered by EVERJUST.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

