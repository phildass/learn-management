import Layout from '@/components/Layout';
import Link from 'next/link';
import { getAllModules } from '@/lib/curriculum';

export default function CurriculumPage() {
  const modules = getAllModules();

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-heading font-bold mb-4">MBA-Standard Curriculum</h1>
          <p className="text-xl text-primary-100">
            100 comprehensive lessons across 10 modules designed by industry experts
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module) => (
            <div key={module.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Module {module.moduleNumber}
                    </span>
                    <span className="text-sm text-gray-500">{module.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{module.lessons.length} lessons</span>
                  <span>~{module.lessons.length * 15} minutes</span>
                </div>
                <Link 
                  href={`/module/${module.id}`}
                  className="block w-full text-center btn-primary"
                >
                  Start Module
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 card bg-primary-50 border-2 border-primary-200">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Final Certification Exam</h3>
              <p className="text-gray-700 mb-3">
                After completing all 10 modules, take the final exam with 20 questions. 
                Score 13 out of 20 (65%) to earn your certificate.
              </p>
              <Link href="/exam" className="text-primary-600 hover:text-primary-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
