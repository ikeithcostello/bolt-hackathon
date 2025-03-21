import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Award, ArrowLeft, User, Briefcase, CheckCircle, ChevronRight, Clock, Star } from 'lucide-react';
import { Button } from '../components/ui/button';

function JudgeApplication() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    yearsOfExperience: '',
    expertise: [] as string[],
    linkedinProfile: '',
    githubProfile: '',
    motivation: '',
    availability: '',
  });

  const updateForm = (field: string, value: string | string[]) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const submitApplication = () => {
    // In a real application, you'd submit to an API here
    console.log('Form data submitted:', formData);
    nextStep();
  };

  const expertiseOptions = [
    'Artificial Intelligence/ML',
    'Web Development',
    'Mobile Development',
    'Blockchain/Web3',
    'Cloud Computing',
    'DevOps',
    'UX/UI Design',
    'IoT',
    'Cybersecurity',
    'Data Science',
    'Game Development',
    'AR/VR',
  ];

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      {/* Header */}
      <header className="bg-background-primary border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
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
          
          <div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/login')}
            >
              Already a Judge? Log In
            </Button>
          </div>
        </div>
      </header>
      
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Progress Steps */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 
                    ${step < currentStep ? 'bg-accent-green' : 
                      step === currentStep ? 'bg-accent-blue' : 'bg-gray-700'}`}
                  >
                    {step < currentStep ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <span className="text-white">{step}</span>
                    )}
                  </div>
                  <span className={`mt-2 text-sm ${
                    step === currentStep ? 'text-accent-blue' : 
                    step < currentStep ? 'text-accent-green' : 'text-gray-500'
                  }`}>
                    {step === 1 && 'Personal Info'}
                    {step === 2 && 'Expertise'}
                    {step === 3 && 'Motivation'}
                    {step === 4 && 'Confirmation'}
                  </span>
                </div>
                
                {step < 4 && (
                  <div className={`flex-1 h-0.5 ${
                    step < currentStep ? 'bg-accent-green' : 'bg-gray-700'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <>
              <h1 className="text-3xl font-bold mb-6">Personal Information</h1>
              <p className="text-gray-400 mb-8">
                Tell us about yourself. This information will be used to identify you as a judge.
              </p>
              
              <div className="space-y-6 bg-background-secondary p-6 rounded-lg">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      value={formData.firstName}
                      onChange={(e) => updateForm('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      value={formData.lastName}
                      onChange={(e) => updateForm('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    value={formData.email}
                    onChange={(e) => updateForm('email', e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      value={formData.company}
                      onChange={(e) => updateForm('company', e.target.value)}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      value={formData.jobTitle}
                      onChange={(e) => updateForm('jobTitle', e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Years of Experience*
                  </label>
                  <select 
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    value={formData.yearsOfExperience}
                    onChange={(e) => updateForm('yearsOfExperience', e.target.value)}
                    required
                  >
                    <option value="">Select experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="11-15">11-15 years</option>
                    <option value="16+">16+ years</option>
                  </select>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <Button 
                    onClick={nextStep}
                    rightIcon={<ChevronRight size={16} />}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </>
          )}
          
          {/* Step 2: Expertise */}
          {currentStep === 2 && (
            <>
              <h1 className="text-3xl font-bold mb-6">Your Expertise</h1>
              <p className="text-gray-400 mb-8">
                Tell us about your technical skills and professional background to help us match you with relevant submissions.
              </p>
              
              <div className="space-y-6 bg-background-secondary p-6 rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Areas of Expertise* (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {expertiseOptions.map((option) => (
                      <label key={option} className="flex items-start space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="mt-1 rounded bg-gray-700 border-gray-600 text-accent-blue focus:ring-accent-blue focus:ring-opacity-25"
                          checked={formData.expertise.includes(option)}
                          onChange={(e) => {
                            const newExpertise = e.target.checked
                              ? [...formData.expertise, option]
                              : formData.expertise.filter(item => item !== option);
                            updateForm('expertise', newExpertise);
                          }}
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    placeholder="https://linkedin.com/in/your-profile"
                    value={formData.linkedinProfile}
                    onChange={(e) => updateForm('linkedinProfile', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    GitHub Profile URL
                  </label>
                  <input
                    type="url"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    placeholder="https://github.com/your-username"
                    value={formData.githubProfile}
                    onChange={(e) => updateForm('githubProfile', e.target.value)}
                  />
                </div>
                
                <div className="pt-4 flex justify-between">
                  <Button 
                    variant="outline"
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={nextStep}
                    rightIcon={<ChevronRight size={16} />}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </>
          )}
          
          {/* Step 3: Motivation */}
          {currentStep === 3 && (
            <>
              <h1 className="text-3xl font-bold mb-6">Motivation & Availability</h1>
              <p className="text-gray-400 mb-8">
                Tell us why you want to be a judge and how much time you can dedicate to evaluations.
              </p>
              
              <div className="space-y-6 bg-background-secondary p-6 rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Why do you want to be a judge?*
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    rows={5}
                    placeholder="Share your motivation for participating as a judge..."
                    value={formData.motivation}
                    onChange={(e) => updateForm('motivation', e.target.value)}
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    How many hours per week can you dedicate to judging?*
                  </label>
                  <select 
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    value={formData.availability}
                    onChange={(e) => updateForm('availability', e.target.value)}
                    required
                  >
                    <option value="">Select availability</option>
                    <option value="1-3">1-3 hours per week</option>
                    <option value="4-6">4-6 hours per week</option>
                    <option value="7-10">7-10 hours per week</option>
                    <option value="10+">10+ hours per week</option>
                  </select>
                </div>
                
                <div className="bg-blue-900 bg-opacity-20 border border-blue-800 rounded p-4 flex items-start">
                  <Clock className="text-accent-blue flex-shrink-0 mr-3 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-accent-blue font-medium mb-1">Time Commitment Note</p>
                    <p className="text-sm">
                      Judging will take place from August 15 to September 30, 2025. Our platform makes evaluation efficient, but we recommend setting aside at least 4 hours per week for the best experience.
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 flex justify-between">
                  <Button 
                    variant="outline"
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={submitApplication}
                  >
                    Submit Application
                  </Button>
                </div>
              </div>
            </>
          )}
          
          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <>
              <div className="text-center">
                <CheckCircle className="mx-auto h-16 w-16 text-accent-green mb-6" />
                <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
                <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
                  Thank you for applying to be a judge for the world's largest hackathon.
                </p>
                
                <div className="bg-background-secondary p-6 rounded-lg mb-8 text-left">
                  <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Star className="text-accent-blue mr-3 mt-1 flex-shrink-0" size={18} />
                      <span>Our team will review your application within 5-7 business days.</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-accent-blue mr-3 mt-1 flex-shrink-0" size={18} />
                      <span>You'll receive an email notification with our decision.</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-accent-blue mr-3 mt-1 flex-shrink-0" size={18} />
                      <span>If selected, you'll get access to our judge training and calibration sessions.</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-accent-blue mr-3 mt-1 flex-shrink-0" size={18} />
                      <span>Evaluations will begin on August 15, 2025.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button 
                    rightIcon={<ChevronRight size={16} />}
                    onClick={() => navigate('/')}
                  >
                    Return to Homepage
                  </Button>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </main>
      
      {/* Footer */}
      <footer className="bg-background-primary border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Award className="w-5 h-5 text-accent-blue mr-2" />
            <span className="text-sm">GWR Hackathon Judge Application</span>
          </div>
          
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} GWR Hackathon. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default JudgeApplication;