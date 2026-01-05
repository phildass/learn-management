import Layout from '@/components/Layout';
import Link from 'next/link';
import { getAllModules } from '@/lib/curriculum';

export default function DashboardPage() {
  const modules = getAllModules();

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-heading font-bold mb-4">My Learning Dashboard</h1>
          <p className="text-xl text-primary-100">
            Track your progress and continue your MBA-standard education
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="card bg-primary-50 border-2 border-primary-200">
            <div className="text-3xl font-bold text-primary-600 mb-2">0%</div>
            <div className="text-gray-700">Overall Progress</div>
          </div>
          <div className="card bg-green-50 border-2 border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">0/100</div>
            <div className="text-gray-700">Lessons Completed</div>
          </div>
          <div className="card bg-orange-50 border-2 border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">0/10</div>
            <div className="text-gray-700">Modules Completed</div>
          </div>
          <div className="card bg-purple-50 border-2 border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">0h</div>
            <div className="text-gray-700">Time Spent</div>
          </div>
        </div>

        {/* Current Progress */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
          <div className="card bg-gradient-to-r from-primary-50 to-white border-2 border-primary-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Start Your Journey</h3>
                <p className="text-gray-600 mb-4">
                  Begin with Module 1: Organizational Behavior & HR
                </p>
                <Link href="/module/module-1" className="btn-primary inline-block">
                  Start Module 1
                </Link>
              </div>
              <div className="hidden md:block">
                <svg className="w-32 h-32 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* All Modules */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Your Curriculum</h2>
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div key={module.id} className="card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-semibold">
                        Module {module.moduleNumber}
                      </span>
                      <span className="text-sm text-gray-500">{module.category}</span>
                      {index === 0 ? (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                          Available
                        </span>
                      ) : (
                        <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs font-semibold">
                          Locked
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{module.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{module.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{module.lessons.length} lessons</span>
                      <span>•</span>
                      <span>0% complete</span>
                    </div>
                  </div>
                  <div className="ml-6">
                    {index === 0 ? (
                      <Link href={`/module/${module.id}`} className="btn-primary">
                        Start
                      </Link>
                    ) : (
                      <button disabled className="btn-secondary opacity-50 cursor-not-allowed">
                        Locked
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Exam */}
        <div className="mt-12">
          <div className="card bg-gradient-to-r from-purple-50 to-white border-2 border-purple-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Final Certification Exam</h3>
                <p className="text-gray-700 mb-3">
                  Complete all 10 modules to unlock the final exam. Pass with 13/20 (65%) to earn your certificate.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center space-x-1 text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>20 questions</span>
                  </span>
                  <span className="flex items-center space-x-1 text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>60 minutes</span>
                  </span>
                  <span className="flex items-center space-x-1 text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    <span>65% to pass</span>
                  </span>
                </div>
                <button disabled className="btn-secondary mt-4 opacity-50 cursor-not-allowed">
                  Locked - Complete All Modules First
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
