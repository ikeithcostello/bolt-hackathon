import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, ArrowLeft, Mail, Lock, Github, Eye, EyeOff } from 'lucide-react';
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
      // In a real application, you would submit the form data to your server here
      console.log('Form submitted:', formData);
      navigate('/login');
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="min-h-screen py-10 flex flex-col justify-center relative">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop)', 
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary/95 via-background-primary/85 to-background-primary"></div>
      
      {/* Back to home */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 md:top-6 md:left-6 z-10 flex items-center text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span className="hidden sm:inline">Back to Home</span>
        <span className="sm:hidden">Back</span>
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full mx-auto relative z-10 px-4 py-6 sm:py-12"
      >
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center mb-2">
            <Zap className="text-[#43AFFF] w-6 h-6 sm:w-8 sm:h-8 mr-2" />
            <h1 className="text-2xl sm:text-4xl font-bold text-white">The World's Largest Hackathon</h1>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">Hackathon Registration</h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-md mx-auto">
            Join thousands of developers and compete for $1M in prizes in the world's largest hackathon
          </p>
        </div>

        <div className="bg-background-primary/70 backdrop-blur-md p-4 sm:p-8 rounded-lg shadow-2xl border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="teamName" className="block text-sm font-medium text-gray-400 mb-1">
                  Team Name
                </label>
                <input
                  id="teamName"
                  name="teamName"
                  type="text"
                  className={`w-full px-4 py-2 rounded-md bg-gray-800/80 border ${errors.teamName ? 'border-accent-red' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-accent-blue`}
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
                    className={`w-full pl-10 pr-4 py-2 rounded-md bg-gray-800/80 border ${errors.email ? 'border-accent-red' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-accent-blue`}
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
                    className={`w-full pl-10 pr-10 py-2 rounded-md bg-gray-800/80 border ${errors.password ? 'border-accent-red' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-accent-blue`}
                    placeholder="Create a password (min. 8 characters)"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-300 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
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
                    className={`w-full pl-10 pr-4 py-2 rounded-md bg-gray-800/80 border ${errors.confirmPassword ? 'border-accent-red' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-accent-blue`}
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                {errors.confirmPassword && <p className="mt-1 text-sm text-accent-red">{errors.confirmPassword}</p>}
              </div>
              
              <div className="flex items-start">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  className="h-4 w-4 mt-1 rounded border-gray-700 text-accent-blue focus:ring-accent-blue"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                />
                <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-300">
                  I agree to the <Link to="/terms" className="text-accent-blue hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-accent-blue hover:underline">Privacy Policy</Link>
                </label>
              </div>
              {errors.acceptTerms && <p className="mt-1 text-sm text-accent-red">{errors.acceptTerms}</p>}
            </div>
            
            <div className="pt-2">
              <Button type="submit" className="w-full py-2" size="lg">
                Register Now
              </Button>
            </div>
            
            <div className="relative py-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background-primary/70 text-gray-400">or continue with</span>
              </div>
            </div>
            
            <Button 
              type="button" 
              variant="outline" 
              className="w-full" 
              leftIcon={<Github className="w-5 h-5" />}
            >
              GitHub
            </Button>
            
            <div className="text-center mt-4 text-gray-400 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-accent-blue hover:underline">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;