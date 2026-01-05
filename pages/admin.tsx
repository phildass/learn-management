import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoggedIn(true);
        setError('');
      } else {
        setError('Invalid password');
      }
    } catch (error) {
      setError('Login failed');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="card max-w-md w-full">
          <h1 className="text-2xl font-heading font-bold mb-6">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Enter admin password"
              />
            </div>
            {error && (
              <div className="mb-4 text-red-600 text-sm">{error}</div>
            )}
            <button type="submit" className="w-full btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container-custom py-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading font-bold">Admin Panel</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full text-left px-4 py-2 rounded ${activeTab === 'dashboard' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'}`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('users')}
                  className={`w-full text-left px-4 py-2 rounded ${activeTab === 'users' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'}`}
                >
                  Users
                </button>
                <button
                  onClick={() => setActiveTab('lessons')}
                  className={`w-full text-left px-4 py-2 rounded ${activeTab === 'lessons' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'}`}
                >
                  Lessons
                </button>
                <button
                  onClick={() => setActiveTab('support')}
                  className={`w-full text-left px-4 py-2 rounded ${activeTab === 'support' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'}`}
                >
                  Support Tickets
                </button>
                <button
                  onClick={() => setActiveTab('jobs')}
                  className={`w-full text-left px-4 py-2 rounded ${activeTab === 'jobs' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'}`}
                >
                  Jobs
                </button>
                <button
                  onClick={() => setActiveTab('community')}
                  className={`w-full text-left px-4 py-2 rounded ${activeTab === 'community' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'}`}
                >
                  Community
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Dashboard Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card bg-primary-50 border-2 border-primary-200">
                    <div className="text-3xl font-bold text-primary-600 mb-2">1,234</div>
                    <div className="text-gray-700">Total Users</div>
                  </div>
                  <div className="card bg-green-50 border-2 border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">567</div>
                    <div className="text-gray-700">Active Learners</div>
                  </div>
                  <div className="card bg-orange-50 border-2 border-orange-200">
                    <div className="text-3xl font-bold text-orange-600 mb-2">89</div>
                    <div className="text-gray-700">Completions</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">User Management</h2>
                <p className="text-gray-600">User management interface would be implemented here.</p>
              </div>
            )}

            {activeTab === 'lessons' && (
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Lesson Management</h2>
                <p className="text-gray-600">Lesson content editor would be implemented here.</p>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Support Tickets</h2>
                <p className="text-gray-600">Support ticket management interface would be implemented here.</p>
              </div>
            )}

            {activeTab === 'jobs' && (
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Job Listings</h2>
                <p className="text-gray-600">Job moderation and management interface would be implemented here.</p>
              </div>
            )}

            {activeTab === 'community' && (
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Community Moderation</h2>
                <p className="text-gray-600 mb-4">Community features are currently disabled. Enable moderation to activate.</p>
                <button className="btn-primary">Enable Community (Coming Soon)</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
