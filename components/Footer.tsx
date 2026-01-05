import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">Learn Management</h3>
            <p className="text-sm text-gray-400">
              MBA-standard business curriculum platform. Master management skills with comprehensive courses in OB, HR, Marketing, Finance, Operations, Strategy, and Communication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/curriculum" className="hover:text-white transition-colors">Curriculum</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">Business News</Link></li>
              <li><Link href="/jobs" className="hover:text-white transition-colors">Jobs</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/support" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/admin" className="hover:text-white transition-colors">Admin</Link></li>
            </ul>
          </div>

          {/* iiskills.cloud Network */}
          <div>
            <h3 className="text-white font-semibold mb-4">iiskills.cloud Network</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://learn-pr.iiskills.cloud" className="hover:text-white transition-colors">Learn PR</a></li>
              <li><a href="https://learn-math.iiskills.cloud" className="hover:text-white transition-colors">Learn Math</a></li>
              <li><a href="https://learn-investing.iiskills.cloud" className="hover:text-white transition-colors">Learn Investing</a></li>
              <li><a href="https://learn-winning.iiskills.cloud" className="hover:text-white transition-colors">Learn Winning</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {currentYear} iiskills.cloud. All rights reserved. | 
            <Link href="/privacy" className="hover:text-white ml-2">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-white ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
