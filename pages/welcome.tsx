import Layout from '@/components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function WelcomePage() {
  const router = useRouter();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white py-12">
        <div className="container-custom max-w-3xl">
          <div className="card text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>

            <h1 className="text-4xl font-heading font-bold mb-4">Welcome to Learn Management! 🎉</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your registration is complete. Check your email for your access code.
            </p>

            <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-bold mb-4">What's Next?</h2>
              <ol className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                  <span>Check your email inbox for a confirmation email from no-reply@iiskill.in</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                  <span>Note down your unique access code from the email</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                  <span>Use the access code to login to your account</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                  <span>Start learning from Module 1: Organizational Behavior & HR</span>
                </li>
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary-600 mb-2">10</div>
                <div className="text-sm text-gray-600">Modules</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary-600 mb-2">100</div>
                <div className="text-sm text-gray-600">Lessons</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary-600 mb-2">500</div>
                <div className="text-sm text-gray-600">Quiz Questions</div>
              </div>
            </div>

            <Link href="/login" className="btn-primary inline-block mb-4">
              Login to Your Account
            </Link>

            <p className="text-sm text-gray-500">
              Need help? <Link href="/support" className="text-primary-600 hover:text-primary-700">Contact Support</Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
