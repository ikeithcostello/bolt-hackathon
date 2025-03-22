import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic email validation
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real application, you would send a request to your backend
      // to trigger a password reset email
      // await api.sendPasswordResetEmail(email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
    } catch {
      setError('Failed to send reset instructions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop)', 
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary/95 via-background-primary/85 to-background-primary"></div>
      
      {/* Back button */}
      <Link 
        to="/login" 
        className="absolute top-6 left-6 z-10 flex items-center text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span>Back to Login</span>
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full mx-auto relative z-10 px-4 py-12"
      >
        <div className="text-center mb-6">
          <Zap className="w-12 h-12 mx-auto text-[#43AFFF] mb-2" />
          <h1 className="text-4xl font-bold text-white">The World's Largest Hackathon</h1>
          <p className="text-gray-400 mt-2">Reset your password</p>
        </div>

        <div className="bg-background-primary/70 backdrop-blur-md p-8 rounded-lg shadow-2xl border border-white/10">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 text-gray-500" size={18} />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`w-full pl-10 pr-4 py-2 rounded-md bg-gray-800/80 border ${error ? 'border-accent-red' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-accent-blue`}
                      placeholder="you@example.com"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  {error && <p className="mt-1 text-sm text-accent-red">{error}</p>}
                </div>
                
                <div>
                  <Button 
                    type="submit"
                    className="w-full bg-[#43AFFF] hover:bg-[#3a9ee6]"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Send Reset Instructions'}
                  </Button>
                </div>
                
                <div className="text-center text-sm text-gray-400">
                  Remembered your password?{' '}
                  <Link to="/login" className="text-[#43AFFF] hover:text-[#3a9ee6] hover:underline">
                    Sign in
                  </Link>
                </div>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-4"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-green/20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-green" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Check your email</h3>
              <p className="text-gray-300 mb-6">
                We've sent password reset instructions to:<br />
                <span className="font-medium text-white">{email}</span>
              </p>
              <p className="text-sm text-gray-400 mb-4">
                If you don't see the email, check your spam folder or request another reset link.
              </p>
              <div>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#43AFFF] hover:text-[#3a9ee6]"
                  variant="ghost"
                >
                  Try another email
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default ResetPassword; 