import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Award } from 'lucide-react';
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
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background-primary min-h-screen flex flex-col justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full mx-auto"
      >
        <div className="text-center mb-8">
          <Award className="text-accent-blue w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-2">Guinness World Records</h1>
          <h2 className="text-2xl font-semibold text-white mb-2">Hackathon Evaluation Platform</h2>
          <p className="text-gray-400">Sign in to access your account</p>
        </div>

        <div className="bg-background-secondary p-8 rounded-lg shadow-lg">
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
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-900 bg-opacity-30 text-accent-red rounded-md text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              isLoading={isLoading}
            >
              Sign In
            </Button>

            <div className="mt-4 text-sm text-gray-400 text-center">
              <p>Demo accounts:</p>
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