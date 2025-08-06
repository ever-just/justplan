import { getSession } from '@auth0/nextjs-auth0'
import Link from 'next/link'

export default async function HomePage() {
  const session = await getSession()
  const user = session?.user

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">JUSTPLAN</h1>
        <p className="text-zinc-400">Business Model Canvas</p>
        
        {user ? (
          <div className="space-y-4">
            <p className="text-lg">Welcome, {user.name}!</p>
            <div className="space-x-4">
              <Link 
                href="/canvas" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Open Canvas
              </Link>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a 
                href="/api/auth/logout" 
                className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Logout
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-zinc-400">Please sign in to access your Business Model Canvas</p>
            <div className="space-x-4">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a 
                href="/api/auth/login" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Login
              </a>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a 
                href="/api/auth/login?screen_hint=signup" 
                className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}