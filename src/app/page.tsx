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
              <div className="space-y-8">
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 max-w-md mx-auto">
                  <p className="text-xl text-zinc-200 mb-4">Welcome back, {user.name}!</p>
                  <div className="flex flex-col gap-3">
                    <Link href="/canvas">
                      <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-200">
                        Open Your Canvas
                      </Button>
                    </Link>
                    <a href="/api/auth/logout">
                      <Button variant="outline" size="lg" className="w-full border-zinc-600 bg-zinc-800/50 text-white hover:bg-zinc-700 px-8 py-4 rounded-xl font-semibold transition-all duration-200">
                        Logout
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <a href="/api/auth/login" className="flex-1">
                    <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-200 transform hover:scale-105">
                      Get Started
                    </Button>
                  </a>
                  <a href="/api/auth/login?screen_hint=signup" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full border-zinc-600 bg-zinc-800/50 backdrop-blur-sm text-white hover:bg-zinc-700 px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
                      Sign Up Free
                    </Button>
                  </a>
                </div>
                <div className="flex items-center justify-center gap-8 text-zinc-400 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Free to start</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Separator className="bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      {/* What is Business Model Canvas Section */}
      <div className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <Badge variant="outline" className="border-purple-500/50 bg-purple-500/10 text-purple-300 px-4 py-2 text-sm font-medium">
                Strategic Framework
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                What is a Business Model Canvas?
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                A Business Model Canvas is a strategic management tool that provides a visual framework for developing, describing, and analyzing business models.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 shadow-2xl">
                <CardContent className="p-8 lg:p-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Lightbulb className="h-6 w-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">Strategic Innovation</h3>
                    </div>
                    <p className="text-zinc-200 text-lg leading-relaxed">
                      Originally developed by Alexander Osterwalder, the Business Model Canvas breaks down your business into 9 essential building blocks, 
                      helping you understand how your company creates, delivers, and captures value.
                    </p>
                    <p className="text-zinc-300 leading-relaxed">
                      Whether you're launching a startup, pivoting an existing business, or exploring new opportunities, 
                      the Business Model Canvas provides clarity and structure to your strategic thinking.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800/50 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="h-5 w-5 text-green-400" />
                      <h4 className="font-semibold text-white">Clear Vision</h4>
                    </div>
                    <p className="text-zinc-300 text-sm">Visualize your entire business model at a glance</p>
                  </div>
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800/50 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 className="h-5 w-5 text-blue-400" />
                      <h4 className="font-semibold text-white">Data-Driven</h4>
                    </div>
                    <p className="text-zinc-300 text-sm">Make informed strategic decisions</p>
                  </div>
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800/50 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="h-5 w-5 text-purple-400" />
                      <h4 className="font-semibold text-white">Collaborative</h4>
                    </div>
                    <p className="text-zinc-300 text-sm">Work together with your team seamlessly</p>
                  </div>
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800/50 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="h-5 w-5 text-orange-400" />
                      <h4 className="font-semibold text-white">Growth-Focused</h4>
                    </div>
                    <p className="text-zinc-300 text-sm">Scale your business with confidence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      {/* 9 BMC Sections */}
      <div className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <Badge variant="outline" className="border-green-500/50 bg-green-500/10 text-green-300 px-4 py-2 text-sm font-medium">
                Business Model Framework
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                The 9 Building Blocks
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                Each section of the Business Model Canvas focuses on a key aspect of your business, 
                providing a comprehensive framework for strategic planning
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {bmcSections.map((section, index) => (
                <Card 
                  key={index} 
                  className={`group bg-gradient-to-br from-zinc-900 to-zinc-800 border-2 ${section.color} hover:shadow-2xl hover:shadow-${section.color.split('-')[1]}-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-white group-hover:text-zinc-100 transition-colors">
                      <div className={`p-2 rounded-lg bg-${section.color.split('-')[1]}-500/20 group-hover:bg-${section.color.split('-')[1]}-500/30 transition-colors`}>
                        {section.icon}
                      </div>
                      <span className="text-lg font-semibold">{section.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-zinc-300 group-hover:text-zinc-200 transition-colors leading-relaxed">
                      {section.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Interactive preview hint */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-zinc-300 text-sm font-medium">Interactive canvas available after login</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      {/* Benefits Section */}
      <div className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <Badge variant="outline" className="border-orange-500/50 bg-orange-500/10 text-orange-300 px-4 py-2 text-sm font-medium">
                Platform Benefits
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Why Use JUSTPLAN?
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                Our platform makes business model planning simple, collaborative, and effective for teams of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="group text-center space-y-6 p-6 rounded-2xl bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300 transform hover:scale-105">
                  <div className="flex justify-center">
                    <div className="p-4 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-2xl group-hover:from-zinc-700 group-hover:to-zinc-600 transition-all duration-300 shadow-lg">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-zinc-100 transition-colors">{benefit.title}</h3>
                  <p className="text-zinc-300 group-hover:text-zinc-200 transition-colors leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8 lg:p-12 shadow-2xl">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-green-500/20 rounded-xl">
                      <CheckCircle className="h-8 w-8 text-green-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Key Features</h3>
                  <p className="text-zinc-300 max-w-2xl mx-auto">Everything you need to create, manage, and share your business model canvas</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center gap-3 p-4 bg-zinc-800/50 rounded-xl hover:bg-zinc-700/50 transition-colors">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span className="text-zinc-200 font-medium text-center">Interactive Canvas Interface</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-4 bg-zinc-800/50 rounded-xl hover:bg-zinc-700/50 transition-colors">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span className="text-zinc-200 font-medium text-center">Real-time Editing & Updates</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-4 bg-zinc-800/50 rounded-xl hover:bg-zinc-700/50 transition-colors">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span className="text-zinc-200 font-medium text-center">Professional Templates</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-4 bg-zinc-800/50 rounded-xl hover:bg-zinc-700/50 transition-colors">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span className="text-zinc-200 font-medium text-center">Secure Cloud Storage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      {/* Call to Action */}
      <div className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <Badge variant="outline" className="border-blue-500/50 bg-blue-500/10 text-blue-300 px-4 py-2 text-sm font-medium">
                Get Started Today
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Ready to Plan Your Success?
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                Join thousands of entrepreneurs and business professionals who use JUSTPLAN to bring clarity to their business models and accelerate their growth.
              </p>
            </div>

            {!user && (
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                  <a href="/api/auth/login?screen_hint=signup" className="flex-1">
                    <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-200 transform hover:scale-105">
                      Start Building Your Canvas
                    </Button>
                  </a>
                  <a href="/api/auth/login" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full border-zinc-600 bg-zinc-800/50 backdrop-blur-sm text-white hover:bg-zinc-700 px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
                      Sign In
                    </Button>
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="flex flex-col items-center gap-2 p-4 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-zinc-300 text-sm font-medium">Free to start</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-zinc-300 text-sm font-medium">No credit card required</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-zinc-300 text-sm font-medium">Start in seconds</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative border-t border-zinc-800/50">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        <div className="relative container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">JUSTPLAN</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Professional Business Model Canvas tool that helps entrepreneurs and businesses visualize, plan, and execute their strategies with confidence.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Features</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    Interactive Canvas
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    Real-time Collaboration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    Professional Templates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    Secure Cloud Storage
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Business Model Canvas</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    9 Essential Building Blocks
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    Strategic Framework
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    Visual Planning Tool
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    Proven Methodology
                  </li>
                </ul>
              </div>
            </div>
            
            <Separator className="bg-zinc-800/50 mb-8" />
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-zinc-400 text-sm">
                &copy; 2024 JUSTPLAN. Professional Business Model Canvas tool powered by EVERJUST.
              </div>
              <div className="flex items-center gap-4 text-zinc-500 text-sm">
                <span>Built with Next.js & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}






