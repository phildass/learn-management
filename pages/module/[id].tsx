import Layout from '@/components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getModule } from '@/lib/curriculum';

export default function ModulePage() {
  const router = useRouter();
  const { id } = router.query;
  
  const module = id ? getModule(id as string) : null;

  if (!module) {
    return (
      <Layout>
        <div className="container-custom py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Module not found</h1>
            <Link href="/curriculum" className="text-primary-600 hover:text-primary-700">
              Back to Curriculum
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container-custom">
          <div className="flex items-center space-x-3 mb-4">
            <Link href="/curriculum" className="text-primary-100 hover:text-white">
              ← Back to Curriculum
            </Link>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              Module {module.moduleNumber}
            </span>
            <span className="text-primary-100">{module.category}</span>
          </div>
          <h1 className="text-4xl font-heading font-bold mb-4">{module.title}</h1>
          <p className="text-xl text-primary-100">
            {module.description}
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Lessons</h2>
              <span className="text-gray-600">{module.lessons.length} lessons</span>
            </div>
            <div className="space-y-4">
              {module.lessons.map((lesson, index) => (
                <div key={lesson.id} className="card hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-semibold">
                          Lesson {lesson.lessonNumber}
                        </span>
                        <span className="text-sm text-gray-500">~{lesson.estimatedTime} min</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{lesson.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {lesson.content[0].substring(0, 120)}...
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span>5 paragraphs</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                          </svg>
                          <span>{lesson.quiz.length} quiz questions</span>
                        </span>
                      </div>
                    </div>
                    <div className="ml-6">
                      <Link
                        href={`/lesson/${lesson.id}`}
                        className="btn-primary"
                      >
                        Start Lesson
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card bg-primary-50 border-2 border-primary-200">
            <h3 className="text-lg font-bold mb-2">Module Progress</h3>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span>0 of {module.lessons.length} lessons completed</span>
                <span>0%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Complete all {module.lessons.length} lessons and pass the quizzes (3/5 correct answers required) to unlock the next module.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
