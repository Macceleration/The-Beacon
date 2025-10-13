"use client";

import { GameCarousel } from "@/components/GameCarousel";
import { Zap } from "lucide-react";

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  const games = [
    {
      title: "BORDERLAND",
      status: "Live Now",
      image: "https://images.unsplash.com/photo-1571619243106-f5d5334abd9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5aW5nJTIwY2FyZHMlMjBteXN0ZXJ5fGVufDF8fHx8MTc2MDM4NjcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "https://borderland.thebeaconhq.com"
    },
    {
      title: "SQUID GAME",
      status: "LOCKED",
      image: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBsaWdodCUyMGdhbWV8ZW58MXx8fHwxNzYwMzg2NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "SURVIVOR",
      status: "LOCKED",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMGJlYWNofGVufDF8fHx8MTc2MDM4NjcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "AMAZING RACE",
      status: "LOCKED",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwcmFjZSUyMGNoZWNrcG9pbnR8ZW58MXx8fHwxNzYwMzg2NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];
  
  return (
    <div className="min-h-screen bg-black">
      {/* Arcade Floor Pattern */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255, 255, 255, 0.03) 60px, rgba(255, 255, 255, 0.03) 61px),
                         repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255, 255, 255, 0.03) 60px, rgba(255, 255, 255, 0.03) 61px)`
      }} />
      
      {/* Simple Navbar */}
      <header className="relative border-b-2 border-zinc-800 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center">
            <h1 className="arcade-title text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              THE BEACON HQ
            </h1>
          </div>
        </div>
      </header>

      <main className="relative py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Game Carousel */}
        <section className="w-full overflow-hidden">
          <GameCarousel games={games} />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t-2 border-zinc-800 mt-12 sm:mt-16 md:mt-20 lg:mt-28">
        <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="flex gap-1.5 sm:gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50" style={{ animationDelay: '0.3s' }} />
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-lg shadow-secondary/50" style={{ animationDelay: '0.6s' }} />
            </div>
            <p className="arcade-font text-[0.5rem] sm:text-[0.6rem] text-zinc-500">
              © {currentYear} THE BEACON HQ
            </p>
            <div className="flex gap-1.5 sm:gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-lg shadow-secondary/50" />
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50" style={{ animationDelay: '0.3s' }} />
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" style={{ animationDelay: '0.6s' }} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
