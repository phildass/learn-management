import Layout from '@/components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    accessCode: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // In production, validate credentials against database
    // For now, simulate login
    if (formData.email && formData.accessCode) {
      router.push('/dashboard');
    } else {
      setError('Please enter both email and access code');
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container-custom max-w-md">
          <div className="card">
            <h1 className="text-3xl font-heading font-bold mb-2">Login</h1>
            <p className="text-gray-600 mb-8">
              Access your learning dashboard
            </p>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Access Code</label>
                  <input
                    type="text"
                    name="accessCode"
                    value={formData.accessCode}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Enter your access code"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Check your email for the access code sent after registration
                  </p>
                </div>

                {error && (
                  <div className="text-red-600 text-sm">{error}</div>
                )}

                <button type="submit" className="w-full btn-primary">
                  Login
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link href="/register" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
