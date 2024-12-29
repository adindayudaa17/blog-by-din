'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { MenuIcon } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600"></div>
              <span className="text-xl font-medium">Blog By Din.</span>
            </Link>
            
            {/* Desktop Navigation */}
            {/* <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/products" className="text-sm text-gray-600 hover:text-gray-900">Products +</Link>
              <Link href="/interview" className="text-sm text-gray-600 hover:text-gray-900">Interview +</Link>
              <Link href="/resources" className="text-sm text-gray-600 hover:text-gray-900">Resources +</Link>
              <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">About</Link>
              <Button variant="default" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                Get started
              </Button>
            </div> */}

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link>
                <Link href="/products" className="text-sm text-gray-600 hover:text-gray-900">Products</Link>
                <Link href="/interview" className="text-sm text-gray-600 hover:text-gray-900">Interview</Link>
                <Link href="/resources" className="text-sm text-gray-600 hover:text-gray-900">Resources</Link>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">About</Link>
                <Button variant="default" size="sm" className="bg-blue-600 text-white hover:bg-blue-700 w-full">
                  Get started
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main>
        {children}
      </main>
    </div>
  )
}

