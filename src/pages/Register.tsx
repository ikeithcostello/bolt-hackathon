import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Award, ArrowLeft, Mail, Lock, Github, Eye, EyeOff } from 'lucide-react';
import { Button } from '../components/ui/button';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    teamName: '',
    acceptTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Team name validation
    if (!formData.teamName.trim()) {
      newErrors.teamName = 'Team name is required';
    }
    
    // Terms acceptance
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send this data to your server for registration
      console.log('Registration submitted:', formData);
      
      // Redirect to login or dashboard
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      {/* Header */}
      <header className="bg-background-primary border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <button
            onClick={() => navigate('/')}
            className="mr-4 p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center">
            <Award className="w-6 h-6 text-accent-blue mr-2" />
            <span className="text-xl font-bold">GWR Hackathon</span>
          </div>
        </div>
      </header>
      
      <main className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
            <p className="text-gray-400">
              Join the world's largest hackathon and showcase your skills
            </p>
          </div>
          
          <div className="bg-background-secondary rounded-lg p-6 shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="teamName" className="block text-sm font-medium text-gray-400 mb-1">
                    Team Name
                  </label>
                  <input
                    id="teamName"
                    name="teamName"
                    type="text"
                    className={`w-full px-4 py-2 rounded-md bg-gray-800 border ${errors.teamName ? 'border-accent-red' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-accent-blue`}
                    placeholder="Enter your team name"
                    value={formData.teamName}
                    onChange={handleChange}
                  />
                  {errors.teamName && <p className="mt-1 text-sm text-accent-red">{errors.teamName}</p>}
                </div>
                
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
                      className={`w-full pl-10 pr-4 py-2 rounded-md bg-gray-800 border ${errors.email ? 'border-accent-red' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-accent-blue`}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-accent-red">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 text-gray-500" size={18} />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className={`w-full pl-10 pr-10 py-2 rounded-md bg-gray-800 border ${errors.password ? 'border-accent-red' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-accent-blue`}
                      placeholder="Create a secure password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-300"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && <p className="mt-1 text-sm text-accent-red">{errors.password}</p>}
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 text-gray-500" size={18} />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      className={`w-full pl-10 pr-4 py-2 rounded-md bg-gray-800 border ${errors.confirmPassword ? 'border-accent-red' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-accent-blue`}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.confirmPassword && <p className="mt-1 text-sm text-accent-red">{errors.confirmPassword}</p>}
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="acceptTerms"
                      name="acceptTerms"
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className="w-4 h-4 rounded bg-gray-700 border-gray-600 text-accent-blue focus:ring-accent-blue focus:ring-opacity-25"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="acceptTerms" className="text-sm text-gray-300">
                      I agree to the <Link to="#" className="text-accent-blue hover:underline">Terms of Service</Link> and <Link to="#" className="text-accent-blue hover:underline">Privacy Policy</Link>
                    </label>
                    {errors.acceptTerms && <p className="mt-1 text-sm text-accent-red">{errors.acceptTerms}</p>}
                  </div>
                </div>
                
                <div>
                  <Button 
                    type="submit"
                    className="w-full"
                  >
                    Create Account
                  </Button>
                </div>
                
                <div className="relative flex items-center justify-center">
                  <div className="border-t border-gray-700 absolute w-full"></div>
                  <div className="bg-background-secondary px-4 relative z-10 text-sm text-gray-400">or continue with</div>
                </div>
                
                <div>
                  <Button 
                    type="button"
                    variant="outline"
                    className="w-full flex items-center justify-center"
                    leftIcon={<Github size={18} />}
                  >
                    Sign up with GitHub
                  </Button>
                </div>
              </div>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-accent-blue hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GWR Hackathon. All rights reserved.
      </footer>
    </div>
  );
}

export default Register;