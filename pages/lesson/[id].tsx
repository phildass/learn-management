import Layout from '@/components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getLesson, getModule } from '@/lib/curriculum';

export default function LessonPage() {
  const router = useRouter();
  const { id } = router.query;
  
  // Extract module and lesson IDs from the lesson ID (format: lesson-X-Y)
  const moduleId = id ? `module-${(id as string).split('-')[1]}` : '';
  const lesson = id ? getLesson(moduleId, id as string) : null;
  const module = moduleId ? getModule(moduleId) : null;

  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!lesson || !module) {
    return (
      <Layout>
        <div className="container-custom py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
            <Link href="/curriculum" className="text-primary-600 hover:text-primary-700">
              Back to Curriculum
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex,
    });
  };

  const handleQuizSubmit = () => {
    let correctCount = 0;
    lesson.quiz.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setQuizSubmitted(true);
  };

  const passed = score >= 3;

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-8">
        <div className="container-custom">
          <div className="flex items-center space-x-3 mb-4">
            <Link href={`/module/${moduleId}`} className="text-primary-100 hover:text-white">
              ← Back to {module.title}
            </Link>
          </div>
          <div className="flex items-center space-x-3 mb-2">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              Module {module.moduleNumber} - Lesson {lesson.lessonNumber}
            </span>
            <span className="text-primary-100">~{lesson.estimatedTime} min</span>
          </div>
          <h1 className="text-3xl font-heading font-bold">{lesson.title}</h1>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          {!showQuiz ? (
            <>
              {/* Lesson Content */}
              <div className="card mb-8">
                <div className="prose max-w-none">
                  {lesson.content.map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Take Quiz Button */}
              <div className="text-center">
                <button
                  onClick={() => setShowQuiz(true)}
                  className="btn-primary"
                >
                  Take Quiz (5 Questions)
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Quiz Section */}
              <div className="card mb-8">
                <h2 className="text-2xl font-bold mb-6">Lesson Quiz</h2>
                <p className="text-gray-600 mb-6">
                  Answer at least 3 out of 5 questions correctly to pass and unlock the next lesson.
                </p>

                <div className="space-y-6">
                  {lesson.quiz.map((question, qIndex) => (
                    <div key={question.id} className="border-b pb-6 last:border-b-0">
                      <p className="font-semibold mb-3">
                        {qIndex + 1}. {question.question}
                      </p>
                      <div className="space-y-2">
                        {question.options.map((option, oIndex) => (
                          <label
                            key={oIndex}
                            className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                              selectedAnswers[question.id] === oIndex
                                ? 'border-primary-600 bg-primary-50'
                                : 'border-gray-200 hover:border-gray-300'
                            } ${
                              quizSubmitted && oIndex === question.correctAnswer
                                ? 'border-green-500 bg-green-50'
                                : quizSubmitted && selectedAnswers[question.id] === oIndex
                                ? 'border-red-500 bg-red-50'
                                : ''
                            }`}
                          >
                            <input
                              type="radio"
                              name={question.id}
                              checked={selectedAnswers[question.id] === oIndex}
                              onChange={() => handleAnswerSelect(question.id, oIndex)}
                              disabled={quizSubmitted}
                              className="w-4 h-4"
                            />
                            <span>{option}</span>
                            {quizSubmitted && oIndex === question.correctAnswer && (
                              <svg className="w-5 h-5 text-green-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            )}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {!quizSubmitted ? (
                  <button
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(selectedAnswers).length < lesson.quiz.length}
                    className="w-full btn-primary mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Quiz
                  </button>
                ) : (
                  <div className="mt-6">
                    <div className={`p-6 rounded-lg border-2 ${
                      passed
                        ? 'bg-green-50 border-green-200'
                        : 'bg-orange-50 border-orange-200'
                    }`}>
                      <div className="flex items-center space-x-3 mb-3">
                        {passed ? (
                          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        )}
                        <div>
                          <h3 className={`text-xl font-bold ${passed ? 'text-green-800' : 'text-orange-800'}`}>
                            {passed ? 'Quiz Passed! 🎉' : 'Try Again'}
                          </h3>
                          <p className={passed ? 'text-green-700' : 'text-orange-700'}>
                            You scored {score} out of {lesson.quiz.length}
                          </p>
                        </div>
                      </div>
                      {passed ? (
                        <p className="text-green-700 mb-4">
                          Great job! You can now proceed to the next lesson.
                        </p>
                      ) : (
                        <p className="text-orange-700 mb-4">
                          You need at least 3 correct answers to pass. Please review the lesson and try again.
                        </p>
                      )}
                      <div className="flex gap-4">
                        {!passed && (
                          <button
                            onClick={() => {
                              setShowQuiz(false);
                              setQuizSubmitted(false);
                              setSelectedAnswers({});
                              setScore(0);
                            }}
                            className="btn-secondary"
                          >
                            Review Lesson
                          </button>
                        )}
                        {passed && (
                          <Link href={`/module/${moduleId}`} className="btn-primary">
                            Back to Module
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
