import Layout from '@/components/Layout';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whyLearnAI: '',
  });
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBasicInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); // Move to payment step
  };

  const handlePayment = async () => {
    // In production, integrate with Razorpay UPI gateway
    // For now, simulate payment
    setTimeout(() => {
      setPaymentComplete(true);
      setStep(3);
    }, 1500);
  };

  const handlePostRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Submit registration data
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/welcome');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container-custom max-w-2xl">
          <div className="card">
            <h1 className="text-3xl font-heading font-bold mb-2">Register for Learn Management</h1>
            <p className="text-gray-600 mb-8">
              Join thousands of learners mastering business management skills
            </p>

            {/* Progress Indicator */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span className={`text-sm ${step >= 1 ? 'text-gray-900' : 'text-gray-400'}`}>Basic Info</span>
              </div>
              <div className="flex-1 h-1 mx-4 bg-gray-200">
                <div className={`h-full ${step >= 2 ? 'bg-primary-600' : 'bg-gray-200'}`} style={{ width: step >= 2 ? '100%' : '0%' }}></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span className={`text-sm ${step >= 2 ? 'text-gray-900' : 'text-gray-400'}`}>Payment</span>
              </div>
              <div className="flex-1 h-1 mx-4 bg-gray-200">
                <div className={`h-full ${step >= 3 ? 'bg-primary-600' : 'bg-gray-200'}`} style={{ width: step >= 3 ? '100%' : '0%' }}></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary-600 text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span className={`text-sm ${step >= 3 ? 'text-gray-900' : 'text-gray-400'}`}>Complete</span>
              </div>
            </div>

            {/* Step 1: Basic Information */}
            {step === 1 && (
              <form onSubmit={handleBasicInfoSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
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
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary">
                    Continue to Payment
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="border-2 border-primary-200 rounded-lg p-6 bg-primary-50">
                  <h3 className="text-lg font-bold mb-2">Course Fee</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-4">₹999</div>
                  <p className="text-sm text-gray-600">One-time payment for lifetime access to all 100 lessons</p>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Payment Method</h3>
                  <div className="space-y-2">
                    <div className="border-2 border-primary-600 rounded-lg p-4 bg-white">
                      <div className="flex items-center space-x-3">
                        <input type="radio" name="payment" checked readOnly />
                        <div>
                          <div className="font-semibold">UPI Payment</div>
                          <div className="text-sm text-gray-500">Google Pay, PhonePe, Paytm, and more</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  className="w-full btn-primary"
                  disabled={paymentComplete}
                >
                  {paymentComplete ? 'Processing...' : 'Pay ₹999 with UPI'}
                </button>
              </div>
            )}

            {/* Step 3: Post-Registration Question */}
            {step === 3 && (
              <form onSubmit={handlePostRegistrationSubmit}>
                <div className="space-y-6">
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-green-800">Payment Successful!</span>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Why do you want to learn about AI and Management? *
                    </label>
                    <p className="text-sm text-gray-500 mb-3">
                      This helps us personalize your learning experience
                    </p>
                    <textarea
                      name="whyLearnAI"
                      value={formData.whyLearnAI}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="input-field"
                      placeholder="Tell us about your goals and motivations..."
                    />
                  </div>

                  <button type="submit" className="w-full btn-primary">
                    Complete Registration
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
