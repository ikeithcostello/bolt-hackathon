import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAppStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // For this demo, we're using a mock login function
      // In a real application, you would call an API
      await login(email, password);
      
      // Redirect based on role
      if (email.includes('admin')) {
        navigate('/admin');
      } else if (email.includes('judge')) {
        navigate('/judge');
      } else {
        navigate('/participant');
      }
    } catch {
      // Show generic error message
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background with gradient overlay, matching the landing page style */}
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
        to="/" 
        className="absolute top-6 left-6 z-10 flex items-center text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span>Back to Home</span>
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full mx-auto relative z-10 px-4"
      >
        <div className="text-center mb-6">
          <Zap className="w-12 h-12 mx-auto text-[#43AFFF] mb-2" />
          <h1 className="text-4xl font-bold text-white">The World's Largest Hackathon</h1>
          <p className="text-gray-400 mt-2">Sign in to your account</p>
        </div>

        <div className="bg-background-primary/70 backdrop-blur-md p-8 rounded-lg shadow-2xl border border-white/10">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#43AFFF]"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#43AFFF]"
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="mb-6 text-right">
              <Link to="/reset-password" className="text-sm text-[#43AFFF] hover:text-[#3a9ee6] transition-colors">
                Forgot password?
              </Link>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-900 bg-opacity-30 text-accent-red rounded-md text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-[#43AFFF] hover:bg-[#3a9ee6]"
              isLoading={isLoading}
            >
              Sign In
            </Button>

            <div className="mt-6 text-center text-sm text-gray-400">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#43AFFF] hover:text-[#3a9ee6] hover:underline">
                Sign up
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400 text-center p-3 border-t border-gray-800">
              <p className="mt-2">Demo accounts:</p>
              <p>admin@example.com / judge@example.com / participant@example.com</p>
              <p>Any password will work</p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;