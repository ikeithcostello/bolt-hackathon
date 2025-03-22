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
      // In a real app, you would send this data to your server for registration
      console.log('Registration submitted:', formData);
      
      // Redirect to login or dashboard
      navigate('/login');
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
        to="/" 
        className="absolute top-6 left-6 z-10 flex items-center text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span>Back to Home</span>
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full mx-auto relative z-10 px-4 py-12"
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-2">
            <Zap className="text-[#43AFFF] w-8 h-8 mr-2" />
            <h1 className="text-4xl font-bold text-white">The World's Largest Hackathon</h1>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">Hackathon Registration</h2>
          <p className="text-gray-300 max-w-md mx-auto">
            Join thousands of developers and compete for $1M in prizes in the world's largest hackathon
          </p>
        </div>

        <div className="bg-background-primary/70 backdrop-blur-md p-8 rounded-lg shadow-2xl border border-white/10">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
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
              
              <div className="md:col-span-2">
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
                    className={`w-full pl-10 pr-4 py-2 rounded-md bg-gray-800/80 border ${errors.confirmPassword ? 'border-accent-red' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-accent-blue`}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                {errors.confirmPassword && <p className="mt-1 text-sm text-accent-red">{errors.confirmPassword}</p>}
              </div>

              <div className="md:col-span-2">
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
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                type="submit"
                className="w-full bg-[#43AFFF] hover:bg-[#3a9ee6]"
              >
                Create Account
              </Button>
            </div>
            
            <div className="relative flex items-center justify-center mt-6 mb-6">
              <div className="border-t border-gray-700 absolute w-full"></div>
              <div className="bg-transparent px-4 relative z-10 text-sm text-gray-400">or continue with</div>
            </div>
            
            <Button 
              type="button"
              variant="outline"
              className="w-full flex items-center justify-center mb-6"
              leftIcon={<Github size={18} />}
            >
              Sign up with GitHub
            </Button>
            
            <div className="text-center text-sm text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-[#43AFFF] hover:text-[#3a9ee6] hover:underline">
                Sign in
              </Link>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mt-4">
            By signing up, you'll get access to The World's Largest Hackathon's tools and cloud development environment
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;