import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';
import { getAllModules } from '@/lib/curriculum';

export default function ExamPage() {
  const [examStarted, setExamStarted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Generate 20 questions from all modules (2 per module)
  const generateExamQuestions = () => {
    const modules = getAllModules();
    const questions: any[] = [];
    
    modules.forEach((module) => {
      // Take 2 random questions from each module
      const moduleQuestions = module.lessons.flatMap(lesson => lesson.quiz);
      const selectedQuestions = moduleQuestions.slice(0, 2);
      questions.push(...selectedQuestions);
    });

    return questions.slice(0, 20);
  };

  const examQuestions = examStarted ? generateExamQuestions() : [];

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex,
    });
  };

  const handleExamSubmit = () => {
    let correctCount = 0;
    examQuestions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setExamSubmitted(true);
  };

  const passed = score >= 13;

  if (!examStarted) {
    return (
      <Layout>
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-heading font-bold mb-4">Final Certification Exam</h1>
            <p className="text-xl text-purple-100">
              Test your knowledge and earn your Learn Management certificate
            </p>
          </div>
        </div>

        <div className="container-custom py-12">
          <div className="max-w-3xl mx-auto">
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Exam Instructions</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">20 Questions</p>
                    <p className="text-sm text-gray-600">The exam consists of 20 multiple-choice questions covering all 10 modules.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">60 Minutes</p>
                    <p className="text-sm text-gray-600">You have 60 minutes to complete the exam. Plan your time wisely.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Pass with 65%</p>
                    <p className="text-sm text-gray-600">You need to score at least 13 out of 20 (65%) to pass and earn your certificate.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">One Attempt</p>
                    <p className="text-sm text-gray-600">You get one attempt. Make sure you're prepared before starting.</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 mb-8">
                <h3 className="font-bold mb-2">Prerequisites</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Before taking the exam, ensure you have:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Completed all 100 lessons across 10 modules</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Passed all lesson quizzes (3/5 minimum)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Reviewed all course materials</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setExamStarted(true)}
                  className="btn-primary px-12 py-4 text-lg"
                >
                  Start Exam
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  <Link href="/dashboard" className="text-primary-600 hover:text-primary-700">
                    ← Back to Dashboard
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-8">
        <div className="container-custom">
          <h1 className="text-3xl font-heading font-bold">Final Certification Exam</h1>
          {!examSubmitted && (
            <p className="text-purple-100 mt-2">
              Time Remaining: 60:00 | Questions Answered: {Object.keys(selectedAnswers).length}/20
            </p>
          )}
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          {!examSubmitted ? (
            <div className="card">
              <div className="space-y-8">
                {examQuestions.map((question, index) => (
                  <div key={question.id} className="border-b pb-6 last:border-b-0">
                    <p className="font-semibold mb-4 text-lg">
                      {index + 1}. {question.question}
                    </p>
                    <div className="space-y-3">
                      {question.options.map((option: string, optionIndex: number) => (
                        <label
                          key={optionIndex}
                          className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                            selectedAnswers[question.id] === optionIndex
                              ? 'border-purple-600 bg-purple-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name={question.id}
                            checked={selectedAnswers[question.id] === optionIndex}
                            onChange={() => handleAnswerSelect(question.id, optionIndex)}
                            className="w-5 h-5"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleExamSubmit}
                disabled={Object.keys(selectedAnswers).length < 20}
                className="w-full btn-primary mt-8 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Exam
              </button>
            </div>
          ) : (
            <div className="card">
              <div className={`p-8 rounded-lg border-2 text-center ${
                passed
                  ? 'bg-green-50 border-green-200'
                  : 'bg-red-50 border-red-200'
              }`}>
                {passed ? (
                  <svg className="w-24 h-24 text-green-600 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-24 h-24 text-red-600 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                )}

                <h2 className={`text-3xl font-bold mb-4 ${passed ? 'text-green-800' : 'text-red-800'}`}>
                  {passed ? 'Congratulations! 🎉' : 'Not Passed'}
                </h2>
                <p className={`text-xl mb-6 ${passed ? 'text-green-700' : 'text-red-700'}`}>
                  You scored {score} out of 20 ({Math.round((score / 20) * 100)}%)
                </p>

                {passed ? (
                  <>
                    <p className="text-green-700 mb-8">
                      You have successfully completed the Learn Management certification exam. 
                      Your certificate will be emailed to you within 24 hours.
                    </p>
                    <Link href="/dashboard" className="btn-primary inline-block">
                      Back to Dashboard
                    </Link>
                  </>
                ) : (
                  <>
                    <p className="text-red-700 mb-8">
                      You need at least 13 correct answers (65%) to pass. 
                      Please review the course materials and contact support for guidance.
                    </p>
                    <div className="flex gap-4 justify-center">
                      <Link href="/dashboard" className="btn-secondary">
                        Back to Dashboard
                      </Link>
                      <Link href="/support" className="btn-primary">
                        Contact Support
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
