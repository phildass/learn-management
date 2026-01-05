import Layout from '@/components/Layout';
import Link from 'next/link';

export default function CommunityPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-heading font-bold mb-4">Community</h1>
          <p className="text-xl text-primary-100">
            Connect with fellow learners and management professionals
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="card">
            <svg className="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-2xl font-bold mb-4">Community Features Coming Soon</h2>
            <p className="text-gray-600 mb-6">
              We're building an engaging community platform where learners can:
            </p>
            <div className="text-left max-w-md mx-auto mb-6">
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Discuss case studies and lessons</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Share experiences and best practices</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Network with industry professionals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Get help from moderators and peers</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> The community will be moderated to ensure high-quality discussions and a safe learning environment.
              </p>
            </div>
            <Link href="/register" className="btn-primary">
              Register to Get Notified
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
