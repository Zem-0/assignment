import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ArrowRight, Pizza, Clock, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Pizza className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
              PizzaHub
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <SignedIn>
              <Link
                href="/dashboard"
                className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium hover:bg-orange-600 transition-colors"
              >
                Dashboard
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-white/10 transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium hover:bg-orange-600 transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            <Sparkles className="mr-2 h-4 w-4" />
            <span>Experience the future of pizza ordering</span>
          </div>
          <h1 className="mb-6 text-6xl font-bold leading-tight">
            Order Your Perfect{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
              Pizza
            </span>
            <br />
            <span className="text-4xl">in Minutes</span>
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-gray-300">
            Track your orders in real-time, manage your favorite pizzas, and enjoy a seamless ordering experience.
          </p>
          <div className="flex space-x-4">
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="group flex items-center space-x-2 rounded-lg bg-orange-500 px-6 py-3 text-lg font-medium hover:bg-orange-600 transition-colors">
                  Get Started
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link
                href="/dashboard"
                className="group flex items-center space-x-2 rounded-lg bg-orange-500 px-6 py-3 text-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Go to Dashboard
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </SignedIn>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="mb-4 rounded-lg bg-orange-500/10 p-3 w-fit">
                <feature.icon className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-orange-400">{stat.value}</div>
              <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

const features = [
  {
    title: "Real-time Tracking",
    description: "Track your pizza from the oven to your doorstep with live updates.",
    icon: Clock,
  },
  {
    title: "Secure Orders",
    description: "Your orders are protected with enterprise-grade security.",
    icon: Shield,
  },
  {
    title: "Favorite Orders",
    description: "Save your favorite pizzas for quick reordering.",
    icon: Pizza,
  },
];

const stats = [
  {
    value: "10k+",
    label: "Happy Customers",
  },
  {
    value: "30min",
    label: "Average Delivery Time",
  },
  {
    value: "99%",
    label: "Order Accuracy",
  },
];
