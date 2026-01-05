import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">LM</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-heading font-bold text-gray-900">Learn Management</div>
                <div className="text-xs text-gray-500">iiskills.cloud</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/curriculum" className="text-gray-700 hover:text-primary-600 transition-colors">
              Curriculum
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-primary-600 transition-colors">
              Business News
            </Link>
            <Link href="/jobs" className="text-gray-700 hover:text-primary-600 transition-colors">
              Jobs
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-primary-600 transition-colors">
              Community
            </Link>
            <Link href="/support" className="text-gray-700 hover:text-primary-600 transition-colors">
              Support
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-primary-600 transition-colors">
              Login
            </Link>
            <Link href="/register" className="btn-primary">
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
                Home
              </Link>
              <Link href="/curriculum" className="text-gray-700 hover:text-primary-600 transition-colors">
                Curriculum
              </Link>
              <Link href="/news" className="text-gray-700 hover:text-primary-600 transition-colors">
                Business News
              </Link>
              <Link href="/jobs" className="text-gray-700 hover:text-primary-600 transition-colors">
                Jobs
              </Link>
              <Link href="/community" className="text-gray-700 hover:text-primary-600 transition-colors">
                Community
              </Link>
              <Link href="/support" className="text-gray-700 hover:text-primary-600 transition-colors">
                Support
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-primary-600 transition-colors">
                Login
              </Link>
              <Link href="/register" className="btn-primary inline-block text-center">
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
