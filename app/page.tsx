import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, ArrowRight } from "lucide-react"
import DashboardDemo from "@/components/dashboard-demo"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold">FetchMeet</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Stop playing <span className="text-purple-600">calendar ping-pong</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
          FetchMeet uses Fetch.AI agents to intelligently negotiate meeting times based on your preferences,
          availability, and context.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-24 space-y-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Smart Scheduling with AI Agents</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            FetchMeet goes beyond showing available slots. Our AI agents negotiate the perfect time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 border rounded-lg">
            <div className="p-3 rounded-full bg-purple-100">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Calendar Integration</h3>
            <p className="mt-2 text-muted-foreground">
              Seamlessly connects with Google Calendar to understand your availability.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border rounded-lg">
            <div className="p-3 rounded-full bg-purple-100">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Smart Preferences</h3>
            <p className="mt-2 text-muted-foreground">
              Set rules like "no meetings before 10am" or "1:1s only on Tuesdays".
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border rounded-lg">
            <div className="p-3 rounded-full bg-purple-100">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Agent Negotiation</h3>
            <p className="mt-2 text-muted-foreground">
              Your agent negotiates with others to find the optimal meeting time.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-slate-50 py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              FetchMeet uses Fetch.AI's autonomous agents to make scheduling effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold">Connect Your Calendar</h3>
                  <p className="mt-2 text-muted-foreground">
                    Link your Google Calendar so your agent knows when you're available.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold">Set Your Preferences</h3>
                  <p className="mt-2 text-muted-foreground">Define your scheduling rules and meeting preferences.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold">Share Your Link</h3>
                  <p className="mt-2 text-muted-foreground">
                    Send your FetchMeet link to anyone who wants to schedule with you.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold">Agents Negotiate</h3>
                  <p className="mt-2 text-muted-foreground">
                    Your AI agent negotiates with the other person's agent to find the best time.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <DashboardDemo />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Ready to stop playing calendar ping-pong?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Join FetchMeet today and let AI agents handle your meeting scheduling.
        </p>
        <Button size="lg" className="mt-10">
          Get Started
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Calendar className="h-5 w-5 text-purple-600" />
            <span className="font-bold">FetchMeet</span>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">© 2025 FetchMeet. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
